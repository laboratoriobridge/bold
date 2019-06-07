import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { MonthPickerInput } from './MonthPickerInput'

const fn = jest.fn()

describe('MonthPickerInput', () => {
  it('should render correctly', () => {
    const { container } = render(<MonthPickerInput onChange={fn} />)
    expect(container).toMatchSnapshot()
  })
  it('should render MonthPicker on focus', () => {
    const { container, getByTitle } = render(<MonthPickerInput onChange={fn} title='Month Picker Input' />)

    const beforeFocus = container.querySelector('[data-visible="true"]')
    expect(beforeFocus).toBeNull()

    fireEvent.focus(getByTitle('Month Picker Input'))

    const afterFocus = container.querySelector('[data-visible="true"]')
    expect(afterFocus).not.toBeNull()
  })
  it('should call "onChange" when a valid date is typed', () => {
    const { getByTitle } = render(<MonthPickerInput onChange={fn} title='Month Picker Input' />)

    fireEvent.change(getByTitle('Month Picker Input'), { target: { value: '08/2016' } })
    expect(fn).toHaveBeenCalledWith({ month: 7, year: 2016 })
  })
  it('should hide MonthPicker when a month is picked', () => {
    const { container, getByTitle, getByText } = render(<MonthPickerInput onChange={fn} title='Month Picker Input' />)

    fireEvent.focus(getByTitle('Month Picker Input'))
    fireEvent.click(getByText('Jan'))

    const afterSelect = container.querySelector('[data-visible="false"]')
    expect(afterSelect).not.toBeNull()
  })
})
