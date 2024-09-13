import React from 'react'

import { SeriesType } from './model'

export interface SeriesLabelProps {
  seriesType: SeriesType
  x?: number
  y?: number
  color?: string
  value?: any
}

export function SeriesLabel(props: SeriesLabelProps) {
  const { seriesType, x, y, color, value } = props

  switch (seriesType) {
    case SeriesType.Line:
      return (
        <text x={x} y={y} dy={-9} style={{ fill: color }} textAnchor='middle'>
          {value}
        </text>
      )
  }
}
