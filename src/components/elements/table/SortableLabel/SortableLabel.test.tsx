import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { SortableLabel, toggleDirection } from './SortableLabel'

describe('SortableLabel', () => {
    it('should render correctly', () => {
        expect(render(withTheme(<SortableLabel direction='' onChange={jest.fn()} />))).toMatchSnapshot()
        expect(render(withTheme(<SortableLabel direction='ASC' onChange={jest.fn()} />))).toMatchSnapshot()
        expect(render(withTheme(<SortableLabel direction='DESC' onChange={jest.fn()} />))).toMatchSnapshot()
    })
    it('should call onChange when clicked', () => {
        const change = jest.fn()
        mount(withTheme(<SortableLabel direction='' onChange={change} />)).simulate('click')
        expect(change).toHaveBeenLastCalledWith('ASC', undefined)

        mount(withTheme(<SortableLabel direction='ASC' onChange={change} />)).simulate('click')
        expect(change).toHaveBeenLastCalledWith('DESC', undefined)

        mount(withTheme(<SortableLabel direction='DESC' onChange={change} />)).simulate('click')
        expect(change).toHaveBeenLastCalledWith('ASC', undefined)

        mount(withTheme(<SortableLabel direction='DESC' onChange={change} />)).simulate('click', { shiftKey: true })
        expect(change).toHaveBeenLastCalledWith('ASC', true)
    })
})

describe('toggleDirection', () => {
    it('should toggle the current sort direction', () => {
        expect(toggleDirection('')).toEqual('ASC')
        expect(toggleDirection('ASC')).toEqual('DESC')
        expect(toggleDirection('DESC')).toEqual('ASC')
    })
})
