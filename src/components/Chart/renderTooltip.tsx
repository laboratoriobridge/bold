import React, { CSSProperties } from 'react'
import { Tooltip } from 'recharts'

import { Theme, useStyles, useTheme } from '../../styles'
import { Text } from '../Text'
import { AxisOptions, DataPoint, isDateRange, TooltipRenderer } from './model'
import { defaultChartDateFormatter } from './util'

export function renderTooltip<XDomain>(
  xAxis: AxisOptions,
  yAxis: AxisOptions,
  tooltipRenderer?: TooltipRenderer<XDomain>
) {
  return (
    <Tooltip
      content={(props) => (
        <CustomTooltip {...props} tooltipFormatter={tooltipRenderer ?? defaultTooltipRenderer(xAxis, yAxis)} />
      )}
    />
  )
}

function CustomTooltip(props) {
  const { active, label, payload, tooltipFormatter } = props

  const { classes, css } = useStyles(createStyles)
  const { classes: sizeClasses } = useStyles(sizeStyles)
  const size = label && label.length > 60 ? 'big' : 'small'

  const children = tooltipFormatter((payload ?? []).map((p) => ({ seriesName: p.name, x: label, y: p.value })))

  return active && <div className={css(classes.tooltip, sizeClasses[size])}>{children}</div>
}

function defaultTooltipRenderer(xAxis: AxisOptions, yAxis: AxisOptions): TooltipRenderer<any> {
  return (points) => <DefaultTooltip points={points} xAxis={xAxis} yAxis={yAxis} />
}

interface DefaultTooltipProps {
  points: (DataPoint<any> & { seriesName: string })[]
  xAxis: AxisOptions
  yAxis: AxisOptions
}

function DefaultTooltip(props: DefaultTooltipProps) {
  const { points, xAxis, yAxis } = props
  const theme = useTheme()

  return (
    points?.length && (
      <>
        {points?.map((p) => (
          <Text component='p' style={{ color: theme.pallete.gray.c100 }} key={p.y}>
            {`${p.seriesName}: ${p.y} ${yAxis?.unit ?? ''}`}
          </Text>
        ))}
        <Text component='p' style={{ color: theme.pallete.gray.c100 }}>
          {`${xAxis.title}: ${
            isDateRange(xAxis?.domain)
              ? (xAxis.domain.format ?? defaultChartDateFormatter)(new Date(points[0].x))
              : points[0].x
          }`}
        </Text>
      </>
    )
  )
}

const createStyles = (theme: Theme) => ({
  tooltip: {
    borderRadius: theme.radius.popper,
    maxWidth: theme.breakpoints.size.lg,
    background: theme.pallete.gray.c20,
    fontSize: '0.875rem',
    fontWeight: 'bold',
    lineHeight: 1.5,
  } as CSSProperties,
  tooltipText: {
    color: theme.pallete.gray.c100,
  },
})

const sizeStyles = () => ({
  small: {
    textAlign: 'center',
    padding: '0.5rem',
  } as CSSProperties,
  big: {
    textAlign: 'left',
    padding: '1rem',
    maxWidth: 277,
  } as CSSProperties,
})
