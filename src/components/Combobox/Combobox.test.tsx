import React from 'react'
import { act, render, fireEvent, RenderResult, getByTestId } from '@testing-library/react'
import matchSorter from 'match-sorter'
import waait from 'waait'
import { Text } from '../Text'
import { useTheme } from '../../styles'
import { HFlow } from '../HFlow'
import { Button } from '../Button'
import { ComboboxMenuItem } from './ComboboxMenuComponents'
import { Combobox, ComboboxProps } from './Combobox'

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

const asyncDelay = 1000
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

const itemToString = (item: Fruit) => item.label

const ComboboxTest = (props: Partial<ComboboxProps<Fruit>> & { async?: boolean }) => (
  <Combobox<typeof fruits[0]>
    items={props.async ? loadFruitsAsync : fruits}
    itemToString={itemToString}
    debounceMilliseconds={0}
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

const ComboboxWithCutomComponentsTest = (props: Partial<ComboboxProps<Fruit>> & { action?: () => void }) => (
  <Combobox<typeof fruits[0]>
    label='Fruit'
    name='fruit'
    items={fruits}
    itemToString={itemToString}
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
  let baseElement: RenderResult['baseElement']
  await act(async () => {
    const result = render(<ComboboxTest label='Fruits' async={async} />)
    baseElement = result.baseElement
  })
  const combobox = baseElement.querySelector('[role="combobox"]')
  const label = baseElement.querySelector('label')
  const input = baseElement.querySelector('input')
  const listbox = baseElement.querySelector('[role="listbox"]')
  const dropdownButton = baseElement.querySelector('button')

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

  await act(async () => {
    fireEvent.click(dropdownButton)
  })
  expect(combobox).toHaveAttribute('aria-expanded', 'true')
  await act(() => waait(asyncDelay))
  expect(listbox.querySelector('[aria-selected]')).toBeTruthy()
})

test.each`
  async
  ${true}
  ${false}
`('opens menu when input is focused and only when `openOnFocus` prop is true (async: $async)', async ({ async }) => {
  let baseElement: RenderResult['baseElement']
  let rerender: RenderResult['rerender']
  await act(async () => {
    const result = render(<ComboboxTest async={async} />)
    baseElement = result.baseElement
    rerender = result.rerender
  })
  const input = baseElement.querySelector('input')

  // initial state has closed menu
  expect(baseElement.querySelector('ul')).toBeFalsy()

  // focus input to open menu
  await act(async () => {
    fireEvent.focus(input)
  })
  expect(baseElement.querySelector('ul')).toBeTruthy()

  // blur input to close menu
  await act(async () => {
    fireEvent.blur(input)
  })
  expect(baseElement.querySelector('ul')).toBeFalsy()
  // rerenders switching prop
  await act(async () => rerender(<ComboboxTest openOnFocus={false} />))

  // focus input and now menu should not be open
  await act(async () => {
    fireEvent.focus(input)
  })
  expect(baseElement.querySelector('ul')).toBeFalsy()
})

it('shows placeholder when specified', async () => {
  let baseElement: RenderResult['baseElement']
  const placeholder = 'test placeholder'
  await act(async () => {
    const result = render(<ComboboxTest placeholder={placeholder} />)
    baseElement = result.baseElement
  })
  const input = baseElement.querySelector('input')

  expect(input).toHaveAttribute('placeholder', placeholder)
})

it('does not show placeholder when not specified', async () => {
  let baseElement: RenderResult['baseElement']
  await act(async () => {
    const result = render(<ComboboxTest />)
    baseElement = result.baseElement
  })
  const input = baseElement.querySelector('input')

  expect(input).not.toHaveAttribute('placeholder')
})

it.each`
  async
  ${true}
  ${false}
`('clears selection when "Clear" is clicked (async: $async)', async ({ async }) => {
  let baseElement: RenderResult['baseElement']
  await act(async () => {
    const result = render(<ComboboxTest clearable={true} async={async} />)
    baseElement = result.baseElement
  })
  const input = baseElement.querySelector('input')

  const dropdownButton = baseElement.querySelector('button')
  //Opens menu
  await act(async () => {
    fireEvent.click(dropdownButton)
  })

  await act(() => waait(asyncDelay))

  const option = baseElement.querySelector('li').firstChild

  //Selects item
  await act(async () => {
    fireEvent.click(option)
  })

  expect(input).toHaveValue(option.textContent)

  const clearButton = baseElement.querySelector('[title="Clear"]')

  //Clears value and focus out
  await act(async () => {
    fireEvent.click(clearButton)
  })
  await act(async () => {
    fireEvent.blur(input)
  })

  await act(() => waait(asyncDelay))

  //Checks if cleared
  expect(input).not.toHaveValue()
})

