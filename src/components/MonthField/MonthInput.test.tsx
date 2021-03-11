import React from 'react'
import { fireEvent, render } from '@testing-library/react'

import { MonthInput } from './MonthInput'

describe('MonthInput', () => {
  it('should render correctly', () => {
    const { container } = render(<MonthInput />)
    expect(container).toMatchSnapshot()
  })

  describe('Format month value', () => {
    it('should add a zero if the number is less than 9', () => {
      const { container } = render(<MonthInput value={{ month: 1, year: 2021 }} />)
      const input = container.querySelector('input')
      expect(input.value).toEqual('02/2021')
    })
    it('should not add a zero if the number is greater than 9', () => {
      const { container } = render(<MonthInput value={{ month: 10, year: 2021 }} />)
      const input = container.querySelector('input')
      expect(input.value).toEqual('11/2021')
    })
    it('should return null if month value is null', () => {
      const { container } = render(<MonthInput value={{ month: null, year: 2021 }} />)
      const input = container.querySelector('input')
      expect(input.value).toEqual('')
    })
  })

  it('should call onChange only when a valid month is typed', () => {
    const change = jest.fn()
    const { container } = render(<MonthInput onChange={change} />)
    const input = container.querySelector('input')

    expect(change).not.toHaveBeenCalled()

    fireEvent.change(input, { target: { value: '0/201' } })
    expect(change).not.toHaveBeenCalled()

    fireEvent.change(input, { target: { value: '12/2021' } })
    expect(change).toHaveBeenLastCalledWith({ month: 11, year: 2021 })
  })

  it('should call onChange with undefined when input is cleared', () => {
    const change = jest.fn()
    const { container } = render(<MonthInput onChange={change} value={{ month: 1, year: 2021 }} />)
    const input = container.querySelector('input')

    fireEvent.change(input, { target: { value: '' } })
    expect(change).toHaveBeenLastCalledWith(null)
  })

  describe('clear', () => {
    it('should clear the input value', () => {
      const change = jest.fn()
      const { container } = render(<MonthInput value={{ month: 1, year: 2021 }} onChange={change} />)
      const clear = container.querySelector('span[title="Clear"]')

      fireEvent.click(clear)
      expect(change).toHaveBeenLastCalledWith(null)
    })
  })
})
