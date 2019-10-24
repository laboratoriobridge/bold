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

    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return position
}
