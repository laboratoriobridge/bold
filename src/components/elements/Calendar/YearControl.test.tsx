import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { YearControl } from './YearControl'

it('should render correctly', () => {
  const { container } = render(<YearControl visibleDate={new Date('2018-10-26')} onChange={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

it('should call onChange function with next year when clicked on next button', () => {
  const change = jest.fn()
  const { getByTitle } = render(<YearControl visibleDate={new Date('2018-10-26')} onChange={change} />)
  const nextButton = getByTitle('Next year')

  expect(change).not.toHaveBeenCalled()
  fireEvent.click(nextButton)
  expect(change).toHaveBeenCalledWith(new Date('2019-10-26'))
})

it('should call onChange function with previous year when clicked on prev button', () => {
  const change = jest.fn()
  const { getByTitle } = render(<YearControl visibleDate={new Date('2018-10-26')} onChange={change} />)
  const prevButton = getByTitle('Previous year')

  expect(change).not.toHaveBeenCalled()
  fireEvent.click(prevButton)
  expect(change).toHaveBeenCalledWith(new Date('2017-10-26'))
})
