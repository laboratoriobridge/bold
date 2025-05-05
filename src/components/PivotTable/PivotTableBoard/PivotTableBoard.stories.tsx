import React, { useState } from 'react'
import { optionsKnob } from '@storybook/addon-knobs'
import { KeyMap } from '../model'
import { getCountAggregator } from '../Aggregators/utils'
import { useLocale } from '../../../i18n'
import { Aggregator } from '../Aggregators/model'
import { PivotTableBoard } from './PivotTableBoard'
import { BoardField } from './model'

export default {
  title: 'Components/PivotTable/PivotTableBoard',
}

type Fruit = {
  name: string
  size?: string
}

const numberKeyOptions = {
  Empty: [],
  Name: ['name'],
  'Name and Size': ['name', 'size'],
}

export const Default = () => {
  const locale = useLocale()

  const [aggregator, setAggregator] = useState<Aggregator>(getCountAggregator(locale.aggregators))
  const [aggregatorKey, setAggregatorKey] = useState<keyof Fruit>()

  const handleAggregatorKey = (key: keyof Fruit) => setAggregatorKey(key)
  const handleAggregator = (aggregator: Aggregator) => {
    setAggregator(() => aggregator)
  }

  const keys = new Map<keyof Fruit, string[]>([
    ['name', ['Apple', 'Banana', 'Blackberry', 'Lemon', 'Orange', 'Watermelon']],
    ['size', ['Medium', 'Small', 'Big']],
  ])

  const keyMapping: KeyMap<Fruit> = new Map([
    ['name', { keyName: 'Name' }],
    ['size', { keyName: 'Size' }],
  ])

  const numberKeys = optionsKnob('Number Keys', numberKeyOptions, [], { display: 'select' }) as Array<keyof Fruit>

  const initialFields: BoardField<Fruit>[] = [
    { key: 'name' as keyof Fruit, origin: 'row' as 'row' | 'column', filters: ['Apple'] },
    { key: 'size' as keyof Fruit, origin: 'column' as 'row' | 'column', filters: ['Medium'] },
  ]

  return (
    <PivotTableBoard
      keys={keys}
      keyMapping={keyMapping}
      numberKeys={numberKeys}
      isBuilding={false}
      handleSubmit={() => {}}
      handleReset={() => {}}
      handleAggregatorChange={handleAggregator}
      handleAggregatorKeyChange={handleAggregatorKey}
      aggregator={aggregator}
      aggregatorKey={aggregatorKey}
      initialFields={initialFields}
    />
  )
}
