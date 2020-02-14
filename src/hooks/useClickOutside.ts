// From https://github.com/sandiiarov/use-events/blob/master/src/useClickOutside/index.tsx

import { useEffect, useState, RefObject } from 'react'

/**
 * Trigger a callback whenever a click is made outside the ref elements.
 *
 * @param ref The target element(s) to ignore.
 * @param onClickOutside The callback function to be called.
 */
export const useClickOutside = (
  ref: RefObject<HTMLElement> | Array<RefObject<HTMLElement>>,
  onClickOutside: (e: MouseEvent) => void
): [boolean] => {
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    const mousedown = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const refs = getRefs(ref)

      if (refs.filter(r => !!r.current).every(r => !r.current.contains(target))) {
        setActive(true)
        onClickOutside(e)
      }
    }

    const mouseup = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const refs = getRefs(ref)

      if (refs.filter(r => !!r.current).every(r => !r.current.contains(target))) {
        setActive(false)
      }
    }

    document.addEventListener('mousedown', mousedown)
    document.addEventListener('mouseup', mouseup)

    return () => {
      document.removeEventListener('mousedown', mousedown)
      document.removeEventListener('mouseup', mouseup)
    }
  }, [ref, onClickOutside])

  return [isActive]
}

function getRefs(ref: RefObject<HTMLElement> | Array<RefObject<HTMLElement>>): Array<RefObject<HTMLElement>> {
  if (Array.isArray(ref)) {
    return ref
  } else {
    return [ref]
  }
}
