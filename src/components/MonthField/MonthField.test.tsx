import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { MonthField } from './MonthField'

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
  ;['', null, false, undefined].forEach((value: any) => {
    it(`should gracefully treat "${value}" as value`, () => {
      const { container } = render(<MonthField value={value} />)
      fireEvent.focus(container.querySelector('input'))
    })
  })
})

describe('Component behavior', () => {
  it('should open MonthPicker on focus', () => {
    const { container, queryByTestId } = render(
      <MonthField onChange={jest.fn()} monthPickerProps={{ visibleMonth: { month: 6, year: 2016 } }} />
    )

    expect(queryByTestId('MonthField.popup')).toBeNull()

    fireEvent.focus(container.querySelector('input'))
    expect(queryByTestId('MonthField.popup')).not.toBeNull()
  })
  it('should call "onChange" when a valid date is typed', () => {
    const fn = jest.fn()
    const { container } = render(
      <MonthField onChange={fn} monthPickerProps={{ visibleMonth: { month: 6, year: 2016 } }} />
    )

    fireEvent.change(container.querySelector('input'), { target: { value: '08/2016' } })
    expect(fn).toHaveBeenCalledWith({ month: 7, year: 2016 })
  })
  it('should hide MonthPicker when a month is picked', () => {
    const { container, getByText, queryByTestId } = render(
      <MonthField onChange={jest.fn()} monthPickerProps={{ visibleMonth: { month: 6, year: 2016 } }} />
    )

    fireEvent.focus(container.querySelector('input'))

    expect(queryByTestId('MonthField.popup')).not.toBeNull()
    fireEvent.click(getByText('Jan'))
    expect(queryByTestId('MonthField.popup')).toBeNull()
  })
})
