import { action } from '@storybook/addon-actions'
import matchSorter from 'match-sorter'
import React from 'react'
import { useTheme } from '../../styles'
import { Button } from '../Button'
import { HFlow } from '../HFlow'
import { Text } from '../Text'
import { Combobox } from './Combobox'
import { ComboboxMenuItem } from './ComboboxMenuComponents'

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
  component: Combobox,
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    value: { control: 'select', options: ['', ...fruits.map((e) => e.label)] },
    open: { control: 'select', options: [undefined, true, false] },
  },
  args: {
    label: 'Fruit',
    name: 'fruit',
    items: fruits,
    error: '',
    menuMinWidth: undefined,
    placeholder: 'Select a value...',
    clearable: true,
    disabled: false,
    openOnFocus: true,
    loading: false,
    open: undefined,
    onChange: action('changed'),
    onFilterChange: action('filter changed'),
    onBlur: action('blur'),
    onFocus: action('focus'),
  },
}

export const Default = (args) => <Combobox<Fruit> {...args} itemToString={(item) => item?.label} />

export const Suggestion = (args) => (
  <Combobox<Fruit>
    {...args}
    createNewItem={(str) => ({ value: Math.random(), label: str })}
    icon={null}
    itemToString={(item) => item && item.label}
  />
)

Suggestion.args = {
  openOnFocus: false,
}

export const Async = (args) => (
  <Combobox<Fruit>
    {...args}
    label='Fruit Repository'
    name='repository'
    items={loadFruitsAsync}
    itemToString={(item) => item && item.label}
  />
)

export const CustomComponents = (args) => (
  <Combobox<Fruit>
    {...args}
    createNewItem={args.createNewItem && (() => fruits[0])}
    itemToString={(item) => item && item.label}
    components={{
      Item: (props) => (
        <ComboboxMenuItem {...props}>
          <Text color='success'>Custom {props.itemToString(props.item)}</Text>
        </ComboboxMenuItem>
      ),
      PrependItem: () => <CustomComponent>Prepend item</CustomComponent>,
      EmptyItem: () => <CustomComponent>Empty item</CustomComponent>,
      CreateItem: () => <CustomComponent>Create item</CustomComponent>,
      LoadingItem: () => <CustomComponent>Loading item...</CustomComponent>,
      AppendItem: () => (
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

CustomComponents.args = {
  createNewItem: false,
}

export const MultiSelect = (args) => {
  return (
    <Combobox<Fruit>
      {...args}
      itemIsEqual={(a, b) => a.label === b.label}
      value={fruits.filter((e) => args.selectedValues.includes(e.label))}
      itemToString={(item) => item?.label}
      multiple
    />
  )
}

MultiSelect.args = {
  clearFilterOnSelect: true,
  selectedValues: [],
}

MultiSelect.argTypes = {
  selectedValues: {
    control: 'multi-select',
    options: fruits.map((e) => e.label),
  },
}

export const Inline = (args) => (
  <Combobox<Fruit>
    {...args}
    inline
    defaultButtonText={args.defaultButtonText}
    itemToString={(item) => item?.label}
    searchBoxPlaceholder={args.searchBoxPlaceholder}
    showSearchBox={args.showSearchBox}
  />
)

Inline.args = {
  defaultButtonText: 'Fruit',
  searchBoxPlaceholder: 'Search...',
  showSearchBox: true,
  label: '',
}
