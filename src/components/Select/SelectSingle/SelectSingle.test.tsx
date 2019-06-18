import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { DefaultItemType, SelectSingle, SelectSingleProps } from './SelectSingle'

const items: DefaultItemType[] = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Banana' },
  { value: 3, label: 'Grape' },
  { value: 4, label: 'Orange' },
  { value: 5, label: 'Pear' },
]

// tslint:disable jsx-no-lambda
const createSelect = (props: Partial<SelectSingleProps> = {}) => {
  return <SelectSingle items={items} itemToString={item => item.label} placeholder='Select a value...' {...props} />
}

it('should render correctly when closed', () => {
  const { container } = render(createSelect())
  expect(container).toMatchSnapshot()
})

it('should render correctly when opened', () => {
  const { container } = render(createSelect({ isOpen: true }))
  expect(container).toMatchSnapshot()
})

it('should accept value prop', () => {
  const { container } = render(createSelect({ value: items[4] }))
  expect(container.querySelector('input').value).toEqual(items[4].label)
})

it('should open the select menu when input is focused', () => {
  const { container } = render(createSelect())
  expect(container.querySelector('ul')).toBeFalsy()
  fireEvent.focus(container.querySelector('input'))
  expect(container.querySelector('ul')).toBeTruthy()
})

it('should call the onChange event when an item is clicked', () => {
  const onChange = jest.fn()
  const { getByText } = render(createSelect({ onChange, isOpen: true }))
  expect(onChange).not.toHaveBeenCalled()
  fireEvent.click(getByText(items[2].label))
  expect(onChange).toHaveBeenLastCalledWith(items[2], expect.anything())
})

it('should render current value and allow changes via prop', () => {
  const { container, rerender } = render(createSelect())
  const input = container.querySelector('input')
  expect(input.value).toEqual('')
  rerender(createSelect({ value: { value: 42, label: 'Foo' } }))
  expect(input.value).toEqual('Foo')
})

describe('clear button', () => {
  it('should clear the input value', () => {
    const { container, getByTitle } = render(createSelect({ value: items[0] }))
    const input = container.querySelector('input')
    const clearButton = getByTitle('Limpar')

    expect(input.value).toEqual(items[0].label)

    fireEvent.click(clearButton)

    expect(input.value).toEqual('')
  })
  it('should call onChange with null value', () => {
    const onChange = jest.fn()
    const { getByTitle } = render(createSelect({ onChange, value: items[0] }))
    const clearButton = getByTitle('Limpar')

    expect(onChange).not.toHaveBeenCalled()
    fireEvent.click(clearButton)
    expect(onChange).toHaveBeenLastCalledWith(null, expect.anything())
  })
  it('should call prop onClear if exists', () => {
    const onClear = jest.fn()
    const { getByTitle } = render(createSelect({ onClear, value: items[0] }))
    const clearButton = getByTitle('Limpar')

    expect(onClear).not.toHaveBeenCalled()
    fireEvent.click(clearButton)
    expect(onClear).toHaveBeenCalled()
  })
})
