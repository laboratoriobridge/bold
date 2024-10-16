import { AggregatorEnum } from './model'
import { getAggregators, getCountAggregator, getKeyNotDependentAggregators } from './utils'

describe('PivotTable - utils', () => {
  const aggregatorLabels = {
    count: 'Count',
    percentage: 'Percentage',
    average: 'Average',
    maximum: 'Maximum',
    minimum: 'Minimum',
  }

  const countAggregator = {
    id: AggregatorEnum.COUNT,
    label: aggregatorLabels.count,
    value: undefined,
    keyDependent: false,
  }

  const percentageAggregator = {
    id: AggregatorEnum.PERCENTAGE,
    label: aggregatorLabels.percentage,
    value: expect.any(Function),
    keyDependent: false,
    chain: [countAggregator],
    suffix: '%',
  }

  const averageAggregator = {
    id: AggregatorEnum.AVERAGE,
    label: aggregatorLabels.average,
    value: expect.any(Function),
    keyDependent: true,
  }

  const maximumAggregator = {
    id: AggregatorEnum.MAXIMUM,
    label: aggregatorLabels.maximum,
    value: expect.any(Function),
    keyDependent: true,
  }

  const minimumAggregator = {
    id: AggregatorEnum.MINIMUM,
    label: aggregatorLabels.minimum,
    value: expect.any(Function),
    keyDependent: true,
  }

  it('getKeyNotDependentAggregators - should return only Count and Percentage Aggregators', () => {
    const expected = [countAggregator, percentageAggregator]

    const result = getKeyNotDependentAggregators([
      countAggregator,
      percentageAggregator,
      averageAggregator,
      maximumAggregator,
      minimumAggregator,
    ])

    expect(result).toEqual(expected)
  })

  it('getAggregators - should return count, percentage, average, maximum and minimum aggregators', () => {
    const result = getAggregators(aggregatorLabels)

    const expected = [countAggregator, percentageAggregator, averageAggregator, maximumAggregator, minimumAggregator]

    expect(result).toEqual(expected)
  })

  it('getCountAggregator - should return count aggregator', () => {
    const expected = countAggregator

    const result = getCountAggregator(aggregatorLabels)

    expect(result).toEqual(expected)
  })
})
