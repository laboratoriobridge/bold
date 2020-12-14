import { render } from '@testing-library/react'
import React from 'react'

import { LocaleContext } from '../../../i18n'
import ptBr from '../../../i18n/locales/pt-BR'

import { TableFooter, TableFooterProps } from './TableFooter'

const TableFooterTest = (props: Partial<TableFooterProps>) => {
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

it('should renders correctly', () => {
  const { container } = render(<TableFooterTest />)
  expect(container).toMatchSnapshot()
})

it('should renders correctly without pagination', () => {
  const { container } = render(<TableFooterTest totalElements={10} />)
  expect(container).toMatchSnapshot()
})

it('does not show pagination options if totalElements is less than pageSize and minimum optionSize', () => {
  const { container } = render(<TableFooterTest totalElements={10} pageSize={10} sizeOptions={[10, 30, 50, 100]} />)
  expect(container.querySelector('input')).toBeFalsy()

  const { container: container2 } = render(
    <TableFooterTest totalElements={11} pageSize={10} sizeOptions={[10, 30, 50, 100]} />
  )
  expect(container2.querySelector('input')).toBeTruthy()

  const { container: container3 } = render(
    <TableFooterTest totalElements={15} pageSize={30} sizeOptions={[10, 30, 50, 100]} />
  )
  expect(container3.querySelector('input')).toBeTruthy()
})

it('change default state when abbrev equals true', () => {
  const { container } = render(<TableFooterTest totalElements={1000} abbrev />)
  expect(container.querySelector('[title="1,000"]').textContent).toEqual('1k results')
})

it('default value of prop abbrev equals false', () => {
  const { container } = render(<TableFooterTest totalElements={1000} />)
  expect(container.querySelector('div > span').textContent).toEqual('1,000 results')
})

it('should allow message customization via locale context', () => {
  const { container, rerender } = render(
    <LocaleContext.Provider value={ptBr}>
      <TableFooterTest totalElements={0} />
    </LocaleContext.Provider>
  )
  expect(container.textContent).toEqual('0 ' + ptBr.tableFooter.results.zero)

  rerender(
    <LocaleContext.Provider value={ptBr}>
      <TableFooterTest totalElements={1} />
    </LocaleContext.Provider>
  )
  expect(container.textContent).toEqual('1 ' + ptBr.tableFooter.results.one)

  rerender(
    <LocaleContext.Provider value={ptBr}>
      <TableFooterTest totalElements={2} />
    </LocaleContext.Provider>
  )
  expect(container.textContent).toEqual('2 ' + ptBr.tableFooter.results.other)
})
