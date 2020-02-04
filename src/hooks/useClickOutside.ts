// From https://github.com/sandiiarov/use-events/blob/master/src/useClickOutside/index.tsx

import { useEffect, useState } from 'react'

export const useClickOutside = (
  ref: React.RefObject<HTMLElement>,
  onClickOutside: (e: MouseEvent) => void
): [boolean] => {
  const [isActive, setActive] = useState(false)

  useEffect(() => {
    const mousedown = (e: MouseEvent) => {
      const { current } = ref

      if (current !== null && !current.contains(e.target as HTMLElement)) {
        setActive(true)
        onClickOutside(e)
      }
    }

    const mouseup = (e: MouseEvent) => {
      const { current } = ref

      if (current !== null && !current.contains(e.target as HTMLElement)) {
        setActive(false)
      }
    }

    document.addEventListener('mousedown', mousedown)
    document.addEventListener('mouseup', mouseup)

    return () => {
      document.removeEventListener('mousedown', mousedown)
      document.removeEventListener('mouseup', mouseup)
    }
  }, [])

  return [isActive]
}
