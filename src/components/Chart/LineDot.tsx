import React, { CSSProperties } from 'react'

import { useStyles } from '../../styles'
import { ChartTooltip } from './ChartTooltip'
import { CustomDot } from './CustomDot'
import { AxisDomain, DotShape, TooltipRenderer } from './model'

export interface LineDotProps<XDomain> {
  cx?: number
  cy?: number
  value?: number | number[]
  stroke?: string
  showTooltip?: boolean
  dataKey?: string
  payload?: { [x: string]: any }
  xDomain?: AxisDomain
  dotShape?: DotShape
  tooltipRenderer?: TooltipRenderer<XDomain>
}

export function LineDot<XDomain>(props: LineDotProps<XDomain>) {
  const { cx, cy, showTooltip, stroke, payload, value, xDomain, dataKey: seriesName, dotShape, tooltipRenderer } = props
  const { classes } = useStyles(createStyles)
  return (
    <ChartTooltip
      showTooltip={showTooltip}
      seriesName={seriesName}
      label={payload.x}
      value={Array.isArray(value) ? value[value.length - 1] : value}
      labelDomain={xDomain}
      renderer={tooltipRenderer}
    >
      <g className={classes.container}>
        <CustomDot cx={cx} cy={cy} stroke={stroke} shape={dotShape} />
      </g>
    </ChartTooltip>
  )
}

const createStyles = () => ({
  container: {
    '.hover-shape': {
      visibility: 'hidden',
    },
    '&:hover .hover-shape': {
      visibility: 'visible',
    },
  } as CSSProperties,
})
