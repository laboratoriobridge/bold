import { render } from '@testing-library/react'
import React from 'react'
import { KeyMap } from '../model/model-keyMap'
import { Aggregators } from './Aggregators'
import { Aggregator, AggregatorEnum } from './model'
import { getKeyNotDependentAggregators } from './utils'

describe('PivotTable - Aggregators', () => {
  type Test = {
    name: string
  }

  const handleAggregatorChange = (aggregator: Aggregator) => null

  const handleAggregatorKeyChange = (key: keyof Test) => null

  const keyMapping: KeyMap<Test> = new Map([['name', { keyName: 'Name' }]])

  const testAggregator: Aggregator = {
    id: AggregatorEnum.COUNT,
    label: 'Test',
    value: undefined,
    keyDependent: false,
  }

  it('should render correctly', () => {
    const { container } = render(
      <Aggregators<Test>
        numberKeys={[]}
        keyMapping={keyMapping}
        handleAggregatorChange={handleAggregatorChange}
        handleAggregatorKeyChange={handleAggregatorKeyChange}
        aggregator={testAggregator}
        aggregatorKey='name'
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with numberKeys', () => {
    const { container } = render(
      <Aggregators<Test>
        numberKeys={['name']}
        keyMapping={keyMapping}
        handleAggregatorChange={handleAggregatorChange}
        handleAggregatorKeyChange={handleAggregatorKeyChange}
        aggregator={testAggregator}
        aggregatorKey='name'
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('getKeyNotDependentAggregators - should return only Count and Percentage Aggregators', () => {
    const countAggregator = {
      id: AggregatorEnum.COUNT,
      label: 'Count',
      value: undefined,
      keyDependent: false,
    }

    const percentageAggregator = {
      id: AggregatorEnum.PERCENTAGE,
      label: 'Percentage',
      value: (values: number[], total: number | undefined): number =>
        total ? (values.reduce((prev, curr) => prev + curr, 0) * 100) / total : 0,
      keyDependent: false,
      chain: [countAggregator],
      suffix: '%',
    }

    const averageAggregator = {
      id: AggregatorEnum.AVERAGE,
      label: 'Average',
      value: (values: number[]): number => values.reduce((prev, curr) => prev + curr, 0) / values.length,
      keyDependent: true,
    }

    const maximumAggregator = {
      id: AggregatorEnum.MAXIMUM,
      label: 'Maximum',
      value: (values: number[]): number => values.reduce((prev, curr) => (prev > curr ? prev : curr)),
      keyDependent: true,
    }

    const minimumAggregator = {
      id: AggregatorEnum.MINIMUM,
      label: 'Minimum',
      value: (values: number[]): number => values.reduce((prev, curr) => (prev < curr ? prev : curr)),
      keyDependent: true,
    }

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
})
