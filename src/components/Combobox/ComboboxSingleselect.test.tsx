import React from 'react'
import { act, render, fireEvent, getByTestId } from '@testing-library/react'
import matchSorter from 'match-sorter'
import waait from 'waait'
import en from '../../i18n/locales/en-US'
import { Text } from '../Text'
import { useTheme } from '../../styles'
import { HFlow } from '../HFlow'
import { Button } from '../Button'
import { ComboboxMenuItem } from './ComboboxMenuComponents'
import { Combobox } from './Combobox'
import { ComboboxSingleselect, ComboboxSingleselectProps } from './ComboboxSingleselect'

interface Fruit {
  value: number
  label: string
}

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

const itemToString = (item: Fruit) => item.label

const asyncDelay = 10
const loadFruitsAsync = (query: string): Promise<Fruit[]> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          matchSorter<Fruit>(fruits, query, { keys: [(item) => item.label] })
        ),
      asyncDelay
    )
  })
}

const ComboboxTest = (props: Partial<ComboboxSingleselectProps<Fruit>> & { async?: boolean }) => (
  <ComboboxSingleselect<typeof fruits[0]>
    items={props.async ? loadFruitsAsync : fruits}
    itemToString={itemToString}
    debounceMilliseconds={0}
    openOnFocus
    loading={false}
    inputId={'test-input-id'}
    labelId={'test-label-id'}
    menuId={'test-menu-id'}
    getItemId={(index) => `test-item-id-${index}`}
    {...props}
  />
)

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

const ComboboxWithCustomComponentsTest = (
  props: Partial<ComboboxSingleselectProps<Fruit>> & { action?: () => void }
) => (
  <ComboboxSingleselect<typeof fruits[0]>
    label='Fruit'
    name='fruit'
    items={fruits}
    itemToString={itemToString}
    openOnFocus
    loading={false}
    debounceMilliseconds={0}
    inputId={'test-input-id'}
    labelId={'test-label-id'}
    menuId={'test-menu-id'}
    getItemId={(index) => `test-item-id-${index}`}
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
            <Button kind='primary' size='small' data-testid='action-btn' onClick={() => props.action?.()}>
              New item
            </Button>
          </HFlow>
        </CustomComponent>
      ),
    }}
    {...props}
  />
)

test.each`
  async
  ${true}
  ${false}
`('has aria-compliant attributes (async: $async)', async ({ async }) => {
  // From https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
  const { baseElement } = render(<ComboboxTest label='Fruits' async={async} />)

  const combobox = baseElement.querySelector('[role="combobox"]')
  const label = baseElement.querySelector('label')!
  const input = baseElement.querySelector('input')!
  const listbox = baseElement.querySelector('[role="listbox"]')!
  const dropdownButton = baseElement.querySelector('button')!

  expect(combobox).toHaveAttribute('aria-owns', listbox.getAttribute('id'))
  expect(combobox).toHaveAttribute('aria-expanded', 'false')
  expect(combobox).toHaveAttribute('aria-haspopup', 'listbox')

  expect(label).toHaveAttribute('id')
  expect(label).toHaveAttribute('for', input.getAttribute('id'))
  expect(label).toHaveTextContent('Fruits')

  expect(input).toHaveAttribute('id')
  expect(input).toHaveAttribute('aria-autocomplete', 'list')
  expect(input).toHaveAttribute('aria-controls', listbox.getAttribute('id'))
  expect(input).toHaveAttribute('aria-labelledby', label.getAttribute('id'))

  expect(dropdownButton).toHaveAttribute('tabindex', '-1')
  expect(dropdownButton).toHaveAttribute('aria-label')

  expect(listbox).toHaveAttribute('id')
  expect(listbox).toHaveAttribute('aria-labelledby', label.getAttribute('id'))

  fireEvent.click(dropdownButton)

  expect(combobox).toHaveAttribute('aria-expanded', 'true')
  await act(() => waait(asyncDelay))
  expect(listbox.querySelector('[aria-selected]')).toBeTruthy()
})

test.each`
  async
  ${true}
  ${false}
`('opens menu when input is focused and only when `openOnFocus` prop is true (async: $async)', async ({ async }) => {
  const { baseElement, rerender } = render(<ComboboxTest async={async} />)

  const input = baseElement.querySelector('input')!

  // initial state has closed menu
  expect(baseElement.querySelector('ul')).toBeFalsy()

  // focus input to open menu
  fireEvent.focus(input)
  expect(baseElement.querySelector('ul')).toBeTruthy()

  // blur input to close menu
  fireEvent.blur(input)
  expect(baseElement.querySelector('ul')).toBeFalsy()
  // rerenders switching prop
  await act(async () => rerender(<ComboboxTest openOnFocus={false} />))

  // focus input and now menu should not be open
  fireEvent.focus(input)
  expect(baseElement.querySelector('ul')).toBeFalsy()
})

