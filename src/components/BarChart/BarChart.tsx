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

export interface BarChartProps {
  xAxis: Axis<string>
  yAxis: Axis<number>
  title?: string
}

export function BarChart(props: BarChartProps) {
  const { title, xAxis, yAxis } = props

  const total = yAxis.values.reduce((prev, current) => prev + current)

  const { classes } = useStyles(createStyles)

  if (xAxis.values.length !== yAxis.values.length) {
    throw Error('The x and y axis must have the same length')
  }

  return (
    <div className={classes.global}>
      <Heading
        level={1}
        style={css`
          margin: 2rem;
          text-transform: uppercase;
        `}
      >
        {title}
      </Heading>
      <div className={css(classes.chart, createChartStyle(yAxis.values.length))}>
        {xAxis.values.map((name, index) => (
          <>
            <div
              key={index}
              className={css(classes.bar, createBarStyle(100 - calculatePercentage(total, yAxis.values[index])))}
            >
              <div className={classes.percentage}>
                <Text fontSize={1}>{calculatePercentage(total, yAxis.values[index])}%</Text>
              </div>
            </div>
            <div key={name} className={classes.xValue}>
              <Text fontSize={1}>{name}</Text>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

const calculatePercentage = (total: number, value: number) => Math.floor((value / total) * 100)

const createBarStyle = (value: number): Interpolation => ({
  gridRow: `${value}/${101}`,
})

const createChartStyle = (numValues: number): Interpolation => ({
  gridTemplateColumns: `repeat(${numValues}, 1fr)`,
  gridTemplateRows: `repeat(100, 1fr)`,
})

export const createStyles = (theme: Theme) => ({
  global: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  } as CSSProperties,

  chart: {
    display: 'grid',
    height: '40vh',
    width: '40vw',
    gridColumnGap: '1rem',
  } as CSSProperties,

  bar: {
    borderRadius: '5px 5px 0 0',
    background: `${theme.pallete.primary.main}`,
    textAlign: 'center',
  } as CSSProperties,

  xValue: {
    textAlign: 'center',
    marginTop: '0.5rem',
    gridRowStart: -1,
    maxWidth: '1fr',
    wordWrap: 'normal',
    textTransform: 'uppercase',
  } as CSSProperties,

  percentage: {
    display: 'inline-block',
    left: '50%',
    padding: '0 0.4em',
    transform: 'translateY(-2rem)',
    fontWeight: 'bold',
  } as CSSProperties,
})
