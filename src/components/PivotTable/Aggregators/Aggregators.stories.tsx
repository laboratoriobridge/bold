import React, { useState } from 'react'

import { optionsKnob } from '@storybook/addon-knobs'
import { useLocale } from '../../../i18n'
import { KeyMap } from '../model/model-keyMap'
import { Aggregators } from './Aggregators'
import { Aggregator } from './model-aggregator'
import { getCountAndPercentageAggregator } from './util-aggregator'

export default {
  title: 'Components/PivotTable/Aggregators',
}

type Fruit = {
  name: string
  size: string
}

const keyMap: KeyMap<Fruit> = new Map([
  ['name', { keyName: 'Name' }],
  ['size', { keyName: 'Size' }],
])

const numberKeyOptions = {
  Empty: [],
  Name: ['name'],
  'Name and Size': ['name', 'size'],
}

export const Default = () => {
  const locale = useLocale()

  const initialAggregator = getCountAndPercentageAggregator(locale.aggregators).countAggregator

  const [aggregator, setAggregator] = useState<Aggregator>(initialAggregator)

  const [aggregatorKey, setAggregatorKey] = useState<keyof Fruit>()

  const handleAggregatorChange = (aggregator: Aggregator) => {
    setAggregator(() => aggregator)
  }

  const handleAggregatorKeyChange = (key: keyof Fruit) => setAggregatorKey(key)

  const numberKeys = optionsKnob('Number Keys', numberKeyOptions, [], { display: 'select' }) as Array<keyof Fruit>

  return (
    <Aggregators<Fruit>
      numberKeys={numberKeys}
      keyMap={keyMap}
      handleAggregatorChange={handleAggregatorChange}
      handleAggregatorKeyChange={handleAggregatorKeyChange}
      aggregator={aggregator}
      aggregatorKey={aggregatorKey}
    />
  )
}
