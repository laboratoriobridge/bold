import React from 'react'
import { act, render, fireEvent, getByTestId, waitFor } from '@testing-library/react'
import matchSorter from 'match-sorter'
import waait from 'waait'
import { Text } from '../Text'
import { useTheme } from '../../styles'
import { HFlow } from '../HFlow'
import { Button } from '../Button'
import { ComboboxInline, ComboboxInlineProps } from '../Combobox/ComboboxInline'
import locale from '../../i18n/locales/en-US'
import { ComboboxMenuItem } from './ComboboxMenuComponents'
import { Combobox } from './Combobox'

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

const ComboboxInlineTest = (props: Partial<ComboboxInlineProps<Fruit>> & { async?: boolean }) => (
  <ComboboxInline<typeof fruits[0]>
    items={props.async ? loadFruitsAsync : fruits}
    itemToString={itemToString}
    debounceMilliseconds={0}
    loading={false}
    defaultButtonText={'Button text'}
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

const ComboboxInlineWithCustomComponentsTest = (
  props: Partial<ComboboxInlineProps<Fruit>> & { action?: () => void }
) => (
  <ComboboxInline<typeof fruits[0]>
    defaultButtonText='Fruit'
    name='fruit'
    items={fruits}
    itemToString={itemToString}
    loading={false}
    debounceMilliseconds={0}
    getItemId={(index) => `test-item-id-${index}`}
    components={{
      Item: (props) => (
        <ComboboxMenuItem {...props}>
          <Text color='success'>Custom {props.itemToString(props.item)}</Text>
        </ComboboxMenuItem>
      ),
      PrependItem: () => <CustomComponent>Prepend item</CustomComponent>,
      EmptyItem: () => <CustomComponent>Empty item</CustomComponent>,
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

const waitForOption = (baseElement: HTMLElement) =>
  waitFor(() => {
    const option = baseElement.querySelector('li')?.firstChild

    expect(option).toBeTruthy()
    expect(option?.textContent).not.toEqual(locale.select.emptyItem)
    expect(option?.textContent).not.toEqual(locale.select.loadingItem)
    expect(option?.textContent).not.toEqual(locale.select.createItem)

    return option!
  })

test.each`
  async
  ${true}
  ${false}
`('has aria-compliant attributes (async: $async)', async ({ async }) => {
  // From https://w3c.github.io/aria-practices/examples/combobox/combobox-select-only.html

  const { baseElement } = render(<ComboboxInlineTest async={async} defaultButtonText='Fruits' />)

  const button = baseElement.querySelector('button')!
  const label = baseElement.querySelector('label')
  const listbox = baseElement.querySelector('[role="listbox"]')

  expect(button).toHaveAttribute('aria-controls', listbox?.getAttribute('id'))
  expect(button).toHaveAttribute('aria-expanded', 'false')
  expect(button).toHaveAttribute('aria-haspopup', 'listbox')
  expect(button).toHaveAttribute('aria-labelledby', label?.getAttribute('id'))

  expect(label).toHaveAttribute('id')
  expect(label).toHaveTextContent('Fruits')

  expect(listbox).toHaveAttribute('id')
  expect(listbox).toHaveAttribute('aria-labelledby', label?.getAttribute('id'))
  expect(listbox).toHaveAttribute('tabindex', '-1')

  fireEvent.click(button)

  expect(button).toHaveAttribute('aria-expanded', 'true')
  fireEvent.keyDown(button, { key: 'ArrowDown' })

  await waitFor(() => {
    const activeItem = listbox?.querySelector('[aria-selected]')
    expect(activeItem).not.toBeNull()
  })
})

it('should focus the searchbox field when opened', async () => {
  const { baseElement } = render(<ComboboxInlineTest />)

  const button = baseElement.querySelector('button')!
  fireEvent.click(button)

  expect(document.activeElement).toEqual(baseElement.querySelector('[role="searchbox"]'))
})

test.each`
  showSearchInput
  ${true}
  ${false}
`('should show the searchbox field only when showSearchBox is true', async ({ showSearchBox }) => {
  const { baseElement } = render(<ComboboxInlineTest showSearchBox={showSearchBox} />)

  const button = baseElement.querySelector('button')!
  fireEvent.click(button)

  const searchBox = baseElement.querySelector('[role="searchbox"]')
  if (showSearchBox) expect(searchBox).toBeNull()
  else expect(searchBox).not.toBeNull()
})

it('enters error state', async () => {
  const errorMessage = 'error'

  const { baseElement } = render(<ComboboxInlineTest error={errorMessage} />)

  const listbox = baseElement.querySelector('[role="listbox"]')!

  expect(listbox).toHaveAttribute('aria-invalid', 'true')
  expect(listbox).toHaveAttribute('aria-errormessage')

  const errorMessageContainer = baseElement.querySelector(`#${listbox.getAttribute('aria-errormessage')}`)
  expect(errorMessageContainer).toHaveTextContent(errorMessage)
})

it('respects menu min-width', async () => {
  const { baseElement } = render(<ComboboxInlineTest menuMinWidth={1000} />)

  const button = baseElement.querySelector('button')!
  //Opens menu
  fireEvent.click(button)

  const menu = getByTestId(baseElement, 'menu')

  expect(menu).toHaveStyle('min-width: 1000px')
})

it.each`
  async
  ${true}
  ${false}
`('should trigger onChange (async: $async)', async ({ async }) => {
  let selection: Fruit | null = null

  const { baseElement } = render(<ComboboxInlineTest onChange={(nValue) => (selection = nValue)} async={async} />)

  expect(selection).toBeNull()

  //Opens menu
  const button = baseElement.querySelector('button')!
  fireEvent.click(button)

  //Selects first item
  const option = await waitForOption(baseElement)
  fireEvent.click(option)

  expect(selection).toBe(fruits[0])
})

it.each`
  async
  ${true}
  ${false}
`('should trigger onFilterChange (async: $async)', async ({ async }) => {
  let filter = ''

  const { baseElement } = render(<ComboboxInlineTest onFilterChange={(nValue) => (filter = nValue)} async={async} />)

  //Opens menu
  const button = baseElement.querySelector('button')!
  fireEvent.click(button)

  expect(filter).toBe('')

  const searchbox = baseElement.querySelector('[role="searchbox"]')!
  fireEvent.change(searchbox, { target: { value: 'filter' } })

  expect(filter).toBe('filter')
})

it('should trigger onFocus', async () => {
  const onFocus = jest.fn()

  const { baseElement } = render(<ComboboxInlineTest onFocus={onFocus} />)

  const button = baseElement.querySelector('button')!
  fireEvent.focus(button)

  expect(onFocus).toBeCalled()
})

it('should trigger onClick', async () => {
  const onClick = jest.fn()

  const { baseElement } = render(<ComboboxInlineTest onClick={onClick} />)

  const button = baseElement.querySelector('button')!
  fireEvent.click(button)

  expect(onClick).toBeCalled()
})

it('should trigger onBlur', async () => {
  const onBlur = jest.fn()

  const { baseElement } = render(<ComboboxInlineTest onBlur={onBlur} />)

  const button = baseElement.querySelector('button')!
  fireEvent.focus(button)
  fireEvent.blur(button)

  expect(onBlur).toBeCalled()
})

it.each`
  async
  ${true}
  ${false}
`('should accept a value as parameter (async: $async)', async ({ async }) => {
  const { baseElement } = render(<ComboboxInlineTest value={fruits[1]} async={async} />)

  const button = baseElement.querySelector('button')

  expect(button).toHaveTextContent(itemToString(fruits[1]))
})

it('should accept actions inside children prop', async () => {
  const click = jest.fn()

  const { baseElement, findByTestId } = render(<ComboboxInlineWithCustomComponentsTest action={click} />)

  const button = baseElement.querySelector('button')!

  fireEvent.click(button)
  fireEvent.click(await findByTestId('action-btn'))

  expect(click).toHaveBeenCalledTimes(1)
})

test.each`
  async
  ${true}
  ${false}
`('should make the popper content visible on click', async ({ async }) => {
  const { baseElement } = render(<ComboboxInlineTest async={async} />)

  const button = baseElement.querySelector('button')!
  expect(baseElement.querySelector('ul')).toBeFalsy()

  fireEvent.click(button)

  expect(baseElement.querySelector('ul')).toBeTruthy()
})

test.each`
  async
  ${true}
  ${false}
`('should focus the input field when opened', async ({ async }) => {
  const { baseElement } = render(<ComboboxInlineTest async={async} open />)

  const button = baseElement.querySelector('button')!
  fireEvent.click(button)

  expect(document.activeElement).toEqual(baseElement.querySelector('input'))
})

test.each`
  async
  ${true}
  ${false}
`('keeps menu open based on the `open` prop(async: $async)', async ({ async }) => {
  const { baseElement, rerender } = render(<ComboboxInlineTest async={async} open />)

  // initial state has open menu
  expect(baseElement.querySelector('ul')).toBeTruthy()

  const button = baseElement.querySelector('button')!
  fireEvent.click(button)

  expect(baseElement.querySelector('ul')).toBeTruthy()

  //click dropdown button
  fireEvent.click(baseElement)
  expect(baseElement.querySelector('ul')).toBeTruthy()

  // rerenders switching prop
  await act(async () => rerender(<ComboboxInlineTest async={async} open={false} />))
  expect(baseElement.querySelector('ul')).toBeFalsy()

  fireEvent.click(button)

  expect(baseElement.querySelector('ul')).toBeFalsy()
})

//TODO: Re-enable after upgrading Downshift (Issue #822)
describe.skip('rendering', () => {
  it('renders correcly closed', async () => {
    const { baseElement } = render(<ComboboxInlineTest defaultButtonText='Fruits' />)

    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened', async () => {
    const { baseElement } = render(<ComboboxInlineTest defaultButtonText='Fruits' />)

    const button = baseElement.querySelector('button')!

    fireEvent.click(button)

    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened and loading', async () => {
    const { baseElement } = render(<ComboboxInlineTest loading={true} />)

    const button = baseElement.querySelector('button')!
    fireEvent.click(button)

    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly with custom components correctly', async () => {
    const { baseElement } = render(<ComboboxInlineWithCustomComponentsTest />)

    const button = baseElement.querySelector('button')!

    fireEvent.click(button)

    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })
})

describe('async loading', () => {
  it('should NOT call "loadItems" when mounted', async () => {
    const loadItems = jest.fn(() => Promise.resolve(['Item 1', 'Item 2']))

    render(<Combobox inline defaultButtonText='Fruits' items={loadItems} />)

    expect(loadItems).not.toHaveBeenCalledWith()
  })

  it('should call "loadItems" when open', async () => {
    const loadItems = jest.fn(() => Promise.resolve(['Item 1', 'Item 2']))

    const { baseElement } = render(
      <Combobox inline defaultButtonText='Fruits' items={loadItems} itemToString={(item) => item} />
    )

    const button = baseElement.querySelector('button')!
    fireEvent.click(button)

    await act(() => waait(600))
    expect(loadItems).toHaveBeenCalledWith(null)
  })

  it('should call "loadItems" when the filter changes', async () => {
    const loadItems = jest.fn(() => Promise.resolve(['Item 1', 'Item 2']))

    const { baseElement } = render(
      <Combobox inline defaultButtonText='Fruits' items={loadItems} itemToString={(item) => item} />
    )

    const button = baseElement.querySelector('button')!
    fireEvent.click(button)

    const searchbox = baseElement.querySelector('[role="searchbox"]')!
    fireEvent.change(searchbox, { target: { value: 'filter' } })

    await act(() => waait(600))
    expect(loadItems).toHaveBeenCalledWith('filter')
  })
})