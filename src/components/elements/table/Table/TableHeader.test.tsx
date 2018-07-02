import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'
import { SortableLabel } from '../SortableLabel/SortableLabel'

import { Table, TableHead, TableHeader, TableRow } from './index'

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
    it('should accept the style prop', () => {
        expect(render(withTheme(
            <Table>
                <TableHead>
                    <TableRow><TableHeader style={{ color: 'red' }}>Test</TableHeader></TableRow>
                </TableHead>
            </Table>
        ))).toMatchSnapshot()
    })
})
