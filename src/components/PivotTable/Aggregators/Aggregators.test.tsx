import { render } from '@testing-library/react'
import React from 'react'
import { KeyMap } from '../model/model-keyMap'
import { Aggregators } from './Aggregators'
import { Aggregator, AggregatorEnum } from './model-aggregator'

describe('PivotTable - Aggregators', () => {
  type Test = {
    name: string
  }

  const handleAggregator = (aggregator: Aggregator) => null

  const handleAggregatorKey = (key: keyof Test) => null

  const keyMap: KeyMap<Test> = new Map([['name', { keyName: 'Name' }]])

  const TEST_AGGREGATOR: Aggregator = {
    id: AggregatorEnum.COUNT,
    label: 'Test',
    value: undefined,
    keyDependent: false,
  }

  it('should render correctly', () => {
    const { container } = render(
      <Aggregators<Test>
        numberKeys={[]}
        keyMap={keyMap}
        handleAggregatorChange={handleAggregator}
        handleAggregatorKeyChange={handleAggregatorKey}
        aggregator={TEST_AGGREGATOR}
        aggregatorKey={'name'}
      />
    )
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with numberKeys', () => {
    const { container } = render(
      <Aggregators<Test>
        numberKeys={['name']}
        keyMap={keyMap}
        handleAggregatorChange={handleAggregator}
        handleAggregatorKeyChange={handleAggregatorKey}
        aggregator={TEST_AGGREGATOR}
        aggregatorKey={'name'}
      />
    )
    expect(container).toMatchSnapshot()
  })
})
