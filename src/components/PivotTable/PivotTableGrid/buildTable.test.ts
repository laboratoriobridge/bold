import { KeyConfig } from '../model'
import { GridArea } from '../PivotTableCell/classes/GridArea'
import { PivotTableCellType } from '../PivotTableCell/model'
import { buildTable } from './buildTable'

type Fruit = {
  name: string
  size: string
}
const oneKeyTree = {
  nodeKey: 'name',
  nodeValue: 7,
  maxLeafValue: 3,
  broccoli: {
    nodeValue: 3,
    maxLeafValue: 1,
  },
  carrot: {
    nodeValue: 4,
    maxLeafValue: 3,
  },
} as any

const keyMapping = new Map([
  [
    'name' as keyof Fruit,
    {
      keyName: 'Name',
      ordenator(a, b) {
        return a > b ? 1 : -1
      },
      formatter(a) {
        return a[0].toLocaleUpperCase() + a.slice(1)
      },
    } as KeyConfig,
  ],
  [
    'size' as keyof Fruit,
    {
      keyName: 'Weight',
      ordenator(a, b) {
        return a > b ? 1 : -0
      },
      formatter(a) {
        return a + ' kg'
      },
    } as KeyConfig,
  ],
])

describe('buildHorizontalTable', () => {
  it('Should build the props of a horizontal table correctly', () => {
    const cellList = buildTable([], ['name'], oneKeyTree, {}, keyMapping)
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(1, 1, 2, 2),
      children: 'Name',
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(1, 2, 2, 3),
      children: 'Broccoli',
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(1, 3, 2, 4),
      children: 'Carrot',
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(1, 4, 2, 5),
      children: 'Total',
      isEndColumn: true,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(2, 1, 3, 2),
      children: 'Total',
      isEndRow: true,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.VALUE]),
      gridArea: new GridArea(2, 2, 3, 3),
      children: '3',
      isEndRow: true,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.VALUE]),
      gridArea: new GridArea(2, 3, 3, 4),
      children: '4',
      isEndRow: true,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.TOTAL, PivotTableCellType.VALUE, PivotTableCellType.GRANDTOTAL]),
      gridArea: new GridArea(2, 4, 3, 5),
      children: 7,
      isEndRow: true,
      isEndColumn: true,
    })
  })
})

describe('buildVerticalTable', () => {
  it('Should build the props of a vertical table correctly', () => {
    const cellList = buildTable(['name'], [], oneKeyTree, {}, keyMapping)
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(2, 1, 3, 2),
      children: 'Name',
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(3, 1, 4, 2),
      children: 'Broccoli',
      isEndColumn: false,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(4, 1, 5, 2),
      children: 'Carrot',
      isEndColumn: false,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(5, 1, 6, 2),
      children: 'Total',
      isEndRow: true,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(2, 2, 3, 3),
      children: 'Total',
      isEndColumn: true,
      isEndRow: false,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.VALUE]),
      gridArea: new GridArea(3, 2, 4, 3),
      children: '3',
      isEndColumn: true,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.VALUE]),
      gridArea: new GridArea(4, 2, 5, 3),
      children: '4',
      isEndColumn: true,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.TOTAL, PivotTableCellType.VALUE, PivotTableCellType.GRANDTOTAL]),
      gridArea: new GridArea(5, 2, 6, 3),
      children: 7,
      isEndRow: true,
      isEndColumn: true,
    })
  })
})

describe('buildMixedTable', () => {
  it('Should build the props of a mixed table correctly', () => {
    const defaultTree = {
      nodeKey: 'name',
      nodeValue: 1,
      maxLeafValue: 1,
      broccoli: {
        nodeKey: 'size',
        nodeValue: 1,
        maxLeafValue: 1,
        1: { nodeValue: 1 },
      },
    } as any
    const complementaryTree = {
      nodeKey: 'size',
      nodeValue: 1,
      maxLeafValue: 1,
      1: {
        nodeKey: 'name',
        nodeValue: 1,
        maxLeafValue: 1,
        broccoli: { nodeValue: 1 },
      },
    } as any
    const cellList = buildTable(['name'], ['size'], defaultTree, complementaryTree, keyMapping)
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(2, 1, 3, 2),
      children: 'Name',
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(1, 2, 2, 3),
      children: 'Weight',
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(3, 1, 4, 3),
      children: 'Broccoli',
      isEndColumn: false,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(1, 3, 3, 4),
      children: '1 kg',
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.VALUE]),
      gridArea: new GridArea(3, 3, 4, 4),
      children: '1',
      isEndRow: false,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.VALUE, PivotTableCellType.TOTAL]),
      gridArea: new GridArea(3, 4, 4, 5),
      children: 1,
      isEndColumn: true,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.VALUE, PivotTableCellType.TOTAL]),
      gridArea: new GridArea(4, 3, 5, 4),
      children: 1,
      isEndRow: true,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(1, 4, 3, 5),
      children: 'Total',
      isEndColumn: true,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.HEADER]),
      gridArea: new GridArea(4, 1, 5, 3),
      children: 'Total',
      isEndColumn: false,
      isEndRow: true,
    })
    expect(cellList).toContainEqual({
      types: new Set([PivotTableCellType.TOTAL, PivotTableCellType.VALUE, PivotTableCellType.GRANDTOTAL]),
      gridArea: new GridArea(4, 4, 5, 5),
      children: 1,
      isEndRow: true,
      isEndColumn: true,
    })
  })
})
