import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { SortableLabel, toggleDirection } from './SortableLabel'

describe('SortableLabel', () => {
    it('should render correctly', () => {
        expect(render(withTheme(<SortableLabel dir='' onChange={jest.fn()} />))).toMatchSnapshot()
        expect(render(withTheme(<SortableLabel dir='ASC' onChange={jest.fn()} />))).toMatchSnapshot()
        expect(render(withTheme(<SortableLabel dir='DESC' onChange={jest.fn()} />))).toMatchSnapshot()
    })
    it('should call onChange when clicked', () => {
        const change = jest.fn()
        mount(withTheme(<SortableLabel dir='' onChange={change} />)).simulate('click')
        expect(change).toHaveBeenLastCalledWith('ASC')

        mount(withTheme(<SortableLabel dir='ASC' onChange={change} />)).simulate('click')
        expect(change).toHaveBeenLastCalledWith('DESC')

        mount(withTheme(<SortableLabel dir='DESC' onChange={change} />)).simulate('click')
        expect(change).toHaveBeenLastCalledWith('ASC')
    })
})

describe('toggleDirection', () => {
    it('should toggle the current sort direction', () => {
        expect(toggleDirection('')).toEqual('ASC')
        expect(toggleDirection('ASC')).toEqual('DESC')
        expect(toggleDirection('DESC')).toEqual('ASC')
    })
})
