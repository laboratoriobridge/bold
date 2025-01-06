import React, { useState } from 'react'

import { optionsKnob } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { useLocale } from '../../../i18n'
import { KeyMap } from '../model'
import { Aggregators } from './Aggregators'
import { Aggregator } from './model'
import { getCountAggregator } from './utils'

export default {
  title: 'Components/PivotTable/Aggregators',
}

type Fruit = {
  name: string
  size: string
}

const keyMapping: KeyMap<Fruit> = new Map([
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

  const initialAggregator = getCountAggregator(locale.aggregators)

  const [aggregator, setAggregator] = useState<Aggregator>(initialAggregator)

  const [aggregatorKey, setAggregatorKey] = useState<keyof Fruit>()

  const handleAggregatorChange = (aggregator: Aggregator) => {
    action('Aggregator changed')(aggregator)
    setAggregator(() => aggregator)
  }

  const handleAggregatorKeyChange = (key: keyof Fruit) => {
    action('Aggregator key changed')(key)
    setAggregatorKey(key)
  }

  const numberKeys = optionsKnob('Number Keys', numberKeyOptions, [], { display: 'select' }) as Array<keyof Fruit>

  return (
    <Aggregators<Fruit>
      numberKeys={numberKeys}
      keyMapping={keyMapping}
      handleAggregatorChange={handleAggregatorChange}
      handleAggregatorKeyChange={handleAggregatorKeyChange}
      aggregator={aggregator}
      aggregatorKey={aggregatorKey}
    />
  )
}
