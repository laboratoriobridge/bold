import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './index'

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
    it('should accept the style prop', () => {
        expect(render(withTheme(
            <Table>
                <TableBody>
                    <TableRow style={{ color: 'red' }}><TableCell>Test</TableCell></TableRow>
                </TableBody>
            </Table>
        ))).toMatchSnapshot()
    })
})
