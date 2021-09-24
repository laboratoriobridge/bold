import React from 'react'
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

const asyncDelay = 1000
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
    multiple
    components={{
      SelectedItem: (props) => <ComboboxMultiselectSelectedItem {...props} data-testid={`${props.children}`} />,
    }}
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
    multiple
    components={{
      SelectedItem: (props) => (
        <ComboboxMultiselectSelectedItem onRemove={props.onRemove}>Selected item</ComboboxMultiselectSelectedItem>
      ),
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
  await act(async () => {
    fireEvent.focus(input)
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
`('shows/hides selection when they are clicked (async: $async)', async ({ async }) => {
  let baseElement: RenderResult['baseElement']
  let findByTestId: RenderResult['findByTestId']
  await act(async () => {
    const result = render(<ComboboxTest async={async} />)
    baseElement = result.baseElement
    findByTestId = result.findByTestId
  })
  const input = baseElement.querySelector('input')
  //Opens menu
  await act(async () => {
    fireEvent.focus(input)
  })

  await act(() => waait(asyncDelay))

  const options = baseElement.querySelectorAll('li')

  //Selects items
  await act(async () => {
    fireEvent.click(options[0])
  })

  await act(async () => {
    fireEvent.click(options[4])
  })

  const selected1 = await findByTestId(options[0].textContent)
  expect(selected1).toBeInTheDocument()

  const selected2 = await findByTestId(options[4].textContent)
  expect(selected2).toBeInTheDocument()

  await act(async () => {
    fireEvent.click(options[0].firstChild)
  })

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
  let baseElement: RenderResult['baseElement']
  let findByTestId: RenderResult['findByTestId']
  await act(async () => {
    const result = render(<ComboboxTest clearable={true} async={async} />)
    baseElement = result.baseElement
    findByTestId = result.findByTestId
  })
  const input = baseElement.querySelector('input')
  //Opens menu
  await act(async () => {
    fireEvent.focus(input)
  })

  await act(() => waait(asyncDelay))

  const options = baseElement.querySelectorAll('li')

  //Selects items
  await act(async () => {
    fireEvent.click(options[0])
  })

  await act(async () => {
    fireEvent.click(options[1])
  })

  const selected1 = await findByTestId(options[0].textContent)
  expect(selected1).toBeInTheDocument()

  const selected2 = await findByTestId(options[1].textContent)
  expect(selected2).toBeInTheDocument()

  const clearButton = baseElement.querySelector('[title="Clear"]')
  expect(clearButton).toBeInTheDocument()

  //Clears value and focus out
  await act(async () => {
    fireEvent.click(clearButton)
  })

  await act(() => waait(asyncDelay))

  //Checks if cleared
  const cleared1 = baseElement.querySelector(`[data-testid="${options[0].textContent}"]`)
  expect(cleared1).toBeNull()
  const cleared2 = baseElement.querySelector(`[data-testid="${options[1].textContent}"]`)
  expect(cleared2).toBeNull()
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

  const input = baseElement.querySelector('input')
  //Opens menu
  await act(async () => {
    fireEvent.focus(input)
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

  const input = baseElement.querySelector('input')
  //Opens menu
  await act(async () => {
    fireEvent.focus(input)
  })

  await act(() => waait(asyncDelay))

  //Selects first 2 items
  const options = baseElement.querySelectorAll('li')
  await act(async () => {
    fireEvent.click(options[0])
  })
  await act(async () => {
    fireEvent.click(options[2])
  })

  expect(selection).toStrictEqual([fruits[0], fruits[2]])
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
  })
  await act(async () => {
    fireEvent.change(input, { target: { value: 'not a fruit' } })
  })
  await act(async () => {
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
          onChange={(items) => {
            selection = items
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
    })
    await act(async () => {
      fireEvent.change(input, { target: { value: 'not a fruit in the list' } })
    })
    await act(() => waait(asyncDelay))
    await act(async () => {
      fireEvent.blur(input)
    })

    expect(selection).toStrictEqual([{ value: 1, label: 'not a fruit in the list' }])

    //Searches for first item
    await act(async () => {
      fireEvent.focus(input)
    })
    await act(async () => {
      fireEvent.change(input, { target: { value: fruits[0].label } })
    })
    await act(() => waait(2 * asyncDelay))

    //Selects first item
    const option = baseElement.querySelector('li')
    await act(async () => {
      fireEvent.click(option)
    })

    expect(selection).toStrictEqual([{ value: 1, label: 'not a fruit in the list' }])
  }
)

it.each`
  async
  ${true}
  ${false}
`('should accept a value as parameter (async: $async)', async ({ async }) => {
  let findByTestId: RenderResult['findByTestId']

  await act(async () => {
    const result = render(<ComboboxTest value={[fruits[1], fruits[3]]} async={async} />)
    findByTestId = result.findByTestId
  })

  const selected1 = await findByTestId(fruits[1].label)
  const selected2 = await findByTestId(fruits[3].label)
  expect(selected1).toBeInTheDocument()
  expect(selected2).toBeInTheDocument()
})

it('should accept actions inside children prop', async () => {
  const click = jest.fn()
  let baseElement: RenderResult['baseElement']
  let findByTestId: RenderResult['findByTestId']
  await act(async () => {
    const result = render(<ComboboxWithCustomComponentsTest action={click} />)
    baseElement = result.baseElement
    findByTestId = result.findByTestId
  })

  const input = baseElement.querySelector('input')
  //Opens menu
  await act(async () => {
    fireEvent.focus(input)
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
    const input = baseElement.querySelector('input')
    //Opens menu
    await act(async () => {
      fireEvent.focus(input)
    })
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened and loading', async () => {
    let baseElement: RenderResult['baseElement']
    await act(async () => {
      const result = render(<ComboboxTest label='Fruits' loading={true} />)
      baseElement = result.baseElement
    })
    const input = baseElement.querySelector('input')
    //Opens menu
    await act(async () => {
      fireEvent.focus(input)
    })
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly with custom components correctly', async () => {
    let baseElement: RenderResult['baseElement']
    await act(async () => {
      const result = render(<ComboboxWithCustomComponentsTest />)
      baseElement = result.baseElement
    })
    const input = baseElement.querySelector('input')
    //Opens menu
    await act(async () => {
      fireEvent.focus(input)
    })
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened with add-item', async () => {
    let baseElement: RenderResult['baseElement']
    await act(async () => {
      const result = render(<ComboboxTest label='Fruits' items={[]} createNewItem={() => ({ value: 1, label: '' })} />)
      baseElement = result.baseElement
    })
    const input = baseElement.querySelector('input')
    //Opens menu
    await act(async () => {
      fireEvent.focus(input)
    })
    await act(() => waait(asyncDelay))
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
