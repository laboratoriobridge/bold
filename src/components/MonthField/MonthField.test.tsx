import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { format, isValidInput, MonthField } from './MonthField'

describe('Component presentation', () => {
  it('should render correctly when closed', () => {
    const { container } = render(<MonthField value={{ year: 2019, month: 1 }} onChange={jest.fn()} />)
    expect(container).toMatchSnapshot()
  })
  it('should render correctly when opened', () => {
    const { container } = render(<MonthField value={{ year: 2019, month: 1 }} onChange={jest.fn()} />)
    fireEvent.focus(container.querySelector('input'))
    expect(container).toMatchSnapshot()
  })
})

describe('Component behavior', () => {
  it('should open MonthPicker on focus', () => {
    const { container, queryByTestId } = render(<MonthField onChange={jest.fn()} />)

    expect(queryByTestId('MonthField.popup')).toBeNull()

    fireEvent.focus(container.querySelector('input'))
    expect(queryByTestId('MonthField.popup')).not.toBeNull()
  })
  it('should call "onChange" when a valid date is typed', () => {
    const fn = jest.fn()
    const { container } = render(<MonthField onChange={fn} />)

    fireEvent.change(container.querySelector('input'), { target: { value: '08/2016' } })
    expect(fn).toHaveBeenCalledWith({ month: 7, year: 2016 })
  })
  it('should hide MonthPicker when a month is picked', () => {
    const { container, getByText, queryByTestId } = render(<MonthField onChange={jest.fn()} />)

    fireEvent.focus(container.querySelector('input'))

    expect(queryByTestId('MonthField.popup')).not.toBeNull()
    fireEvent.click(getByText('Jan'))
    expect(queryByTestId('MonthField.popup')).toBeNull()
  })
})

describe('Other functions', () => {
  it('format should return null when argument is null', () => {
    let formatedValue = format(null)
    expect(formatedValue).toBeNull()

    formatedValue = format({ month: null, year: null })
    expect(formatedValue).toBeNull()
  })
  it('format should return null when months argument is null', () => {
    const formatedValue = format({ month: null, year: 2000 })
    expect(formatedValue).toBeNull()
  })
  it('format should return null when years argument is null', () => {
    const formatedValue = format({ month: 1, year: null })
    expect(formatedValue).toBeNull()
  })
  it('format should include 0 when month = 1', () => {
    const formatedValue = format({ month: 1, year: 2000 })
    expect(formatedValue).toBe('02/2000')
  })
  it('format should include 0 when month = 8', () => {
    const formatedValue = format({ month: 8, year: 2000 })
    expect(formatedValue).toBe('09/2000')
  })
  it('format should not include 0 when month > 8', () => {
    const formatedValue = format({ month: 9, year: 2000 })
    expect(formatedValue).toBe('10/2000')
  })
  it('isValidInput should accept mm/aaaa format', () => {
    expect(isValidInput('00/0000')).toBe(true)
  })
  it('isValidInput should not accept m/aaaa format', () => {
    expect(isValidInput('0/0000')).toBe(false)
  })
  it('isValidInput should not accept mm/aa format', () => {
    expect(isValidInput('00/00')).toBe(false)
  })
  it('isValidInput should not accept null', () => {
    expect(isValidInput(null)).toBe(false)
  })
})
