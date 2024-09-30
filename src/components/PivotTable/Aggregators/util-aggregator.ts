import { Aggregator, AggregatorEnum, AggregatorLabels } from './model-aggregator'

export const getCountAndPercentageAggregator = (aggregatorLabels: AggregatorLabels) => {
  const countAggregator: Aggregator = {
    id: AggregatorEnum.COUNT,
    label: aggregatorLabels.count,
    value: undefined,
    keyDependent: false,
  }

  const percentageAggregator: Aggregator = {
    id: AggregatorEnum.PERCENTAGE,
    label: aggregatorLabels.percentage,
    value: (values: number[], total: number): number => (values.reduce((prev, curr) => prev + curr, 0) * 100) / total,
    keyDependent: false,
    chain: [countAggregator],
    suffix: '%',
  }

  return { countAggregator, percentageAggregator }
}

export const getAggregators = (aggregatorLabels: AggregatorLabels) => {
  const { countAggregator, percentageAggregator } = getCountAndPercentageAggregator(aggregatorLabels)

  return [
    countAggregator,
    percentageAggregator,
    {
      id: AggregatorEnum.AVERAGE,
      label: aggregatorLabels.average,
      value: (values: number[]): number => values.reduce((prev, curr) => prev + curr, 0) / values.length,
      keyDependent: true,
    },
    {
      id: AggregatorEnum.MAXIMUM,
      label: aggregatorLabels.maximum,
      value: (values: number[]): number => values.reduce((prev, curr) => (prev > curr ? prev : curr)),
      keyDependent: true,
    },
    {
      id: AggregatorEnum.MINIMUM,
      label: aggregatorLabels.minimum,
      value: (values: number[]): number => values.reduce((prev, curr) => (prev < curr ? prev : curr)),
      keyDependent: true,
    },
  ]
}

export const getKeyNotDependentAggregators = (AGGREGATORS: Aggregator[]) => {
  return AGGREGATORS.filter((agg) => !agg.keyDependent)
}
