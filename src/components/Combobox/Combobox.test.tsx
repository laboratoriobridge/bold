import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Combobox, ComboboxProps } from './Combobox'

const fruits = [
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

export const ComboboxTest = (props: Partial<ComboboxProps<typeof fruits[0]>> = {}) => (
  <Combobox<typeof fruits[0]> items={fruits} itemToString={(item) => item.label} {...props} />
)

it('has aria-compliant attributes', () => {
  const { baseElement } = render(<ComboboxTest label='Fruits' />)
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
  expect(input).toHaveAttribute('aria-autocomplete')
  expect(input).toHaveAttribute('aria-controls', listbox.getAttribute('id'))
  expect(input).toHaveAttribute('aria-labelledby', label.getAttribute('id'))

  expect(listbox).toHaveAttribute('id')
  expect(listbox).toHaveAttribute('aria-labelledby', label.getAttribute('id'))
})

it('opens menu when input is focused and `openOnFocus` prop is true', () => {
  const { baseElement, rerender } = render(<ComboboxTest />)
  const input = baseElement.querySelector('input')

  // initial state has closed menu
  expect(baseElement.querySelector('ul')).toBeFalsy()

  // focus input to open menu
  fireEvent.focus(input)
  expect(baseElement.querySelector('ul')).toBeTruthy()

  // blur input to close menu
  fireEvent.blur(input)
  expect(baseElement.querySelector('ul')).toBeFalsy()

  // rerenders switching prop
  rerender(<ComboboxTest openOnFocus={false} />)

  // focus input and now menu should not be open
  fireEvent.focus(input)
  expect(baseElement.querySelector('ul')).toBeFalsy()
})
