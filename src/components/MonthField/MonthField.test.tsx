import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { format, isValidInput, MonthField } from './MonthField'

const fn = jest.fn()

describe('Component presentation', () => {
  it('should render correctly', () => {
    const { container } = render(<MonthField onChange={fn} />)
    expect(container).toMatchSnapshot()
  })
  it('should render MonthPicker on focus', () => {
    const { container, getByTitle } = render(<MonthField onChange={fn} title='Month Picker Input' />)

    const beforeFocus = container.querySelector('[data-visible="true"]')
    expect(beforeFocus).toBeNull()

    fireEvent.focus(getByTitle('Month Picker Input'))

    const afterFocus = container.querySelector('[data-visible="true"]')
    expect(afterFocus).not.toBeNull()
  })
})

describe('Component behavior', () => {
  it('should call "onChange" when a valid date is typed', () => {
    const { getByTitle } = render(<MonthField onChange={fn} title='Month Picker Input' />)

    fireEvent.change(getByTitle('Month Picker Input'), { target: { value: '08/2016' } })
    expect(fn).toHaveBeenCalledWith({ month: 7, year: 2016 })
  })
  it('should hide MonthPicker when a month is picked', () => {
    const { container, getByTitle, getByText } = render(<MonthField onChange={fn} title='Month Picker Input' />)

    fireEvent.focus(getByTitle('Month Picker Input'))
    fireEvent.click(getByText('Jan'))

    const afterSelect = container.querySelector('[data-visible="false"]')
    expect(afterSelect).not.toBeNull()
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
