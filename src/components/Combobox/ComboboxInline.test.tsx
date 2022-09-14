import React from 'react'
import { act, render, fireEvent, RenderResult, getByTestId } from '@testing-library/react'
import matchSorter from 'match-sorter'
import waait from 'waait'
import { Text } from '../Text'
import { useTheme } from '../../styles'
import { HFlow } from '../HFlow'
import { Button } from '../Button'
import { ComboboxInline, ComboboxInlineProps } from '../Combobox/ComboboxInline'
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
      PrependItem: (props) => <CustomComponent>Prepend item</CustomComponent>,
      EmptyItem: (props) => <CustomComponent>Empty item</CustomComponent>,
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
  // From https://w3c.github.io/aria-practices/examples/combobox/combobox-select-only.html
  let baseElement: RenderResult['baseElement']
  await act(async () => {
    const result = render(<ComboboxInlineTest async={async} defaultButtonText='Fruits' />)
    baseElement = result.baseElement
  })
  const button = baseElement.querySelector('button')
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

  await act(async () => {
    fireEvent.click(button)
  })
  expect(button).toHaveAttribute('aria-expanded', 'true')
  await act(() => waait(asyncDelay))

  await act(async () => {
    fireEvent.keyDown(button, { key: 'ArrowDown' })
  })

  const activeItem = listbox?.querySelector('[aria-selected]')
  expect(activeItem).not.toBeNull()
  expect(listbox).toHaveAttribute('aria-activedescendant', activeItem?.getAttribute('id'))
})

it('should focus the searchbox field when opened', async () => {
  let baseElement: HTMLElement
  await act(async () => {
    const result = render(<ComboboxInlineTest />)
    baseElement = result.container
  })
  const button = baseElement.querySelector('button')
  await act(async () => {
    fireEvent.click(button)
  })
  expect(document.activeElement).toEqual(baseElement.querySelector('[role="searchbox"]'))
})

test.each`
  showSearchInput
  ${true}
  ${false}
`('should show the searchbox field only when showSearchBox is true', async ({ showSearchBox }) => {
  let container: HTMLElement
  await act(async () => {
    const result = render(<ComboboxInlineTest showSearchBox={showSearchBox} />)
    container = result.container
  })
  const button = container.querySelector('button')
  await act(async () => {
    fireEvent.click(button)
  })

  const searchBox = container.querySelector('[role="searchbox"]')
  if (showSearchBox) expect(searchBox).toBeNull()
  else expect(searchBox).not.toBeNull()
})

it('enters error state', async () => {
  let baseElement: RenderResult['baseElement']
  const errorMessage = 'error'
  await act(async () => {
    const result = render(<ComboboxInlineTest error={errorMessage} />)
    baseElement = result.baseElement
  })
  const listbox = baseElement.querySelector('[role="listbox"]')

  expect(listbox).toHaveAttribute('aria-invalid', 'true')
  expect(listbox).toHaveAttribute('aria-errormessage')

  const errorMessageContainer = baseElement.querySelector(`#${listbox.getAttribute('aria-errormessage')}`)
  expect(errorMessageContainer).toHaveTextContent(errorMessage)
})

it('respects menu min-width', async () => {
  let baseElement: RenderResult['baseElement']

  await act(async () => {
    const result = render(<ComboboxInlineTest menuMinWidth={1000} />)
    baseElement = result.baseElement
  })

  const button = baseElement.querySelector('button')
  //Opens menu
  await act(async () => {
    fireEvent.click(button)
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
    const result = render(<ComboboxInlineTest onChange={(nValue) => (selection = nValue)} async={async} />)
    baseElement = result.baseElement
  })

  expect(selection).toBeNull()

  //Opens menu
  const button = baseElement.querySelector('button')
  await act(async () => {
    fireEvent.click(button)
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
    const result = render(<ComboboxInlineTest onFilterChange={(nValue) => (filter = nValue)} async={async} />)
    baseElement = result.baseElement
  })

  //Opens menu
  const button = baseElement.querySelector('button')
  await act(async () => {
    fireEvent.click(button)
  })

  expect(filter).toBe('')

  const searchbox = baseElement.querySelector('[role="searchbox"]')
  fireEvent.change(searchbox, { target: { value: 'filter' } })

  expect(filter).toBe('filter')
})

it('should trigger onFocus', async () => {
  let baseElement: RenderResult['baseElement']

  const onFocus = jest.fn()

  await act(async () => {
    const result = render(<ComboboxInlineTest onFocus={onFocus} />)
    baseElement = result.baseElement
  })

  const button = baseElement.querySelector('button')
  fireEvent.focus(button)
  expect(onFocus).toBeCalled()
})

