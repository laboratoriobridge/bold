import { partition } from 'lodash'

import { Aggregator, AggregatorEnum } from './model-aggregator'

export const COUNT_AGGREGATOR: Aggregator = {
  id: AggregatorEnum.COUNT,
  label: 'Count',
  value: undefined,
  keyDependent: false,
}

export const PERCENTAGE_AGGREGATOR: Aggregator = {
  id: AggregatorEnum.PERCENTAGE,
  label: 'Percentage',
  value: (values: number[], total: number): number => (values.reduce((prev, curr) => prev + curr, 0) * 100) / total,
  keyDependent: false,
  chain: [COUNT_AGGREGATOR],
  suffix: '%',
}

export const AGGREGATORS: Aggregator[] = [
  COUNT_AGGREGATOR,
  PERCENTAGE_AGGREGATOR,
  {
    id: AggregatorEnum.AVERAGE,
    label: 'Average',
    value: (values: number[]): number => values.reduce((prev, curr) => prev + curr, 0) / values.length,
    keyDependent: true,
  },
  {
    id: AggregatorEnum.MAXIMUM,
    label: 'Maximum',
    value: (values: number[]): number => values.reduce((prev, curr) => (prev > curr ? prev : curr)),
    keyDependent: true,
  },
  {
    id: AggregatorEnum.MINIMUM,
    label: 'Minimum',
    value: (values: number[]): number => values.reduce((prev, curr) => (prev < curr ? prev : curr)),
    keyDependent: true,
  },
]

export const [KEY_DEPENDENT_AGGREGATORS, KEY_NOT_DEPENDENT_AGGREGATORS] = partition(
  AGGREGATORS,
  (agg) => agg.keyDependent
)

export const aggregatorByIdOrDefault = (id?: AggregatorEnum): Aggregator =>
  AGGREGATORS.find((agg) => id && agg.id === id) ?? COUNT_AGGREGATOR
