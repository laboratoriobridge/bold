import { useEffect, useRef } from 'react'

/**
 * Check if the component is still mounted.
 * Does not use `useState` hook so it does not trigger additional renders.
 * This might be used to avoid the "set state on unmounted component" react warning.
 */
export function useIsMounted() {
  const isMounted = useRef<boolean>(false)

  useEffect(() => {
    isMounted.current = true
    return () => (isMounted.current = false)
  }, [])

  return isMounted
}
