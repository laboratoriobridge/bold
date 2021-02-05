import React from 'react'
import { act, render, fireEvent, RenderResult, getByTestId } from '@testing-library/react'
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

const itemToString = (item: Fruit) => item.label

const ComboboxTest = (props: Partial<ComboboxProps<Fruit>>) => (
  <Combobox<typeof fruits[0]> items={fruits} itemToString={itemToString} {...props} />
)

it('has aria-compliant attributes', async () => {
  // From https://www.w3.org/TR/wai-aria-practices/examples/combobox/aria1.1pattern/listbox-combo.html
  let baseElement: RenderResult['baseElement']
  await act(async () => {
    const result = render(<ComboboxTest label='Fruits' />)
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
  expect(listbox.querySelector('[aria-selected]')).toBeTruthy()
})

it('opens menu when input is focused and only when `openOnFocus` prop is true', async () => {
  let baseElement: RenderResult['baseElement']
  let rerender: RenderResult['rerender']
  await act(async () => {
    const result = render(<ComboboxTest />)
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

it('clears selection when "Clear" is clicked', async () => {
  let baseElement: RenderResult['baseElement']
  await act(async () => {
    const result = render(<ComboboxTest clearable={true} />)
    baseElement = result.baseElement
  })
  const input = baseElement.querySelector('input')

  const dropdownButton = baseElement.querySelector('button')
  //Opens menu
  await act(async () => {
    fireEvent.click(dropdownButton)
  })

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

it('should trigger onChange', async () => {
  let baseElement: RenderResult['baseElement']

  let selection = null

  await act(async () => {
    const result = render(<ComboboxTest onChange={(nValue) => (selection = nValue)} />)
    baseElement = result.baseElement
  })

  expect(selection).toBeNull()

  //Opens menu
  const dropdownButton = baseElement.querySelector('button')
  await act(async () => {
    fireEvent.click(dropdownButton)
  })

  //Selects first item
  const option = baseElement.querySelector('li').firstChild
  await act(async () => {
    fireEvent.click(option)
  })

  expect(selection).toBe(fruits[0])
})

it('should trigger onFilterChange', async () => {
  let baseElement: RenderResult['baseElement']

  let filter = ''

  await act(async () => {
    const result = render(<ComboboxTest onFilterChange={(nValue) => (filter = nValue)} />)
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

it('should accept a value as parameter', async () => {
  let baseElement: RenderResult['baseElement']

  await act(async () => {
    const result = render(<ComboboxTest value={fruits[1]} />)
    baseElement = result.baseElement
  })

  const input = baseElement.querySelector('input')

  expect(input).toHaveValue(itemToString(fruits[1]))

  //Opens menu
  const dropdownButton = baseElement.querySelector('button')
  await act(async () => {
    fireEvent.click(dropdownButton)
  })

  const listbox = baseElement.querySelector('[role="listbox"]')
  const selected = listbox.querySelector('[aria-selected="true"]')

  expect(selected).toHaveTextContent(itemToString(fruits[1]))
})

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
