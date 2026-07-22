import React, { useState } from 'react'
import { Text } from '../Text'

import { gray, green, purple } from '../../styles/colors'
import { BarChart } from './BarChart'
import { Chart } from './Chart'
import { ChartBody } from './ChartBody'
import { ChartContainer } from './ChartContainer'
import { ChartFooter } from './ChartFooter'
import { ChartHeader } from './ChartHeader'
import {
  AxisDomain,
  BarChartSeries,
  ChartSeries,
  PieChartDataPoint,
  ReferenceArea,
  ReferenceAreaRange,
  SeriesType,
  RangeArea,
  CHART_COLOR_SCHEMES,
} from './model'
import { PieChart } from './PieChart'

export default {
  title: 'Components/Chart',
  component: Chart,
  args: {
    title: 'Chart Title',
    xAxisTitle: 'X Axis',
    yAxisTitle: 'Y Axis',
    xAxisDomain: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
    caption:
      'Chart description. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
  },
  argTypes: {
    xAxis: { control: false },
    yAxis: { control: false },
    referenceAreas: { control: false },
    tooltip: { control: false },
    width: { control: false },
    height: { control: false },
    rangeAreas: { control: false },
    type: { control: false },
    colorScheme: {
      control: 'radio',
      options: Object.keys(CHART_COLOR_SCHEMES),
    },
  },
}

const lineSeries: ChartSeries<string>[] = [
  {
    name: 'uv',
    data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 40000],
  },
  {
    name: 'pv',
    data: [2400, 1398, 9800, 3908, 4800, 3800, 20300],
    dashed: true,
  },
]

const barSeries: BarChartSeries<string>[] = [
  {
    name: 'uv',
    data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 40000],
  },
  {
    name: 'pv',
    data: [2400, 1398, 9800, 3908, 4800, 3800, 20300],
  },
  {
    name: 'pt',
    data: [{ y: 'Page B', x: 2400 }],
  },
]

const composedSeries: ChartSeries<number>[] = [
  {
    name: 'uv',
    data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
    type: SeriesType.Column,
  },
  {
    name: 'pv',
    data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
    dashed: true,
    type: SeriesType.Area,
  },
  {
    name: 'av',
    data: [2000, 5000, 2000, 9780, 2890, 2890, 3400],
    type: SeriesType.Line,
  },
]

const ranges = {
  '2 months': { init: new Date(2020, 9) },
  '6 months': { init: new Date(2020, 5) },
  '1 Year': { init: new Date(2020, 0) },
}

const singleLineSeries: ChartSeries<number> = {
  name: 'uv',
  data: [
    { x: 20, y: 3000 },
    { x: 100, y: 2800 },
    { x: 200, y: 4300 },
    { x: 300, y: 5550 },
    { x: 500, y: 4000 },
    { x: 650, y: 6400 },
  ],
  color: gray.c20,
}

const lineSeriesDP: ChartSeries<number>[] = [
  singleLineSeries,
  {
    name: 'pv',
    data: [2400, 1398, 9800, 3908, 1800, 2800],
    dashed: true,
  },
]

const pieData: PieChartDataPoint[] = [
  { name: 'Ind 1', value: 4000 },
  { name: 'Ind 2', value: 3000 },
  { name: 'Ind 3', value: 2000, color: 'red' },
]

const referenceAreas: ReferenceArea<number>[] = [
  {
    label: { name: 'Area 1', description: 'Area 1 desc' },
    area: [
      { x: 0, upperLimit: 2000 },
      { x: 20, upperLimit: 2000 },
      { x: 100, upperLimit: 2000 },
      { x: 120, upperLimit: 2000 },
      { x: 200, upperLimit: 3000 },
      { x: 300, upperLimit: 3000 },
      { x: 400, upperLimit: 3000 },
      { x: 500, upperLimit: 3000 },
      { x: 550, upperLimit: 2000 },
      { x: 700, upperLimit: 2000 },
    ],
    color: '#feeced',
    tick: { color: '#f75b60' },
    stroke: { kind: 'dashed' },
  },
  {
    label: { name: 'Area 2', description: 'Area 2 desc' },

    area: [
      { x: 0, upperLimit: 5000 },
      { x: 20, upperLimit: 5000 },
      { x: 100, upperLimit: 5000 },
      { x: 120, upperLimit: 5000 },
      { x: 200, upperLimit: 5000 },
      { x: 400, upperLimit: 5000 },
      { x: 500, upperLimit: 5000 },
      { x: 550, upperLimit: 5000 },
      { x: 700, upperLimit: 5000 },
    ],
    color: '#ffeed6',
    tick: { color: '#b58b00' },
    stroke: { kind: 'line' },
  },
  {
    label: { name: 'Area 3' },
    area: [
      { x: 0, upperLimit: 10000 },
      { x: 20, upperLimit: 10000 },
      { x: 100, upperLimit: 10000 },
      { x: 120, upperLimit: 10000 },
      { x: 200, upperLimit: 10000 },
      { x: 300, upperLimit: 10000 },
      { x: 400, upperLimit: 10000 },
      { x: 500, upperLimit: 10000 },
      { x: 550, upperLimit: 10000 },
      { x: 700, upperLimit: 10000 },
    ],
    color: '#e1f6df',
    tick: { color: '#40a42b' },
    stroke: { show: false },
  },
]

