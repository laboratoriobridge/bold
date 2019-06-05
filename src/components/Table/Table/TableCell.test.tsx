import React from 'react'
import { render } from 'react-testing-library'

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
