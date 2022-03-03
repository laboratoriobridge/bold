import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { getUserLocale, getMonthNames } from '../../util/locale'
import { MonthPaginator } from './MonthPaginator'

const now = new Date()

function renderMonthYear(month, year) {
  const date = new Date(year, month, 1, 0, 0, 0, 0)
  const monthFormatter = new Intl.DateTimeFormat(getUserLocale(), { month: 'short' })
  const yearFormatter = new Intl.DateTimeFormat(getUserLocale(), { year: 'numeric' })
  return `${monthFormatter.format(date)} - ${yearFormatter.format(date)}`
}

describe('MonthPaginator', () => {
  it('should render correctly with month and year', () => {
    const visibleDate = new Date('2019-01-31')
    const { container } = render(<MonthPaginator month={visibleDate.getMonth()} year={visibleDate.getFullYear()} />)
    expect(container).toMatchSnapshot()
  })

  it('should render correctly with ghost', () => {
    const visibleDate = new Date('2019-01-31')
    const { container } = render(
      <MonthPaginator ghost={true} month={visibleDate.getMonth()} year={visibleDate.getFullYear()} />
    )
    expect(container).toMatchSnapshot()
  })

  it('should change the visible month on "Previous month" button click', () => {
    const { getByTitle, getAllByText } = render(<MonthPaginator month={now.getMonth()} year={now.getFullYear()} />)
    fireEvent.click(getByTitle('Previous month'))
    const expectedMonth = now.getMonth() - 1
    expect(getAllByText(renderMonthYear(expectedMonth, now.getFullYear()))).toHaveLength(1)
  })

  it('should change the visible month on "Next month" button click', () => {
    const { getByTitle, getAllByText } = render(<MonthPaginator month={now.getMonth()} year={now.getFullYear()} />)
    fireEvent.click(getByTitle('Next month'))
    const expectedMonth = now.getMonth() + 1
    expect(getAllByText(renderMonthYear(expectedMonth, now.getFullYear()))).toHaveLength(1)
  })

  it('should call "onChange" when a month is selected and "onChange" is set', () => {
    const onChange = jest.fn()
    const { getByText, getByTestId } = render(
      <MonthPaginator month={now.getMonth()} year={now.getFullYear()} onChange={onChange} />
    )
    fireEvent.click(getByTestId('MonthPaginator.ShowMonthsButton'))
    fireEvent.click(getByText('Jan'))
    expect(onChange).toHaveBeenCalledWith({ month: 0, year: now.getFullYear() })
  })

  it('should disable arrow buttons when, and only when, the month picker is visible', () => {
    const onChange = jest.fn()
    const { getByTitle, getByTestId, getByText } = render(
      <MonthPaginator month={now.getMonth()} year={now.getFullYear()} onChange={onChange} />
    )
    const openButton = getByTestId('MonthPaginator.ShowMonthsButton')
    const nextButton = getByTitle('Next month')
    const prevButton = getByTitle('Previous month')

    expect(nextButton.hasAttribute('disabled')).toBeFalsy()
    expect(prevButton.hasAttribute('disabled')).toBeFalsy()
    expect(openButton.hasAttribute('disabled')).toBeFalsy()

    fireEvent.click(openButton)

    expect(nextButton.hasAttribute('disabled')).toBeTruthy()
    expect(prevButton.hasAttribute('disabled')).toBeTruthy()
    expect(openButton.hasAttribute('disabled')).toBeFalsy()

    fireEvent.click(getByText('Jan'))

    expect(nextButton.hasAttribute('disabled')).toBeFalsy()
    expect(prevButton.hasAttribute('disabled')).toBeFalsy()
    expect(openButton.hasAttribute('disabled')).toBeFalsy()
  })

  it('should fill the prop year if none is given', () => {
    const { rerender, getAllByText } = render(<MonthPaginator month={now.getMonth()} year={now.getFullYear()} />)

    rerender(<MonthPaginator month={now.getMonth()} />)
    expect(getAllByText(renderMonthYear(now.getMonth(), new Date().getFullYear()))).toHaveLength(1)
  })

  it('should change the visible year on re-render', () => {
    const { rerender, getAllByText } = render(<MonthPaginator />)

    const newYear = now.getFullYear() + 1

    rerender(<MonthPaginator year={newYear} />)
    expect(getAllByText(renderMonthYear(now.getMonth(), newYear))).toHaveLength(1)
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
