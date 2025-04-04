import { isNil, max } from 'lodash'
import { KeyMap } from '../model'
import { GridArea } from '../PivotTableCell/classes/GridArea'
import { PivotTableCellType } from '../PivotTableCell/model'
import { PivotTableCellProps } from '../PivotTableCell/PivotTableCell'
import { formatDecimalOrInteger } from '../../../util/number'
import { PivotTableTreeNode } from './model'

interface VerticalTableProps<T extends object> {
  cellData: PivotTableCellModel<T>[]
  keys: Array<keyof T>
  tree: PivotTableTreeNode<T>
  keysMapping: KeyMap<T>
  rowHeaderSpace?: number
  mixedTable?: {
    totalKey?: keyof T
  }
}

interface VerticalTableResults {
  divs: PivotTableCellProps[]
  rowTotalValues: Map<string, number>
  totalRowNumber: number
  cellPositions: string[]
}

interface HorizontalTableProps<T extends object> {
  cellData: PivotTableCellModel<T>[]
  keys: Array<keyof T>
  tree: PivotTableTreeNode<T>
  keysMapping: KeyMap<T>
  columnHeaderSpace?: number
  mixedTable?: MixedTableProps<T>
}

interface MixedTableProps<T extends object> {
  rowResult: PivotTableCellModel<T>[]
  rowTotalValues: Map<string, number>
  totalKey: keyof T
  totalRowNumber: number
  cellPositions: string[]
}

interface CellInitialPosition {
  parentInitialPosition?: CellInitialPosition
  auxInitialPosition?: CellInitialPosition
  cellSpan?: SpanValue
}

interface PivotTableCellModel<T> {
  cellSpan: SpanValue
  cellValue: string | number
  initialPosition: CellInitialPosition
  path: string
  column?: number
  row?: number
  key: keyof T
  total?: number
}

interface SpanValue {
  value: number
}

interface StackObj {
  treeNode: any
  spanList?: SpanValue[]
  parentIni?: CellInitialPosition
  path?: string
  column?: number
  row?: number
}

const RESULT_PATH_KEY = 'RESULT'
const PATH_SEPARATOR = '|'
const TOTAL = 'Total'
const EMPTY = '-'
const IGNORED_TREE_KEYS = ['id', '__typename', 'nodeKey', 'nodeValue', 'maxLeafValue']

export function buildTable<T extends object>(
  rowKeys: (keyof T)[],
  columnKeys: (keyof T)[],
  defaultTree: PivotTableTreeNode<T>,
  complementaryTree: PivotTableTreeNode<T>,
  keysMapping: KeyMap<T>
): PivotTableCellProps[] {
  if (rowKeys?.length && complementaryTree?.nodeValue !== undefined && columnKeys?.length) {
    return buildMixedTable<T>(defaultTree, keysMapping, rowKeys, columnKeys, complementaryTree)
  } else if (rowKeys?.length) {
    return buildVerticalTable<T>(defaultTree, keysMapping, rowKeys)
  } else if (columnKeys?.length) {
    return buildHorizontalTable<T>(defaultTree, keysMapping, columnKeys)
  }
  return []
}

function buildHorizontalTable<T extends object>(
  defaultTree: PivotTableTreeNode<T>,
  keysMapping: KeyMap<T>,
  columnKeys: (keyof T)[]
): PivotTableCellProps[] {
  const cellData = getListOfCellDataFromTree(defaultTree, 'row', keysMapping)
  const divs = getHorizontal<T>({
    cellData,
    keys: columnKeys,
    tree: defaultTree,
    keysMapping,
  })

  return divs
}

function buildVerticalTable<T extends object>(
  defaultTree: PivotTableTreeNode<T>,
  keysMapping: KeyMap<T>,
  rowKeys: (keyof T)[]
): PivotTableCellProps[] {
  const rowResult = getListOfCellDataFromTree(defaultTree, 'column', keysMapping)
  const { divs } = getVertical<T>({
    cellData: rowResult,
    keys: rowKeys,
    tree: defaultTree,
    keysMapping,
    rowHeaderSpace: 2,
  })

  return divs
}

