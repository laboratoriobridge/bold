import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'
import { SortableLabel } from '../SortableLabel/SortableLabel'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableProps, TableRow } from './index'

const createTable = (props: TableProps = {}) => (
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
        // tslint:disable jsx-no-lambda
        const wrapper = render(withTheme(createTable()))
        expect(wrapper).toMatchSnapshot()
    })
    it('should accept the hovered prop', () => {
        const wrapper = render(withTheme(createTable({ hovered: true })))
        expect(wrapper).toMatchSnapshot()
    })
})

describe('TableHeader', () => {
    it('should call onSortChange when clicked', () => {
        const sortChange = jest.fn()
        const wrapper = mount(withTheme(
            <Table>
                <TableHead>
                    <TableRow>
                        <TableHeader
                            sortable={true}
                            sortDirection='ASC'
                            onSortChange={sortChange}
                        >
                            Header #1
                        </TableHeader>
                    </TableRow>
                </TableHead>
            </Table>
        ))
        expect(sortChange).not.toHaveBeenCalled()
        wrapper.find(SortableLabel).simulate('click')
        expect(sortChange).toHaveBeenCalledWith('DESC', undefined)
    })
})

describe('TableRow', () => {
    it('should have the pointer class if onClick is specified', () => {
        expect(render(withTheme(
            <Table>
                <TableBody>
                    <TableRow><TableCell>Test</TableCell></TableRow>
                </TableBody>
            </Table>
        ))).toMatchSnapshot()

        const clickHandler = jest.fn()
        const wrapper = mount(withTheme(
            <Table>
                <TableBody>
                    <TableRow onClick={clickHandler}><TableCell>Test</TableCell></TableRow>
                </TableBody>
            </Table>
        ))
        expect(wrapper.render()).toMatchSnapshot()

        wrapper.find('tr').simulate('click')
        expect(clickHandler).toHaveBeenCalled()
    })
})
