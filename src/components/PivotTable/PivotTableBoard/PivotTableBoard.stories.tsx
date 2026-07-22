import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { KeyMap } from '../model'
import { getCountAggregator } from '../Aggregators/utils'
import { useLocale } from '../../../i18n'
import { Aggregator } from '../Aggregators/model'
import { PivotTableBoard } from './PivotTableBoard'
import { BoardField, FieldFiltersByKey, RowColumnKeys } from './model'

type Fruit = {
  name: string
  size?: string
}

const numberKeyOptions = {
  Empty: [],
  Name: ['name'],
  'Name and Size': ['name', 'size'],
}

export default {
  title: 'Components/PivotTable/PivotTableBoard',
  component: PivotTableBoard,
  argTypes: {
    numberKeys: {
      options: Object.keys(numberKeyOptions),
      mapping: numberKeyOptions,
      control: {
        type: 'select',
      },
    },
  },
  args: {
    numberKeys: [],
    isBuilding: false,
  },
}

export const Default = (args) => {
  const locale = useLocale()

  const [aggregator, setAggregator] = useState<Aggregator>(getCountAggregator(locale.aggregators))
  const [aggregatorKey, setAggregatorKey] = useState<keyof Fruit>()

  const handleAggregatorKey = (key: keyof Fruit) => {
    setAggregatorKey(key)
    action('PivotTableBoard: handleAggregatorKeyChange')(key)
  }
  const handleAggregatorChange = (aggregator: Aggregator) => {
    setAggregator(() => aggregator)
    action('PivotTableBoard: handleAggregatorChange')(aggregator)
  }

  const keys = new Map<keyof Fruit, string[]>([
    ['name', ['Apple', 'Banana', 'Blackberry', 'Lemon', 'Orange', 'Watermelon']],
    ['size', ['Medium', 'Small', 'Big']],
  ])

  const keyMapping: KeyMap<Fruit> = new Map([
    ['name', { keyName: 'Name' }],
    ['size', { keyName: 'Size' }],
  ])

  const initialFields: BoardField<Fruit>[] = [
    { key: 'name' as keyof Fruit, origin: 'row', filters: ['Apple'] },
    { key: 'size' as keyof Fruit, origin: 'column', filters: ['Medium'] },
  ]

  const handleSubmit = (values: RowColumnKeys<Fruit>, filterValues: FieldFiltersByKey<Fruit>) => {
    action('PivotTableBoard: handleSubmit')(values, filterValues)
  }

  const handleReset = () => {
    action('PivotTableBoard: handleReset')()
  }

  return (
    <PivotTableBoard
      keys={keys}
      keyMapping={keyMapping}
      numberKeys={args.numberKeys}
      isBuilding={args.isBuilding}
      onSubmit={handleSubmit}
      onReset={handleReset}
      aggregator={{
        onChange: handleAggregatorChange,
        onKeyChange: handleAggregatorKey,
        value: aggregator,
        key: aggregatorKey,
      }}
      initialFields={initialFields}
    />
  )
}
