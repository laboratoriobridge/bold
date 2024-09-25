import { render } from '@testing-library/react'
import React from 'react'
import { Aggregators } from './Aggregators'
import { Aggregator } from './model-aggregator'
import { COUNT_AGGREGATOR } from './util-aggregator'

describe('PivotTable - Aggregators', () => {
  type Test = {
    name: string
  }

  type KeyMapping = {
    keyName: string
  }

  const handleAggregator = (aggregator: Aggregator) => null

  const handleAggregatorKey = (key: keyof Test) => null

  const keyMapping: Map<keyof Test, KeyMapping> = new Map([['name', { keyName: 'Name' }]])

  it('should render correctly', () => {
    const { container } = render(
      <Aggregators
        numberKeys={[]}
        keyMapping={keyMapping}
        handleAggregatorChange={handleAggregator}
        handleAggregatorKeyChange={handleAggregatorKey}
        aggregator={COUNT_AGGREGATOR}
        aggregatorKey={'name'}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with numberKeys', () => {
    const { container } = render(
      <Aggregators
        numberKeys={['name']}
        keyMapping={keyMapping}
        handleAggregatorChange={handleAggregator}
        handleAggregatorKeyChange={handleAggregatorKey}
        aggregator={COUNT_AGGREGATOR}
        aggregatorKey={'name'}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
