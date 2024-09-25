import React, { useState } from 'react'

import { boolean } from '@storybook/addon-knobs'
import { Aggregators } from './Aggregators'
import { Aggregator } from './model-aggregator'
import { COUNT_AGGREGATOR } from './util-aggregator'

export default {
  title: 'Components/PivotTable/Aggregators',
}

type Fruit = {
  name: string
  size?: string
}

type KeyMapping = {
  keyName: string
}

const keyMapping: Map<keyof Fruit, KeyMapping> = new Map([
  ['name', { keyName: 'Name' }],
  ['size', { keyName: 'Size' }],
])

const numberKeys = ['name', 'size']

export const Default = () => {
  const [aggregator, setAggregator] = useState<Aggregator>(COUNT_AGGREGATOR)

  const [aggregatorKey, setAggregatorKey] = useState<keyof Fruit>()

  const handleAggregator = (aggregator: Aggregator) => {
    setAggregator(() => aggregator)
  }

  const handleAggregatorKey = (key: keyof Fruit) => setAggregatorKey(key)

  const isNumberKeys = boolean('numberKeys', false)

  return (
    <Aggregators
      numberKeys={isNumberKeys ? (numberKeys as string[]) : []}
      keyMapping={keyMapping}
      handleAggregatorChange={handleAggregator}
      handleAggregatorKeyChange={handleAggregatorKey}
      aggregator={aggregator}
      aggregatorKey={aggregatorKey}
    />
  )
}
