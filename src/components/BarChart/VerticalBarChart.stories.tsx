import React from 'react'
import { VerticalBarChart } from './VerticalBarChart'

export default {
  title: 'Components/VerticalBarChart',
}

const colors = [
  '#002451',
  '#003A79',
  '#0051A2',
  '#0069D0',
  '#007AF0',
  '#498FFF',
  '#84AAFF',
  '#C5D4FF',
  '#ECF0FF',
  '#FFFFFF',
]

export const NormalizedByTotalWithoutAnimation = () => (
  <VerticalBarChart
    title='Vertical parameterized by total without animation'
    normalizedBy='total'
    xAxis={{ values: [[50], [20], [30]], subCategories: [{ name: 't0', color: colors[3] }] }}
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
        { name: 'Manhã', color: colors[3] },
        { name: 'Noite', color: colors[5] },
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
        { name: 'Manhã', color: colors[3] },
        { name: 'Noite', color: colors[5] },
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
        { name: 't0', color: colors[3] },
        { name: 't1', color: colors[5] },
        { name: 't2', color: colors[7] },
      ],
    }}
    yAxis={{ values: ['A', 'B'] }}
  />
)

export const FourBarsWithScaleProblem = () => (
  <VerticalBarChart
    title='Vertical normalized by max with scale problem'
    normalizedBy='max'
    xAxis={{
      values: [
        [50, 20, 100, 1000],
        [20, 10, 20, 1],
      ],
      subCategories: [
        { name: 't0', color: colors[3] },
        { name: 't1', color: colors[5] },
        { name: 't2', color: colors[7] },
        { name: 't3', color: colors[2] },
      ],
    }}
    yAxis={{ values: ['A', 'B'] }}
  />
)

export const LongNames = () => (
  <VerticalBarChart
    title='lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    normalizedBy='max'
    xAxis={{
      values: [
        [50, 20, 100],
        [20, 10, 20],
      ],
      subCategories: [
        { name: 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA', color: colors[3] },
        { name: 'lorem ipsum lorem ipsum', color: colors[5] },
        { name: 'Turno da manhã Turno da manhã', color: colors[7] },
      ],
    }}
    yAxis={{ values: ['Maria Fernando de Mello da Silva Gonçalves', 'B'] }}
  />
)