it('should trigger onClick', async () => {
  let baseElement: RenderResult['baseElement']

  const onClick = jest.fn()

  await act(async () => {
    const result = render(<ComboboxInlineTest onClick={onClick} />)
    baseElement = result.baseElement
  })

  const button = baseElement.querySelector('button')
  fireEvent.click(button)
  expect(onClick).toBeCalled()
})

it('should trigger onBlur', async () => {
  let baseElement: RenderResult['baseElement']

  const onBlur = jest.fn()

  await act(async () => {
    const result = render(<ComboboxInlineTest onBlur={onBlur} />)
    baseElement = result.baseElement
  })

  const button = baseElement.querySelector('button')
  fireEvent.focus(button)
  fireEvent.blur(button)
  expect(onBlur).toBeCalled()
})

it.each`
  async
  ${true}
  ${false}
`('should accept a value as parameter (async: $async)', async ({ async }) => {
  let baseElement: RenderResult['baseElement']

  await act(async () => {
    const result = render(<ComboboxInlineTest value={fruits[1]} async={async} />)
    baseElement = result.baseElement
  })

  const button = baseElement.querySelector('button')

  expect(button).toHaveTextContent(itemToString(fruits[1]))
})

it('should accept actions inside children prop', async () => {
  const click = jest.fn()
  let baseElement: RenderResult['baseElement']
  let findByTestId: RenderResult['findByTestId']
  await act(async () => {
    const result = render(<ComboboxInlineWithCustomComponentsTest action={click} />)
    baseElement = result.baseElement
    findByTestId = result.findByTestId
  })

  const button = baseElement.querySelector('button')
  await act(async () => {
    fireEvent.click(button)
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
      const result = render(<ComboboxInlineTest defaultButtonText='Fruits' />)
      baseElement = result.baseElement
    })
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened', async () => {
    let baseElement: RenderResult['baseElement']
    await act(async () => {
      const result = render(<ComboboxInlineTest defaultButtonText='Fruits' />)
      baseElement = result.baseElement
    })
    const button = baseElement.querySelector('button')
    await act(async () => {
      fireEvent.click(button)
    })
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly opened and loading', async () => {
    let baseElement: RenderResult['baseElement']
    await act(async () => {
      const result = render(<ComboboxInlineTest loading={true} />)
      baseElement = result.baseElement
    })
    const button = baseElement.querySelector('button')
    await act(async () => {
      fireEvent.click(button)
    })
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })

  it('renders correcly with custom components correctly', async () => {
    let baseElement: RenderResult['baseElement']
    await act(async () => {
      const result = render(<ComboboxInlineWithCustomComponentsTest />)
      baseElement = result.baseElement
    })
    const button = baseElement.querySelector('button')
    await act(async () => {
      fireEvent.click(button)
    })
    await act(() => waait(asyncDelay))
    expect(baseElement).toMatchSnapshot()
  })
})

describe('async loading', () => {
  it('should NOT call "loadItems" when mounted', async () => {
    const loadItems = jest.fn(() => Promise.resolve(['Item 1', 'Item 2']))
    await act(async () => {
      render(<Combobox inline defaultButtonText='Fruits' items={loadItems} />)
    })
    expect(loadItems).not.toHaveBeenCalledWith()
  })

  it('should call "loadItems" when open', async () => {
    const loadItems = jest.fn(() => Promise.resolve(['Item 1', 'Item 2']))
    let baseElement = null
    await act(async () => {
      const { container } = render(
        <Combobox inline defaultButtonText='Fruits' items={loadItems} itemToString={(item) => item} />
      )
      baseElement = container
    })

    const button = baseElement.querySelector('button')
    await act(async () => {
      fireEvent.click(button)
    })
    await act(() => waait(600))
    expect(loadItems).toHaveBeenCalledWith(null)
  })

  it('should call "loadItems" when the filter changes', async () => {
    const loadItems = jest.fn(() => Promise.resolve(['Item 1', 'Item 2']))
    let baseElement = null
    await act(async () => {
      const { container } = render(
        <Combobox inline defaultButtonText='Fruits' items={loadItems} itemToString={(item) => item} />
      )
      baseElement = container
    })

    const button = baseElement.querySelector('button')
    await act(async () => {
      fireEvent.click(button)
    })

    const searchbox = baseElement.querySelector('[role="searchbox"]')
    await act(async () => {
      fireEvent.change(searchbox, { target: { value: 'filter' } })
    })
    await act(() => waait(600))
    expect(loadItems).toHaveBeenCalledWith('filter')
  })
})
