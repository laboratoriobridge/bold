import React, { useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { HFlow } from '../../HFlow'
import { Box } from '../Box/Box'
import { Droppable } from './Droppable'
import { DroppableFilter } from './types/Filter'

export default {
  title: 'Components/PivotTable/Droppable',
}

type Fruit = {
  name: string
  size?: string
}

type KeyMapping = {
  keyName: string
  formatter?: (value: string) => string
  ordenator?: (a: string, b: string) => number
}

const keyMapping = new Map<keyof Fruit, KeyMapping>([
  ['name', { keyName: 'Name' }],
  ['size', { keyName: 'Size' }],
])

const keys = new Map<keyof Fruit, string[]>([
  ['name', ['Apple', 'Banana', 'Blackberry', 'Lemon', 'Orange', 'Watermelon']],
  ['size', ['Medium', 'Small', 'Big']],
])

const deepCopy = new Map<keyof Fruit, Set<string>>()

keys.forEach((value, key) => deepCopy.set(key, new Set(value)))

export const Default = () => {
  const [defaultKeys, setDefaultKeys] = useState<Array<keyof Fruit>>(Array.from(keys.keys()))
  const [rowKeys, setRowKeys] = useState<Array<keyof Fruit>>([])
  const [filterState, setFilterState] = useState<Map<keyof Fruit, Set<string>>>(
    new Map<keyof Fruit, Set<string>>(deepCopy)
  )
  const handleFilterUpdate = (key: keyof Fruit, filter: Set<string>) => {
    if (filter.size < 1) {
      filterState.delete(key)
    } else {
      filterState.set(key, filter)
    }
    setFilterState(new Map(filterState))
  }

  const filter: DroppableFilter<Fruit> = {
    handleUpdate: handleFilterUpdate,
    keys: keys,
    state: filterState,
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <HFlow>
        <Box label='Table 1'>
          <Droppable<Fruit>
            name='table1'
            keyState={defaultKeys}
            accept={'fruit-table'}
            keyMapping={keyMapping}
            handleKeyUpdate={setDefaultKeys}
            filter={filter}
          />
        </Box>
        <Box label='Table 2'>
          <Droppable<Fruit>
            name='table2'
            keyState={rowKeys}
            accept={'fruit-table'}
            keyMapping={keyMapping}
            handleKeyUpdate={setRowKeys}
            filter={filter}
          />
        </Box>
      </HFlow>
    </DndProvider>
  )
}
