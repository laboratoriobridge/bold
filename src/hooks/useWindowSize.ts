// from https://github.com/rehooks/window-size/blob/master/index.js

import { useEffect, useState } from 'react'

function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  }
}

export function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize())

  function handleResize() {
    setWindowSize(getSize())
  }

  useEffect(() => {
    addEventListener('resize', handleResize)
    return () => {
      removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}
