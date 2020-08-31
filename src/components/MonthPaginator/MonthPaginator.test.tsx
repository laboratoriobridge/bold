import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { getMonthNames, MonthPaginator } from './MonthPaginator'

const now = new Date()

describe('MonthPaginator', () => {
  it('should render correctly with month and year', () => {
    const visibleDate = new Date('2019-01-31')
    const { container } = render(
      <MonthPaginator month={visibleDate.getMonth()} year={visibleDate.getFullYear()} minimized={false} />
    )
    expect(container).toMatchSnapshot()
  })

  it('should change de visible year on "Previous year" button click', () => {
    const { getByTitle, getAllByText } = render(
      <MonthPaginator month={now.getMonth()} year={now.getFullYear()} minimized={false} />
    )
    fireEvent.click(getByTitle('Previous year'))
    const expectedYear = now.getFullYear() - 1
    expect(getAllByText(expectedYear.toString())).toHaveLength(1)
  })

  it('should change de visible year on "Next year" button click', () => {
    const { getByTitle, getAllByText } = render(
      <MonthPaginator month={now.getMonth()} year={now.getFullYear()} minimized={false} />
    )
    fireEvent.click(getByTitle('Next year'))
    const expectedYear = now.getFullYear() + 1
    expect(getAllByText(expectedYear.toString())).toHaveLength(1)
  })

  it('should call "onChange" when a month is selected', () => {
    const onChange = jest.fn()
    const { getByText } = render(
      <MonthPaginator month={now.getMonth()} year={now.getFullYear()} minimized={false} onChange={onChange} />
    )
    fireEvent.click(getByText('Jan'))
    expect(onChange).toHaveBeenCalledWith({ month: 0, year: now.getFullYear() })
  })

  it('should call "onChange" when a month is selected, with the given year', () => {
    const onChange = jest.fn()
    const { getByText, getByTitle } = render(
      <MonthPaginator month={now.getMonth()} year={now.getFullYear()} minimized={false} onChange={onChange} />
    )
    fireEvent.click(getByTitle('Previous year'))
    fireEvent.click(getByText('Jan'))
    const expectedYear = now.getFullYear() - 1
    expect(onChange).toHaveBeenCalledWith({ month: 0, year: expectedYear })
  })

  it('should fill the prop year if non is given', () => {
    const { rerender, getAllByText } = render(
      <MonthPaginator month={now.getMonth()} year={now.getFullYear()} minimized={false} />
    )

    rerender(<MonthPaginator month={now.getMonth()} minimized={false} />)
    expect(getAllByText(new Date().getFullYear().toString())).toHaveLength(1)
  })

  it('should change the visible year on re-render', () => {
    const { rerender, getAllByText } = render(<MonthPaginator month={now.getMonth()} minimized={false} />)

    const newYear = now.getFullYear() + 1

    rerender(<MonthPaginator month={now.getMonth()} year={newYear} minimized={false} />)
    expect(getAllByText(newYear.toString())).toHaveLength(1)
  })
})

describe('getMonthNames', () => {
  it('should return an array of month names in short format', () => {
    expect(getMonthNames('pt-BR')).toEqual([
      { short: 'Jan', long: 'Janeiro' },
      { short: 'Fev', long: 'Fevereiro' },
      { short: 'Mar', long: 'Março' },
      { short: 'Abr', long: 'Abril' },
      { short: 'Mai', long: 'Maio' },
      { short: 'Jun', long: 'Junho' },
      { short: 'Jul', long: 'Julho' },
      { short: 'Ago', long: 'Agosto' },
      { short: 'Set', long: 'Setembro' },
      { short: 'Out', long: 'Outubro' },
      { short: 'Nov', long: 'Novembro' },
      { short: 'Dez', long: 'Dezembro' },
    ])

    expect(getMonthNames('en')).toEqual([
      { short: 'Jan', long: 'January' },
      { short: 'Feb', long: 'February' },
      { short: 'Mar', long: 'March' },
      { short: 'Apr', long: 'April' },
      { short: 'May', long: 'May' },
      { short: 'Jun', long: 'June' },
      { short: 'Jul', long: 'July' },
      { short: 'Aug', long: 'August' },
      { short: 'Sep', long: 'September' },
      { short: 'Oct', long: 'October' },
      { short: 'Nov', long: 'November' },
      { short: 'Dec', long: 'December' },
    ])
  })
})
