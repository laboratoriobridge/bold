import { render } from '@testing-library/react'
import React from 'react'

import { Table, TableBody, TableCell, TableRow } from './index'

describe('TableBody', () => {
  it('should accept the style prop', () => {
    const { container } = render(
      <Table>
        <TableBody style={{ color: 'red' }}>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    expect(container).toMatchSnapshot()
  })
})
