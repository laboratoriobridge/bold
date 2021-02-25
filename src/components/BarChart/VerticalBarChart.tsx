import { Global } from '@emotion/core'
import { css, Interpolation, keyframes } from 'emotion'
import React from 'react'
import { CSSProperties } from 'react'
import { Theme } from '../../styles'
import { useStyles } from '../../styles/hooks/useStyles'
import { Tooltip } from '../Tooltip'
import { calculatePercentage, generateYAxisLines } from './util'

export interface YAxis {
  values: string[]
}

export interface SubCategories {
  name: string
  color: string
}

export interface XAxis {
  values: Array<Array<number>>
  subCategories: SubCategories[]
}

export type NormalizeOptions = 'max' | 'total'

export interface BarChartProps {
  normalizedBy: NormalizeOptions
  xAxis: XAxis
  yAxis: YAxis
  title?: string
  notAnimate?: boolean
}

const WIDTH_BAR_UNIT = '125px'
const HEIGHT_UNIT = '10vh'
const WIDTH_UNIT = '10vw'
const NUMBER_OF_LINES = 5

export function VerticalBarChart(props: BarChartProps) {
  const { title, xAxis, yAxis, normalizedBy, notAnimate } = props

  if (xAxis.values.length !== yAxis.values.length) {
    throw Error('The x and y axis must have the same length')
  }

  if (xAxis.subCategories.length !== xAxis.values[0].length) {
    throw Error('The sub categories and the number of bars for each x axis value must have the same length')
  }

  const { classes } = useStyles(createStyles)

  const numOfValues = xAxis.values.length

  const numOfBars = xAxis.values[0].length

  const WIDTH = `calc(calc(${numOfValues} * ${WIDTH_UNIT}) * ${numOfBars})`

  const BAR_UNIT = `calc(calc(100% / ${numOfBars}) - 1rem)`

  const HEIGHT = `calc(${HEIGHT_UNIT} * ${NUMBER_OF_LINES})`

  const referenceValue =
    normalizedBy === 'total'
      ? xAxis.values.flat().reduce((prev, curr) => prev + curr)
      : Math.floor(Math.max(...xAxis.values.flat()) * 1.1)

  const linesValues = generateYAxisLines(referenceValue, NUMBER_OF_LINES)

  return (
    <>
      <Global styles={classes.global} />
      <table className={css(classes.chart, createChartStyle(WIDTH, HEIGHT))}>
        <caption className={css(classes.caption, createCaptionStyle(WIDTH))}>{title}</caption>
        <thead>
          <tr>
            {xAxis.subCategories.map(({ name, color }, index, array) => (
              <th key={index} className={css(createSubCategorieStyle(color, index, array.length))}>
                <Tooltip text={name} placement='right'>
                  <p className={classes.labelName}>{name}</p>
                </Tooltip>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {xAxis.values.map((arr, index) => (
            <tr className={css(createTableRowStyle(numOfValues, index, WIDTH))} key={index}>
              <th scope='row'>{yAxis.values[index]}</th>
              {arr.map((value, idx) => (
                <td
                  className={css(
                    classes.bar,
                    createVerticalBarStyle(
                      calculatePercentage(referenceValue, value),
                      idx,
                      arr.length,
                      BAR_UNIT,
                      xAxis.subCategories[idx % xAxis.subCategories.length].color,
                      notAnimate
                    )
                  )}
                >
                  <p>{value}</p>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <div className={css(classes.lines, createLinesStyle(WIDTH, HEIGHT))}>
        {linesValues.map((value, index) => (
          <div className={classes.line} key={index}>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </>
  )
}
const createLinesStyle = (width: string, height: string): Interpolation => ({
  width: width,
  top: `calc(${height} * -1)`,
})

const createChartStyle = (width: string, height: string): Interpolation => ({
  width: width,
  height: height,
})

const createCaptionStyle = (width: string): Interpolation => ({
  width: width,
})

const createSubCategorieStyle = (color: string, index: number, numOfSubCategories: number): Interpolation => {
  const top = (100 / numOfSubCategories) * index
  return {
    backgroundColor: color,
    transform: `translateY(${top}px)`,
  }
}

const createTableRowStyle = (numOfValues: number, index: number, width: string): Interpolation => {
  const widthUnit = 100 / numOfValues
  return {
    width: `${widthUnit}%`,
    left: `calc(calc(${width} / ${numOfValues}) * ${index})`,
  }
}

const createVerticalBarStyle = (
  value: number,
  index: number,
  numOfValues: number,
  widthBarUnit: string,
  color: string,
  notAnimate: boolean
): Interpolation => {
  const left = (100 / numOfValues) * index
  if (notAnimate) {
    return {
      height: `${value}%`,
      left: `calc(${left}% + 0.5rem)`,
      width: `${widthBarUnit}`,
      backgroundColor: color,
    }
  }
  return {
    height: `${value}%`,
    left: `calc(${left}% + 0.5rem)`,
    animation: `${growing(value)} 2s`,
    width: `${widthBarUnit}`,
    backgroundColor: color,
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
    padding: 0,
    marginTop: '2rem',
    backgroundColor: theme.pallete.surface.main,

    'tr, th, td': {
      position: 'absolute',
      bottom: 0,
      zIndex: 2,
      margin: 0,
      padding: 0,
      textAlign: 'center',
    },

    'thead tr': {
      left: '100%',
      top: '50%',
      bottom: 'auto',
      margin: '-2.5rem 0 0 5rem',
    },

    'thead th': {
      height: 'auto',
      width: WIDTH_BAR_UNIT,
    },

    tbody: {
      'tr:last-child': {
        borderRight: 'none',
      },
    },

    'tbody tr': {
      height: '100%',
      paddingTop: '1rem',
      borderRight: `1px dotted ${theme.pallete.gray.c80}`,
      position: 'absolute',
    },

    'tbody th': {
      fontWeight: 'normal',
      left: '50%',
      transform: 'translate(-50%, 120%)',

      // Row overflow:
      wordBreak: 'break-word',
      maxWidth: '100%',
      maxHeight: '2.25rem',
      overflow: 'hidden',
      textOverflow: 'ellipsis',

      ':hover': {
        overflow: 'visible',
      },
    },
  } as CSSProperties,

  caption: {
    captionSide: 'top',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    position: 'relative',
    top: '-3.5rem',
    zIndex: 10,

    // Caption overflow:
    wordBreak: 'break-word',
    maxWidth: '100%',
    maxHeight: '2rem',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  } as CSSProperties,

  bar: {
    borderRadius: '5px 5px 0 0',
    paddingRight: '2rem',

    p: {
      margin: '0.5rem 0 0 ',
      padding: 0,
      position: 'relative',
      top: '-2rem',
    },
  } as CSSProperties,

  labelName: {
    textTransform: 'uppercase',

    // Label name overflow:
    wordBreak: 'break-word',
    maxWidth: '100%',
    maxHeight: '20px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  } as CSSProperties,

  lines: {
    position: 'relative',
    zIndex: 1,
  } as CSSProperties,

  line: {
    position: 'relative',
    borderBottom: `1px dotted ${theme.pallete.gray.c80}`,
    height: HEIGHT_UNIT,

    p: {
      position: 'absolute',
      left: '-3rem',
      top: '-0.65rem',
      margin: '0 0 0 0.5rem',
    },
  } as CSSProperties,
})
