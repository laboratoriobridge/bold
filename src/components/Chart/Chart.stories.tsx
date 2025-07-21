import { array, boolean, date, number, object, radios, text, select } from '@storybook/addon-knobs'
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
  OutliersType,
  DateRangeStep,
  DateRange,
  RangeArea,
} from './model'
import { PieChart } from './PieChart'

export default {
  title: 'Components/Chart',
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

const outliersOption: OutliersType[] = ['auto', 'expand-domain']

export const lineChart = () => {
  const title = text('Title', 'Chart Title', 'Description')
  const showTooltip = boolean('Show Tooltip', true, 'Description')
  const caption = text(
    'Caption',
    'Chart description. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    'Description'
  )
  const footer = text('Footer', 'Chart footer', 'Description')
  const showLegend = boolean('Show Legend', true, 'Description')
  const colorScheme = radios(
    'Color Scheme',
    { default: 'default', pink: 'pink', gray: 'gray', blue: 'blue', orange: 'orange' },
    'default',
    'Description'
  )
  const yAxisTitle = text('Y Axis Title', 'Y Axis', 'Axes')
  const xAxisTitle = text('X Axis Title', 'X Axis', 'Axes')
  const xAxisDomain = array(
    'X Axis Domain',
    ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
    ',',
    'Axes'
  )
  const series = object('Series', lineSeries, 'Data')
  const outliers = select('Outliers', outliersOption, 'auto', 'Description')

  return (
    <ChartContainer>
      <ChartHeader title={title} />
      <ChartBody height={500} caption={caption}>
        <Chart
          series={series}
          xAxis={{ title: xAxisTitle, domain: xAxisDomain }}
          yAxis={{ title: yAxisTitle, domain: { init: 3000, end: 10000, step: 5500 } }}
          tooltip={{ type: showTooltip ? 'point' : 'none' }}
          colorScheme={colorScheme}
          showLegend={showLegend}
          outliers={outliers}
        />
      </ChartBody>
      <ChartFooter>{footer}</ChartFooter>
    </ChartContainer>
  )
}

export const areaChart = () => {
  const title = text('Title', 'Chart Title', 'Description')
  const stacked = boolean('Stacked', false, 'Description')
  const yAxisTitle = text('Y Axis Title', 'Y Axis', 'Axes')
  const xAxisTitle = text('X Axis Title', 'X Axis', 'Axes')
  const xAxisDomain = array('X Axis Domain', ['Page A', 'Page B', 'Page C', 'Page D'], ',', 'Axes')
  const series = object('Series', lineSeries, 'Data')

  return (
    <ChartContainer>
      <ChartHeader title={title} />
      <ChartBody height={500}>
        <Chart
          type={SeriesType.Area}
          series={series}
          xAxis={{ title: xAxisTitle, domain: xAxisDomain }}
          yAxis={{ title: yAxisTitle, unit: 'cm' }}
          stacked={stacked}
        />
      </ChartBody>
    </ChartContainer>
  )
}

export const columnChart = () => {
  const title = text('Title', 'Chart Title', 'Description')
  const stacked = boolean('Stacked', false, 'Description')
  const yAxisTitle = text('Y Axis Title', 'Y Axis', 'Axes')
  const xAxisTitle = text('X Axis Title', 'X Axis', 'Axes')
  const xAxisDomain = array('X Axis Domain', ['Page A', 'Page B', 'Page C', 'Page D'], ',', 'Axes')
  const series = object('Series', lineSeries, 'Data')

  return (
    <ChartContainer>
      <ChartHeader title={title} />
      <ChartBody height={500}>
        <Chart
          type={SeriesType.Column}
          series={series}
          xAxis={{ title: xAxisTitle, domain: xAxisDomain }}
          yAxis={{ title: yAxisTitle, unit: 'cm' }}
          stacked={stacked}
        />
      </ChartBody>
    </ChartContainer>
  )
}

export const barChart = () => {
  const title = text('Title', 'Chart Title', 'Description')
  const stacked = boolean('Stacked', false, 'Description')
  const xAxisTitle = text('X Axis Title', 'X Axis', 'Axes')
  const yAxisTitle = text('Y Axis Title', 'Y Axis', 'Axes')
  const yAxisDomain = array('X Axis Domain', ['Page A', 'Page B', 'Page C', 'Page D'], ',', 'Axes')
  const series = object('Series', barSeries, 'Data')

  return (
    <ChartContainer>
      <ChartHeader title={title} />
      <ChartBody height={500}>
        <BarChart
          series={series}
          yAxis={{ title: yAxisTitle, domain: yAxisDomain }}
          xAxis={{ title: xAxisTitle, unit: 'cm' }}
          stacked={stacked}
        />
      </ChartBody>
    </ChartContainer>
  )
}

export const composedChart = () => {
  const title = text('Title', 'Chart Title', 'Description')
  const stacked = boolean('Stacked', false, 'Description')
  const yAxisTitle = text('Y Axis Title', 'Y Axis', 'Axes')
  const xAxisTitle = text('X Axis Title', 'X Axis', 'Axes')
  const xAxisDomain = array('X Axis Domain', ['Page A', 'Page B', 'Page C', 'Page D'], ',', 'Axes')
  const series = object('Series', composedSeries, 'Data')

  return (
    <ChartContainer>
      <ChartHeader title={title} />
      <ChartBody height={500}>
        <Chart
          series={series}
          xAxis={{ title: xAxisTitle, domain: xAxisDomain }}
          yAxis={{ title: yAxisTitle, unit: 'cm' }}
          stacked={stacked}
        />
      </ChartBody>
    </ChartContainer>
  )
}

export const pieChart = () => {
  const title = text('Title', 'Chart Title', 'Description')
  const caption = text(
    'Caption',
    'Chart description. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    'Description'
  )
  const data = object('Series', pieData, 'Data')

  return (
    <ChartContainer>
      <ChartHeader title={title} />
      <ChartBody height={500} caption={caption}>
        <PieChart height={500} width={800} data={data} />
      </ChartBody>
    </ChartContainer>
  )
}

export const referenceArea = () => {
  const title = text('Title', 'Chart Title', 'Description')
  const caption = text(
    'Caption',
    'Chart description. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    'Description'
  )
  const yAxisTitle = text('Y Axis Title', 'Y Axis', 'Axes')
  const xAxisTitle = text('X Axis Title', 'X Axis', 'Axes')

  const height = number('Height', 500)

  const series = object('Series', lineSeriesDP, 'Data')
  const reference = object('Reference', referenceAreas, 'Data')

  return (
    <ChartContainer>
      <ChartHeader title={title} />
      <ChartBody height={height} caption={caption}>
        <Chart
          series={series}
          referenceAreas={reference}
          xAxis={{ title: xAxisTitle, domain: { init: 0, end: 700, step: 100 } }}
          yAxis={{ title: yAxisTitle, domain: { init: 0, end: 10000, step: 1000 } }}
        />
      </ChartBody>
    </ChartContainer>
  )
}

export const boundedReferenceArea = () => {
  const title = text('Title', 'Chart Title', 'Description')
  const caption = text(
    'Caption',
    'Chart description. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.',
    'Description'
  )
  const yAxisTitle = text('Y Axis Title', 'Y Axis', 'Axes')
  const xAxisTitle = text('X Axis Title', 'X Axis', 'Axes')

  const height = number('Height', 500)

  const series = object('Series', [singleLineSeries], 'Data')
  const reference = object('Reference', boundedReferenceAreas, 'Data')

  return (
    <ChartContainer>
      <ChartHeader title={title} />
      <ChartBody height={height} caption={caption}>
        <Chart
          series={series}
          referenceAreas={reference}
          xAxis={{ title: xAxisTitle, domain: { init: 0, end: 700, step: 100 } }}
          yAxis={{ title: yAxisTitle, domain: { init: 0, end: 10000, step: 1000 } }}
        />
      </ChartBody>
    </ChartContainer>
  )
}

export const xDateTime = () => {
  const xAxisInit = date('Init Date', new Date(2020, 3), 'X Axis')
  const xAxisEnd = date('End Date', new Date(2020, 4), 'X Axis')

  const step = number('Step', 10, {}, 'X Axis')
  const stepType = radios('Step Type', { day: 'day', month: 'month', year: 'year' }, 'day', 'X Axis')

  const yAxisInit = number('Init', 0, {}, 'Y Axis')
  const yAxisEnd = number('End', 4000, {}, 'Y Axis')
  const yAxisStep = number('Step', 1000, {}, 'Y Axis')

  const series = object('Series', lineSeriesDate, 'Data')

  return (
    <ChartContainer>
      <ChartBody height={500}>
        <Chart
          height={500}
          width={500}
          series={series}
          xAxis={{
            title: 'Date',
            domain: {
              init: new Date(xAxisInit),
              end: new Date(xAxisEnd),
              step: { amount: step, unit: stepType },
            },
            tickRenderer: (props) => (
              <text dy={15} {...props}>
                {new Date(props.payload.value).toLocaleDateString()}
              </text>
            ),
          }}
          yAxis={{
            domain: {
              init: yAxisInit,
              end: yAxisEnd,
              step: yAxisStep,
            },
          }}
        />
      </ChartBody>
    </ChartContainer>
  )
}

export const rangeSelector = () => {
  const series = object('Series', lineSeriesDate, 'Data')

  const selectorLabel = text('Label', 'Range', 'Selector')
  const selectorRanges = object('Options', ranges, 'Selector')

  const StateKeeper = ({ children }) => {
    const [xRange, setXRange] = useState(selectorRanges['6 months'])

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
                label: selectorLabel,
                options: selectorRanges,
                defaultOption: '6 months',
              }}
              onRangeChange={setXRange}
            />
            <ChartBody height={500}>
              <Chart
                height={500}
                width={1000}
                series={series}
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

export const rangeArea = () => {
  const ranges = object(
    'Range Areas',
    [
      {
        name: 'Area 1 Area 1-2 Area 1-3 Area 1-4',
        init: 'Page A',
        end: 'Page C',
        mask: {
          show: true,
          fillOpacity: 0.6,
          showDots: false,
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
    'Areas'
  )
  const series = object('Series', lineSeries, 'Data')

  const outliers = select('Outliers', outliersOption, 'expand-domain', 'Description')

  return (
    <ChartContainer>
      <ChartHeader title='Chart Title' />
      <ChartBody height={500}>
        <Chart<string>
          type={SeriesType.Line}
          series={series}
          rangeAreas={ranges}
          xAxis={{ title: 'X Axis', domain: ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'] }}
          yAxis={{ title: 'Y Axis', domain: { init: 3000, end: 10000, step: 5500 }, unit: 'unit' }}
          outliers={outliers}
        />
      </ChartBody>
    </ChartContainer>
  )
}

export const customTooltip = () => {
  const tooltipType = radios('Tooltip Type', { point: 'point', line: 'line' }, 'line', 'Description')
  const yAxisTitle = text('Y Axis Title', 'Y Axis', 'Axes')
  const xAxisTitle = text('X Axis Title', 'X Axis', 'Axes')
  const xAxisDomain = array(
    'X Axis Domain',
    ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
    ',',
    'Axes'
  )
  const series = object('Series', lineSeries, 'Data')

  return (
    <ChartContainer>
      <ChartHeader title='Chart Title' />
      <ChartBody height={500}>
        <Chart
          type={SeriesType.Line}
          series={series}
          xAxis={{ title: xAxisTitle, domain: xAxisDomain }}
          yAxis={{ title: yAxisTitle, domain: { init: 3000, end: 10000, step: 5500 }, unit: 'unit' }}
          tooltip={{
            type: tooltipType,
            render: (dp) =>
              tooltipType === 'line'
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

export const customHeader = () => {
  const title = text('Title', 'Chart Title', 'Description')
  const yAxisTitle = text('Y Axis Title', 'Y Axis', 'Axes')
  const xAxisTitle = text('X Axis Title', 'X Axis', 'Axes')
  const xAxisDomain = array(
    'X Axis Domain',
    ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
    ',',
    'Axes'
  )
  const series = object('Series', lineSeries, 'Data')

  return (
    <ChartContainer>
      <h1 style={{ color: 'red', fontWeight: 'bold', padding: '1rem' }}>
        <input type='checkbox' />
        {title}
      </h1>
      <ChartBody height={500}>
        <Chart
          type={SeriesType.Line}
          series={series}
          xAxis={{ title: xAxisTitle, domain: xAxisDomain }}
          yAxis={{ title: yAxisTitle, domain: { init: 3000, end: 10000, step: 5500 }, unit: 'unit' }}
        />
      </ChartBody>
    </ChartContainer>
  )
}

export const customDot = () => {
  const dotShape = radios(
    'Dot Shape',
    {
      circle: 'circle',
      cross: 'cross',
      diamond: 'diamond',
      rectangle: 'rect',
      square: 'square',
      star: 'star',
      triangle: 'triangle',
    },
    'star',
    'Dot'
  )
  const yAxisTitle = text('Y Axis Title', 'Y Axis', 'Axes')
  const xAxisTitle = text('X Axis Title', 'X Axis', 'Axes')
  const xAxisDomain = array(
    'X Axis Domain',
    ['Page A', 'Page B', 'Page C', 'Page D', 'Page E', 'Page F', 'Page G'],
    ',',
    'Axes'
  )

  return (
    <ChartContainer>
      <ChartBody height={500}>
        <Chart
          series={[
            {
              name: 'uv',
              data: [4000, 3000, 2000, 2780, 1890, 2390, 3490, 40000],
              dot: dotShape,
            },
            {
              name: 'pv',
              data: [2400, 1398, 9800, 3908, 4800, 3800, 20300],
              dashed: true,
            },
          ]}
          xAxis={{ title: xAxisTitle, domain: xAxisDomain }}
          yAxis={{ title: yAxisTitle, domain: { init: 3000, end: 10000, step: 5500 } }}
        />
      </ChartBody>
    </ChartContainer>
  )
}