function buildMixedTable<T extends object>(
  defaultTree: PivotTableTreeNode<T>,
  keysMapping: KeyMap<T>,
  rowKeys: (keyof T)[],
  columnKeys: (keyof T)[],
  complementaryTree: PivotTableTreeNode<T>
): PivotTableCellProps[] {
  const rowResult = getListOfCellDataFromTree(defaultTree, 'column', keysMapping, rowKeys)
  const { divs: horizontalDivs, rowTotalValues, totalRowNumber, cellPositions: cellPosition } = getVertical({
    cellData: rowResult,
    keys: rowKeys,
    tree: defaultTree,
    keysMapping,
    rowHeaderSpace: columnKeys.length + 1,
    mixedTable: {
      totalKey: columnKeys[0],
    },
  })

  const columnResult = getListOfCellDataFromTree(complementaryTree, 'row', keysMapping, columnKeys)
  const verticalDivs = getHorizontal<T>({
    cellData: columnResult,
    keys: columnKeys,
    tree: complementaryTree,
    keysMapping,
    columnHeaderSpace: rowKeys.length + 1,
    mixedTable: {
      rowResult: rowResult,
      rowTotalValues: rowTotalValues,
      totalKey: rowKeys[0],
      totalRowNumber: totalRowNumber,
      cellPositions: cellPosition,
    },
  })

  return horizontalDivs.concat(verticalDivs)
}

function getVertical<T extends object>(params: VerticalTableProps<T>): VerticalTableResults {
  const { cellData, keys, tree, keysMapping, rowHeaderSpace = 1, mixedTable } = params

  let divs: PivotTableCellProps[] = []
  const rowTotalValues = new Map<string, number>()
  let cellPositions: string[] = []
  const isMixedTable = !isNil(mixedTable)

  const tableHeaderDivs = buildVerticalTableHeader<T>(keys, rowHeaderSpace, keysMapping)
  divs = divs.concat(tableHeaderDivs)

  const valuesAndKeys = buildVerticalValuesAndKeys<T>(
    cellData,
    isMixedTable,
    mixedTable,
    rowTotalValues,
    keys,
    rowHeaderSpace
  )
  divs = divs.concat(valuesAndKeys.divs)
  cellPositions = cellPositions.concat(valuesAndKeys.cellPositions)

  const tableTotals = buildVerticalTableTotals<T>(
    isMixedTable,
    valuesAndKeys.maxRowEnd,
    keys,
    rowHeaderSpace,
    valuesAndKeys.maxColumnEnd,
    tree.nodeValue
  )
  divs = divs.concat(tableTotals.divs)
  cellPositions = cellPositions.concat(tableTotals.cellPositions)

  return { divs, rowTotalValues, totalRowNumber: valuesAndKeys.maxRowEnd, cellPositions }
}

function buildVerticalValuesAndKeys<T extends object>(
  cellData: PivotTableCellModel<T>[],
  isMixedTable: boolean,
  mixedTable: { totalKey?: keyof T },
  rowTotalValues: Map<string, number>,
  keys: (keyof T)[],
  rowHeaderSpace: number
): { maxRowEnd: number; maxColumnEnd: number; divs: PivotTableCellProps[]; cellPositions: string[] } {
  const divs: PivotTableCellProps[] = []
  const cellPositions: string[] = []
  let maxRowEnd = 0
  let maxColumnEnd = 0
  for (let cell of cellData) {
    if (isMixedTable) {
      if (cell.key === mixedTable.totalKey) {
        const rowTotalValuesKey: string = cell.path.replace(
          getCurrentPath(cell.key.toString(), cell.cellValue.toString()),
          ''
        )
        rowTotalValues.set(rowTotalValuesKey, cell.total || 0)
      }
      if (!keys.includes(cell.key)) {
        continue
      }
    }
    const lastKey = mixedTable && cell.key === keys[keys.length - 1]
    const { cellValue: value, cellSpan: span, column: columnStart = 0 } = cell
    const columnEnd = lastKey ? columnStart + 2 : columnStart + 1
    const rowStart = getCellInitialPosition(cell.initialPosition) + rowHeaderSpace
    const rowEnd = rowStart + span.value
    maxRowEnd = max([rowEnd, maxRowEnd])
    maxColumnEnd = columnEnd > maxColumnEnd ? columnStart : maxColumnEnd

    const valuesGridArea = new GridArea(rowStart, columnStart, rowEnd, columnEnd)
    const formattedValue = typeof value === 'number' ? formatDecimalOrInteger(value) : value

    divs.push({
      gridArea: valuesGridArea,
      types: new Set(cell.key !== RESULT_PATH_KEY ? [PivotTableCellType.HEADER] : [PivotTableCellType.VALUE]),
      children: formattedValue,
      isEndColumn: cell.key === RESULT_PATH_KEY && !mixedTable,
    })

    cellPositions.push(valuesGridArea.toString())
  }
  return { maxRowEnd, maxColumnEnd, divs, cellPositions }
}

