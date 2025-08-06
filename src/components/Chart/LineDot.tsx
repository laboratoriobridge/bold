import React, { CSSProperties } from 'react'

import { useStyles } from '../../styles'
import { ChartTooltip } from './ChartTooltip'
import { CustomDot } from './CustomDot'
import { AxisDomain, DotShape, SeriesType, TooltipRenderer } from './model'
import { getOutlierSeriesName } from './util'
import { SeriesLabel } from './SeriesLabel'

export interface LineDotProps<XDomain> {
  cx?: number
  cy?: number
  value?: number | number[]
  stroke?: string
  showTooltip?: boolean
  dataKey?: string
  payload?: { [x: string]: any }
  color?: string
  xDomain?: AxisDomain
  dotShape?: DotShape
  tooltipRenderer?: TooltipRenderer<XDomain>
}

export function LineDot<XDomain>(props: LineDotProps<XDomain>) {
  const {
    cx,
    cy,
    showTooltip,
    stroke,
    payload,
    value,
    xDomain,
    dataKey: seriesName,
    color,
    dotShape,
    tooltipRenderer,
  } = props
  const { classes } = useStyles(createStyles)
  const labelValue =
    payload[getOutlierSeriesName(seriesName)]?.value ?? (Array.isArray(value) ? value[value.length - 1] : value)

  const showDot = payload?.['showDot'] ?? true
  const outlierValue = payload?.[getOutlierSeriesName(seriesName)]

  return showDot ? (
    <>
      <SeriesLabel
        outlierValue={outlierValue}
        seriesType={SeriesType.Line}
        color={color}
        hideLabel={showDot}
        x={cx}
        y={cy}
        value={labelValue}
      />
      <ChartTooltip
        showTooltip={showTooltip}
        seriesName={seriesName}
        label={payload.x}
        value={labelValue}
        labelDomain={xDomain}
        renderer={tooltipRenderer}
      >
        <g className={classes.container}>
          <CustomDot cx={cx} cy={cy} stroke={stroke} shape={dotShape} />
        </g>
      </ChartTooltip>
    </>
  ) : null
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
