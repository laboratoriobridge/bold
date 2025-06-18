import { difference, intersection } from 'lodash'

import { BoardField, FieldFiltersByKey, FieldValuesByKey } from './model'

interface InitialKeyPositionsAndValues<T> {
  initialRowKeys: Array<keyof T>
  initialColumnKeys: Array<keyof T>
  initialAvailableKeys: Array<keyof T>
}

export function getInitialKeys<T>(
  keys: FieldValuesByKey<T>,
  initialFields?: Array<BoardField<T>>
): InitialKeyPositionsAndValues<T> {
  const rowKeys: Array<keyof T> = []
  const columnKeys: Array<keyof T> = []

  initialFields?.forEach(({ key, origin }) => {
    if (origin === 'row') {
      rowKeys.push(key)
    }
    if (origin === 'column') {
      columnKeys.push(key)
    }
  })
  const availableKeys: Array<keyof T> = difference(Array.from(keys.keys()), [...rowKeys, ...columnKeys])

  return {
    initialRowKeys: rowKeys,
    initialColumnKeys: columnKeys,
    initialAvailableKeys: availableKeys,
  }
}

export function initializeActiveFilters<T>(
  allFiltersByKey: FieldFiltersByKey<T>,
  keys: FieldValuesByKey<T>,
  initialFields?: Array<BoardField<T>>
): FieldFiltersByKey<T> {
  const activeFiltersByKey = new Map(allFiltersByKey)
  initialFields
    ?.filter(({ filters }) => !!filters?.length)
    .forEach(({ key, filters }) => {
      const currentFieldValues = keys.get(key)
      const validFilters = intersection(filters, currentFieldValues)
      activeFiltersByKey.set(key, new Set(validFilters))
    })
  return activeFiltersByKey
}

export function handleTagFilterRemove<T extends object>(
  key: keyof T,
  value: string,
  filterState: FieldFiltersByKey<T>
): Set<string> {
  const filter = filterState.get(key)
  const values = filter ? Array.from(filter) : []

  return new Set(values.filter((item) => item !== value))
}
