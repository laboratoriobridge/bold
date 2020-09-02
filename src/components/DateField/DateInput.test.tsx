import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { LocaleContext } from '../../i18n'
import ptBr from '../../i18n/locales/pt-BR'

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

it('should call onChange with undefined when input is cleared', () => {
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

it('should allow placeholder customization via locale context', () => {
  const { container } = render(
    <LocaleContext.Provider value={ptBr}>
      <DateInput />
    </LocaleContext.Provider>
  )
  expect(container.querySelector('input').getAttribute('placeholder')).toEqual(ptBr.dateInput.placeholder)
})

describe('transform two year digit option', () => {
  it('should do nothing when it is true, the value is right but user press esc', () => {
    const change = jest.fn()
    const { container } = render(<DateInput onChange={change} transformTwoYearDigit />)
    const input = container.querySelector('input')

    fireEvent.change(input, { target: { value: '06/04/12' } })
    fireEvent.keyDown(input, { keyCode: 27, key: 'Escape' })
    expect(change).not.toHaveBeenLastCalledWith()
  })

  it('should transform the start of the year to 20 when the year with two digits is equal the current year', () => {
    const change = jest.fn()
    const { container } = render(<DateInput onChange={change} transformTwoYearDigit />)
    const input = container.querySelector('input')
    const currentYearTwoDigits: string = new Date().getFullYear().toString().substr(2, 2)

    fireEvent.change(input, { target: { value: `06/04/${currentYearTwoDigits}` } })
    fireEvent.keyDown(input, { keyCode: 9, key: 'Tab' })
    expect(change).toHaveBeenLastCalledWith(new Date(`20${currentYearTwoDigits}-04-06`))
  })

  it('should transform the start of the year to 19 when the year with two digits is greater than the current year', () => {
    const change = jest.fn()
    const { container } = render(<DateInput onChange={change} transformTwoYearDigit />)
    const input = container.querySelector('input')
    const currentYearTwoDigitsPlusOne: string = (new Date().getFullYear() + 1).toString().substr(2, 2)

    fireEvent.change(input, { target: { value: `06/04/${currentYearTwoDigitsPlusOne}` } })
    fireEvent.keyDown(input, { keyCode: 9, key: 'Tab' })
    expect(change).toHaveBeenLastCalledWith(new Date(`19${currentYearTwoDigitsPlusOne}-04-06`))
  })

  it('should do nothing when it is true but the year only have one digit', () => {
    const change = jest.fn()
    const { container } = render(<DateInput onChange={change} transformTwoYearDigit />)
    const input = container.querySelector('input')

    fireEvent.change(input, { target: { value: '06/04/1' } })
    fireEvent.keyDown(input, { keyCode: 9, key: 'Tab' })
    expect(change).not.toHaveBeenLastCalledWith()
  })

  it('should do nothing when it is false', () => {
    const change = jest.fn()
    const { container } = render(<DateInput onChange={change} />)
    const input = container.querySelector('input')

    fireEvent.change(input, { target: { value: '06/04/12' } })
    fireEvent.keyDown(input, { keyCode: 9, key: 'Tab' })
    expect(change).not.toHaveBeenLastCalledWith()
  })
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
