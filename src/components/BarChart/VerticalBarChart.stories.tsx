import React from 'react'
import { VerticalBarChart } from './VerticalBarChart'

export default {
  title: 'Components/VerticalBarChart',
}

export const NormalizedByTotal = () => (
  <VerticalBarChart
    title='Vertical parameterized by total'
    normalizedBy='total'
    xAxis={{ values: [[50], [20], [30]], subCategories: [{ name: 't0', color: '#0069D0' }] }}
    yAxis={{ values: ['A', 'B', 'C'] }}
    notAnimate
  />
)

export const ProfissionaisPorTurnoMaximo = () => (
  <VerticalBarChart
    title='Atendimento por turno normalizado pelo valor máximo'
    normalizedBy='max'
    xAxis={{
      values: [
        [50, 20],
        [20, 10],
        [30, 100],
      ],
      subCategories: [
        { name: 'Manhã', color: '#0069D0' },
        { name: 'Noite', color: '#84AAFF' },
      ],
    }}
    yAxis={{ values: ['Eduardo', 'Marcos', 'Cleiton'] }}
  />
)

export const ProfissionaisPorTurnoTotal = () => (
  <VerticalBarChart
    title='Atendimento por turno normalizado pelo valor total'
    normalizedBy='total'
    xAxis={{
      values: [
        [50, 20],
        [20, 10],
        [30, 100],
      ],
      subCategories: [
        { name: 'Manhã', color: '#0069D0' },
        { name: 'Noite', color: '#84AAFF' },
      ],
    }}
    yAxis={{ values: ['Eduardo', 'Marcos', 'Cleiton'] }}
  />
)

export const MultipleBars = () => (
  <VerticalBarChart
    title='Vertical normalized by max'
    normalizedBy='max'
    xAxis={{
      values: [
        [50, 20, 100],
        [20, 10, 20],
      ],
      subCategories: [
        { name: 't0', color: '#0069D0' },
        { name: 't1', color: '#84AAFF' },
        { name: 't2', color: '#C5D4FF' },
      ],
    }}
    yAxis={{ values: ['A', 'B'] }}
  />
)

// export const BiggerThan100Max = () => (
//   <VerticalBarChart
//     title='BiggerThan100'
//     normalizedBy='max'
//     yAxis={{ title: 'Eixo Y', values: [1000, 500, 80] }}
//     xAxis={{ title: 'Eixo X', values: ['A', 'B', 'C'] }}
//   />
// )

// export const BiggerThan100Total = () => (
//   <VerticalBarChart
//     title='BiggerThan100'
//     normalizedBy='total'
//     yAxis={{ title: 'Eixo Y', values: [1000, 500, 80] }}
//     xAxis={{ title: 'Eixo X', values: ['A', 'B', 'C'] }}
//   />
// )

// export const MuchValuesMax = () => (
//   <VerticalBarChart
//     title='Much values'
//     normalizedBy='max'
//     yAxis={{ title: 'Eixo Y', values: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90] }}
//     xAxis={{ title: 'Eixo X', values: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9', 'X10'] }}
//   />
// )

// export const MuchValuesTotal = () => (
//   <VerticalBarChart
//     title='Much values'
//     normalizedBy='total'
//     yAxis={{ title: 'Eixo Y', values: [5, 10, 20, 30, 40, 50, 60, 70, 80, 90] }}
//     xAxis={{ title: 'Eixo X', values: ['X1', 'X2', 'X3', 'X4', 'X5', 'X6', 'X7', 'X8', 'X9', 'X10'] }}
//   />
// )

// export const LongNames = () => (
//   <VerticalBarChart
//     title='Long names'
//     normalizedBy='max'
//     yAxis={{ title: 'Eixo Y', values: [5, 10, 20] }}
//     xAxis={{ title: 'Eixo X', values: ['Maria Fernanda da Silva Santos Melo', 'Eduardo da Silva Santos', 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'] }}
//   />
// )
