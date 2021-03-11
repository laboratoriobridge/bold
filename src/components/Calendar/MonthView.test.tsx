import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { createTheme } from '../../styles'
import { defaultModifierStyles } from './Calendar'
import { MonthView } from './MonthView'
import { dayHoverStyle } from './RangeCalendar/DateRangeCalendar/DateRangeCalendar'
import { iterateObjectFields, normalizeCssClassNames } from './RangeCalendar/DateRangeCalendar/DateRangeCalendar.test'

it('should render correctly', () => {
  const { container } = render(<MonthView visibleDate={new Date('2018-10-26')} />)
  expect(container).toMatchSnapshot()
})

it('should call onDayClick with correct date when clicked on a date', () => {
  const click = jest.fn()
  const { container } = render(<MonthView visibleDate={new Date('2018-10-26')} onDayClick={click} />)
  const span = container.querySelector('td[data-date="2018-10-20"] span')

  expect(click).not.toHaveBeenCalled()
  fireEvent.click(span)
  expect(click).toHaveBeenCalledWith(new Date('2018-10-20'))
})

it('should call onDayHover with correct date when hovered on a date', () => {
  const hover = jest.fn()
  const { container } = render(<MonthView visibleDate={new Date('2018-10-26')} onDayHover={hover} />)
  const span = container.querySelector('td[data-date="2018-10-01"] span')

  expect(hover).not.toHaveBeenCalled()
  fireEvent.mouseOver(span)
  expect(hover).toHaveBeenCalledWith(new Date('2018-10-01'))
})

it('should call onWeekClick with correct week when clicked on a week', () => {
  const click = jest.fn()
  const { container } = render(<MonthView visibleDate={new Date('2021-01-21')} onWeekClick={click} onlyWeeks />)
  const tr = container.querySelector('tr[data-week="10/01/2021-16/01/2021"]')

  expect(click).not.toHaveBeenCalled()
  fireEvent.click(tr)
  expect(click).toHaveBeenCalledWith({ start: new Date('2021-01-10'), end: new Date('2021-01-16') })
})

it('should call onWeekHover with correct week when hovered on a week', () => {
  const hover = jest.fn()
  const { container } = render(<MonthView visibleDate={new Date('2021-01-21')} onWeekHover={hover} onlyWeeks />)
  const tr = container.querySelector('tr[data-week="10/01/2021-16/01/2021"]')

  expect(hover).not.toHaveBeenCalled()
  fireEvent.mouseOver(tr)
  expect(hover).toHaveBeenCalledWith({ start: new Date('2021-01-10'), end: new Date('2021-01-16') })
})

it('should use renderDay prop to render day', () => {
  const renderDay = jest.fn(() => '-')
  const { container } = render(<MonthView visibleDate={new Date('2018-10-26')} renderDay={renderDay} />)
  expect(renderDay).toHaveBeenCalledTimes(35) // Called once for each day rendered on calendar
  expect(container.querySelector('td[data-date="2018-10-01"]').textContent).toEqual('-')
})

it('render week name', () => {
  const renderWeek = jest.fn(() => '-')
  const { container } = render(<MonthView visibleDate={new Date('2018-10-26')} renderWeekName={renderWeek} />)
  expect(renderWeek).toHaveBeenCalledTimes(7) // Called once for each week rendered on calendar
  expect(container.querySelector('thead').textContent).toEqual('-------')
})

it('should use createDateStyles function to create styles for days', () => {
  const createDateStyles = jest.fn(() => ({ color: 'red' }))
  const { container } = render(<MonthView visibleDate={new Date('2018-10-26')} createDateStyles={createDateStyles} />)
  expect(createDateStyles).toHaveBeenCalledTimes(35) // Called once for each day rendered on calendar
  expect(container).toMatchSnapshot()
})

describe('default props', () => {
  const theme = createTheme()
  const notExpectecSelectedStyle = defaultModifierStyles.selected(theme)
  const notExpectedHoverStyle = dayHoverStyle(theme)

  it('should define onDayClick', () => {
    const { container } = render(<MonthView visibleDate={new Date('2021-01-24')} />)
    const span = container.querySelector('td[data-date="2021-01-23"] span')

    fireEvent.click(span)

    iterateObjectFields(notExpectecSelectedStyle, (fieldName: string, fieldValue: any) =>
      expect(span).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
    )
  })

  it('should define onDayHover', () => {
    const { container } = render(<MonthView visibleDate={new Date('2021-01-24')} />)
    const span = container.querySelector('td[data-date="2021-01-23"] span')

    fireEvent.mouseOver(span)

    iterateObjectFields(notExpectedHoverStyle, (fieldName: string, fieldValue: any) =>
      expect(span).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
    )
  })

  it('should define onWeekClick', () => {
    const { container } = render(<MonthView visibleDate={new Date('2021-01-24')} onlyWeeks />)
    const tr = container.querySelector('tr[data-week="10/01/2021-16/01/2021"]')

    fireEvent.click(tr)

    iterateObjectFields(notExpectecSelectedStyle, (fieldName: string, fieldValue: any) =>
      expect(tr).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
    )
  })

  it('should define onWeekHover', () => {
    const { container } = render(<MonthView visibleDate={new Date('2021-01-24')} onlyWeeks />)
    const tr = container.querySelector('tr[data-week="10/01/2021-16/01/2021"]')

    fireEvent.mouseOver(tr)

    iterateObjectFields(notExpectedHoverStyle, (fieldName: string, fieldValue: any) =>
      expect(tr).not.toHaveStyleRule(normalizeCssClassNames(fieldName), fieldValue)
    )
  })
})
