import React from 'react'
import { BarChart } from './BarChart'

export default {
  title: 'Components/BarChart',
}

export const Default = () => (
  <BarChart
    title='Default'
    yAxis={{ title: 'Eixo Y', values: [50, 20, 30] }}
    xAxis={{ title: 'Eixo X', values: ['A', 'B', 'C'] }}
  />
)

export const BiggerThan100 = () => (
  <BarChart
    title='Bigger than 100'
    yAxis={{ title: 'Eixo Y', values: [1000, 500, 80] }}
    xAxis={{ title: 'Eixo X', values: ['A', 'B', 'C'] }}
  />
)

export const MuchValues = () => (
  <BarChart
    title='Much values'
    yAxis={{ title: 'Eixo Y', values: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90] }}
    xAxis={{ title: 'Eixo X', values: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9', 'X10'] }}
  />
)

export const LongNames = () => (
  <BarChart
    title='Much values'
    yAxis={{ title: 'Eixo Y', values: [5, 10] }}
    xAxis={{ title: 'Eixo X', values: ['Maria Eduarda de Melo Hang', 'Eduardo da Silva Santos'] }}
  />
)
