import React, { ReactElement } from 'react'
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
    rowHeaderSpace: 2,
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
    rowHeaderSpace: columnKeys.length + 1,
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
  rowHeaderSpace = 1,
  mixedTable,
}: GetHorinzontalParams<T>): GetHorinzontalResults {
  let maxRowEnd = 0
  let maxColumnEnd = 0
  const divs: ReactElement[] = []
  const rowTotalValues = new Map<string, number>()
  const cellPosition = new Set<string>()
  const isMixedTable = mixedTable !== null && mixedTable !== undefined

  buildHorizontalTableHeader<T>(keys, rowHeaderSpace, divs, keysMapping)

  /**
   * Build values and keys
   */
  for (let result of results) {
    if (isMixedTable) {
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
    const rowStart = getInitialPosition(result.initialPosition) + rowHeaderSpace
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

  buildHorizontalTableTotals<T>(
    isMixedTable,
    maxRowEnd,
    keys,
    rowHeaderSpace,
    maxColumnEnd,
    divs,
    data.nodeValue,
    cellPosition
  )

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

  buildVerticalTableHeader<T>(keys, columnHeaderSpace, divs, keysMapping)

  /**
   * Build values and keys
   */
  for (let result of results) {
    const value = result.value
    const columnSpan = result.span.value
    let rowStart = result.row || 0
    let columnStart = getInitialPosition(result.initialPosition) + columnHeaderSpace
    if (mixedTable) {
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

  if (mixedTable) {
    buildMixedTableTotals<T>(
      maxColumnEnd,
      keys,
      mixedTable.rowTotalValues,
      mixedTableColumnTotals,
      mixedTable.totalRowNumber,
      divs,
      cellPositions,
      mixedTableStartRowCache,
      columnHeaderSpace,
      data.nodeValue
    )
  } else {
    buildVerticalTableTotals(maxRowEnd, maxColumnEnd, divs, data.nodeValue)
  }
  return divs
}

function buildHorizontalTableHeader<T extends object>(
  keys: (keyof T)[],
  rowHeaderSpace: number,
  divs: ReactElement[],
  keysMapping: KeyMap<T>
) {
  keys.forEach((k, i) => {
    const headerGridArea = new GridArea(rowHeaderSpace, i + 1, rowHeaderSpace + 1, i + 2)
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
}

function buildVerticalTableHeader<T extends object>(
  keys: (keyof T)[],
  columnHeaderSpace: number,
  divs: React.ReactElement<any, string | React.JSXElementConstructor<any>>[],
  keysMapping: KeyMap<T>
) {
  keys.forEach((k, i) => {
    const headerGridArea = new GridArea(i + 1, columnHeaderSpace, i + 2, columnHeaderSpace + 1)
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
}

function buildMixedTableTotals<T extends object>(
  maxColumnEnd: number,
  keys: (keyof T)[],
  mixedTableRowTotals: Map<string, number>,
  mixedTableColumnTotals: Map<number, number>,
  totalRowNumber: number,
  divs: ReactElement[],
  cellPositions: Set<string>,
  mixedTableStartRowCache: Map<string, number>,
  columnHeaderSpace: number,
  grandtotal: number
) {
  const totalsGridArea = new GridArea(1, maxColumnEnd + 1, keys.length + 2, maxColumnEnd + 2)
  const dataValueGridArea = new GridArea(totalRowNumber, maxColumnEnd + 1, totalRowNumber + 1, maxColumnEnd + 2)

  mixedTableColumnTotals.forEach(buildMixedTableColumnTotals(totalRowNumber, divs, cellPositions))
  mixedTableRowTotals.forEach(buildMixedTableRowTotals(mixedTableStartRowCache, maxColumnEnd, divs, cellPositions))

  const gridArea = new GridArea(keys.length + 1, columnHeaderSpace, keys.length + 2, columnHeaderSpace + 1)
  divs.push(
    <PivotTableCell types={new Set([PivotTableCellType.HEADER])} key={gridArea.toString()} gridArea={gridArea} />,
    <PivotTableCell
      types={new Set([PivotTableCellType.HEADER])}
      key={totalsGridArea.toString()}
      isEndColumn
      gridArea={totalsGridArea}
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
      {grandtotal}
    </PivotTableCell>
  )
  cellPositions.add(dataValueGridArea.toString())

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
}

function buildVerticalTableTotals(maxRowEnd: number, maxColumnEnd: number, divs: ReactElement[], grandTotal: number) {
  const totalsGridArea = new GridArea(maxRowEnd - 1, 1, maxRowEnd, 2)
  const dataValueGridArea = new GridArea(maxRowEnd - 1, maxColumnEnd + 1, maxRowEnd, maxColumnEnd + 2)
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
      key={totalsGridArea.toString()}
      isEndRow
      isEndColumn={false}
      gridArea={totalsGridArea}
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
      {grandTotal}
    </PivotTableCell>
  )
}

function buildMixedTableColumnTotals(
  totalRowNumber: number,
  divs: ReactElement[],
  cellPositions: Set<string>
): (value: number, key: number, map: Map<number, number>) => void {
  return (value, key) => {
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
  }
}

function buildMixedTableRowTotals(
  mixedTableStartRowCache: Map<string, number>,
  maxColumnEnd: number,
  divs: ReactElement[],
  cellPositions: Set<string>
): (value: number, key: string, map: Map<string, number>) => void {
  return (value, key) => {
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
  }
}

function buildHorizontalTableTotals<T extends object>(
  isMixedTable: boolean,
  maxRowEnd: number,
  keys: (keyof T)[],
  rowHeaderSpace: number,
  maxColumnEnd: number,
  divs: ReactElement[],
  grandtotal: number,
  cellPosition: Set<string>
) {
  let totalsGridArea: GridArea
  if (isMixedTable) {
    totalsGridArea = new GridArea(maxRowEnd, 1, maxRowEnd + 1, keys.length + 2)
  } else {
    totalsGridArea = new GridArea(rowHeaderSpace, maxColumnEnd, rowHeaderSpace + 1, maxColumnEnd + 1)
    const totalGridArea = new GridArea(maxRowEnd, 1, maxRowEnd + 1, maxColumnEnd)
    const dataValueGridArea = new GridArea(maxRowEnd, maxColumnEnd, maxRowEnd + 1, maxColumnEnd + 1)
    divs.push(
      <PivotTableCell
        types={new Set([PivotTableCellType.HEADER])}
        key={totalGridArea.toString()}
        isEndRow
        gridArea={totalGridArea}
      >
        {TOTAL}
      </PivotTableCell>,
      <PivotTableCell
        types={new Set([PivotTableCellType.TOTAL, PivotTableCellType.GRANDTOTAL, PivotTableCellType.VALUE])}
        key={dataValueGridArea.toString()}
        isEndColumn
        isEndRow
        gridArea={dataValueGridArea}
      >
        {grandtotal}
      </PivotTableCell>
    )
  }

  divs.push(
    <PivotTableCell
      types={new Set([PivotTableCellType.HEADER])}
      key={totalsGridArea.toString()}
      isEndColumn={!isMixedTable}
      isEndRow={isMixedTable}
      gridArea={totalsGridArea}
    >
      {TOTAL}
    </PivotTableCell>
  )
  cellPosition.add(totalsGridArea.toString())
}
