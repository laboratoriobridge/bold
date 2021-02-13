import { css, Interpolation } from 'emotion'
import React from 'react'
import { CSSProperties } from 'react'
import { Theme } from '../../styles'
import { useStyles } from '../../styles/hooks/useStyles'
import { Heading } from '../Heading'
import { Text } from '../Text'

export interface Axis<T> {
  title: string
  values: T[]
}

export interface BarCharProps {
  xAxis: Axis<string>
  yAxis: Axis<number>
  title?: string
}

export function BarChart(props: BarCharProps) {
  const { title, xAxis, yAxis } = props

  const numValues = yAxis.values.length

  const total = yAxis.values.reduce((prev, current) => prev + current)

  const { classes, theme } = useStyles(createStyles)

  return (
    <>
      <Heading level={1} style={css`text-align: center, margin: 2rem`}>
        {title}
      </Heading>
      <div className={css(classes.chart, createChartStyle(numValues))}>
        {xAxis.values.map((name, index) => (
          <>
            <div className={css(classes.bar, createBarStyle(total, yAxis.values[index], theme))}>
              <div className={css(classes.percentage, createPercentageStyle(total, yAxis.values[index], index))}>
                <Text fontSize={1}>{calculatePercentage(total, yAxis.values[index])}%</Text>
              </div>
            </div>
            <div className={classes.xValue}>
              <Text fontSize={1}>{name}</Text>
            </div>
          </>
        ))}
      </div>
    </>
  )
}

const calculatePercentage = (total: number, value: number) => Math.floor((value / total) * 100)

const createBarStyle = (total: number, value: number, theme: Theme): Interpolation => {
  return {
    gridRowStart: 100 - calculatePercentage(total, value),
  }
}

const createChartStyle = (numValues: number): Interpolation => ({
  gridTemplateColumns: `repeat(${numValues}, 1fr)`,
  gridTemplateRows: `repeat(100, 1fr)`,
})

const createPercentageStyle = (total: number, value: number, index: number) => {
  return {
    display: 'inline-block',
    left: '50%',
    padding: '0 0.4em',
    transform: 'translateY(-2rem)',
  }
}

export const createStyles = (theme: Theme, numValues: number) => ({
  chart: {
    height: '40vh',
    width: '40vw',
    display: 'grid',
    gridColumnGap: '5px',
  } as CSSProperties,

  bar: {
    gridRowEnd: 101,
    fontWeight: 'bold',
    borderRadius: '5px 5px 0 0',
    textAlign: 'center',
    background: `${theme.pallete.primary.main}`,
  } as CSSProperties,

  xValue: {
    gridRowStart: -1,
    textAlign: 'center',
  } as CSSProperties,

  percentage: {
    textAlign: 'center',
  } as CSSProperties,
})
