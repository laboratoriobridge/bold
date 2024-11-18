import { ReactElement } from 'react'
import { KeyMap } from '../model'

export type TableProps<T extends object> = {
  /**
   * Table keys mapped to their display names, value formatters and value ordenators
   */
  keysMapping: KeyMap<T>
  /**
   * A tree with the count of each occurence of a value relative to parent keys.
   * If the complementaryTree is not null, it is used to build the columns of the table
   */
  defaultTree: Tree<T>
  /**
   * A tree with the count of each occurrence of a value relative to parent keys. Used to build the rows of the table
   */
  complementaryTree?: Tree<T>
  /**
   * Ordered list of keys to be displayed as rows
   */
  rowKeys?: Array<keyof T>
  /**
   * List of keys to be displayed as columns
   */
  columnKeys?: Array<keyof T>
}

export type TreeRoot = {
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

export type Dictionary<T extends any> = Record<string | number | symbol, T[] & TreeRoot>
export type Tree<T extends any> = Dictionary<T> & TreeRoot

export interface TreeMeta<T> {
  isEmpty: boolean
  numberKeys: string[]
  keyValues: Map<keyof T, Array<string>>
}

export type InitialPosition = {
  parentIni?: InitialPosition
  auxIni?: InitialPosition
  spanAux?: SpanValue
}

export type NestingResult<T> = {
  span: SpanValue
  value: string | number
  initialPosition: InitialPosition
  path: string
  column?: number
  row?: number
  key: keyof T
  total?: number
}

export type StackObj = {
  data: any
  spanTree?: SpanValue[]
  parentIni?: InitialPosition
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

export type GetHorinzontalParams<T extends object> = {
  results: NestingResult<T>[]
  keys: Array<keyof T>
  data: Tree<T>
  keysMapping: KeyMap<T>
  rowHeaderSpace?: number
  mixedTable?: {
    totalKey?: keyof T
  }
}

export type GetHorinzontalResults = {
  divs: ReactElement[]
  rowTotalValues: Map<string, number>
  totalRowNumber: number
  cellPosition: Set<string>
}

export type GetVerticalProps<T extends object> = {
  results: NestingResult<T>[]
  keys: Array<keyof T>
  data: Tree<T>
  keysMapping: KeyMap<T>
  columnHeaderSpace?: number
  mixedTable?: {
    rowResult: NestingResult<T>[]
    rowTotalValues: Map<string, number>
    totalKey: keyof T
    totalRowNumber: number
    cellPosition: Set<string>
  }
}
