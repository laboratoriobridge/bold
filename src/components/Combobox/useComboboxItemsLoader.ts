import { useCallback, useMemo, useState } from 'react'

import { debounce } from '../../util'

export type AsyncComboboxLoadFn<T> = (filter: string) => Promise<T[]> | T[]

export function useComboboxItemsLoader<T>(items: AsyncComboboxLoadFn<T>, debounceMs = 350) {
  const [loading, setLoading] = useState(false)
  const [currItems, setCurrItems] = useState<T[]>([])

  const load = useCallback(
    (filter: string) => {
      setLoading(true)
      Promise.resolve(items(filter))
        .then(setCurrItems)
        .finally(() => setLoading(false))
    },
    [items]
  )

  const debouncedLoad = useMemo(() => debounce(load, debounceMs), [load, debounceMs])

  const loadItems = useCallback((filter: string) => debouncedLoad(filter), [debouncedLoad])

  return {
    items: currItems,
    loading,
    loadItems,
  }
}
