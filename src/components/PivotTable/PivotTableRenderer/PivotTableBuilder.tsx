/** @jsx jsx */
import { jsx } from '@emotion/core'

import { ReactElement } from 'react'

import { max } from 'lodash'
import { KeyMap } from '../model'
import { PivotTableCell } from '../PivotTableCell/PivotTableCell'
import { GridArea } from '../PivotTableCell/classes/GridArea'
import { formatDecimalOrInteger } from '../../../util/number'
import { PivotTableCellType } from '../PivotTableCell/model'
import { GetHorinzontalParams, GetHorinzontalResults, GetVerticalProps, Tree } from './model'
import { getCurrentPath, getInitialPosition, getResult, RESULT_PATH_KEY, TOTAL } from './util'

export function buildVerticalTable<T extends object>(
  defaultTree: Tree<T>,
  keysMapping: KeyMap<T>,
  columnKeys: (keyof T)[]
): ReactElement[] {
  const columnResult = getResult(defaultTree, 'row', keysMapping)
  const verticalDivs = getVertical<T>({
    results: columnResult,
    keys: columnKeys,
    data: defaultTree,
    keysMapping,
  })

  return verticalDivs
}

export function buildHorizontalTable<T extends object>(
  defaultTree: Tree<T>,
  keysMapping: KeyMap<T>,
  rowKeys: (keyof T)[]
): ReactElement[] {
  const rowResult = getResult(defaultTree, 'column', keysMapping)
  const { divs: horizontalDivs } = getHorizontal<T>({
    results: rowResult,
    keys: rowKeys,
    data: defaultTree,
    keysMapping,
    headerSpace: 2,
  })

  return horizontalDivs
}

export function buildRectangularTable<T extends object>(
  defaultTree: Tree<T>,
  keysMapping: KeyMap<T>,
  rowKeys: (keyof T)[],
  columnKeys: (keyof T)[],
  complementaryTree: Tree<T>
): ReactElement[] {
  const rowResult = getResult(defaultTree, 'column', keysMapping, rowKeys)
  const { divs: horizontalDivs, rowTotalValues, totalRowNumber, cellPosition } = getHorizontal({
    results: rowResult,
    keys: rowKeys,
    data: defaultTree,
    keysMapping,
    headerSpace: columnKeys.length + 1,
    mixedTable: {
      totalKey: columnKeys[0],
    },
  })

  const columnResult = getResult(complementaryTree, 'row', keysMapping, columnKeys)
  const verticalDivs = getVertical<T>({
    results: columnResult,
    keys: columnKeys,
    data: complementaryTree,
    keysMapping,
    columnHeaderSpace: rowKeys.length + 1,
    mixedTable: {
      rowResult: rowResult,
      rowTotalValues: rowTotalValues,
      totalKey: rowKeys[0],
      totalRowNumber: totalRowNumber,
      cellPosition: cellPosition,
    },
  })

  return [...horizontalDivs, ...verticalDivs]
}

