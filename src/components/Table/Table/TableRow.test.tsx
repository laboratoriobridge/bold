import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { Table, TableBody, TableCell, TableRow } from './index'

describe('TableRow', () => {
  it('should have the pointer class if onClick is specified', () => {
    const clickHandler = jest.fn()
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow onClick={clickHandler}>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    expect(container).toMatchSnapshot()

    fireEvent.click(container.querySelector('tr'))
    expect(clickHandler).toHaveBeenCalled()
  })
  it('should NOT have the pointer class if onClick is not specified', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    expect(container).toMatchSnapshot()
  })
  it('should accept the style prop', () => {
    const { container } = render(
      <Table>
        <TableBody>
          <TableRow style={{ color: 'red' }}>
            <TableCell>Test</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    )
    expect(container).toMatchSnapshot()
  })
})
