import { difference, intersection } from 'lodash'

import { BoardField, FieldValuesByKey } from './model-board'

interface InitialKeyPositionsAndValues<T> {
  initialRowKeys: Array<keyof T>
  initialColumnKeys: Array<keyof T>
  initialAvailableKeys: Array<keyof T>
}

export function getInitialKeysAndFilters<T>(
  valuesByKey: FieldValuesByKey<T>,
  allFiltersByKey: Map<keyof T, Set<string>>,
  initialFields?: Array<BoardField<T>>,
  setFilterState?: (filter: Map<keyof T, Set<string>>) => void
): InitialKeyPositionsAndValues<T> {
  const rowKeys: Array<keyof T> = []
  const columnKeys: Array<keyof T> = []
  const filtersByKey = new Map(allFiltersByKey)

  initialFields?.forEach(({ key, origin, filters }) => {
    if (origin === 'row') rowKeys.push(key)
    if (origin === 'column') columnKeys.push(key)

    if (filters.length > 0) {
      const validFilters = intersection(filters, valuesByKey.get(key))
      filtersByKey.set(key, new Set(validFilters))
    }
  })

  const availableKeys: Array<keyof T> = difference(Array.from(valuesByKey.keys()), [...rowKeys, ...columnKeys])

  setFilterState?.(filtersByKey)

  return {
    initialRowKeys: rowKeys,
    initialColumnKeys: columnKeys,
    initialAvailableKeys: availableKeys,
  }
}