const generateArea = ({
  length,
  start,
  step,
}: {
  length: number
  start: number
  step: number
}): ReferenceAreaRange<number>[] =>
  Array.from({ length }, (_, index) => ({ x: index * 100, upperLimit: index * step + start }))

const boundedReferenceAreas: ReferenceArea<number>[] = [
  {
    label: { name: 'Empty' },
    area: generateArea({ length: 8, start: 2000, step: 350 }),
    color: 'none',
  },
  {
    label: { name: 'Lower', alignment: 'central' },
    area: generateArea({ length: 8, start: 2000, step: 350 }),
    color: purple.c90,
    stroke: { color: purple.c30, kind: 'dashed' },
    tick: { color: purple.c30, kind: 'horizontal' },
  },
  {
    label: { name: 'Lower ref', alignment: 'central', color: purple.c30 },
    area: generateArea({ length: 8, start: 2500, step: 450 }),
    color: purple.c90,
    stroke: { color: purple.c30, kind: 'line' },
    tick: { color: purple.c30, kind: 'horizontal' },
  },
  {
    label: { name: 'Upper ref', alignment: 'central' },
    area: generateArea({ length: 8, start: 3000, step: 650 }),
    color: purple.c70,
    stroke: { color: purple.c30, kind: 'line' },
    tick: { color: purple.c30, kind: 'horizontal' },
  },
  {
    label: { name: 'Upper', alignment: 'central' },
    area: generateArea({ length: 8, start: 3500, step: 750 }),
    color: purple.c90,
    stroke: { color: purple.c30, kind: 'dashed' },
    tick: { color: purple.c30, kind: 'horizontal' },
  },
]

const lineSeriesDate: ChartSeries<Date>[] = [
  {
    name: 'Series 1',
    data: [
      { x: new Date(2020, 1, 1), y: 4000 },
      { x: new Date(2020, 2, 10), y: 3000 },
      { x: new Date(2020, 3, 15), y: 2000 },
      { x: new Date(2020, 3, 20), y: 2780 },
      { x: new Date(2020, 7, 22), y: 1890 },
      { x: new Date(2020, 10, 30), y: 2390 },
    ],
  },
]

export const LineChart = (args) => {
  return (
    <ChartContainer>
      <ChartHeader title={args.title} />
      <ChartBody height={500} caption={args.caption}>
        <Chart
          series={args.series}
          xAxis={{ title: args.xAxisTitle, domain: args.xAxisDomain }}
          yAxis={{ title: args.yAxisTitle, domain: { init: 3000, end: 10000, step: 5500 } }}
          tooltip={{ type: args.showTooltip ? 'point' : 'none' }}
          colorScheme={args.colorScheme}
          showLegend={args.showLegend}
          outliers={args.outliers}
        />
      </ChartBody>
      <ChartFooter>{args.footer}</ChartFooter>
    </ChartContainer>
  )
}

LineChart.args = {
  showTooltip: true,
  footer: 'Chart footer',
  showLegend: true,
  colorScheme: 'default',
  series: lineSeries,
  outliers: 'auto',
}

export const AreaChart = (args) => {
  return (
    <ChartContainer>
      <ChartHeader title={args.title} />
      <ChartBody height={500}>
        <Chart
          type={SeriesType.Area}
          series={args.series}
          xAxis={{ title: args.xAxisTitle, domain: args.xAxisDomain }}
          yAxis={{ title: args.yAxisTitle, unit: 'cm' }}
          stacked={args.stacked}
        />
      </ChartBody>
    </ChartContainer>
  )
}

AreaChart.args = {
  stacked: false,
  series: lineSeries,
  xAxisDomain: ['Page A', 'Page B', 'Page C', 'Page D'],
}

export const columnChart = (args) => {
  return (
    <ChartContainer>
      <ChartHeader title={args.title} />
      <ChartBody height={500}>
        <Chart
          type={SeriesType.Column}
          {...args}
          xAxis={{ title: args.xAxisTitle, domain: args.xAxisDomain }}
          yAxis={{ title: args.yAxisTitle, unit: 'cm' }}
        />
      </ChartBody>
    </ChartContainer>
  )
}

columnChart.args = {
  stacked: false,
  xAxisDomain: ['Page A', 'Page B', 'Page C', 'Page D'],
  series: lineSeries,
  colorScheme: 'default',
}

