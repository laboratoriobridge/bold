import React from 'react'
import { CartesianGrid, ComposedChart, Legend, ReferenceArea as RechartsReferenceArea, ReferenceLine } from 'recharts'

import { useTheme } from '../../styles'
import { blue } from '../../styles/colors'
import { adaptDomainToSeriesRange } from './adaptDomainToData'
import { convertReferenceRangesToPercents } from './convertReferenceRangesToPercents'
import { convertSeries } from './convertSeries'
import { getDomainPoints } from './getDomainPoints'
import {
  AxisDomain,
  AxisOptions,
  ChartColorScheme,
  ChartSeries,
  RangeArea,
  ReferenceArea,
  SeriesType,
  TooltipOptions,
  ValueRange,
} from './model'
import { RangeAreaTick } from './RangeAreaTick'
import { renderAxis, renderReferenceAxis } from './renderAxis'
import { renderReferenceAreas, renderSeries } from './renderSeries'
import { renderTooltip } from './renderTooltip'
import { getAxisDomainEnd, getAxisDomainInit, isInsideDomain } from './util'

export interface ChartProps<XDomain> {
  type?: SeriesType
  series: ChartSeries<XDomain>[]
  xAxis: AxisOptions
  yAxis?: Partial<AxisOptions>
  referenceAreas?: ReferenceArea<XDomain>[]
  rangeAreas?: RangeArea<XDomain>[]
  stacked?: boolean
  colorScheme?: ChartColorScheme
  showLegend?: boolean
  tooltip: TooltipOptions<XDomain>
  width?: number
  height: number
}

export function Chart<XDomain>(props: ChartProps<XDomain>) {
  const {
    type,
    series,
    xAxis,
    yAxis,
    referenceAreas,
    stacked,
    colorScheme,
    showLegend,
    tooltip,
    rangeAreas,
    width,
    height,
  } = props

  const theme = useTheme()
  const domainPoints = getDomainPoints(xAxis.domain)
  const rangedSeries = adaptSeriesDataToRange(series, xAxis.domain, domainPoints)
  const adaptedYDomain = adaptDomainToSeriesRange(yAxis?.domain, rangedSeries)
  const referenceAreasWithPercents = convertReferenceRangesToPercents(referenceAreas, adaptedYDomain as ValueRange)
  const data = convertSeries(rangedSeries, domainPoints, referenceAreasWithPercents)

  return (
    <ComposedChart
      data={data}
      width={width}
      height={height}
      margin={{ top: 50, bottom: 0, left: 0, right: 30 }}
      layout='horizontal'
      style={{
        fontFamily: theme.typography.fontFamily,
        fontSize: '0.8rem',
        color: theme.pallete.gray.c20,
      }}
    >
      <CartesianGrid vertical={false} horizontal={true} />
      <Legend
        wrapperStyle={{ padding: showLegend ? '2rem 2rem 1.5rem 3.5rem' : '1rem', fontSize: '0.8rem' }}
        content={showLegend ? undefined : () => false}
        align='left'
        iconSize={11}
      />
      {/*Legend must be present for the X axis title to be shown*/}

      {renderAxis('x', xAxis, xAxis.domain, domainPoints, false)}
      {renderAxis('y', yAxis, adaptedYDomain, getDomainPoints(adaptedYDomain), false)}
      {referenceAreas && renderReferenceAxis('y', referenceAreasWithPercents)}

      {referenceAreas?.map((ra, i) => renderReferenceAreas(ra, i, colorScheme ?? 'default'))}
      {rangeAreas?.map((ra) => [
        <RechartsReferenceArea
          yAxisId='data'
          x1={getRangeAreaInit(ra, xAxis.domain)}
          x2={getRangeAreaEnd(ra, xAxis.domain)}
          y1={getAxisDomainInit(adaptedYDomain)}
          y2={getAxisDomainEnd(adaptedYDomain)}
          stroke='none'
          fill={(ra.fillColor ?? blue.c60) || 'none'}
          fillOpacity={ra.fillOpacity ?? 0.2}
          label={<RangeAreaTick<XDomain> referenceArea={ra} />}
        />,
        ...(ra.strokeColor
          ? [
              <ReferenceLine
                yAxisId='data'
                stroke={ra.strokeColor}
                x={typeof ra.init === 'string' ? ra.init : +ra.init}
                position='start'
              />,
              <ReferenceLine
                yAxisId='data'
                stroke={ra.strokeColor}
                x={typeof ra.end === 'string' ? ra.end : +ra.end}
                position='start'
              />,
            ]
          : []),
      ])}
      {series.map((s, i) =>
        renderSeries(type, s, i, xAxis, stacked, colorScheme ?? 'default', tooltip?.type === 'point', tooltip?.render)
      )}

      {tooltip?.type === 'line' && renderTooltip(xAxis, yAxis, tooltip?.render)}
    </ComposedChart>
  )
}

function adaptSeriesDataToRange<XDomain>(
  series: ChartSeries<XDomain>[],
  rangeDomain: AxisDomain,
  rangeDomainPoints: XDomain[]
): ChartSeries<XDomain>[] {
  return series.map((s) => ({
    ...s,
    data: (s.data as any[]).filter((d, i) => (d.x ? isInsideDomain(d.x, rangeDomain) : i < rangeDomainPoints.length)),
  }))
}

Chart.defaultProps = {
  type: SeriesType.Line,
  tooltip: { type: 'point' },
  stacked: false,
  colorScheme: 'default',
  showLegend: true,
  height: 500,
} as ChartProps<any>

function getRangeAreaInit<XDomain>(ra: RangeArea<XDomain>, domain: AxisDomain): string | number {
  if (Array.isArray(domain)) return domain.includes(ra.init as any) ? (ra.init as any) : domain[0]
  return Math.max(+ra.init, +domain.init)
}

function getRangeAreaEnd<XDomain>(ra: RangeArea<XDomain>, domain: AxisDomain): string | number {
  if (Array.isArray(domain)) return domain.includes(ra.end as any) ? (ra.end as any) : domain[domain.length - 1]
  return Math.min(+ra.end, +domain.end)
}
