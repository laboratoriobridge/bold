import { action } from '@storybook/addon-actions'
import { boolean, number, optionsKnob, select, text } from '@storybook/addon-knobs'
import matchSorter from 'match-sorter'
import React from 'react'
import { useTheme } from '../../styles'
import { Button } from '../Button'
import { HFlow } from '../HFlow'
import { Text } from '../Text'
import { Combobox } from './Combobox'
import { ComboboxMenuItem } from './ComboboxMenuComponents'
import { ComboboxMultiselect } from './ComboboxMultiselect'

type Fruit = { value: number; label: string }

const fruits: Fruit[] = [
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

const loadFruitsAsync = (query: string): Promise<Fruit[]> => {
  action('items loaded')()
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          matchSorter<Fruit>(fruits, query, { keys: [(item) => item.label] })
        ),
      1000
    )
  })
}

function CustomComponent(props: React.HTMLAttributes<HTMLDivElement>) {
  const theme = useTheme()

  return (
    <div
      style={{
        background: theme.pallete.surface.background,
        padding: '0.25rem 0.5rem',
        cursor: 'initial',
      }}
      {...props}
    />
  )
}

export default {
  title: 'Components/Combobox',
}

export const Default = () => (
  <Combobox<Fruit>
    value={fruits.find((e) => e.label === select('value', ['', ...fruits.map((e) => e.label)], ''))}
    label='Fruit'
    name='fruit'
    items={fruits}
    error={text('error', '')}
    menuMinWidth={number('menuMinWidth (px)', undefined)}
    itemToString={(item) => item?.label}
    placeholder={text('placeholder', 'Select a value...')}
    clearable={boolean('clearable', true)}
    disabled={boolean('disabled', false)}
    openOnFocus={boolean('openOnFocus', true)}
    loading={boolean('loading', false)}
    onChange={action('changed')}
    onFilterChange={action('filter changed')}
    onBlur={action('blur')}
    onFocus={action('focus')}
  />
)

export const Suggestion = () => (
  <Combobox<Fruit>
    createNewItem={(str) => ({ value: Math.random(), label: str })}
    label='Fruit'
    name='fruit'
    items={fruits}
    error={text('error', '')}
    icon={null}
    itemToString={(item) => item && item.label}
    placeholder='Select a value...'
    clearable={boolean('clearable', true)}
    disabled={boolean('disabled', false)}
    openOnFocus={boolean('openOnFocus', false)}
    loading={boolean('loading', false)}
    onChange={action('changed')}
    onBlur={action('blur')}
    onFocus={action('focus')}
  />
)

export const Async = () => (
  <Combobox<Fruit>
    value={fruits.find((e) => e.label === select('value', ['', ...fruits.map((e) => e.label)], ''))}
    label='Fruit Repository'
    name='repository'
    items={loadFruitsAsync}
    error={text('error', '')}
    itemToString={(item) => item && item.label}
    placeholder='Select a value...'
    multiple={boolean('multiple', false)}
    clearable={boolean('clearable', true)}
    disabled={boolean('disabled', false)}
    openOnFocus={boolean('openOnFocus', true)}
    onChange={action('changed')}
    onBlur={action('blur')}
    onFocus={action('focus')}
  />
)

export const CustomComponents = () => (
  <Combobox<Fruit>
    label='Fruit'
    name='fruit'
    items={fruits}
    createNewItem={boolean('createNewItem', false) && (() => fruits[0])}
    itemToString={(item) => item && item.label}
    components={{
      Item: (props) => (
        <ComboboxMenuItem {...props}>
          <Text color='success'>Custom {props.itemToString(props.item)}</Text>
        </ComboboxMenuItem>
      ),
      PrependItem: (props) => <CustomComponent>Prepend item</CustomComponent>,
      EmptyItem: (props) => <CustomComponent>Empty item</CustomComponent>,
      CreateItem: (props) => <CustomComponent>Create item</CustomComponent>,
      LoadingItem: (props) => <CustomComponent>Loading item...</CustomComponent>,
      AppendItem: (props) => (
        <CustomComponent>
          <HFlow alignItems='center' justifyContent='space-between'>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quod modi, inventore quasi aut sed beatae
              corrupti repellendus minima voluptatem debitis, quibusdam repudiandae totam voluptatum odit.
            </Text>
            <Button kind='primary' size='small' onClick={action('New item click')}>
              New item
            </Button>
          </HFlow>
        </CustomComponent>
      ),
    }}
  />
)

export const MultiSelect = () => (
  <ComboboxMultiselect<Fruit>
    itemIsEqual={(a, b) => a.value === b.value}
    value={fruits.filter(
      (e) =>
        optionsKnob<number>('values', Object.fromEntries(fruits.map((e) => [e.label, e.value])), [], {
          display: 'multi-select',
        }) === e.value
    )}
    label='Fruit'
    name='fruit'
    items={fruits}
    error={text('error', '')}
    menuMinWidth={number('menuMinWidth (px)', undefined)}
    itemToString={(item) => item?.label}
    placeholder={text('placeholder', 'Select the values...')}
    clearable={boolean('clearable', true)}
    disabled={boolean('disabled', false)}
    openOnFocus={boolean('openOnFocus', true)}
    onChange={action('changed')}
    onFilterChange={action('filter changed')}
    onBlur={action('blur')}
    onFocus={action('focus')}
  />
)
