import { KeyMap } from '../model'
import { PivotTableCellProps } from '../PivotTableCell/PivotTableCell'

export interface PivotTableProps<T extends object> {
  /**
   * Table keys mapped to their display names, value formatters and value ordenators
   */
  keysMapping: KeyMap<T>
  /**
   * A tree with the count of each occurence of a value relative to parent keys.
   * If the complementaryTree is not null, it is used to build the columns of the table
   */
  defaultTree: PivotTableTreeNode<T>
  /**
   * A tree with the count of each occurrence of a value relative to parent keys. Used to build the rows of the table
   */
  complementaryTree?: PivotTableTreeNode<T>
  /**
   * Ordered list of keys to be displayed as rows
   */
  rowKeys?: Array<keyof T>
  /**
   * List of keys to be displayed as columns
   */
  columnKeys?: Array<keyof T>
}

export interface PivotTableTreeNodeValues {
  /**
   * Category of data that the children of this node belong to
   */
  nodeKey?: string
  /**
   * Count of values belonging to this node of the tree
   */
  nodeValue?: number
  /**
   * Biggest leaf value under this node. Used to color the table cells
   */
  maxLeafValue?: number
}

export type PivotTableTreeNodeChildren<T extends any> = Record<string | number | symbol, T[] & PivotTableTreeNodeValues>
export type PivotTableTreeNode<T extends any> = PivotTableTreeNodeChildren<T> & PivotTableTreeNodeValues

export interface TreeMeta<T> {
  isEmpty: boolean
  numberKeys: string[]
  keyValues: Map<keyof T, Array<string>>
}

export interface CellInitialPosition {
  parentInitialPosition?: CellInitialPosition
  auxInitialPosition?: CellInitialPosition
  cellSpan?: SpanValue
}

export interface CellData<T> {
  cellSpan: SpanValue
  cellValue: string | number
  initialPosition: CellInitialPosition
  path: string
  column?: number
  row?: number
  key: keyof T
  total?: number
}

export interface StackObj {
  treeNode: any
  spanList?: SpanValue[]
  parentIni?: CellInitialPosition
  path?: string
  column?: number
  row?: number
}

export type SpanValue = {
  value: number
}

export type FieldValuesByKey<T> = Map<keyof T, Array<string>>

export type FieldFiltersByKey<T> = Map<keyof T, Set<string>>

export const IGNORED_TREE_KEYS = ['id', '__typename', 'nodeKey', 'nodeValue', 'maxLeafValue']

export interface VerticalTableProps<T extends object> {
  cellData: CellData<T>[]
  keys: Array<keyof T>
  tree: PivotTableTreeNode<T>
  keysMapping: KeyMap<T>
  rowHeaderSpace?: number
  mixedTable?: {
    totalKey?: keyof T
  }
}

export interface HorizontalTableResults {
  divs: PivotTableCellProps[]
  rowTotalValues: Map<string, number>
  totalRowNumber: number
  cellPosition: Set<string>
}

export interface HorizontalTableProps<T extends object> {
  cellData: CellData<T>[]
  keys: Array<keyof T>
  tree: PivotTableTreeNode<T>
  keysMapping: KeyMap<T>
  columnHeaderSpace?: number
  mixedTable?: MixedTableProps<T>
}

export interface MixedTableProps<T extends object> {
  rowResult: CellData<T>[]
  rowTotalValues: Map<string, number>
  totalKey: keyof T
  totalRowNumber: number
  cellPosition: Set<string>
}
