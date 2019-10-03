import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { LocaleContext } from '../../i18n'
import ptBr from '../../i18n/locales/pt-BR'

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

it('should reset value if value is not an integer', () => {
  const handleChange = jest.fn()
  const { container } = render(<Paginator page={4} total={10} onChange={handleChange} />)
  const input = container.querySelector('input')

  fireEvent.change(input, { target: { value: 'a' } })
  fireEvent.blur(input)

  expect(input.value).toBe('5')
})

it('should reset value if value is less than 1 or bigger than total', () => {
  const handleChange = jest.fn()
  const { container } = render(<Paginator page={4} total={10} onChange={handleChange} />)
  const input = container.querySelector('input')

  fireEvent.change(input, { target: { value: '0' } })
  fireEvent.blur(input)
  expect(input.value).toBe('5')

  fireEvent.change(input, { target: { value: '11' } })
  fireEvent.blur(input)
  expect(input.value).toBe('5')
})

it('should allow message customization via locale context', () => {
  const { container, queryByText } = render(
    <LocaleContext.Provider value={ptBr}>
      <Paginator page={5} total={10} />
    </LocaleContext.Provider>
  )
  expect(container.querySelectorAll('button')[0].getAttribute('title')).toEqual(ptBr.paginator.previousPage)
  expect(container.querySelector('input').getAttribute('title')).toEqual(ptBr.paginator.currentPage)
  expect(queryByText(`${ptBr.paginator.of} 10`)).toBeTruthy()
  expect(container.querySelectorAll('button')[1].getAttribute('title')).toEqual(ptBr.paginator.nextPage)
})