function getHorizontal<T extends object>({
  results,
  keys,
  data,
  keysMapping,
  headerSpace = 1,
  mixedTable,
}: GetHorinzontalParams<T>): GetHorinzontalResults {
  let maxRowEnd = 0
  let maxColumnEnd = 0
  const divs: ReactElement[] = []
  const rowTotalValues = new Map<string, number>()
  const cellPosition = new Set<string>()

  /**
   * Create vertical header
   */
  keys.forEach((k, idx) => {
    const headerGridArea = new GridArea(headerSpace, idx + 1, headerSpace + 1, idx + 2)
    divs.push(
      <PivotTableCell
        types={new Set([PivotTableCellType.HEADER])}
        key={headerGridArea.toString()}
        gridArea={headerGridArea}
      >
        {keysMapping.get(k).keyName}
      </PivotTableCell>
    )
  })

  /**
   * Populate vertical keys
   */
  for (let result of results) {
    if (mixedTable) {
      if (result.key === mixedTable.totalKey) {
        const rowTotalValuesKey: string = result.path.replace(
          getCurrentPath(result.key.toString(), result.value.toString()),
          ''
        )
        rowTotalValues.set(rowTotalValuesKey, result.total || 0)
      }
      if (!keys.includes(result.key)) {
        continue
      }
    }
    const lastKey = mixedTable && result.key === keys[keys.length - 1]
    const value = result.value
    const rowSpan = result.span.value
    const columnStart = result.column || 0
    const columnEnd = lastKey ? columnStart + 2 : columnStart + 1
    const rowStart = getInitialPosition(result.initialPosition) + headerSpace
    const rowEnd = rowStart + rowSpan
    maxRowEnd = max([rowEnd, maxRowEnd])
    maxColumnEnd = columnEnd > maxColumnEnd ? columnStart : maxColumnEnd

    const valuesGridArea = new GridArea(rowStart, columnStart, rowEnd, columnEnd)
    const formattedValue = typeof value === 'number' ? formatDecimalOrInteger(value) : value

    divs.push(
      <PivotTableCell
        types={new Set(result.key !== RESULT_PATH_KEY ? [PivotTableCellType.HEADER] : [PivotTableCellType.VALUE])}
        key={valuesGridArea.toString()}
        gridArea={valuesGridArea}
        isEndColumn={result.key === RESULT_PATH_KEY && !mixedTable}
      >
        {formattedValue}
      </PivotTableCell>
    )

    cellPosition.add(valuesGridArea.toString())
  }

  /**
   * Populate totals
   */
  let totaisGridArea: GridArea
  if (mixedTable) {
    totaisGridArea = new GridArea(maxRowEnd, 1, maxRowEnd + 1, keys.length + 2)
  } else {
    totaisGridArea = new GridArea(headerSpace, maxColumnEnd, headerSpace + 1, maxColumnEnd + 1)
    const totalGridArea = new GridArea(maxRowEnd, 1, maxRowEnd + 1, maxColumnEnd)
    const dataValueGridArea = new GridArea(maxRowEnd, maxColumnEnd, maxRowEnd + 1, maxColumnEnd + 1)
    divs.push(
      <PivotTableCell
        types={new Set([PivotTableCellType.HEADER])}
        key={totalGridArea.toString()}
        isEndRow
        gridArea={totalGridArea}
      >
        Total
      </PivotTableCell>,
      <PivotTableCell
        types={new Set([PivotTableCellType.TOTAL, PivotTableCellType.GRANDTOTAL, PivotTableCellType.VALUE])}
        key={dataValueGridArea.toString()}
        isEndColumn
        isEndRow
        gridArea={dataValueGridArea}
      >
        {data.nodeValue}
      </PivotTableCell>
    )
  }

  divs.push(
    <PivotTableCell
      types={new Set([PivotTableCellType.HEADER])}
      key={totaisGridArea.toString()}
      isEndColumn={mixedTable === undefined}
      isEndRow={mixedTable !== undefined}
      gridArea={totaisGridArea}
    >
      {TOTAL}
    </PivotTableCell>
  )
  cellPosition.add(totaisGridArea.toString())
  return { divs, rowTotalValues, totalRowNumber: maxRowEnd, cellPosition }
}

