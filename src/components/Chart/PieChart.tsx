import React from 'react'
import { Cell, Pie, PieChart as RechartsPieChart, PieLabelRenderProps } from 'recharts'

import { Theme, useTheme } from '../../styles'
import { ChartColorScheme, getChartColorScheme, PieChartDataPoint } from './model'

export interface PieChartProps {
  data: PieChartDataPoint[]
  width?: number
  height?: number
  colorScheme?: ChartColorScheme
}

export function PieChart(props: PieChartProps) {
  const { data, width, height, colorScheme } = props
  const theme = useTheme()

  const cs = getChartColorScheme(colorScheme ?? 'default')
  return (
    <RechartsPieChart
      width={width}
      height={height}
      style={{
        fontFamily: theme.typography.fontFamily,
        fontSize: '0.8rem',
        color: theme.pallete.gray.c20,
      }}
    >
      <Pie
        nameKey='name'
        dataKey='value'
        paddingAngle={0}
        startAngle={90}
        endAngle={450}
        data={data}
        label={(props) => renderCustomizedLabel(props, theme)}
        legendType='circle'
        isAnimationActive={false}
      >
        {data.map((entry, index) => (
          <Cell
            key={`cell-${index}`}
            stroke={entry.color ?? cs[index % cs.length]}
            fill={entry.color ?? cs[index % cs.length]}
          />
        ))}
      </Pie>
    </RechartsPieChart>
  )
}

function renderCustomizedLabel(props: PieLabelRenderProps, theme: Theme) {
  const { x, y, textAnchor, name, value } = props
  const dx = textAnchor === 'start' ? 10 : -10
  return (
    <text x={x} y={y} dx={dx} textAnchor={textAnchor} alignmentBaseline='middle' fill={theme.pallete.gray.c20}>
      <tspan style={{ fontWeight: 'bold' }}>{value}</tspan>
      <tspan x={x} dx={dx} dy={18}>
        {name}
      </tspan>
    </text>
  )
}
