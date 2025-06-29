import React from 'react'

import { createPortal } from 'react-dom'
import { Icon } from '..'
import { useWidth } from '../../hooks/useMeasure'
import { useTheme } from '../../styles'
import { SeriesType } from './model'
import { LABEL_PORTAL_LAYER_ID } from './Chart'

export interface SeriesLabelProps {
  seriesType: SeriesType
  x?: number
  y?: number
  color?: string
  value?: any
  outlierValue?: any
}

const MIN_OFF_SET = 20

const getOutlierIconOffset = (widthLabel: number) => {
  const labelWidthOffset = widthLabel + 5
  return Math.min(labelWidthOffset, MIN_OFF_SET)
}

export function SeriesLabel<XDomain>(props: SeriesLabelProps) {
  const { seriesType, x, y, color, value, outlierValue } = props

  const [refLabel, widthLabel] = useWidth()

  const theme = useTheme()

  const portalTarget = document.getElementById(LABEL_PORTAL_LAYER_ID)
  if (!portalTarget) return null

  switch (seriesType) {
    case SeriesType.Line:
      const iconOffset = getOutlierIconOffset(widthLabel)

      return createPortal(
        outlierValue?.value != null ? (
          <>
            <Icon
              icon='angleUp'
              scale={1}
              x={x - iconOffset}
              y={y - 25}
              style={{ fill: theme.pallete.status.danger.main }}
            />
            <text ref={refLabel} x={x} y={y} dy={-9} style={{ fill: color }}>
              {outlierValue.value}
            </text>
          </>
        ) : (
          <text x={x} y={y} dy={-9} style={{ fill: color }} textAnchor='middle'>
            {value}
          </text>
        ),
        portalTarget
      )
  }
}
