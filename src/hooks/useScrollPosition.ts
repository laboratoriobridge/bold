import { useEffect, useState } from 'react'

function getPosition() {
  return {
    scrollX: window.scrollX,
    scrollY: window.scrollY,
  }
}

export function useScrollPosition() {
  const [position, setPosition] = useState(getPosition())

  useEffect(() => {
    function handleScroll() {
      setPosition(getPosition())
    }

    addEventListener('scroll', handleScroll)
    return () => {
      removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position
}