export const barChart = (args) => {
  return (
    <ChartContainer>
      <ChartHeader title={args.title} />
      <ChartBody height={500}>
        <BarChart
          yAxis={{ title: args.yAxisTitle, domain: args.yAxisDomain }}
          xAxis={{ title: args.xAxisTitle, unit: 'cm' }}
          {...args}
        />
      </ChartBody>
    </ChartContainer>
  )
}

barChart.args = {
  stacked: false,
  yAxisDomain: ['Page A', 'Page B', 'Page C', 'Page D'],
  series: barSeries,
  colorScheme: 'default',
}

barChart.argTypes = {
  outliers: { table: { disable: true } },
}

export const composedChart = (args) => {
  return (
    <ChartContainer>
      <ChartHeader title={args.title} />
      <ChartBody height={500}>
        <Chart
          xAxis={{ title: args.xAxisTitle, domain: args.xAxisDomain }}
          yAxis={{ title: args.yAxisTitle, unit: 'cm' }}
          {...args}
        />
      </ChartBody>
    </ChartContainer>
  )
}

composedChart.args = {
  stacked: false,
  xAxisDomain: ['Page A', 'Page B', 'Page C', 'Page D'],
  series: composedSeries,
}

export const pieChart = (args) => {
  return (
    <ChartContainer>
      <ChartHeader title={args.title} />
      <ChartBody height={500} caption={args.caption}>
        <PieChart height={500} width={800} {...args} />
      </ChartBody>
    </ChartContainer>
  )
}

pieChart.args = {
  data: pieData,
}

pieChart.argTypes = {
  type: { table: { disable: true } },
  series: { table: { disable: true } },
  xAxis: { table: { disable: true } },
  yAxis: { table: { disable: true } },
  referenceAreas: { table: { disable: true } },
  rangeAreas: { table: { disable: true } },
  tooltip: { table: { disable: true } },
  outliers: { table: { disable: true } },
  showLegend: { table: { disable: true } },
  stacked: { table: { disable: true } },
}

export const referenceArea = (args) => {
  return (
    <ChartContainer>
      <ChartHeader title={args.title} />
      <ChartBody height={args.height} caption={args.caption}>
        <Chart
          {...args}
          xAxis={{ title: args.xAxisTitle, domain: { init: 0, end: 700, step: 100 } }}
          yAxis={{ title: args.yAxisTitle, domain: { init: 0, end: 10000, step: 1000 } }}
        />
      </ChartBody>
    </ChartContainer>
  )
}

referenceArea.args = {
  height: 500,
  series: lineSeriesDP,
  referenceAreas: referenceAreas,
}

export const boundedReferenceArea = (args) => {
  return (
    <ChartContainer>
      <ChartHeader title={args.title} />
      <ChartBody height={args.height} caption={args.caption}>
        <Chart
          {...args}
          xAxis={{ title: args.xAxisTitle, domain: { init: 0, end: 700, step: 100 } }}
          yAxis={{ title: args.yAxisTitle, domain: { init: 0, end: 10000, step: 1000 } }}
        />
      </ChartBody>
    </ChartContainer>
  )
}

boundedReferenceArea.args = {
  height: 500,
  series: [singleLineSeries],
  referenceAreas: boundedReferenceAreas,
}

export const xDateTime = (args) => {
  return (
    <ChartContainer>
      <ChartBody height={500}>
        <Chart
          height={500}
          width={500}
          {...args}
          xAxis={{
            title: 'Date',
            domain: {
              init: new Date(args.xAxisInit),
              end: new Date(args.xAxisEnd),
              step: { amount: args.step, unit: args.stepType },
            },
            tickRenderer: (props) => (
              <text dy={15} {...props}>
                {new Date(props.payload.value).toLocaleDateString()}
              </text>
            ),
          }}
          yAxis={{
            domain: {
              init: args.yAxisInit,
              end: args.yAxisEnd,
              step: args.yAxisStep,
            },
          }}
        />
      </ChartBody>
    </ChartContainer>
  )
}

xDateTime.args = {
  xAxisInit: new Date(2020, 3),
  xAxisEnd: new Date(2020, 4),
  step: 10,
  stepType: 'day',
  yAxisInit: 0,
  yAxisEnd: 4000,
  yAxisStep: 1000,
  series: lineSeriesDate,
}

