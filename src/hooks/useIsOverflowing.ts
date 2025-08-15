import { MutableRefObject, useEffect, useState } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

type Dimensions = 'horizontal' | 'vertical'

export function useIsOverflowing(ref: MutableRefObject<HTMLElement>, dimension: Dimensions = 'horizontal') {
  const [isOverflowing, setIsOverflowing] = useState(false)

  useEffect(() => {
    const { current } = ref ?? {}

    const trigger = () => {
      setIsOverflowing(getIsOverflowing(current, dimension))
    }

    const observer = new ResizeObserver(trigger)

    if (current) {
      observer.observe(current)
      trigger()
    }

    return () => observer.disconnect()
  })

  return isOverflowing
}

const getIsOverflowing = (element: Element, dimension: Dimensions) => {
  if (dimension === 'horizontal') {
    return element.scrollWidth > element.clientWidth
  } else {
    return element.scrollHeight > element.clientHeight
  }
}