function getVertical<T extends object>({
  results,
  keys,
  data,
  keysMapping,
  columnHeaderSpace = 1,
  mixedTable,
}: GetVerticalProps<T>): ReactElement[] {
  let maxRowEnd = 0
  let maxColumnEnd = 0
  const divs: ReactElement[] = []
  const mixedTableStartRowCache = new Map<string, number>()
  const mixedTableColumnTotals = new Map<number, number>()
  const cellPositions = mixedTable?.cellPosition || new Set<string>()

  for (let result of results) {
    const value = result.value
    const columnSpan = result.span.value
    let rowStart = result.row || 0
    let columnStart = getInitialPosition(result.initialPosition) + columnHeaderSpace
    if (mixedTable) {
      /**
       * Collect totals, collect total position
       */
      if (result.key === mixedTable.totalKey) {
        mixedTableColumnTotals.set(columnStart, result.total || 0)
      }
      if (!keys.includes(result.key) && result.key !== RESULT_PATH_KEY) {
        continue
      }
      if (mixedTable.rowResult && result.key === RESULT_PATH_KEY) {
        const rows = mixedTable.rowResult.filter((rx) => result.path.indexOf(rx.path) !== -1)
        rowStart = getInitialPosition(rows[rows.length - 1].initialPosition) + keys.length + 1
        columnStart = getInitialPosition(result.initialPosition.parentIni) + columnHeaderSpace
        mixedTableStartRowCache.set(rows[rows.length - 1].path, rowStart)
      }
    }
    /**
     * Populate values
     */
    const lastKey = mixedTable && result.key === keys[keys.length - 1]
    const rowEnd = lastKey ? rowStart + 2 : rowStart + 1
    const columnEnd = columnStart + columnSpan
    maxRowEnd = max([rowEnd, maxRowEnd])
    maxColumnEnd = columnEnd > maxColumnEnd ? columnStart : maxColumnEnd
    const gridArea = new GridArea(rowStart, columnStart, rowEnd, columnEnd)

    if (result.key === RESULT_PATH_KEY) {
      divs.push(
        <PivotTableCell
          types={new Set([PivotTableCellType.VALUE])}
          key={gridArea.toString()}
          isEndRow={mixedTable === undefined}
          gridArea={gridArea}
        >
          {value}
        </PivotTableCell>
      )
    } else {
      divs.push(
        <PivotTableCell types={new Set([PivotTableCellType.HEADER])} key={gridArea.toString()} gridArea={gridArea}>
          {value}
        </PivotTableCell>
      )
    }
    cellPositions.add(gridArea.toString())
  }

  /**
   * Create horizontal header
   */
  divs.push(
    ...keys.map((k, i) => {
      const gridArea = new GridArea(i + 1, columnHeaderSpace, i + 2, columnHeaderSpace + 1)
      return (
        <PivotTableCell types={new Set([PivotTableCellType.HEADER])} key={gridArea.toString()} gridArea={gridArea}>
          {keysMapping.get(k).keyName}
        </PivotTableCell>
      )
    })
  )

  /**
   * Populate totals
   */
  let totaisGridArea: GridArea
  let dataValueGridArea: GridArea
  if (mixedTable) {
    /**
     * Populate horizontal totals
     */
    const totalRowNumber = mixedTable.totalRowNumber
    totaisGridArea = new GridArea(1, maxColumnEnd + 1, keys.length + 2, maxColumnEnd + 2)
    dataValueGridArea = new GridArea(totalRowNumber, maxColumnEnd + 1, totalRowNumber + 1, maxColumnEnd + 2)

    mixedTableColumnTotals.forEach((value, key) => {
      const gridArea = new GridArea(totalRowNumber, key, totalRowNumber + 1, key + 1)
      divs.push(
        <PivotTableCell
          types={new Set([PivotTableCellType.TOTAL, PivotTableCellType.VALUE])}
          isEndRow
          key={gridArea.toString()}
          gridArea={gridArea}
        >
          {value}
        </PivotTableCell>
      )
      cellPositions.add(gridArea.toString())
    })

    /**
     * Populate vertical totals
     */
    mixedTable.rowTotalValues.forEach((value, key) => {
      const rowNumber = mixedTableStartRowCache.get(key)
      if (rowNumber) {
        const gridArea = new GridArea(rowNumber, maxColumnEnd + 1, rowNumber + 1, maxColumnEnd + 2)
        divs.push(
          <PivotTableCell
            types={new Set([PivotTableCellType.TOTAL, PivotTableCellType.VALUE])}
            isEndColumn
            key={gridArea.toString()}
            gridArea={gridArea}
          >
            {value}
          </PivotTableCell>
        )
        cellPositions.add(gridArea.toString())
      }
    })

    const gridArea = new GridArea(keys.length + 1, columnHeaderSpace, keys.length + 2, columnHeaderSpace + 1)
    divs.push(
      <PivotTableCell types={new Set([PivotTableCellType.HEADER])} key={gridArea.toString()} gridArea={gridArea} />,
      <PivotTableCell
        types={new Set([PivotTableCellType.HEADER])}
        key={totaisGridArea.toString()}
        isEndColumn
        gridArea={totaisGridArea}
      >
        {TOTAL}
      </PivotTableCell>,
      <PivotTableCell
        types={new Set([PivotTableCellType.TOTAL, PivotTableCellType.VALUE, PivotTableCellType.GRANDTOTAL])}
        key={dataValueGridArea.toString()}
        isEndColumn
        isEndRow
        gridArea={dataValueGridArea}
      >
        {data.nodeValue}
      </PivotTableCell>
    )
    cellPositions.add(dataValueGridArea.toString())

    /**
     * Fill empty cells
     */
    for (let column = columnHeaderSpace + 1; column < maxColumnEnd + 2; column++) {
      for (let row = keys.length + 2; row < totalRowNumber + 1; row++) {
        const gridArea = new GridArea(row, column, row + 1, column + 1)
        if (!cellPositions.has(gridArea.toString())) {
          divs.push(
            <PivotTableCell
              types={new Set([PivotTableCellType.EMPTY])}
              key={gridArea.toString()}
              isEndRow={row === totalRowNumber}
              isEndColumn={column === maxColumnEnd + 1}
              gridArea={gridArea}
            >
              -
            </PivotTableCell>
          )
        }
      }
    }
  } else {
    totaisGridArea = new GridArea(maxRowEnd - 1, 1, maxRowEnd, 2)
    dataValueGridArea = new GridArea(maxRowEnd - 1, maxColumnEnd + 1, maxRowEnd, maxColumnEnd + 2)
    const totalGridArea = new GridArea(1, maxColumnEnd + 1, maxRowEnd - 1, maxColumnEnd + 2)
    divs.push(
      <PivotTableCell
        types={new Set([PivotTableCellType.HEADER])}
        key={totalGridArea.toString()}
        isEndColumn
        gridArea={totalGridArea}
      >
        {TOTAL}
      </PivotTableCell>,
      <PivotTableCell
        types={new Set([PivotTableCellType.HEADER])}
        key={totaisGridArea.toString()}
        isEndRow
        isEndColumn={false}
        gridArea={totaisGridArea}
      >
        {TOTAL}
      </PivotTableCell>,
      <PivotTableCell
        types={new Set([PivotTableCellType.TOTAL, PivotTableCellType.VALUE, PivotTableCellType.GRANDTOTAL])}
        key={dataValueGridArea.toString()}
        isEndColumn
        isEndRow
        gridArea={dataValueGridArea}
      >
        {data.nodeValue}
      </PivotTableCell>
    )
  }
  return divs
}
