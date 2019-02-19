import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../../test'

import { Table, TableBody, TableCell, TableRow } from './index'

describe('TableCell', () => {
    it('should accept the style prop', () => {
        expect(render(withTheme(
            <Table>
                <TableBody>
                    <TableRow><TableCell style={{ color: 'red' }}>Test</TableCell></TableRow>
                </TableBody>
            </Table>
        ))).toMatchSnapshot()
    })
})
