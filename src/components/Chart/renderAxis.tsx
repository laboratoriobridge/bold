import React from 'react'
import { Label, XAxis, XAxisProps, YAxis, YAxisProps } from 'recharts'

import { AxisDomain, AxisOptions, isValueRange, ReferenceAreaWithPercents } from './model'
import { ReferenceAreaTick } from './ReferenceAreaTick'
import { convertTickProps, defaultChartDateFormatter } from './util'
import { Tick } from './Tick'

export function renderAxis(
  axis: 'x' | 'y',
  options: AxisOptions,
  domain: AxisDomain,
  domainPoints: any[],
  hasOutliers: boolean,
  isBar?: boolean
) {
  const isAxisX = axis === 'x'

  if (isAxisX)
    return (
      <XAxis
        dataKey={isBar ? undefined : 'x'}
        axisLine={!isBar}
        tickLine={!isBar}
        {...getAxisProps(domain, domainPoints, options, isAxisX, hasOutliers)}
      >
        {options.title && (
          <Label
            position='bottom'
            value={options.title + (options?.unit ? ` (${options.unit})` : '')}
            dy={5}
            style={{ fontWeight: 'bold' }}
          />
        )}
      </XAxis>
    )
  else
    return (
      <YAxis
        dataKey={isBar ? 'x' : undefined}
        axisLine={isBar}
        tickLine={isBar}
        yAxisId='data'
        {...getAxisProps(domain, domainPoints, options, isAxisX, hasOutliers)}
      >
        {options?.title && (
          <Label
            value={options?.title + (options?.unit ? ` (${options.unit})` : '')}
            dy={-45}
            dx={8}
            position='insideTopLeft'
            style={{ fontWeight: 'bold' }}
          />
        )}
      </YAxis>
    )
}

export function renderReferenceAxis(axis: 'x' | 'y', referenceAreas: ReferenceAreaWithPercents<any>[]) {
  const refTicks = getRefTicks(referenceAreas)
  if (axis === 'y')
    return (
      <YAxis
        dataKey='y'
        yAxisId='refArea'
        domain={[0, 100]}
        orientation='right'
        unit='%'
        interval={0}
        axisLine={false}
        tickLine={false}
        ticks={Array.from(refTicks.keys())}
        tick={<ReferenceAreaTick refTicks={refTicks} />}
      />
    )
  else
    return (
      <XAxis
        dataKey='y'
        xAxisId='refArea'
        domain={[0, 100]}
        orientation='bottom'
        unit='%'
        interval={0}
        axisLine={false}
        tickLine={false}
        ticks={Array.from(refTicks.keys())}
        tick={<ReferenceAreaTick refTicks={refTicks} />}
      />
    )
}

function getAxisProps(
  axisDomain: AxisDomain,
  domainPoints: any[],
  axisOptions: AxisOptions,
  isAxisX: boolean,
  hasOutliers?: boolean
): XAxisProps & YAxisProps {
  const outliersIndex = hasOutliers ? domainPoints.length - 1 : -1
  if (!axisDomain || Array.isArray(axisDomain))
    return {
      type: Array.isArray(axisDomain) ? 'category' : 'number',
      ticks: domainPoints,
      allowDuplicatedCategory: false,
      interval: 0,
      tick: axisOptions.tickRenderer ?? true,
    }
  else if (isValueRange(axisDomain))
    return {
      type: 'number',
      domain: [axisDomain.init, axisDomain.end],
      ticks: domainPoints,
      interval: 0,
      tick: axisOptions.tickRenderer
        ? (props) =>
            axisOptions.tickRenderer(
              convertTickProps(props),
              axisDomain.end,
              isAxisX,
              hasOutliers && props.index === outliersIndex
            )
        : (props) => (
            <Tick
              {...props}
              isOutlierIndicator={hasOutliers && props.index === outliersIndex}
              domainMaxValue={axisDomain.end}
              isAxisX={isAxisX}
            />
          ),
    }
  else
    return {
      type: 'number',
      domain: [axisDomain.init.valueOf(), axisDomain.end.valueOf()],
      ticks: domainPoints,
      interval: 0,
      tickFormatter: (x) => (axisDomain.format ?? defaultChartDateFormatter)(new Date(x)),
      tick: axisOptions.tickRenderer
        ? (props) =>
            axisOptions.tickRenderer(
              convertTickProps(props),
              axisDomain.end,
              isAxisX,
              hasOutliers && props.index === outliersIndex
            )
        : (props) => (
            <Tick
              {...props}
              isOutlierIndicator={hasOutliers && props.index === outliersIndex}
              end={axisDomain.end}
              isAxisX={isAxisX}
            />
          ),
    }
}

function getRefTicks(referenceAreas: ReferenceAreaWithPercents<any>[]): Map<number, ReferenceAreaWithPercents<any>> {
  return referenceAreas?.reduce(
    (acc, ref) => {
      const lastPercent = ref.areaPercents.slice(-1)[0].percent
      acc.map.set(acc.acc + lastPercent, ref)
      acc.acc += lastPercent
      return acc
    },
    { acc: 0, map: new Map<number, ReferenceAreaWithPercents<any>>() }
  ).map
}
