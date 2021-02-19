import React from 'react'
import { VerticalBarChart } from './VerticalBarChart'

export default {
  title: 'Components/VerticalBarChart',
}

export const ParameterizedByTotal = () => (
  <VerticalBarChart
    title='Vertical parameterized by total'
    normalizedBy='total'
    yAxis={{ title: 'Eixo Y', values: [50, 20, 30] }}
    xAxis={{ title: 'Eixo X', values: ['A', 'B', 'C'] }}
  />
)

export const ParameterizedByMax = () => (
  <VerticalBarChart
    title='Vertical parameterized by max'
    normalizedBy='max'
    yAxis={{ title: 'Eixo Y', values: [50, 20, 30] }}
    xAxis={{ title: 'Eixo X', values: ['A', 'B', 'C'] }}
  />
)

export const BiggerThan100Max = () => (
  <VerticalBarChart
    title='BiggerThan100'
    normalizedBy='max'
    yAxis={{ title: 'Eixo Y', values: [1000, 500, 80] }}
    xAxis={{ title: 'Eixo X', values: ['A', 'B', 'C'] }}
  />
)

export const BiggerThan100Total = () => (
  <VerticalBarChart
    title='BiggerThan100'
    normalizedBy='total'
    yAxis={{ title: 'Eixo Y', values: [1000, 500, 80] }}
    xAxis={{ title: 'Eixo X', values: ['A', 'B', 'C'] }}
  />
)

export const MuchValuesMax = () => (
  <VerticalBarChart
    title='Much values'
    normalizedBy='max'
    yAxis={{ title: 'Eixo Y', values: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90] }}
    xAxis={{ title: 'Eixo X', values: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9', 'X10'] }}
  />
)

export const MuchValuesTotal = () => (
  <VerticalBarChart
    title='Much values'
    normalizedBy='total'
    yAxis={{ title: 'Eixo Y', values: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90] }}
    xAxis={{ title: 'Eixo X', values: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9', 'X10'] }}
  />
)

// export const LongNames = () => (
//   <VerticalBarChart
//     title='Long names'
//     yAxis={{ title: 'Eixo Y', values: [5, 10, 20] }}
//     xAxis={{ title: 'Eixo X', values: ['Maria Fernanda da Silva Santos Melo', 'Eduardo da Silva Santos', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'] }}
//   />
// )
