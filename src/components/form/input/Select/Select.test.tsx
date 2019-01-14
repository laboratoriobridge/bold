import { mount } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { DefaultItemType, Select, SelectProps } from './Select'

const items: DefaultItemType[] = [
    { value: 1, label: 'Apple' },
    { value: 2, label: 'Banana' },
    { value: 3, label: 'Grape' },
    { value: 4, label: 'Orange' },
    { value: 5, label: 'Pear' },
]

// tslint:disable jsx-no-lambda
const createSelect = (props: Partial<SelectProps> = {}) => {
    return withTheme(
        <Select items={items} itemToString={item => item.label} {...props} />
    )
}

describe('render', () => {
    it('should render correctly when closed', () => {
        const wrapper = mount(createSelect())
        expect(wrapper.render()).toMatchSnapshot()
    })
    it('should render correctly when opened', () => {
        const wrapper = mount(createSelect({ isOpen: true }))
        expect(wrapper.render()).toMatchSnapshot()
    })
})
