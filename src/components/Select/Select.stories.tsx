import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { DefaultItemType, defaultSelectFilter, Select, SelectMenu, SelectMenuItem } from './'

const fruits: DefaultItemType[] = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Avocado' },
  { value: 3, label: 'Banana' },
  { value: 4, label: 'Blueberry' },
  { value: 5, label: 'Coconut' },
  { value: 6, label: 'Grape' },
  { value: 7, label: 'Lemon' },
  { value: 8, label: 'Mango' },
  { value: 9, label: 'Melon' },
  { value: 10, label: 'Orange' },
  { value: 11, label: 'Peach' },
  { value: 12, label: 'Pear' },
]

const loadFruits = (query: string): Promise<DefaultItemType[]> => {
  return new Promise(resolve => {
    setTimeout(() => resolve(defaultSelectFilter([...fruits], query, item => item.label)), 1000)
  })
}

interface SelectAsyncManagerProps {
  children(renderProps: { items: any[]; loading: boolean; loadItems(query: string): void })
}

const SelectAsyncManager = (props: SelectAsyncManagerProps) => {
  const [loading, setLoading] = React.useState(false)
  const [items, setItems] = React.useState([])
  const loadItems = (query: string) => {
    setLoading(true)
    loadFruits(query)
      .then(data => {
        setItems(data)
        setLoading(false)
      })
      .catch(err => setLoading(false))
  }
  return props.children({
    items,
    loading,
    loadItems,
  })
}

// tslint:disable jsx-no-lambda
storiesOf('Components|Select', module)
  .add('default', () => (
    <Select<DefaultItemType>
      label='Fruit'
      name='fruit'
      items={fruits}
      errorText={text('errorText', '')}
      itemToString={item => item && item.label}
      itemIsEqual={(a, b) => a.value === b.value}
      placeholder='Select a value...'
      multiple={boolean('multiple', false)}
      clearable={boolean('clearable', true)}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
      onChange={action('changed')}
      onBlur={action('blur')}
    />
  ))
  .add('custom menu item', () => (
    <Select<DefaultItemType>
      renderItem={item => (
        <>
          <p>
            <strong>{item.label}</strong>
          </p>
          <p>yummy</p>
        </>
      )}
      label='Fruit'
      name='fruit'
      items={fruits}
      errorText={text('errorText', '')}
      itemToString={item => item && item.label}
      itemIsEqual={(a, b) => a.value === b.value}
      placeholder='Select a value...'
      multiple={boolean('multiple', false)}
      clearable={boolean('clearable', true)}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
      onChange={action('changed')}
      onBlur={action('blur')}
    />
  ))
  .add('async items', () => (
    <SelectAsyncManager>
      {({ items, loading, loadItems }) => (
        <Select<DefaultItemType>
          label='Repository'
          name='repository'
          items={items}
          errorText={text('errorText', '')}
          itemToString={item => item && item.label}
          itemIsEqual={(a, b) => a.value === b.value}
          placeholder='Select a value...'
          multiple={boolean('multiple', false)}
          clearable={boolean('clearable', true)}
          disabled={boolean('disabled', false)}
          loading={loading}
          onChange={action('changed')}
          onBlur={action('blur')}
          onFilterChange={loadItems}
        />
      )}
    </SelectAsyncManager>
  ))
  .add('select menu', () => (
    <SelectMenu style={{ position: 'static' }}>
      <SelectMenuItem>Item 1</SelectMenuItem>
      <SelectMenuItem selected>Item 2 (selected)</SelectMenuItem>
      <SelectMenuItem>Item 3</SelectMenuItem>
      <SelectMenuItem>Item 4</SelectMenuItem>
      <SelectMenuItem>Item 5</SelectMenuItem>
    </SelectMenu>
  ))