it('shows placeholder when specified', async () => {
  const placeholder = 'test placeholder'
  const { baseElement } = render(<ComboboxTest placeholder={placeholder} />)

  const input = baseElement.querySelector('input')

  expect(input).toHaveAttribute('placeholder', placeholder)
})

it('does not show placeholder when not specified', async () => {
  const { baseElement } = render(<ComboboxTest />)
  const input = baseElement.querySelector('input')

  expect(input).not.toHaveAttribute('placeholder')
})

it.each`
  async
  ${true}
  ${false}
`('clears selection when "Clear" is clicked (async: $async)', async ({ async }) => {
  const { baseElement } = render(<ComboboxTest clearable={true} async={async} />)
  const input = baseElement.querySelector('input')!

  const dropdownButton = baseElement.querySelector('button')!

  //Opens menu
  fireEvent.click(dropdownButton)

  await act(() => waait(asyncDelay))

  const option = baseElement.querySelector('li')!.firstChild!

  //Selects item
  fireEvent.click(option)

  expect(input).toHaveValue(option.textContent)

  const clearButton = baseElement.querySelector('[title="Clear"]')!

  //Clears value and focus out
  fireEvent.click(clearButton)
  fireEvent.blur(input)

  await act(() => waait(asyncDelay))

  //Checks if cleared
  expect(input).not.toHaveValue()
})

it('enters error state', async () => {
  const errorMessage = 'error'
  const { baseElement } = render(<ComboboxTest error={errorMessage} />)

  const input = baseElement.querySelector('input')!

  expect(input).toHaveAttribute('aria-invalid', 'true')
  expect(input).toHaveAttribute('aria-errormessage')

  const errorMessageContainer = baseElement.querySelector(`#${input.getAttribute('aria-errormessage')}`)
  expect(errorMessageContainer).toHaveTextContent(errorMessage)
})

it('respects menu min-width', async () => {
  const { baseElement } = render(<ComboboxTest menuMinWidth={1000} />)

  const dropdownButton = baseElement.querySelector('button')!
  //Opens menu
  fireEvent.click(dropdownButton)

  const menu = getByTestId(baseElement, 'menu')

  expect(menu).toHaveStyle('min-width: 1000px')
})

it.each`
  async
  ${true}
  ${false}
`('should trigger onChange (async: $async)', async ({ async }) => {
  let selection: Fruit | null = null

  const { baseElement } = render(<ComboboxTest onChange={(nValue) => (selection = nValue)} async={async} />)

  expect(selection).toBeNull()

  //Opens menu
  const dropdownButton = baseElement.querySelector('button')!
  fireEvent.click(dropdownButton)

  await act(() => waait(asyncDelay))

  //Selects first item
  const option = baseElement.querySelector('li')!.firstChild!
  fireEvent.click(option)

  expect(selection).toBe(fruits[0])
})

it.each`
  async
  ${true}
  ${false}
`('should trigger onFilterChange (async: $async)', async ({ async }) => {
  let filter = ''

  const { baseElement } = render(<ComboboxTest onFilterChange={(nValue) => (filter = nValue)} async={async} />)

  expect(filter).toBe('')

  const input = baseElement.querySelector('input')!
  fireEvent.change(input, { target: { value: 'filter' } })

  expect(filter).toBe('filter')
})

it('should trigger onFocus', async () => {
  const onFocus = jest.fn()
  const { baseElement } = render(<ComboboxTest onFocus={onFocus} />)

  const input = baseElement.querySelector('input')!
  fireEvent.focus(input)
  expect(onFocus).toBeCalled()
})

it('should trigger onBlur', async () => {
  const onBlur = jest.fn()
  const { baseElement } = render(<ComboboxTest onBlur={onBlur} />)

  const input = baseElement.querySelector('input')!
  fireEvent.focus(input)
  fireEvent.blur(input)
  expect(onBlur).toBeCalled()
})

it.each`
  async
  ${true}
  ${false}
`('should clear input if the value is not valid (async: $async)', async ({ async }) => {
  const { baseElement } = render(<ComboboxTest async={async} />)

  const input = baseElement.querySelector('input')!
  fireEvent.focus(input)
  fireEvent.change(input, { target: { value: 'not a fruit' } })
  fireEvent.blur(input)
  expect(input).not.toHaveValue()
})

