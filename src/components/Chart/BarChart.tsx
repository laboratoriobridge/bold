import React from 'react'
import { CartesianGrid, ComposedChart, Legend } from 'recharts'

import { useTheme } from '../../styles'
import { adaptDomainToSeriesRange } from './adaptDomainToData'
import { convertSeries } from './convertSeries'
import { getDomainPoints } from './getDomainPoints'
import { AxisDomain, AxisOptions, BarChartSeries, ChartColorScheme, ChartSeries, TooltipOptions } from './model'
import { renderAxis } from './renderAxis'
import { renderBar } from './renderSeries'
import { renderTooltip } from './renderTooltip'
import { isInsideDomain } from './util'

export interface BarChartProps<YDomain> {
  series: BarChartSeries<YDomain>[]
  yAxis: AxisOptions
  xAxis?: Partial<AxisOptions>
  colorScheme: ChartColorScheme
  showLegend: boolean
  stacked: boolean
  tooltip: TooltipOptions<YDomain>
  width?: number
  height: number
}

export function BarChart<YDomain>(props: BarChartProps<YDomain>) {
  const { series, xAxis, yAxis, stacked, colorScheme, showLegend, tooltip, width, height } = props

  const theme = useTheme()
  const domainPoints = getDomainPoints(yAxis.domain)
  const rangedSeries = adaptSeriesDataToRange(series, yAxis.domain, domainPoints)
  const adaptedXDomain = adaptDomainToSeriesRange(xAxis?.domain, rangedSeries)
  const data = convertSeries(rangedSeries, domainPoints, null)

  return (
    <ComposedChart
      data={data}
      width={width}
      height={height}
      margin={{ top: 50, bottom: 0, left: 0, right: 30 }}
      layout='vertical'
      style={{
        fontFamily: theme.typography.fontFamily,
        fontSize: '0.8rem',
        color: theme.pallete.gray.c20,
      }}
    >
      <CartesianGrid vertical horizontal={false} />
      <Legend
        wrapperStyle={{ padding: showLegend ? '2rem 2rem 1.5rem 3.5rem' : '1rem', fontSize: '0.8rem' }}
        content={showLegend ? undefined : () => false}
        align='left'
        iconSize={11}
      />
      {/*Legend must be present for the X axis title to be shown*/}

      {renderAxis('y', yAxis, yAxis.domain, domainPoints, true)}
      {renderAxis('x', xAxis, adaptedXDomain, getDomainPoints(adaptedXDomain), true)}

      {series.map((s, i) =>
        renderBar(i, s, stacked, tooltip?.type === 'point', yAxis.domain, colorScheme ?? 'default', tooltip?.render)
      )}

      {tooltip?.type === 'line' && renderTooltip(xAxis, yAxis, tooltip?.render)}
    </ComposedChart>
  )
}

const isNumberArray = (array: any[]): array is number[] => typeof array[0] === 'number'
function adaptSeriesDataToRange<YDomain>(
  series: BarChartSeries<YDomain>[],
  rangeDomain: AxisDomain,
  rangeDomainPoints: YDomain[]
): ChartSeries<YDomain>[] {
  return series.map(({ data, ...rest }) => ({
    ...rest,
    data: isNumberArray(data)
      ? data.filter((_, i) => i < rangeDomainPoints.length)
      : data.filter((d) => isInsideDomain(d.y, rangeDomain)).map((d) => ({ x: d.y, y: d.x })),
  }))
}

BarChart.defaultProps = {
  tooltip: { type: 'point' },
  stacked: false,
  colorScheme: 'default',
  showLegend: true,
  height: 500,
} as BarChartProps<any>
