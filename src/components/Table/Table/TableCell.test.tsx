import { render } from '@testing-library/react'
import React from 'react'

import { Table, TableBody, TableCell, TableRow } from './index'

describe('TableCell', () => {
  it('should accept the style prop', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell style={{ color: 'red' }}>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    expect(container).toMatchSnapshot()
  })
})
