import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { Paginator } from './Paginator'

it('should render correctly', () => {
  expect(render(<Paginator page={5} total={10} />).container).toMatchSnapshot()
  expect(render(<Paginator page={0} total={10} />).container).toMatchSnapshot()
  expect(render(<Paginator page={0} total={9} />).container).toMatchSnapshot()
})

it('should call onChange with correct values', () => {
  const handleChange = jest.fn()
  const { container } = render(<Paginator page={4} total={10} onChange={handleChange} />)
  const input = container.querySelector('input')

  expect(handleChange).not.toHaveBeenCalled()

  fireEvent.change(input, { target: { value: '4' } })
  fireEvent.blur(input)
  expect(handleChange).toHaveBeenLastCalledWith(3)

  fireEvent.change(input, { target: { value: '10' } })
  fireEvent.blur(input)
  expect(handleChange).toHaveBeenLastCalledWith(9)

  fireEvent.change(input, { target: { value: '11' } })
  fireEvent.blur(input)
  expect(handleChange).toHaveBeenLastCalledWith(9)

  fireEvent.change(input, { target: { value: '0' } })
  fireEvent.blur(input)
  expect(handleChange).toHaveBeenLastCalledWith(9)

  fireEvent.change(input, { target: { value: '1' } })
  fireEvent.blur(input)
  expect(handleChange).toHaveBeenLastCalledWith(0)
})

it('should call onChange when Enter is pressed', () => {
  const handleChange = jest.fn()
  const { container } = render(<Paginator page={4} total={10} onChange={handleChange} />)
  const input = container.querySelector('input')

  fireEvent.change(input, { target: { value: '8' } })
  fireEvent.keyDown(input, { key: 'Enter' })

  expect(handleChange).toHaveBeenLastCalledWith(7)
  expect(handleChange).toHaveBeenCalledTimes(1)
})
