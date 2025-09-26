import { useState, useCallback } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export type ContentRect = Pick<DOMRectReadOnly, 'width' | 'height'>

const useMeasure = <T>(item: keyof ContentRect): [(instance: T) => void, number] => {
  const [measure, setMeasure] = useState(0)

  const [observer] = useState(
    () =>
      new ResizeObserver((entries) => {
        const entry = entries[0]
        if (entry.contentRect[item] !== measure) {
          setMeasure(entry.contentRect[item])
        }
      })
  )

  const ref = useCallback(
    (node) => {
      observer.disconnect()
      if (node) {
        observer.observe(node)
      }
    },
    [observer]
  )
  return [ref, measure]
}

export const useWidth = () => useMeasure('width')

export const useHeight = () => useMeasure('height')