export const rangeSelector = (args) => {
  const StateKeeper = ({ children }) => {
    const [xRange, setXRange] = useState(args.selectorRanges['6 months'])

    const xDomain = {
      init: new Date(2020, 0),
      end: new Date(2020, 11),
      format: Intl.DateTimeFormat('pt-BR', { month: '2-digit', year: '2-digit' }).format,
      step: { amount: 1, unit: 'month' },
    } as AxisDomain
    const xAxis = {
      title: 'Date',
      domain: xDomain,
    }

    xAxis.domain = (Array.isArray(xDomain) ? xRange || xDomain : { ...xDomain, ...xRange }) as AxisDomain

    return <div>{children(xAxis, setXRange)}</div>
  }

  return (
    <ChartContainer>
      <StateKeeper>
        {(rangedXDomain, setXRange) => (
          <>
            <ChartHeader
              title='Date Chart'
              rangeSelector={{
                label: args.selectorLabel,
                options: args.selectorRanges,
                defaultOption: '6 months',
              }}
              onRangeChange={setXRange}
            />
            <ChartBody height={500}>
              <Chart
                height={500}
                width={1000}
                {...args}
                xAxis={rangedXDomain}
                yAxis={{
                  domain: { init: 0, end: 4000, step: 1000 },
                }}
              />
            </ChartBody>
          </>
        )}
      </StateKeeper>
    </ChartContainer>
  )
}

rangeSelector.args = {
  series: lineSeriesDate,
  selectorLabel: 'Range',
  selectorRanges: ranges,
}

export const rangeArea = (args) => {
  return (
    <ChartContainer>
      <ChartHeader title='Chart Title' />
      <ChartBody height={500}>
        <Chart<string>
          type={SeriesType.Line}
          {...args}
          xAxis={{ title: args.xAxisTitle, domain: args.xAxisDomain }}
          yAxis={{ title: args.yAxisTitle, domain: { init: 3000, end: 10000, step: 5500 }, unit: 'unit' }}
        />
      </ChartBody>
    </ChartContainer>
  )
}

rangeArea.args = {
  rangeAreas: [
    {
      name: 'Area 1 Area 1-2 Area 1-3 Area 1-4',
      init: 'Page A',
      end: 'Page C',
      mask: {
        show: true,
        fillOpacity: 0.6,
        hideDots: true,
      },
    },
    {
      name: 'Area 2 Stroke 2',
      init: 'Page E',
      end: 'Page F',
      tickColor: green.c60,
      fillColor: 'none',
      strokeColor: green.c60,
    },
  ] as RangeArea<string>[],
  series: lineSeries,
  outliers: 'expand-domain',
}

export const customTooltip = (args) => {
  return (
    <ChartContainer>
      <ChartHeader title='Chart Title' />
      <ChartBody height={500}>
        <Chart
          type={SeriesType.Line}
          {...args}
          xAxis={{ title: args.xAxisTitle, domain: args.xAxisDomain }}
          yAxis={{ title: args.yAxisTitle, domain: { init: 3000, end: 10000, step: 5500 }, unit: 'unit' }}
          tooltip={{
            type: args.tooltipType,
            render: (dp) =>
              args.tooltipType === 'line'
                ? dp?.map((p) => (
                    <Text component='p' style={{ color: gray.c100 }} key={p.y}>{`${p.seriesName}: ${p.y} unit`}</Text>
                  ))
                : `${dp[0].y} - ${dp[0].x}`,
          }}
        />
      </ChartBody>
    </ChartContainer>
  )
}

customTooltip.args = {
  tooltipType: 'line',
  series: lineSeries,
}

customTooltip.argTypes = {
  tooltipType: {
    control: 'radio',
    options: ['line', 'point'],
  },
}

export const customHeader = (args) => {
  return (
    <ChartContainer>
      <h1 style={{ color: 'red', fontWeight: 'bold', padding: '1rem' }}>
        <input type='checkbox' />
        {args.title}
      </h1>
      <ChartBody height={500}>
        <Chart
          type={SeriesType.Line}
          {...args}
          xAxis={{ title: args.xAxisTitle, domain: args.xAxisDomain }}
          yAxis={{ title: args.yAxisTitle, domain: { init: 3000, end: 10000, step: 5500 }, unit: 'unit' }}
        />
      </ChartBody>
    </ChartContainer>
  )
}

customHeader.args = {
  series: lineSeries,
}

export const customDot = (args) => {
  return (
    <ChartContainer>
      <ChartBody height={500}>
        <Chart
          series={[
            {
              name: 'uv',
              data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 40000],
              dot: args.dotShape,
            },
            {
              name: 'pv',
              data: [2400, 1398, 9800, 3908, 4800, 3800, 20300],
              dashed: true,
            },
          ]}
          xAxis={{ title: args.xAxisTitle, domain: args.xAxisDomain }}
          yAxis={{ title: args.yAxisTitle, domain: { init: 3000, end: 10000, step: 5500 } }}
        />
      </ChartBody>
    </ChartContainer>
  )
}

customDot.args = {
  dotShape: 'star',
}

customDot.argTypes = {
  dotShape: {
    control: 'radio',
    options: ['circle', 'cross', 'diamond', 'rect', 'square', 'star', 'triangle'],
  },
}
