import { render } from '@testing-library/react'
import React from 'react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableProps, TableRow } from './index'

const createTable = (props: TableProps = {}) => (
  <Table {...props}>
    <TableHead>
      <TableRow>
        <TableHeader colSpan={2}>Headers</TableHeader>
      </TableRow>
      <TableRow>
        <TableHeader sortable={true} sortDirection='ASC'>
          Header #1
        </TableHeader>
        <TableHeader>Header #2</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell colSpan={2}>Row #1</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row #2 - Cell #1</TableCell>
        <TableCell>Row #2 - Cell #2</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row #3 - Cell #1</TableCell>
        <TableCell>Row #3 - Cell #2</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

describe('Table', () => {
  it('should render corretly', () => {
    const { container } = render(createTable())
    expect(container).toMatchSnapshot()
  })
  it('should accept the hovered prop', () => {
    const { container } = render(createTable({ hovered: true }))
    expect(container).toMatchSnapshot()
  })
  it('should accept the style prop', () => {
    const { container } = render(createTable({ style: { color: 'red' } }))
    expect(container).toMatchSnapshot()
  })
})