function getHorizontal<T extends object>(params: HorizontalTableProps<T>): PivotTableCellProps[] {
  const { cellData, keys, tree, keysMapping, columnHeaderSpace = 1, mixedTable } = params
  let divs: PivotTableCellProps[] = []
  let cellPositions = mixedTable?.cellPositions || []
  const mixedTableStartRowCache = new Map<string, number>()
  const mixedTableColumnTotals = new Map<number, number>()

  const tableHeaderDivs = buildHorizontalTableHeader<T>(keys, columnHeaderSpace, keysMapping)
  divs = divs.concat(tableHeaderDivs)

  const valuesAndKeys = buildHorizontalValuesAndKeys<T>(
    cellData,
    columnHeaderSpace,
    mixedTable,
    mixedTableColumnTotals,
    keys,
    mixedTableStartRowCache
  )
  divs = divs.concat(valuesAndKeys.divs)
  cellPositions = cellPositions.concat(valuesAndKeys.cellPositions)

  if (mixedTable) {
    const tableTotals = buildMixedTableTotals<T>(
      valuesAndKeys.maxColumnEnd,
      keys,
      mixedTable.rowTotalValues,
      mixedTableColumnTotals,
      mixedTable.totalRowNumber,
      mixedTableStartRowCache,
      columnHeaderSpace,
      tree.nodeValue,
      cellPositions
    )
    divs = divs.concat(tableTotals.divs)
  } else {
    const tableTotalsDivs = buildHorizontalTableTotals(
      valuesAndKeys.maxRowEnd,
      valuesAndKeys.maxColumnEnd,
      tree.nodeValue
    )
    divs = divs.concat(tableTotalsDivs)
  }
  return divs
}

function buildHorizontalValuesAndKeys<T extends object>(
  cellData: PivotTableCellModel<T>[],
  columnHeaderSpace: number,
  mixedTable: MixedTableProps<T>,
  mixedTableColumnTotals: Map<number, number>,
  keys: (keyof T)[],
  mixedTableStartRowCache: Map<string, number>
): { maxRowEnd: number; maxColumnEnd: number; divs: PivotTableCellProps[]; cellPositions: string[] } {
  const divs: PivotTableCellProps[] = []
  const cellPositions: string[] = []
  let maxRowEnd = 0
  let maxColumnEnd = 0
  for (let cell of cellData) {
    const value = cell.cellValue
    const columnSpan = cell.cellSpan
    let rowStart = cell.row || 0
    let columnStart = getCellInitialPosition(cell.initialPosition) + columnHeaderSpace
    if (mixedTable) {
      if (cell.key === mixedTable.totalKey) {
        mixedTableColumnTotals.set(columnStart, cell.total || 0)
      }
      if (!keys.includes(cell.key) && cell.key !== RESULT_PATH_KEY) {
        continue
      }
      if (mixedTable.rowResult && cell.key === RESULT_PATH_KEY) {
        const rows = mixedTable.rowResult.filter((rx) => cell.path.indexOf(rx.path) !== -1)
        rowStart = getCellInitialPosition(rows[rows.length - 1].initialPosition) + keys.length + 1
        columnStart = getCellInitialPosition(cell.initialPosition.parentInitialPosition) + columnHeaderSpace
        mixedTableStartRowCache.set(rows[rows.length - 1].path, rowStart)
      }
    }
    const lastKey = mixedTable && cell.key === keys[keys.length - 1]
    const rowEnd = lastKey ? rowStart + 2 : rowStart + 1
    const columnEnd = columnStart + columnSpan.value
    maxRowEnd = max([rowEnd, maxRowEnd])
    maxColumnEnd = columnEnd > maxColumnEnd ? columnStart : maxColumnEnd
    const gridArea = new GridArea(rowStart, columnStart, rowEnd, columnEnd)

    if (cell.key === RESULT_PATH_KEY) {
      const formattedValue = typeof value === 'number' ? formatDecimalOrInteger(value) : value
      divs.push({
        types: new Set([PivotTableCellType.VALUE]),
        gridArea: gridArea,
        children: formattedValue,
        isEndRow: mixedTable === undefined,
      })
    } else {
      divs.push({
        types: new Set([PivotTableCellType.HEADER]),
        gridArea: gridArea,
        children: value,
      })
    }
    cellPositions.push(gridArea.toString())
  }
  return { maxRowEnd, maxColumnEnd, divs, cellPositions }
}

