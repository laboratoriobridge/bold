import { mount, render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../../test/'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(<Checkbox label='check' />))
        expect(wrapper).toMatchSnapshot()
    })
    it('should render correctly when disabled', () => {
        const wrapper = render(withTheme(<Checkbox label='check' disabled />))
        expect(wrapper).toMatchSnapshot()
    })
    it('should render correctly when indeterminate', () => {
        const wrapper = render(withTheme(<Checkbox label='check' indeterminate />))
        expect(wrapper).toMatchSnapshot()
    })
    it('should have the indeterminate attribute on input when prop is specified', () => {
        const wrapper = mount(withTheme(<Checkbox label='check' indeterminate />))
        const inputNode = wrapper.find('input').first().getDOMNode() as HTMLInputElement
        expect(inputNode.indeterminate).toEqual(true)
    })
})
