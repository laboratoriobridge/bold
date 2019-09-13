import { useCallback, useMemo, useState } from 'react'

import { debounce } from '../../util'

/**
 * Function that is used to populate the select menu.
 *
 * @param filter The current select input filter.
 * @return A promise of the items to be populated.
 */
export type AsyncSelectLoadFn<T> = (filter: string) => Promise<T[]>

export function useAsyncSelect<T>(loadItems: AsyncSelectLoadFn<T>, debounceMs = 350) {
  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState<T[]>([])

  const load = useCallback(
    (filter: string) => {
      setLoading(true)
      loadItems(filter)
        .then(loadedItems => setItems(loadedItems))
        .finally(() => setLoading(false))
    },
    [loadItems]
  )

  const debouncedLoad = useMemo(() => debounce(load, debounceMs), [load])

  const handleFilterChange = (filter: string) => {
    setLoading(true)
    return debouncedLoad(filter)
  }

  return {
    getSelectProps: () => ({
      items,
      loading,
      onFilterChange: handleFilterChange,
    }),
  }
}
