import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { MonthView } from './MonthView'

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

it('should use createDayStyles function to create styles for days', () => {
  const createDayStyles = jest.fn(() => ({ color: 'red' }))
  const { container } = render(<MonthView visibleDate={new Date('2018-10-26')} createDayStyles={createDayStyles} />)
  expect(createDayStyles).toHaveBeenCalledTimes(35) // Called once for each day rendered on calendar
  expect(container).toMatchSnapshot()
})
