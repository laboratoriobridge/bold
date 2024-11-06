import React from 'react'

import { Icon } from '..'
import { useWidthMeasure } from '../../hooks/useWidthMeasure'
import { SeriesType } from './model'

export interface SeriesLabelProps {
  seriesType: SeriesType
  x?: number
  y?: number
  color?: string
  value?: any
  outlierValue?: any
}

export function SeriesLabel<XDomain>(props: SeriesLabelProps) {
  const { seriesType, x, y, color, value, outlierValue } = props
  const [refLabel, widthLabel] = useWidthMeasure<SVGTextElement>()

  switch (seriesType) {
    case SeriesType.Line:
      const iconOffset = getOutlierIconOffset(widthLabel)

      return outlierValue?.value != null ? (
        <>
          <Icon icon='angleUp' scale={1} x={x - iconOffset} y={y - 25} style={{ fill: 'red' }} />
          <text ref={refLabel} x={x} y={y} dy={-9} style={{ fill: color }} data-testid='Text.outlierPoint'>
            {outlierValue.value}
          </text>
        </>
      ) : (
        <text x={x} y={y} dy={-9} style={{ fill: color }} textAnchor='middle'>
          {value}
        </text>
      )
  }
}

const getOutlierIconOffset = (widthLabel: number) => {
  const minOffset = 20
  const labelWidthOffset = widthLabel + 5
  return Math.min(labelWidthOffset, minOffset)
}
