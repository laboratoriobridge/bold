import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../../../test'

import { SelectEmptyItem, SelectHelperMenuItem, SelectLoadingItem, SelectMenu, SelectMenuItem } from './SelectMenu'

describe('SelectMenu', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(<SelectMenu />))
        expect(wrapper).toMatchSnapshot()
    })
})

describe('SelectMenuItem', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(<SelectMenuItem>Item</SelectMenuItem>))
        expect(wrapper).toMatchSnapshot()
    })

    it('should render correctly when selected', () => {
        const wrapper = render(withTheme(<SelectMenuItem selected>Item</SelectMenuItem>))
        expect(wrapper).toMatchSnapshot()
    })

    it('should render correctly when highlighted', () => {
        const wrapper = render(withTheme(<SelectMenuItem highlighted>Item</SelectMenuItem>))
        expect(wrapper).toMatchSnapshot()
    })

    it('should render correctly when custom style defined', () => {
        const wrapper = render(withTheme(<SelectMenuItem style={{ color: 'red' }}>Item</SelectMenuItem>))
        expect(wrapper).toMatchSnapshot()
    })
})

describe('SelectHelperMenuItem', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(<SelectHelperMenuItem style={{}}>Loading</SelectHelperMenuItem>))
        expect(wrapper).toMatchSnapshot()
    })
})

describe('SelectLoadingItem', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(<SelectLoadingItem />))
        expect(wrapper).toMatchSnapshot()
    })
})

describe('SelectEmptyItem', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(<SelectEmptyItem />))
        expect(wrapper).toMatchSnapshot()
    })
})
