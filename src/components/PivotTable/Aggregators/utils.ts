import { Aggregator, AggregatorEnum, AggregatorLabels } from './model'

export const getCountAggregator = (aggregatorLabels: AggregatorLabels): Aggregator => ({
  id: AggregatorEnum.COUNT,
  label: aggregatorLabels.count,
  value: undefined,
  keyDependent: false,
})

const getPercentageAggregator = (aggregatorLabels: AggregatorLabels): Aggregator => ({
  id: AggregatorEnum.PERCENTAGE,
  label: aggregatorLabels.percentage,
  value: (values: number[], total: number): number => (values.reduce((prev, curr) => prev + curr, 0) * 100) / total,
  keyDependent: false,
  chain: [getCountAggregator(aggregatorLabels)],
  suffix: '%',
})

const getAverageAggregator = (aggregatorLabels: AggregatorLabels): Aggregator => ({
  id: AggregatorEnum.AVERAGE,
  label: aggregatorLabels.average,
  value: (values: number[]): number => values.reduce((prev, curr) => prev + curr, 0) / values.length,
  keyDependent: true,
})

const getMaximumAggregator = (aggregatorLabels: AggregatorLabels): Aggregator => ({
  id: AggregatorEnum.MAXIMUM,
  label: aggregatorLabels.maximum,
  value: (values: number[]): number => values.reduce((prev, curr) => (prev > curr ? prev : curr)),
  keyDependent: true,
})

const getMinimumAggregator = (aggregatorLabels: AggregatorLabels): Aggregator => ({
  id: AggregatorEnum.MINIMUM,
  label: aggregatorLabels.minimum,
  value: (values: number[]): number => values.reduce((prev, curr) => (prev < curr ? prev : curr)),
  keyDependent: true,
})

export const getAggregators = (aggregatorLabels: AggregatorLabels) => {
  return [
    getCountAggregator(aggregatorLabels),
    getPercentageAggregator(aggregatorLabels),
    getAverageAggregator(aggregatorLabels),
    getMaximumAggregator(aggregatorLabels),
    getMinimumAggregator(aggregatorLabels),
  ]
}

export const getKeyNotDependentAggregators = (aggregators: Aggregator[]) => {
  return aggregators.filter((agg) => !agg.keyDependent)
}
