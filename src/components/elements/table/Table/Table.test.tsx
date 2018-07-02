import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableProps, TableRow } from './index'

const createTable = (props: TableProps = {}) => withTheme(
    <Table {...props}>
        <TableHead>
            <TableRow>
                <TableHeader colSpan={2}>Headers</TableHeader>
            </TableRow>
            <TableRow>
                <TableHeader sortable={true} sortDirection='ASC'>Header #1</TableHeader>
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
        const wrapper = render(createTable())
        expect(wrapper).toMatchSnapshot()
    })
    it('should accept the hovered prop', () => {
        const wrapper = render(createTable({ hovered: true }))
        expect(wrapper).toMatchSnapshot()
    })
    it('should accept the style prop', () => {
        const wrapper = render(createTable({ style: { color: 'red' } }))
        expect(wrapper).toMatchSnapshot()
    })
})
