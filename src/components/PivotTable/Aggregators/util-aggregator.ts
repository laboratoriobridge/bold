import { partition } from 'lodash'

import { Aggregator, AggregatorEnum } from './model-aggregator'

export const getCountAndPercentageAggregator = (countLabel, percentageLabel) => {
  const COUNT_AGGREGATOR: Aggregator = {
    id: AggregatorEnum.COUNT,
    label: countLabel,
    value: undefined,
    keyDependent: false,
  }

  const PERCENTAGE_AGGREGATOR: Aggregator = {
    id: AggregatorEnum.PERCENTAGE,
    label: percentageLabel,
    value: (values: number[], total: number): number => (values.reduce((prev, curr) => prev + curr, 0) * 100) / total,
    keyDependent: false,
    chain: [COUNT_AGGREGATOR],
    suffix: '%',
  }

  return { COUNT_AGGREGATOR, PERCENTAGE_AGGREGATOR }
}

export const getAggregators = (countLabel, percentageLabel, averageLabel, maximumLabel, minimumLabel) => {
  const { COUNT_AGGREGATOR, PERCENTAGE_AGGREGATOR } = getCountAndPercentageAggregator(countLabel, percentageLabel)

  return [
    COUNT_AGGREGATOR,
    PERCENTAGE_AGGREGATOR,
    {
      id: AggregatorEnum.AVERAGE,
      label: averageLabel,
      value: (values: number[]): number => values.reduce((prev, curr) => prev + curr, 0) / values.length,
      keyDependent: true,
    },
    {
      id: AggregatorEnum.MAXIMUM,
      label: maximumLabel,
      value: (values: number[]): number => values.reduce((prev, curr) => (prev > curr ? prev : curr)),
      keyDependent: true,
    },
    {
      id: AggregatorEnum.MINIMUM,
      label: minimumLabel,
      value: (values: number[]): number => values.reduce((prev, curr) => (prev < curr ? prev : curr)),
      keyDependent: true,
    },
  ]
}

export const getKeyDependentAndNotDependentAggregators = (AGGREGATORS: Aggregator[]) => {
  return partition(AGGREGATORS, (agg) => agg.keyDependent)
}
