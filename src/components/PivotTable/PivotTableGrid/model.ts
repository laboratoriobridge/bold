import { KeyMap } from '../model'

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

export type PivotTableTreeNode<T extends any> = Record<string | number | symbol, T[] & PivotTableTreeNodeValues> &
  PivotTableTreeNodeValues
