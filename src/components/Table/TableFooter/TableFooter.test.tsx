import { render } from '@testing-library/react'
import React from 'react'

import { TableFooter, TableFooterProps } from './TableFooter'

const createComponent = (props?: Partial<TableFooterProps>) => {
  return (
    <TableFooter
      page={1}
      pageSize={10}
      totalPages={10}
      totalElements={100}
      onPageChange={jest.fn()}
      onSizeChange={jest.fn()}
      {...props}
    />
  )
}

it('renders correctly', () => {
  const { container } = render(createComponent())
  expect(container).toMatchSnapshot()
})

it('renders without pagination', () => {
  const { container } = render(createComponent({ totalElements: 10 }))
  expect(container).toMatchSnapshot()
})

it('does not show pagination options if totalElements is less than pageSize and minimum optionSize', () => {
  const { container } = render(createComponent({ totalElements: 10, pageSize: 10, sizeOptions: [10, 30, 50, 100] }))
  expect(container.querySelector('input')).toBeFalsy()

  const { container: container2 } = render(
    createComponent({ totalElements: 11, pageSize: 10, sizeOptions: [10, 30, 50, 100] })
  )
  expect(container2.querySelector('input')).toBeTruthy()

  const { container: container3 } = render(
    createComponent({ totalElements: 15, pageSize: 30, sizeOptions: [10, 30, 50, 100] })
  )
  expect(container3.querySelector('input')).toBeTruthy()
})

it('change default state when abbrev equals true', () => {
  const { container } = render(createComponent({ totalElements: 1000, abbrev: true }))
  expect(container.querySelector('[title="1,000"]').textContent).toEqual('1k resultados')
})

it('default value of prop abbrev equals false', () => {
  const { container } = render(createComponent({ totalElements: 1000 }))
  expect(container.querySelector('div > span').textContent).toEqual('1,000 resultados')
})
