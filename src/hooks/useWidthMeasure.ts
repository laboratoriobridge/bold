import { useState, useCallback } from 'react'
import ResizeObserver from 'resize-observer-polyfill'

export const useWidthMeasure = <T extends SVGTextElement>(): [(instance: T | null) => void, number] => {
  const [measure, setMeasure] = useState(0)

  const observer = useCallback(
    () =>
      new ResizeObserver((entries) => {
        const entry = entries[0]
        const newWidth = entry.contentRect.width
        if (newWidth !== measure) {
          setMeasure(newWidth)
        }
      }),
    [measure]
  )

  const ref = useCallback(
    (node: T | null) => {
      if (node) {
        observer().observe(node)
      }
    },
    [observer]
  )

  return [ref, measure]
}
