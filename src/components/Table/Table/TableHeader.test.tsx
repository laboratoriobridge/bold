import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Table, TableHead, TableHeader, TableRow } from './index'

describe('TableHeader', () => {
  it('should call onSortChange when clicked', () => {
    const sortChange = jest.fn()
    const { container } = render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader sortable={true} sortDirection='ASC' onSortChange={sortChange}>
              Header #1
            </TableHeader>
          </TableRow>
        </TableHead>
      </Table>
    )
    expect(sortChange).not.toHaveBeenCalled()
    fireEvent.click(container.querySelector('th span'))
    expect(sortChange).toHaveBeenCalledWith('DESC', false)
  })
  it('should accept the style prop', () => {
    const { container } = render(
      <Table>
        <TableHead>
          <TableRow>
            <TableHeader style={{ color: 'red' }}>Test</TableHeader>
          </TableRow>
        </TableHead>
      </Table>
    )
    expect(container).toMatchSnapshot()
  })
})