it('enters error state', async () => {
  let baseElement: RenderResult['baseElement']
  const errorMessage = 'error'
  await act(async () => {
    const result = render(<ComboboxTest error={errorMessage} />)
    baseElement = result.baseElement
  })
  const input = baseElement.querySelector('input')

  expect(input).toHaveAttribute('aria-invalid', 'true')
  expect(input).toHaveAttribute('aria-errormessage')

  const errorMessageContainer = baseElement.querySelector(`#${input.getAttribute('aria-errormessage')}`)
  expect(errorMessageContainer).toHaveTextContent(errorMessage)
})

it('respects menu min-width', async () => {
  let baseElement: RenderResult['baseElement']

  await act(async () => {
    const result = render(<ComboboxTest menuMinWidth={1000} />)
    baseElement = result.baseElement
  })

  const dropdownButton = baseElement.querySelector('button')
  //Opens menu
  await act(async () => {
    fireEvent.click(dropdownButton)
  })

  const menu = getByTestId(baseElement, 'menu')

  expect(menu).toHaveStyle('min-width: 1000px')
})

it.each`
  async
  ${true}
  ${false}
`('should trigger onChange (async: $async)', async ({ async }) => {
  let baseElement: RenderResult['baseElement']

  let selection = null

  await act(async () => {
    const result = render(<ComboboxTest onChange={(nValue) => (selection = nValue)} async={async} />)
    baseElement = result.baseElement
  })

  expect(selection).toBeNull()

  //Opens menu
  const dropdownButton = baseElement.querySelector('button')
  await act(async () => {
    fireEvent.click(dropdownButton)
  })

  await act(() => waait(asyncDelay))

  //Selects first item
  const option = baseElement.querySelector('li').firstChild
  await act(async () => {
    fireEvent.click(option)
  })

  expect(selection).toBe(fruits[0])
})

it.each`
  async
  ${true}
  ${false}
`('should trigger onFilterChange (async: $async)', async ({ async }) => {
  let baseElement: RenderResult['baseElement']

  let filter = ''

  await act(async () => {
    const result = render(<ComboboxTest onFilterChange={(nValue) => (filter = nValue)} async={async} />)
    baseElement = result.baseElement
  })

  expect(filter).toBe('')

  const input = baseElement.querySelector('input')
  fireEvent.change(input, { target: { value: 'filter' } })

  expect(filter).toBe('filter')
})

it('should trigger onFocus', async () => {
  let baseElement: RenderResult['baseElement']

  const onFocus = jest.fn()

  await act(async () => {
    const result = render(<ComboboxTest onFocus={onFocus} />)
    baseElement = result.baseElement
  })

  const input = baseElement.querySelector('input')
  fireEvent.focus(input)
  expect(onFocus).toBeCalled()
})

it('should trigger onBlur', async () => {
  let baseElement: RenderResult['baseElement']

  const onBlur = jest.fn()

  await act(async () => {
    const result = render(<ComboboxTest onBlur={onBlur} />)
    baseElement = result.baseElement
  })

  const input = baseElement.querySelector('input')
  fireEvent.focus(input)
  fireEvent.blur(input)
  expect(onBlur).toBeCalled()
})

it.each`
  async
  ${true}
  ${false}
`('should clear input if the value is not valid (async: $async)', async ({ async }) => {
  let baseElement: RenderResult['baseElement']

  await act(async () => {
    const result = render(<ComboboxTest async={async} />)
    baseElement = result.baseElement
  })

  const input = baseElement.querySelector('input')
  await act(async () => {
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'not a fruit' } })
    fireEvent.blur(input)
  })
  expect(input).not.toHaveValue()
})

it.each`
  async
  ${true}
  ${false}
`('should clear input if the value is not valid after select item (async: $async)', async ({ async }) => {
  let baseElement: RenderResult['baseElement']
  await act(async () => {
    const result = render(<ComboboxTest clearable={true} async={async} />)
    baseElement = result.baseElement
  })
  const input = baseElement.querySelector('input')

  const dropdownButton = baseElement.querySelector('button')
  //Opens menu
  await act(async () => {
    fireEvent.click(dropdownButton)
  })

  await act(() => waait(asyncDelay))

  const option = baseElement.querySelector('li').firstChild

  //Selects item
  await act(async () => {
    fireEvent.click(option)
  })

  expect(input).toHaveValue(option.textContent)

  await act(async () => {
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'not a fruit' } })
    fireEvent.blur(input)
  })

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

    let baseElement: RenderResult['baseElement']
    let selection = null
    await act(async () => {
      const result = render(
        <ComboboxTest
          clearable={true}
          createNewItem={createNewItem}
          onChange={(item) => {
            selection = item
          }}
          async={async}
        />
      )
      baseElement = result.baseElement
    })
    const input = baseElement.querySelector('input')

    //Types item not in the list
    await act(async () => {
      fireEvent.focus(input)
      fireEvent.change(input, { target: { value: 'not a fruit in the list' } })
      fireEvent.blur(input)
    })

    expect(selection).toStrictEqual({ value: 1, label: 'not a fruit in the list' })
    expect(input).toHaveValue('not a fruit in the list')

    //Searches for first item
    await act(async () => {
      fireEvent.focus(input)
      fireEvent.change(input, { target: { value: fruits[0].label } })
    })

    await act(() => waait(asyncDelay))

    //Selects first item
    const option = baseElement.querySelector('li').firstChild
    await act(async () => {
      fireEvent.click(option)
    })

    expect(selection).toBe(fruits[0])
  }
)

