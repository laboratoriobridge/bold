import React from 'react'

import { Theme, useStyles } from '../../styles'
import { Tooltip } from '../Tooltip'
import { AxisDomain, isValueRange, TooltipRenderer } from './model'
import { defaultChartTooltipFormatter } from './renderTooltip'

export interface ChartTooltipProps<XDomain> {
  children: React.ReactElement
  showTooltip: boolean
  seriesName: string
  label: XDomain
  value: number
  labelDomain?: AxisDomain
  renderer?: TooltipRenderer<XDomain>
}

export function ChartTooltip<XDomain>(props: ChartTooltipProps<XDomain>) {
  const { children, label, value, labelDomain, showTooltip, seriesName, renderer } = props

  const { classes } = useStyles(createStyles)
  let tooltip: string
  if (!renderer) {
    const xValue = labelDomain ? getTooltipLabelFormatter(labelDomain)(label as any).toString() : label
    tooltip = `${value} - ${xValue}`
  } else {
    tooltip = renderer([{ seriesName: seriesName, x: label, y: value }]) as string
  }
  return (
    <Tooltip text={showTooltip && tooltip} style={classes.tooltip}>
      {children}
    </Tooltip>
  )
}

ChartTooltip.defaultProps = {
  showTooltip: true,
} as ChartTooltipProps<any>

function getTooltipLabelFormatter(domain: AxisDomain): (x: number) => React.ReactNode {
  if (Array.isArray(domain)) return (x) => x
  if (isValueRange(domain)) return (x) => x
  else return (x: number) => (domain.format ?? defaultChartTooltipFormatter)(new Date(x))
}

const createStyles = (theme: Theme) => ({
  tooltip: {
    fontFamily: theme.typography.fontFamily,
  },
})
