import { action } from '@storybook/addon-actions'
import React from 'react'
import { KeyNavigationDirection } from '../Droppable/types/model'
import { Draggable } from './Draggable'
import { FilterDraggable } from './FilterDraggable'
import { KeyMapping } from './types/KeyMapping'

export default {
  title: 'Components/PivotTable/Draggable',
}

const origin = 'keys_available'

type Fruit = {
  name: string
}

const keyMapping = new Map<keyof Fruit, KeyMapping>([['name', { keyName: 'Name' }]])

const keyState: Array<keyof Fruit> = ['name']
const key: keyof Fruit = keyState[0]
const keys = new Map<keyof Fruit, string[]>([
  ['name', ['Apple', 'Banana', 'Blackberry', 'Lemon', 'Orange', 'Watermelon']],
])

const onKeyNav = (dir: KeyNavigationDirection, origin: string, key: keyof Fruit) => {
  action('onKeyNav')(dir, origin, key)
  return false
}

export const Default = () => (
  <Draggable<Fruit>
    key={key as string}
    name={key}
    type='Fruit'
    value={keyMapping.get(key).keyName || (key as string)}
    origin={origin}
    onDragEnd={action('onDragEnd')}
    onKeyNav={onKeyNav}
  />
)

export const Filter = () => (
  <FilterDraggable<Fruit>
    key={key as string}
    name={key}
    type='Fruit'
    value={keyMapping.get(key).keyName || (key as string)}
    formatter={keyMapping.get(key).formatter}
    origin={origin}
    filterItems={keys.get(key)}
    selectedItems={new Set<string>(['Apple'])}
    onFilterUpdate={action('onFilterUpdate')}
    onDragEnd={action('onDragEnd')}
    onKeyNav={onKeyNav}
  />
)
