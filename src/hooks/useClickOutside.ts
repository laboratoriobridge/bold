// From https://github.com/sandiiarov/use-events/blob/master/src/useClickOutside/index.tsx

import { useEffect, useState, RefObject } from 'react'

/**
 * Trigger a callback whenever a click is made outside the ref elements.
 *
 * @param ref The target element(s) to ignore.
 * @param onClickOutside The callback function to be called.
 */
export const useClickOutside = (
  ref: HTMLElement | Array<HTMLElement> | RefObject<HTMLElement> | Array<RefObject<HTMLElement>>,
  onClickOutside: (e: MouseEvent) => void
): [boolean] => {
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    const mousedown = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const refs = getRefs(ref)

      if (refs.filter((r) => !!r).every((r) => !r.contains(target))) {
        setActive(true)
        onClickOutside(e)
      }
    }

    const mouseup = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const refs = getRefs(ref)

      if (refs.filter((r) => !!r).every((r) => !r.contains(target))) {
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

function getRefs(
  ref: HTMLElement | Array<HTMLElement> | RefObject<HTMLElement> | Array<RefObject<HTMLElement>>
): Array<HTMLElement> {
  if (Array.isArray(ref)) {
    return (ref as []).map((item: any) => {
      if (isRef(item)) return item.current
      return item
    })
  } else if (isRef(ref)) {
    return [ref.current]
  } else {
    return [ref]
  }
}

function isRef(ref: any): ref is RefObject<HTMLElement> {
  return !!ref?.current
}
