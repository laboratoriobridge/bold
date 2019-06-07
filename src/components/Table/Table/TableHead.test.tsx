import { render } from '@testing-library/react'
import React from 'react'

import { Table, TableHead, TableHeader, TableRow } from './index'

describe('TableHead', () => {
  it('should accept the style prop', () => {
    const { container } = render(
      <Table>
        <TableHead style={{ color: 'red' }}>
          <TableRow>
            <TableHeader>Test</TableHeader>
          </TableRow>
        </TableHead>
      </Table>
    )
    expect(container).toMatchSnapshot()
  })
})