it.each`
  async
  ${true}
  ${false}
`('should accept a value as parameter (async: $async)', async ({ async }) => {
  let baseElement: RenderResult['baseElement']

  await act(async () => {
    const result = render(<ComboboxTest value={fruits[1]} async={async} />)
    baseElement = result.baseElement
  })

  const input = baseElement.querySelector('input')

  expect(input).toHaveValue(itemToString(fruits[1]))

  //Opens menu
  const dropdownButton = baseElement.querySelector('button')
  await act(async () => {
    fireEvent.click(dropdownButton)
  })

  await act(() => waait(asyncDelay))

  const option = baseElement.querySelector('li')

  expect(option).toHaveTextContent(itemToString(fruits[1]))
})

it('should accept actions inside children prop', async () => {
  const click = jest.fn()
  let baseElement: RenderResult['baseElement']
  let findByTestId: RenderResult['findByTestId']
  await act(async () => {
    const result = render(<ComboboxWithCutomComponentsTest action={click} />)
    baseElement = result.baseElement
    findByTestId = result.findByTestId
  })

  const dropdownButton = baseElement.querySelector('button')
  await act(async () => {
    fireEvent.click(dropdownButton)
  })

  await act(async () => {
    fireEvent.click(await findByTestId('action-btn'))
  })

  expect(click).toHaveBeenCalledTimes(1)
})

describe('rendering', () => {
  it('renders correcly closed', async () => {
    let baseElement: RenderResult['baseElement']
    await act(async () => {
      const result = render(<ComboboxTest label='Fruits' />)
      baseElement = result.baseElement
    })
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened', async () => {
    let baseElement: RenderResult['baseElement']
    await act(async () => {
      const result = render(<ComboboxTest label='Fruits' />)
      baseElement = result.baseElement
    })
    const dropdownButton = baseElement.querySelector('button')
    await act(async () => {
      fireEvent.click(dropdownButton)
    })
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened and loading', async () => {
    let baseElement: RenderResult['baseElement']
    await act(async () => {
      const result = render(<ComboboxTest label='Fruits' loading={true} />)
      baseElement = result.baseElement
    })
    const dropdownButton = baseElement.querySelector('button')
    await act(async () => {
      fireEvent.click(dropdownButton)
    })
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly with custom components correctly', async () => {
    let baseElement: RenderResult['baseElement']
    await act(async () => {
      const result = render(<ComboboxWithCutomComponentsTest />)
      baseElement = result.baseElement
    })
    const dropdownButton = baseElement.querySelector('button')
    await act(async () => {
      fireEvent.click(dropdownButton)
    })
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened with add-item', async () => {
    let baseElement: RenderResult['baseElement']
    await act(async () => {
      const result = render(<ComboboxTest label='Fruits' items={[]} createNewItem={() => ({ value: 1, label: '' })} />)
      baseElement = result.baseElement
    })
    const dropdownButton = baseElement.querySelector('button')
    await act(async () => {
      fireEvent.click(dropdownButton)
    })
    expect(baseElement).toMatchSnapshot()
  })
})

describe('async loading', () => {
  it('should NOT call "loadItems" when mounted', async () => {
    const loadItems = jest.fn(() => Promise.resolve(['Item 1', 'Item 2']))
    await act(async () => {
      render(<Combobox items={loadItems} />)
    })
    expect(loadItems).not.toHaveBeenCalledWith()
  })

  it('should call "loadItems" on first interaction', async () => {
    const loadItems = jest.fn(() => Promise.resolve(['Item 1', 'Item 2']))
    let container = null
    await act(async () => {
      const { container: cnt } = render(<Combobox items={loadItems} itemToString={(item) => item} />)
      container = cnt
    })

    container.querySelector('input').focus()
    await act(() => waait(300))
    expect(loadItems).not.toHaveBeenCalledWith()

    await act(() => waait(300))
    expect(loadItems).toHaveBeenCalledWith('')
  })
})