function buildVerticalTableHeader<T extends object>(
  keys: (keyof T)[],
  rowHeaderSpace: number,
  keysMapping: KeyMap<T>
): PivotTableCellProps[] {
  const divs: PivotTableCellProps[] = []
  keys.forEach((k, i) => {
    const headerGridArea = new GridArea(rowHeaderSpace, i + 1, rowHeaderSpace + 1, i + 2)
    divs.push({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: headerGridArea,
      children: keysMapping.get(k).keyName,
    })
  })
  return divs
}

function buildHorizontalTableHeader<T extends object>(
  keys: (keyof T)[],
  columnHeaderSpace: number,
  keysMapping: KeyMap<T>
): PivotTableCellProps[] {
  const divs: PivotTableCellProps[] = []
  keys.forEach((k, i) => {
    const headerGridArea = new GridArea(i + 1, columnHeaderSpace, i + 2, columnHeaderSpace + 1)
    divs.push({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: headerGridArea,
      children: keysMapping.get(k).keyName,
    })
  })
  return divs
}

function buildMixedTableTotals<T extends object>(
  maxColumnEnd: number,
  keys: (keyof T)[],
  mixedTableRowTotals: Map<string, number>,
  mixedTableColumnTotals: Map<number, number>,
  totalRowNumber: number,
  mixedTableStartRowCache: Map<string, number>,
  columnHeaderSpace: number,
  grandtotal: number,
  cellPositions: string[]
): { divs: PivotTableCellProps[] } {
  let divs: PivotTableCellProps[] = []
  const totalsGridArea = new GridArea(1, maxColumnEnd + 1, keys.length + 2, maxColumnEnd + 2)
  const dataValueGridArea = new GridArea(totalRowNumber, maxColumnEnd + 1, totalRowNumber + 1, maxColumnEnd + 2)

  const columnTotals = buildMixedTableColumnTotals(totalRowNumber, mixedTableColumnTotals)
  const rowTotals = buildMixedTableRowTotals(mixedTableStartRowCache, maxColumnEnd, mixedTableRowTotals)
  divs = divs.concat(columnTotals.divs, rowTotals.divs)
  cellPositions = cellPositions.concat(columnTotals.cellPositions)
  cellPositions = cellPositions.concat(rowTotals.cellPositions)

  const gridArea = new GridArea(keys.length + 1, columnHeaderSpace, keys.length + 2, columnHeaderSpace + 1)
  divs.push({
    types: new Set([PivotTableCellType.HEADER]),
    gridArea: gridArea,
  })
  divs.push({
    types: new Set([PivotTableCellType.HEADER]),
    isEndColumn: true,
    gridArea: totalsGridArea,
    children: TOTAL,
  })
  divs.push({
    types: new Set([PivotTableCellType.TOTAL, PivotTableCellType.VALUE, PivotTableCellType.GRANDTOTAL]),
    isEndColumn: true,
    isEndRow: true,
    gridArea: dataValueGridArea,
    children: grandtotal,
  })
  cellPositions.push(dataValueGridArea.toString())

  for (let column = columnHeaderSpace + 1; column < maxColumnEnd + 2; column++) {
    for (let row = keys.length + 2; row < totalRowNumber + 1; row++) {
      const gridArea = new GridArea(row, column, row + 1, column + 1)
      if (!cellPositions.includes(gridArea.toString())) {
        divs.push({
          types: new Set([PivotTableCellType.EMPTY]),
          isEndColumn: column === maxColumnEnd + 1,
          isEndRow: row === totalRowNumber,
          gridArea: gridArea,
          children: EMPTY,
        })
      }
    }
  }
  return { divs }
}