it.each`
  async
  ${true}
  ${false}
`('should clear input if the value is not valid after select item (async: $async)', async ({ async }) => {
  const { baseElement } = render(<ComboboxTest clearable={true} async={async} />)
  const input = baseElement.querySelector('input')!

  const dropdownButton = baseElement.querySelector('button')!
  //Opens menu
  fireEvent.click(dropdownButton)

  await act(() => waait(asyncDelay))

  const option = baseElement.querySelector('li')!.firstChild!

  //Selects item
  fireEvent.click(option)

  expect(input).toHaveValue(option.textContent)

  fireEvent.focus(input)
  fireEvent.change(input, { target: { value: 'not a fruit' } })
  fireEvent.blur(input)

  expect(input).not.toHaveValue()
})

it.each`
  async
  ${true}
  ${false}
`(
  'should add item if the input value is not in the list and "createNewItem" is defined (async: $async)',
  async ({ async }) => {
    const createNewItem = (input: string) => ({ value: 1, label: input })

    let selection: Fruit | null = null
    const { baseElement } = render(
      <ComboboxTest
        clearable={true}
        createNewItem={createNewItem}
        onChange={(item) => {
          selection = item
        }}
        async={async}
      />
    )
    const input = baseElement.querySelector('input')!

    //Types item not in the list
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'not a fruit in the list' } })
    fireEvent.blur(input)

    expect(selection).toStrictEqual({ value: 1, label: 'not a fruit in the list' })
    expect(input).toHaveValue('not a fruit in the list')

    //Searches for first item
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: fruits[0].label } })
    await act(() => waait(2 * asyncDelay))

    //Selects first item
    const option = baseElement.querySelector('li')!
    fireEvent.click(option)

    expect(selection).toBe(fruits[0])
  }
)

it.each`
  async
  ${true}
  ${false}
`('should accept a value as parameter (async: $async)', async ({ async }) => {
  const { baseElement } = render(<ComboboxTest value={fruits[1]} async={async} />)

  const input = baseElement.querySelector('input')

  expect(input).toHaveValue(itemToString(fruits[1]))

  //Opens menu
  const dropdownButton = baseElement.querySelector('button')!
  fireEvent.click(dropdownButton)

  await act(() => waait(asyncDelay))

  const option = baseElement.querySelector('li')

  expect(option).toHaveTextContent(itemToString(fruits[1]))
})

it('should accept actions inside children component', async () => {
  const click = jest.fn()
  const { baseElement, findByTestId } = render(<ComboboxWithCustomComponentsTest action={click} />)

  const dropdownButton = baseElement.querySelector('button')!
  fireEvent.click(dropdownButton)

  fireEvent.click(await findByTestId('action-btn'))

  expect(click).toHaveBeenCalledTimes(1)
})

test.each`
  async
  ${true}
  ${false}
`('keeps menu open based on the `open` prop(async: $async)', async ({ async }) => {
  const { baseElement, rerender } = render(<ComboboxTest async={async} open />)
  const input = baseElement.querySelector('input')!

  // initial state has open menu
  expect(baseElement.querySelector('ul')).toBeTruthy()
  const dropdownButton = baseElement.querySelector('button')!

  // blur input
  fireEvent.blur(input)
  expect(baseElement.querySelector('ul')).toBeTruthy()
  //click dropdown button
  fireEvent.click(dropdownButton)
  expect(baseElement.querySelector('ul')).toBeTruthy()

  // rerenders switching prop
  await act(async () => rerender(<ComboboxTest async={async} open={false} />))
  expect(baseElement.querySelector('ul')).toBeFalsy()

  // focus input
  fireEvent.focus(input)
  expect(baseElement.querySelector('ul')).toBeFalsy()
  //click dropdown button
  fireEvent.click(dropdownButton)
  expect(baseElement.querySelector('ul')).toBeFalsy()
})

