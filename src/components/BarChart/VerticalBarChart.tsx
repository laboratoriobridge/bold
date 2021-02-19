import { Global } from '@emotion/core'
import { css, Interpolation, keyframes } from 'emotion'
import React from 'react'
import { CSSProperties } from 'react'
import { Theme } from '../../styles'
import { useStyles } from '../../styles/hooks/useStyles'

export interface Axis<T> {
  title: string
  values: T[]
}

export type NormalizeOptions = 'max' | 'total'

export interface BarChartProps {
  normalizedBy: NormalizeOptions
  xAxis: Axis<string>
  yAxis: Axis<number>
  title?: string
}

const WIDTH: string = '80vw'
const HEIGHT: string = '50vh'

export function VerticalBarChart(props: BarChartProps) {
  const { title, xAxis, yAxis, normalizedBy } = props

  if (xAxis.values.length !== yAxis.values.length) {
    throw Error('The x and y axis must have the same length')
  }

  const { classes } = useStyles(createStyles)

  const referenceValue =
    normalizedBy === 'total'
      ? yAxis.values.reduce((prev, current) => prev + current)
      : Math.floor(Math.max(...yAxis.values) * 1.1)

  // console.log(`Ref Value: ${referenceValue}`)

  const numOfValues = xAxis.values.length

  return (
    <>
      <Global styles={classes.global} />
      <table className={classes.chart}>
        <caption className={classes.caption}>{title}</caption>
        <thead></thead>
        <tbody>
          {yAxis.values.map((value, index) => (
            <tr className={css(classes.tr, createTableRowStyle(numOfValues, index))} key={index}>
              <th scope='row'>{xAxis.values[index]}</th>
              <td
                className={css(
                  classes.td,
                  createVerticalBarStyle(calculatePercentage(referenceValue, value), index, numOfValues)
                )}
              >
                <p>{value}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

const calculatePercentage = (referenceValue: number, value: number) => Math.floor((value / referenceValue) * 100)

const createTableRowStyle = (numOfValues: number, index: number): Interpolation => {
  const widthUnit = Math.floor(100 / numOfValues)
  return {
    width: `${widthUnit}%`,
    left: `calc(calc(${WIDTH} / ${numOfValues}) * ${index})`,
  }
}

const createVerticalBarStyle = (value: number, index: number, numOfValues: number): Interpolation => {
  return {
    height: `${value}%`,
    animation: `${growing(value)} 2s`,
  }
}

const growing = (value: number) => keyframes`
  from { height: 0% }
  to { height: ${value}% }
`

export const createStyles = (theme: Theme) => ({
  global: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  } as CSSProperties,

  chart: {
    display: 'block',
    position: 'relative',
    width: WIDTH,
    height: HEIGHT,
    margin: '1rem 0 0',
    padding: 0,
    backgroundColor: theme.pallete.surface.background,

    'tr, th, td': {
      position: 'absolute',
      bottom: 0,
      zIndex: 2,
    },

    'thead tr': {
      left: '100%',
      top: '50%',
      bottom: 'auto',
      margin: '-2.5rem 0 0 5rem',
    },

    'thead th': {
      width: '1vw',
      height: 'auto',
      padding: '0.5rem 1rem',
    },

    'tbody tr': {
      height: '100%',
      paddingTop: '1rem',
    },

    'tbody th': {
      fontWeight: 'normal',
      left: '50%',
      transform: 'translate(-50%, 120%)',
      wordBreak: 'break-word',
      maxWidth: '50%',
      maxHeight: '2.25rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',

      ':hover': {
        overflow: 'visible',
      },
    },
  } as CSSProperties,

  caption: {
    width: WIDTH,
    captionSide: 'top',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    letterSpacing: '0.1rem',
    position: 'relative',
    top: '-1.5rem',
    zIndex: 10,
  } as CSSProperties,

  tr: {
    position: 'absolute',
    bottom: 0,
    zIndex: 2,
    padding: 0,
  } as CSSProperties,

  td: {
    width: '50%',
    borderRadius: '5px 5px 0 0',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: theme.pallete.primary.main,

    p: {
      margin: '0.5rem 0 0 ',
      padding: 0,
      position: 'relative',
      top: '-2rem',
      textAlign: 'center',
    },
  } as CSSProperties,
})
