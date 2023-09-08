import React, { forwardRef } from 'react'
import { act, render, fireEvent, RenderResult, getByTestId } from '@testing-library/react'
import matchSorter from 'match-sorter'
import waait from 'waait'
import { Text } from '../Text'
import { useTheme } from '../../styles'
import { HFlow } from '../HFlow'
import { Button } from '../Button'
import { ComboboxMenuItem, ComboboxMultiselectSelectedItem } from './ComboboxMenuComponents'
import { Combobox } from './Combobox'
import { ComboboxMultiselect, ComboboxMultiselectProps } from './ComboboxMultiselect'

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

const itemToString = (item: Fruit) => item?.label

const asyncDelay = 10
const loadFruitsAsync = (query: string): Promise<Fruit[]> => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          matchSorter<Fruit>(fruits, query, { keys: [(item) => item?.label] })
        ),
      asyncDelay
    )
  })
}

const ComboboxTest = (props: Partial<ComboboxMultiselectProps<Fruit>> & { async?: boolean }) => (
  <ComboboxMultiselect<typeof fruits[0]>
    items={props.async ? loadFruitsAsync : fruits}
    itemToString={itemToString}
    debounceMilliseconds={0}
    itemIsEqual={(a, b) => a?.value === b?.value}
    openOnFocus
    loading={false}
    components={{
      SelectedItem: forwardRef((props) => (
        <ComboboxMultiselectSelectedItem {...props} data-testid={`${props.children}`} />
      )),
    }}
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
  props: Partial<ComboboxMultiselectProps<Fruit>> & { action?: () => void; onRemove?: () => void }
) => (
  <ComboboxMultiselect<typeof fruits[0]>
    label='Fruit'
    name='fruit'
    items={fruits}
    itemToString={itemToString}
    debounceMilliseconds={0}
    itemIsEqual={(a, b) => a.value === b.value}
    openOnFocus
    loading={false}
    inputId={'test-input-id'}
    labelId={'test-label-id'}
    menuId={'test-menu-id'}
    getItemId={(index) => `test-item-id-${index}`}
    components={{
      SelectedItem: forwardRef((props) => (
        <ComboboxMultiselectSelectedItem onRemove={props.onRemove}>Selected item</ComboboxMultiselectSelectedItem>
      )),
      Item: (props) => (
        <ComboboxMenuItem {...props}>
          <Text color='success'>Custom {props.itemToString(props.item)}</Text>
        </ComboboxMenuItem>
      ),
      PrependItem: (props) => <CustomComponent>Prepend item</CustomComponent>,
      EmptyItem: (props) => <CustomComponent>Empty item</CustomComponent>,
      CreateItem: (props) => <CustomComponent>Create item</CustomComponent>,
      LoadingItem: (props) => <CustomComponent>Loading item...</CustomComponent>,
      AppendItem: (propsItem) => (
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

  expect(listbox).toHaveAttribute('id')
  expect(listbox).toHaveAttribute('aria-labelledby', label.getAttribute('id'))

  //Opens menu
  fireEvent.focus(input)
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
`('shows/hides selection when they are clicked (async: $async)', async ({ async }) => {
  const { baseElement, findByTestId } = render(<ComboboxTest async={async} />)

  const input = baseElement.querySelector('input')!
  //Opens menu
  fireEvent.focus(input)

  await act(() => waait(asyncDelay))

  const options = baseElement.querySelectorAll('li')

  //Selects items
  fireEvent.click(options[0])

  fireEvent.click(options[4])

  const selected1 = await findByTestId(options[0].textContent!)
  expect(selected1).toBeInTheDocument()

  const selected2 = await findByTestId(options[4].textContent!)
  expect(selected2).toBeInTheDocument()

  fireEvent.click(options[0].firstChild!)

  //Checks if cleared
  const notCleared = baseElement.querySelector(`[data-testid="${options[4].textContent}"]`)
  expect(notCleared).not.toBeNull()
  const cleared = baseElement.querySelector(`[data-testid="${options[0].textContent}"]`)
  expect(cleared).toBeNull()
})

it.each`
  async
  ${true}
  ${false}
`('clears selection when "Clear" is clicked (async: $async)', async ({ async }) => {
  const { baseElement, findByTestId } = render(<ComboboxTest clearable={true} async={async} />)

  const input = baseElement.querySelector('input')!
  //Opens menu
  fireEvent.focus(input)

  await act(() => waait(asyncDelay))

  const options = baseElement.querySelectorAll('li')

  //Selects items
  fireEvent.click(options[0])

  fireEvent.click(options[1])

  const selected1 = await findByTestId(options[0].textContent!)
  expect(selected1).toBeInTheDocument()

  const selected2 = await findByTestId(options[1].textContent!)
  expect(selected2).toBeInTheDocument()

  const clearButton = baseElement.querySelector('[title="Clear"]')
  expect(clearButton).toBeInTheDocument()

  //Clears value and focus out
  fireEvent.click(clearButton!)

  await act(() => waait(asyncDelay))

  //Checks if cleared
  const cleared1 = baseElement.querySelector(`[data-testid="${options[0].textContent}"]`)
  expect(cleared1).toBeNull()
  const cleared2 = baseElement.querySelector(`[data-testid="${options[1].textContent}"]`)
  expect(cleared2).toBeNull()
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

  const input = baseElement.querySelector('input')!
  //Opens menu
  fireEvent.focus(input)

  const menu = getByTestId(baseElement, 'menu')

  expect(menu).toHaveStyle('min-width: 1000px')
})

it.each`
  async
  ${true}
  ${false}
`('should trigger onChange (async: $async)', async ({ async }) => {
  let selection: Fruit[] = []

  const { baseElement } = render(<ComboboxTest onChange={(nValue) => (selection = nValue)} async={async} />)

  expect(selection).toStrictEqual([])

  const input = baseElement.querySelector('input')!
  //Opens menu
  fireEvent.focus(input)

  await act(() => waait(asyncDelay))

  //Selects first 2 items
  const options = baseElement.querySelectorAll('li')
  fireEvent.click(options[0])
  fireEvent.click(options[2])

  expect(selection).toStrictEqual([fruits[0], fruits[2]])
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
`('should accept a value as parameter (async: $async)', async ({ async }) => {
  const { findByTestId } = render(<ComboboxTest value={[fruits[1], fruits[3]]} async={async} />)

  const selected1 = await findByTestId(fruits[1].label)
  const selected2 = await findByTestId(fruits[3].label)
  expect(selected1).toBeInTheDocument()
  expect(selected2).toBeInTheDocument()
})

it('should accept actions inside children prop', async () => {
  const click = jest.fn()
  const { baseElement, findByTestId } = render(<ComboboxWithCustomComponentsTest action={click} />)

  const input = baseElement.querySelector('input')!
  //Opens menu
  fireEvent.focus(input)

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

  // blur input
  fireEvent.blur(input)
  expect(baseElement.querySelector('ul')).toBeTruthy()

  // rerenders switching prop
  await act(async () => rerender(<ComboboxTest async={async} open={false} />))
  expect(baseElement.querySelector('ul')).toBeFalsy()

  // focus input
  fireEvent.focus(input)
  expect(baseElement.querySelector('ul')).toBeFalsy()
})

describe('rendering', () => {
  it('renders correcly closed', async () => {
    const { baseElement } = render(<ComboboxTest label='Fruits' />)

    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened', async () => {
    const { baseElement } = render(<ComboboxTest label='Fruits' />)

    const input = baseElement.querySelector('input')!
    //Opens menu
    fireEvent.focus(input)
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened and loading', async () => {
    const { baseElement } = render(<ComboboxTest label='Fruits' loading={true} />)

    const input = baseElement.querySelector('input')!
    //Opens menu
    fireEvent.focus(input)
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly with custom components correctly', async () => {
    const { baseElement } = render(<ComboboxWithCustomComponentsTest />)

    const input = baseElement.querySelector('input')!
    //Opens menu
    fireEvent.focus(input)
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
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

    container.querySelector('input')?.focus()
    await act(() => waait(300))
    expect(loadItems).not.toHaveBeenCalledWith()

    await act(() => waait(300))
    expect(loadItems).toHaveBeenCalledWith('')
  })
})
