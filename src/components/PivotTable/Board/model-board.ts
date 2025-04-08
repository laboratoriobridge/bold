export type FieldValuesByKey<T> = Map<keyof T, Array<string>>

export type BoardField<T> = {
  key: keyof T
  origin: string
  filters: string[]
}
