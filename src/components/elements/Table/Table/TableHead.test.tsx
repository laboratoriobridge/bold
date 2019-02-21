import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../../test'

import { Table, TableHead, TableHeader, TableRow } from './index'

describe('TableHead', () => {
    it('should accept the style prop', () => {
        expect(render(withTheme(
            <Table>
                <TableHead style={{ color: 'red' }}>
                    <TableRow><TableHeader>Test</TableHeader></TableRow>
                </TableHead>
            </Table>
        ))).toMatchSnapshot()
    })
})