describe('rendering', () => {
  it('renders correcly closed', async () => {
    const { baseElement } = render(<ComboboxTest label='Fruits' />)
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened', async () => {
    const { baseElement } = render(<ComboboxTest label='Fruits' />)
    const dropdownButton = baseElement.querySelector('button')!
    fireEvent.click(dropdownButton)
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened and loading', async () => {
    const { baseElement } = render(<ComboboxTest label='Fruits' loading={true} />)
    const dropdownButton = baseElement.querySelector('button')!
    fireEvent.click(dropdownButton)
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened with add-item', async () => {
    const { baseElement } = render(
      <ComboboxTest label='Fruits' items={[]} createNewItem={() => ({ value: 1, label: '' })} />
    )
    const dropdownButton = baseElement.querySelector('button')!
    fireEvent.click(dropdownButton)
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it.each`
    emptyItems
    ${null}
    ${undefined}
    ${[]}
  `('renders correcly when items is empty', ({ emptyItems }) => {
    const { container, queryByText } = render(<ComboboxTest items={emptyItems} />)

    const input = container.querySelector('input')!
    fireEvent.focus(input)

    expect(queryByText(en.select.emptyItem)).toBeTruthy()
    expect(container).toMatchSnapshot()
  })
})

describe('async loading', () => {
  it('should NOT call "loadItems" when mounted', async () => {
    const loadItems = jest.fn(() => Promise.resolve(['Item 1', 'Item 2']))
    render(<Combobox items={loadItems} />)
    expect(loadItems).not.toHaveBeenCalledWith()
  })

  it('should call "loadItems" on first interaction', async () => {
    const loadItems = jest.fn(() => Promise.resolve(['Item 1', 'Item 2']))
    const { container } = render(<Combobox items={loadItems} itemToString={(item) => item} />)

    container.querySelector('input')!.focus()
    await act(() => waait(300))
    expect(loadItems).not.toHaveBeenCalledWith()

    await act(() => waait(300))
    expect(loadItems).toHaveBeenCalledWith('')
  })
})

describe('select custom components', () => {
  it('renders correcly with custom components correctly', async () => {
    const { baseElement } = render(<ComboboxWithCustomComponentsTest />)
    const dropdownButton = baseElement.querySelector('button')!
    fireEvent.click(dropdownButton)
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it('should render only the list', async () => {
    const { container, findByTestId } = render(<ComboboxTest items={fruits} />)

    const input = container.querySelector('input')!
    fireEvent.focus(input)

    const dropdown = await findByTestId('menu')
    const ul = dropdown.firstElementChild!
    expect(ul.childElementCount).toBe(fruits.length)
  })

  it('should render PrependItem component and list only', async () => {
    const { container, findByTestId } = render(
      <ComboboxWithCustomComponentsTest
        items={fruits}
        components={{
          PrependItem: () => <CustomComponent data-testid='prepend-item'>Prepend item</CustomComponent>,
        }}
      />
    )

    const input = container.querySelector('input')!
    fireEvent.focus(input)

    const dropdown = await findByTestId('menu')
    const ul = dropdown.firstElementChild!
    expect(ul.childElementCount).toBe(fruits.length + 1)
    expect(ul.firstElementChild?.getAttribute('data-testid')).toEqual('prepend-item')
  })

  it('should render AppendItem component and list only', async () => {
    const { container, findByTestId } = render(
      <ComboboxWithCustomComponentsTest
        items={fruits}
        components={{
          AppendItem: () => <CustomComponent data-testid='append-item'>Append item</CustomComponent>,
        }}
      />
    )

    const input = container.querySelector('input')!
    fireEvent.focus(input)

    const dropdown = await findByTestId('menu')
    const ul = dropdown.firstElementChild!
    expect(ul.childElementCount).toBe(fruits.length + 1)
    expect(ul.lastElementChild?.getAttribute('data-testid')).toEqual('append-item')
  })

  it('should render both AppendItem and PrependItem components and list', async () => {
    const { container, findByTestId } = render(
      <ComboboxWithCustomComponentsTest
        items={fruits}
        components={{
          PrependItem: () => <CustomComponent data-testid='prepend-item'>Prepend item</CustomComponent>,
          AppendItem: () => <CustomComponent data-testid='append-item'>Append item</CustomComponent>,
        }}
      />
    )

    const input = container.querySelector('input')!
    fireEvent.focus(input)

    const dropdown = await findByTestId('menu')
    const ul = dropdown.firstElementChild!
    expect(ul.childElementCount).toBe(fruits.length + 2)
    expect(ul.firstElementChild?.getAttribute('data-testid')).toEqual('prepend-item')
    expect(ul.lastElementChild?.getAttribute('data-testid')).toEqual('append-item')
  })
})

describe('emptyItem', () => {
  test.each`
    async
    ${true}
    ${false}
  `('should NOT render when items is set', async ({ async }) => {
    const { container, queryByText } = render(<ComboboxTest items={fruits} async={async} />)

    const input = container.querySelector('input')!
    fireEvent.focus(input)

    await act(() => waait(asyncDelay))

    expect(queryByText(en.select.emptyItem)).toBeFalsy()
  })
  it('should NOT render when createNewItem is set', () => {
    const createNewItem = jest.fn((text) => ({ value: -1, label: text }))
    const { queryByText } = render(<ComboboxTest createNewItem={createNewItem} open />)

    expect(queryByText(en.select.emptyItem)).toBeFalsy()
  })
  it('should NOT render when loading is true', () => {
    const { container, queryByText } = render(<ComboboxTest loading />)

    const input = container.querySelector('input')!
    fireEvent.focus(input)

    expect(queryByText(en.select.emptyItem)).toBeFalsy()
  })
})