function buildHorizontalTableTotals(
  maxRowEnd: number,
  maxColumnEnd: number,
  grandTotal: number
): PivotTableCellProps[] {
  const divs: PivotTableCellProps[] = []
  const totalsGridArea = new GridArea(maxRowEnd - 1, 1, maxRowEnd, 2)
  const dataValueGridArea = new GridArea(maxRowEnd - 1, maxColumnEnd + 1, maxRowEnd, maxColumnEnd + 2)
  const totalGridArea = new GridArea(1, maxColumnEnd + 1, maxRowEnd - 1, maxColumnEnd + 2)
  divs.push({
    types: new Set([PivotTableCellType.HEADER]),
    isEndColumn: true,
    gridArea: totalGridArea,
    children: TOTAL,
  })
  divs.push({
    types: new Set([PivotTableCellType.HEADER]),
    isEndRow: true,
    gridArea: totalsGridArea,
    children: TOTAL,
  })
  divs.push({
    types: new Set([PivotTableCellType.TOTAL, PivotTableCellType.VALUE, PivotTableCellType.GRANDTOTAL]),
    isEndRow: true,
    isEndColumn: true,
    gridArea: dataValueGridArea,
    children: grandTotal,
  })
  return divs
}

function buildMixedTableColumnTotals(
  totalRowNumber: number,
  mixedTableColumnTotals: Map<number, number>
): { divs: PivotTableCellProps[]; cellPositions: string[] } {
  const divs: PivotTableCellProps[] = []
  const cellPositions: string[] = []
  mixedTableColumnTotals.forEach((value, key) => {
    const gridArea = new GridArea(totalRowNumber, key, totalRowNumber + 1, key + 1)
    divs.push({
      types: new Set([PivotTableCellType.TOTAL, PivotTableCellType.VALUE]),
      isEndRow: true,
      gridArea: gridArea,
      children: value,
    })
    cellPositions.push(gridArea.toString())
  })
  return { divs, cellPositions }
}

function buildMixedTableRowTotals(
  mixedTableStartRowCache: Map<string, number>,
  maxColumnEnd: number,
  mixedTableRowTotals: Map<string, number>
): { divs: PivotTableCellProps[]; cellPositions: string[] } {
  const divs: PivotTableCellProps[] = []
  const cellPositions: string[] = []
  mixedTableRowTotals.forEach((value, key) => {
    const rowNumber = mixedTableStartRowCache.get(key)
    if (rowNumber) {
      const gridArea = new GridArea(rowNumber, maxColumnEnd + 1, rowNumber + 1, maxColumnEnd + 2)
      divs.push({
        types: new Set([PivotTableCellType.TOTAL, PivotTableCellType.VALUE]),
        isEndColumn: true,
        gridArea: gridArea,
        children: value,
      })
      cellPositions.push(gridArea.toString())
    }
  })
  return { divs, cellPositions }
}

function buildVerticalTableTotals<T extends object>(
  isMixedTable: boolean,
  maxRowEnd: number,
  keys: (keyof T)[],
  rowHeaderSpace: number,
  maxColumnEnd: number,
  grandtotal: number
): { divs: PivotTableCellProps[]; cellPositions: string[] } {
  const divs: PivotTableCellProps[] = []
  const cellPositions: string[] = []
  let totalsGridArea: GridArea
  if (isMixedTable) {
    totalsGridArea = new GridArea(maxRowEnd, 1, maxRowEnd + 1, keys.length + 2)
  } else {
    totalsGridArea = new GridArea(rowHeaderSpace, maxColumnEnd, rowHeaderSpace + 1, maxColumnEnd + 1)
    const totalGridArea = new GridArea(maxRowEnd, 1, maxRowEnd + 1, maxColumnEnd)
    const dataValueGridArea = new GridArea(maxRowEnd, maxColumnEnd, maxRowEnd + 1, maxColumnEnd + 1)
    divs.push({
      types: new Set([PivotTableCellType.HEADER]),
      isEndRow: true,
      gridArea: totalGridArea,
      children: TOTAL,
    })
    divs.push({
      types: new Set([PivotTableCellType.TOTAL, PivotTableCellType.GRANDTOTAL, PivotTableCellType.VALUE]),
      isEndRow: true,
      isEndColumn: true,
      gridArea: dataValueGridArea,
      children: grandtotal,
    })
  }
  divs.push({
    types: new Set([PivotTableCellType.HEADER]),
    isEndRow: isMixedTable,
    isEndColumn: !isMixedTable,
    gridArea: totalsGridArea,
    children: TOTAL,
  })
  cellPositions.push(totalsGridArea.toString())

  return { divs, cellPositions }
}

function getCurrentPath(filterKey: string, value: string): string {
  return PATH_SEPARATOR + filterKey + '.' + value
}

