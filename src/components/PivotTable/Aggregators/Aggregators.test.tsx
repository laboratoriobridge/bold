import { render } from '@testing-library/react'
import React from 'react'
import { KeyMap } from '../model'
import { Aggregators } from './Aggregators'
import { Aggregator, AggregatorEnum } from './model'

describe('PivotTable - Aggregators', () => {
  type Test = {
    name: string
  }

  const handleAggregatorChange = (aggregator: Aggregator) => null

  const handleAggregatorKeyChange = (key: keyof Test) => null

  const keyMapping: KeyMap<Test> = new Map([['name', { keyName: 'Name' }]])

  const countAggregator = {
    id: AggregatorEnum.COUNT,
    label: 'Count',
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
        aggregator={countAggregator}
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
        aggregator={countAggregator}
        aggregatorKey='name'
      />
    )
    expect(container).toMatchSnapshot()
  })
})
