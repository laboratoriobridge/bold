import React from 'react'
import { Area, Bar, LegendType, LabelList, Line, Rectangle, RectangleProps } from 'recharts'

import { ChartTooltip } from './ChartTooltip'
import { LineDot } from './LineDot'
import {
  AxisDomain,
  AxisOptions,
  BarChartSeries,
  ChartColorScheme,
  ChartSeries,
  getChartColorScheme,
  ReferenceArea,
  SeriesType,
  TooltipRenderer,
} from './model'
import { SeriesLabel } from './SeriesLabel'

export function renderSeries<XDomain>(
  chartType: SeriesType,
  series: ChartSeries<any>,
  index: number,
  xAxis: AxisOptions,
  stacked: boolean,
  colorScheme: ChartColorScheme,
  showTooltip?: boolean,
  tooltipRenderer?: TooltipRenderer<XDomain>
) {
  switch (series.type ?? chartType ?? SeriesType.Line) {
    case SeriesType.Line:
      return renderLine(index, series, showTooltip, xAxis.domain, colorScheme, tooltipRenderer)
    case SeriesType.Column:
      return renderColumn(index, series, stacked, showTooltip, xAxis.domain, colorScheme, tooltipRenderer)
    case SeriesType.Area:
      return renderArea(index, series, showTooltip, xAxis.domain, stacked, colorScheme, tooltipRenderer)
  }
}

export function renderReferenceAreas(refArea: ReferenceArea<any>, index: number, colorScheme: ChartColorScheme) {
  const { strokeColor, color: refAreaColor, tickColor, stroke, name } = refArea

  const cs = getChartColorScheme(colorScheme)
  const color = refAreaColor ?? cs[index % cs.length]

  return (
    <Area
      {...getDefaultRenderProps(name, color)}
      stroke={strokeColor ?? tickColor ?? color}
      type='monotone'
      yAxisId='refArea'
      stackId='refAreaStack'
      label={false}
      strokeWidth={stroke === false ? 0 : 1}
      strokeDasharray='6 4'
      connectNulls={true}
      isRange={true}
      legendType='none'
    />
  )
}

function renderLine<XDomain>(
  index: number,
  series: ChartSeries<XDomain>,
  showTooltip: boolean,
  xDomain: AxisDomain,
  colorScheme: ChartColorScheme,
  tooltipRenderer?: TooltipRenderer<XDomain>
) {
  const { name, dashed, dot } = series
  const cs = getChartColorScheme(colorScheme)
  const color = series.color ?? cs[index % cs.length]

  return (
    <Line
      {...getDefaultRenderProps(name, color)}
      activeDot={{ r: 12, fill: color, opacity: 0.3 }}
      dot={
        dot === false ? (
          false
        ) : (
          <LineDot showTooltip={showTooltip} xDomain={xDomain} tooltipRenderer={tooltipRenderer} dotShape={dot} />
        )
      }
      strokeWidth={2}
      yAxisId='data'
      connectNulls
      label={<SeriesLabel seriesType={SeriesType.Line} color={color} />}
      strokeDasharray={dashed && '6 4'}
      legendType={dot === false ? 'plainline' : (dot as LegendType) ?? 'circle'}
    />
  )
}

function renderArea<XDomain>(
  index: number,
  series: ChartSeries<XDomain>,
  showTooltip: boolean,
  xDomain: AxisDomain,
  stacked: boolean,
  colorScheme: ChartColorScheme,
  tooltipRenderer?: TooltipRenderer<XDomain>
) {
  const { name, dashed, dot } = series
  const cs = getChartColorScheme(colorScheme)
  const color = series.color ?? cs[index % cs.length]

  return (
    <Area
      {...getDefaultRenderProps(name, color)}
      fillOpacity={0.1}
      dot={
        dot === false ? (
          false
        ) : (
          <LineDot showTooltip={showTooltip} xDomain={xDomain} tooltipRenderer={tooltipRenderer} dotShape={dot} />
        )
      }
      strokeWidth={2}
      yAxisId='data'
      connectNulls
      label={<SeriesLabel seriesType={SeriesType.Line} color={color} />}
      strokeDasharray={dashed && '6 4'}
      legendType={dot === false ? 'plainline' : (dot as LegendType) ?? 'circle'}
      stackId={stacked ? 'stackId' : undefined}
    />
  )
}

interface BarShapeProps<XDomain> extends RectangleProps {
  payload?: { x: XDomain }
  value?: number
}

function renderColumn<XDomain>(
  index: number,
  series: ChartSeries<XDomain>,
  stacked: boolean,
  showTooltip: boolean,
  xDomain: AxisDomain,
  colorScheme: ChartColorScheme,
  tooltipRenderer: TooltipRenderer<XDomain>
) {
  const { name } = series
  const cs = getChartColorScheme(colorScheme)
  const color = series.color ?? cs[index % cs.length]

  return (
    <Bar
      {...getDefaultRenderProps(name, color)}
      stackId={stacked && 'stackId'}
      yAxisId='data'
      shape={(props: BarShapeProps<XDomain>) => (
        <ChartTooltip
          labelDomain={xDomain}
          label={props.payload?.x}
          value={props.value}
          showTooltip={showTooltip}
          renderer={tooltipRenderer}
        >
          <Rectangle {...props} />
        </ChartTooltip>
      )}
      label={{ fill: color, position: 'top' }}
      legendType='circle'
    >
      {stacked && <LabelList dataKey={name} position='insideTop' offset={12} {...{ fill: 'white' }} />}
    </Bar>
  )
}

export function renderBar<YDomain>(
  index: number,
  series: BarChartSeries<YDomain>,
  stacked: boolean,
  showTooltip: boolean,
  yDomain: AxisDomain,
  colorScheme: ChartColorScheme,
  tooltipRenderer?: TooltipRenderer<YDomain>
) {
  const { name } = series
  const cs = getChartColorScheme(colorScheme)
  const color = series.color ?? cs[index % cs.length]

  return (
    <Bar
      {...getDefaultRenderProps(name, color)}
      stackId={stacked && 'stackId'}
      yAxisId='data'
      shape={(props) => (
        <ChartTooltip
          labelDomain={yDomain}
          label={(props as any).payload.x}
          value={(props as any).value}
          showTooltip={showTooltip}
          renderer={tooltipRenderer}
        >
          <Rectangle {...props} />
        </ChartTooltip>
      )}
      label={{ fill: color, position: 'right' }}
      legendType='circle'
    >
      {stacked && <LabelList dataKey={name} position='insideRight' offset={12} {...{ fill: 'white' }} />}
    </Bar>
  )
}

function getDefaultRenderProps(name: string, color: string) {
  return {
    key: name,
    dataKey: name,
    stroke: color,
    fill: color,
    isAnimationActive: false,
  }
}
