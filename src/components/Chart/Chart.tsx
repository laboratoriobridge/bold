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
  OutliersType,
} from './model'
import { RangeAreaTick } from './RangeAreaTick'
import { renderAxis, renderReferenceAxis } from './renderAxis'
import { renderReferenceAreas, renderSeries } from './renderSeries'
import { renderTooltip } from './renderTooltip'
import { getAxisDomainEnd, getAxisDomainInit } from './util'
import { splitOutlierSeries } from './getOutlierSeries'

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
  outliers?: OutliersType
  tooltip: TooltipOptions<XDomain>
  width?: number
  height: number
}

const RANGE_AREA_MASK_ID = 'mask-range-area'

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
    outliers = 'expand-domain',
  } = props

  const theme = useTheme()
  const domainPoints = getDomainPoints(xAxis.domain)
  const { rangedSeries, outlierSeries, hasOutliers } = splitOutlierSeries(
    series,
    xAxis.domain,
    domainPoints,
    yAxis?.domain,
    outliers
  )
  const adaptedYDomain = adaptDomainToSeriesRange(yAxis?.domain, rangedSeries, hasOutliers)
  const yDomainPoints = getDomainPoints(adaptedYDomain, hasOutliers)

  const referenceAreasWithPercents = convertReferenceRangesToPercents(referenceAreas, adaptedYDomain as ValueRange)

  const data = convertSeries(
    rangedSeries,
    domainPoints,
    adaptedYDomain,
    referenceAreasWithPercents,
    outlierSeries,
    rangeAreas
  )

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
      <CartesianGrid vertical={false} horizontal />
      <Legend
        wrapperStyle={{ padding: showLegend ? '2rem 2rem 1.5rem 3.5rem' : '1rem', fontSize: '0.8rem' }}
        content={showLegend ? undefined : () => false}
        align='left'
        iconSize={11}
      />
      {/*Legend must be present for the X axis title to be shown*/}

      {renderAxis('x', xAxis, xAxis.domain, domainPoints, false)}
      {renderAxis('y', yAxis, adaptedYDomain, yDomainPoints, hasOutliers)}
      {referenceAreas && renderReferenceAxis('y', referenceAreasWithPercents)}

      {referenceAreas?.map((ra, i) => renderReferenceAreas(ra, i, colorScheme ?? 'default'))}

      {rangeAreas?.map((ra) => [
        defMaskPattern(),
        <RechartsReferenceArea
          yAxisId='data'
          x1={getRangeAreaInit(ra, xAxis.domain)}
          x2={getRangeAreaEnd(ra, xAxis.domain)}
          y1={getAxisDomainInit(adaptedYDomain)}
          y2={getAxisDomainEnd(adaptedYDomain, hasOutliers)}
          stroke='none'
          fill={(ra.fillColor ?? blue.c60) || 'none'}
          fillOpacity={ra.fillOpacity ?? 0.2}
          label={<RangeAreaTick<XDomain> referenceArea={ra} />}
        />,
        ...renderRangeAreaStroke(ra),
      ])}

      {rangeAreas?.map((ra) => [
        ...(ra.mask?.show && !ra.mask?.overDots
          ? [
              <RechartsReferenceArea
                yAxisId='data'
                x1={getRangeAreaInit(ra, xAxis.domain)}
                x2={getRangeAreaEnd(ra, xAxis.domain)}
                y1={getAxisDomainInit(adaptedYDomain)}
                y2={getAxisDomainEnd(adaptedYDomain, hasOutliers)}
                fillOpacity={ra.mask?.fillOpacity ?? 1}
                fill={`url(#${RANGE_AREA_MASK_ID})`}
              />,
              ...renderRangeAreaStroke(ra),
            ]
          : []),
      ])}

      {series.map((s, i) =>
        renderSeries(
          type,
          s,
          i,
          xAxis,
          stacked,
          colorScheme ?? 'default',
          tooltip?.type === 'point',
          s.name,
          tooltip?.render,
          data
        )
      )}

      {rangeAreas?.map((ra) => [
        ...(ra.mask?.show && ra.mask?.overDots
          ? [
              <RechartsReferenceArea
                yAxisId='data'
                x1={getRangeAreaInit(ra, xAxis.domain)}
                x2={getRangeAreaEnd(ra, xAxis.domain)}
                y1={getAxisDomainInit(adaptedYDomain)}
                y2={getAxisDomainEnd(adaptedYDomain, hasOutliers)}
                fillOpacity={ra.mask?.fillOpacity ?? 1}
                fill={`url(#${RANGE_AREA_MASK_ID})`}
              />,
              ...renderRangeAreaStroke(ra),
            ]
          : []),
      ])}

      {tooltip?.type === 'line' && renderTooltip(xAxis, yAxis, tooltip?.render)}
    </ComposedChart>
  )
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

function renderRangeAreaStroke<XDomain>(rangeAreas: RangeArea<XDomain>) {
  return rangeAreas.strokeColor
    ? [
        <ReferenceLine
          yAxisId='data'
          stroke={rangeAreas.strokeColor}
          x={typeof rangeAreas.init === 'string' ? rangeAreas.init : +rangeAreas.init}
          position='start'
        />,
        <ReferenceLine
          yAxisId='data'
          stroke={rangeAreas.strokeColor}
          x={typeof rangeAreas.end === 'string' ? rangeAreas.end : +rangeAreas.end}
          position='start'
        />,
      ]
    : []
}

function defMaskPattern() {
  return (
    <defs>
      <pattern id={RANGE_AREA_MASK_ID} patternUnits='userSpaceOnUse' width='21' height='60' viewBox='0 0 21 60'>
        <rect width='21' height='60' fill='white' fillOpacity='1' />
        <path
          d='M 0 60 L 21 0 M -21 60 L 0 0 M 21 60 L 42 0 M 42 60 L 63 0 M 63 60 L 84 0'
          stroke='#D3D4DD'
          strokeWidth='1.6'
        />
      </pattern>
    </defs>
  )
}
