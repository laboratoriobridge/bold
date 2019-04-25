import { useEffect, useState } from 'react'

export interface WindowSize {
  innerHeight: number
  innerWidth: number
  outerHeight: number
  outerWidth: number
}

function getSize(w: Window): WindowSize {
  return {
    innerHeight: w.innerHeight,
    innerWidth: w.innerWidth,
    outerHeight: w.outerHeight,
    outerWidth: w.outerWidth,
  }
}

/**
 * Hook that returns current window dimensions.
 *
 * Note: it might return null on first render,
 * when `window` object is not defined (for server side rendering, for example).
 */
export function useWindowSize(): WindowSize | null {
  const [windowSize, setWindowSize] = useState<WindowSize>(() =>
    typeof window !== 'undefined' ? getSize(window) : null
  )

  useEffect(() => {
    setWindowSize(getSize(window))

    function handleResize() {
      setWindowSize(getSize(window))
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}