/**
 * Sums the span values of the parent cells to find the starting coordinates of the current cell.
 */
function getCellInitialPosition(initialPositionTree: CellInitialPosition | undefined) {
  const stack: CellInitialPosition[] = []
  let sum = 1

  if (initialPositionTree) {
    stack.push(initialPositionTree)
  } else {
    return 0
  }

  // Loop through the stack to calculate the sum of cellSpans
  while (stack.length) {
    const cell = stack.pop()
    if (cell.cellSpan) {
      sum += cell.cellSpan.value
    }
    // Add children to the stack
    if (cell.auxInitialPosition) {
      stack.push(cell.auxInitialPosition)
    } else if (cell.parentInitialPosition) {
      stack.push(cell.parentInitialPosition)
    }
  }

  return sum
}

function getListOfCellDataFromTree<T extends object>(
  tree: PivotTableTreeNode<T>,
  increment: 'column' | 'row',
  keyMapping: KeyMap<T>,
  onlyIncreaseSpanOnKeys?: Array<keyof T>
): PivotTableCellModel<T>[] {
  const stack: StackObj[] = []
  const cellList: PivotTableCellModel<T>[] = []

  // Initialize the stack with the first node of the tree
  stack.push({ treeNode: tree, [increment]: 1 })

  // loop through the stack
  while (stack.length) {
    const obj = stack.shift()
    if (obj) {
      let lastCellSpan: SpanValue
      let lastInitialValue: CellInitialPosition
      const currentNodeKey = obj.treeNode.nodeKey
      const shouldIncreaseCellSpan = !onlyIncreaseSpanOnKeys || onlyIncreaseSpanOnKeys.includes(currentNodeKey)

      // loop through children nodes
      Object.keys(obj.treeNode)
        .filter((k) => !IGNORED_TREE_KEYS.includes(k))
        .sort(keyMapping.get(currentNodeKey)?.ordenator)
        .forEach((key) => {
          // cellSpan: size of a cell
          let cellSpan = { value: 1 }
          // cellSpanList: list of current + previous cellSpans. To be used on the next loop cycle
          let cellSpanList = [cellSpan]
          if (obj.spanList) {
            const myKeys = Object.keys(obj.treeNode).filter((k) => !IGNORED_TREE_KEYS.includes(k))
            const lastSpan = obj.spanList[0]
            if (myKeys.length > lastSpan.value && shouldIncreaseCellSpan) {
              for (let i = 0; i < obj.spanList.length; i++) {
                /**
                 * This increment might cause side effects on all existing SpanValue objects,
                 * including the ones inside CellInitialPosition objects. It is intentional
                 */
                obj.spanList[i].value++
              }
            }
            cellSpanList.push(...obj.spanList)
          }

          const rowOrColumn = obj[increment] || 0
          const parentIni = obj.parentIni
          const value = keyMapping.get(currentNodeKey)?.formatter?.(key) ?? key
          const currentPath: string = getCurrentPath(currentNodeKey, value)
          const path = obj.path ? obj.path + currentPath : currentPath

          const initialPosition: CellInitialPosition = {
            parentInitialPosition: parentIni,
            cellSpan: shouldIncreaseCellSpan ? lastCellSpan : { value: 0 },
            auxInitialPosition: lastInitialValue,
          }

          // Push a key cell to the result list
          cellList.push({
            cellSpan: cellSpan,
            cellValue: value,
            initialPosition,
            [increment]: rowOrColumn,
            path,
            key: obj.treeNode.nodeKey,
            total: obj.treeNode.nodeValue,
          })

          if (obj.treeNode[key].nodeKey === undefined) {
            // If it's a leaf node, push a value cell to the result list
            cellList.push({
              cellSpan: cellSpan,
              [increment]: rowOrColumn + 1,
              initialPosition: initialPosition,
              path: path + PATH_SEPARATOR + RESULT_PATH_KEY,
              cellValue: obj.treeNode[key].nodeValue,
              key: RESULT_PATH_KEY as keyof T,
            })
          } else {
            // If it isn't a leaf node, add itself to the stack
            stack.push({
              treeNode: obj.treeNode[key],
              spanList: cellSpanList,
              [increment]: rowOrColumn + 1,
              parentIni: initialPosition,
              path,
            })
          }
          lastInitialValue = initialPosition
          lastCellSpan = cellSpan
        })
    }
  }
  return cellList
}
