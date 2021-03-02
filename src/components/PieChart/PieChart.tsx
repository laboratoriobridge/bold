import { CSSProperties } from 'react'
import React from 'react'
import { css, Interpolation } from 'emotion'
import { Theme, useStyles } from '../..'
import { Heading } from '../Heading'

export interface PieValue {
  value: number
  name: string
  color: string
}

export interface PieChartProps {
  values: PieValue[]
  title?: string
}

const WIDTH = '30vw'
export function PieChart(props: PieChartProps) {
  const { values, title } = props

  const { classes } = useStyles(createStyles)

  const total = values.reduce((sum: number, { value }: { value: number }, index) => {
    return sum + value
  }, 0)

  return (
    <div>
      <Heading level={1}>{title}</Heading>
      <div className={css(classes.pie, createPieStyle(values, total))} />
    </div>
  )
}

const calculatePiePercentage = (value: number, total: number) => {
  console.log(`the value ${value} has the percentage: ${value / total} and occupied the pie : ${(value / total) * 360}`)
  return (value / total) * 360
}

const createPieStyle = (values: PieValue[], total: number): Interpolation => ({
  background: `conic-gradient(
            ${values.map(
              ({ value, color }, index, array) =>
                `${color}  
                ${index > 0 ? `${calculatePiePercentage(array[index - 1].value, total)}deg` : ''} 
                ${
                  index > 0
                    ? calculatePiePercentage(value, total) + calculatePiePercentage(array[index - 1].value, total)
                    : calculatePiePercentage(value, total)
                }deg `
            )}
        )`,
})

export const createStyles = (theme: Theme) => ({
  pie: {
    width: WIDTH,
    height: WIDTH,
    position: 'relative',
    borderRadius: '100%',
    overflow: 'hidden',
  } as CSSProperties,
})
