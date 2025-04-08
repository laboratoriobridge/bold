import React, { useState } from 'react'
import { KeyMap } from '../model'
import { getCountAggregator } from '../Aggregators/utils'
import { useLocale } from '../../../i18n'
import { Aggregator } from '../Aggregators/model'
import { Board } from './Board'

export default {
  title: 'Components/PivotTable/Board',
}

type Fruit = {
  name: string
  size?: string
}

export const Default = () => {
  const locale = useLocale()

  const [filterDataKeyValues, setFilterDataKeyValue] = useState<FieldFiltersByKey<T>>()
  const [rowKeys, setRowKeys] = useState<Array<keyof Fruit>>([])
  const [columnKeys, setColumnKeys] = useState<Array<keyof Fruit>>([])

  const [aggregator, setAggregator] = useState<Aggregator>(initialAggregator)
  const [aggregatorKey, setAggregatorKey] = useState<keyof Fruit>()

  const { analytics } = useFirebase()
  const alert = useAlert()

  const handleAggregatorKey = (key: keyof T) => setAggregatorKey(key)
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

  const handleSubmit = (
    values: [Array<keyof Fruit>, Array<keyof Fruit>],
    newFilters: Map<keyof Fruit, Set<string>>
  ) => {
    const [newRowKeys, newColumnKeys] = values

    const errorList = []

    for (let rowKey of newRowKeys) {
      const isFilterEmpty = !newFilters?.get(rowKey)?.size
      isFilterEmpty && errorList.push(keyMapping.get(rowKey).keyName)
    }

    for (let columnKey of newColumnKeys) {
      const isFilterEmpty = !newFilters?.get(columnKey)?.size
      isFilterEmpty && errorList.push(keyMapping.get(columnKey).keyName)
    }

    setFilterDataKeyValue(newFilters)
    setRowKeys(newRowKeys)
    setColumnKeys(newColumnKeys)

    if (newRowKeys !== rowKeys || newColumnKeys !== columnKeys || newFilters !== filterDataKeyValues) {
      demolish()
    }

    analytics.logEvent('pivot_table_build', {
      hasModeloSelecionado,
    })
  }

  return (
    <Board
      keys={keys}
      keyMapping={keyMapping}
      numberKeys={['size']}
      isBuilding={false}
      handleSubmit={handleSubmit}
      handleReset={() => {}}
      handleAggregatorChange={() => {}}
      handleAggregatorKeyChange={() => {}}
      aggregator={getCountAggregator(locale.aggregators)}
      aggregatorKey={'name'}
    />
  )
}
