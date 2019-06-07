import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { DateInput } from './DateInput'

it('should render correctly', () => {
  const { container } = render(<DateInput />)
  expect(container).toMatchSnapshot()
})

it('should accept and format date as value', () => {
  const { container } = render(<DateInput value={new Date('2018-10-30')} />)
  const input = container.querySelector('input')
  expect(input.value).toEqual('30/10/2018')
})

it('should call onChange only when a valid date is typed', () => {
  const change = jest.fn()
  const { container } = render(<DateInput onChange={change} />)
  const input = container.querySelector('input')

  expect(change).not.toHaveBeenCalled()

  fireEvent.change(input, { target: { value: '01/01/201' } })
  expect(change).not.toHaveBeenCalled()

  fireEvent.change(input, { target: { value: '01/01/2018' } })
  expect(change).toHaveBeenLastCalledWith(new Date('2018-01-01'))
})

it('should call onChange with null when input is cleared', () => {
  const change = jest.fn()
  const { container } = render(<DateInput onChange={change} value={new Date('2018-10-30')} />)
  const input = container.querySelector('input')

  fireEvent.change(input, { target: { value: '' } })
  expect(change).toHaveBeenLastCalledWith(null)
})

it('should call onInputChange prop with original event when input value is changed', () => {
  const inputChange = jest.fn()
  const { container } = render(<DateInput onInputChange={inputChange} />)
  const input = container.querySelector('input')

  expect(inputChange).not.toHaveBeenCalled()
  fireEvent.change(input, { target: { value: '1' } })
  expect(inputChange).toHaveBeenCalled()
})

describe('clear', () => {
  it('should clear the input value', () => {
    const change = jest.fn()
    const { container } = render(<DateInput value={new Date()} onChange={change} />)
    const clear = container.querySelector('span')

    fireEvent.click(clear)
    expect(change).toHaveBeenLastCalledWith(null)
  })
})
