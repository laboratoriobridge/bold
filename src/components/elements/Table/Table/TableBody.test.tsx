import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { Table, TableBody, TableCell, TableRow } from './index'

describe('TableBody', () => {
    it('should accept the style prop', () => {
        expect(render(withTheme(
            <Table>
                <TableBody style={{ color: 'red' }}>
                    <TableRow><TableCell>Test</TableCell></TableRow>
                </TableBody>
            </Table>
        ))).toMatchSnapshot()
    })
})
