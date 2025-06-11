import { LocaleConfiguration } from '../../../i18n'

export type PivotTableBoardLabels = LocaleConfiguration['pivotTableBoard']

export type FieldValuesByKey<T> = Map<keyof T, Array<string>>

export type FieldFiltersByKey<T> = Map<keyof T, Set<string>>

export type RowColumnKeys<T> = [Array<keyof T>, Array<keyof T>]

export type PivotTableBoardOrigin = 'filter' | 'row' | 'column'

export type BoardField<T> = {
  key: keyof T
  origin: PivotTableBoardOrigin
  filters: string[]
}
