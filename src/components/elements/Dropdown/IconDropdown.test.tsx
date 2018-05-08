import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { DropdownItem } from './DropdownMenu'
import { IconDropdown } from './IconDropdown'

const options = [
    {
        title: 'Option 1',
        onClick: jest.fn(),
    },
    {
        title: 'Option 2',
        onClick: jest.fn(),
    },
]

describe('IconDropdown', () => {
    it('should render correctly', () => {
        const wrapper = render(withTheme(<IconDropdown options={options} icon={'triangleDown'} />))
        expect(wrapper).toMatchSnapshot()
    })

    it('should expand onClick', () => {

        const wrapper = mount(withTheme(<IconDropdown options={options} icon={'triangleDown'} />))
        expect(wrapper.find('li').length).toEqual(0)
        wrapper.find('a').simulate('click')
        expect(wrapper.find('li').length).toEqual(2)

    })

    it('should call function on DropdownItem click', () => {
        const wrapper = mount(withTheme(<IconDropdown options={options} icon={'triangleDown'} />))
        wrapper.find('a').simulate('click')
        wrapper.find(DropdownItem).first().find('a').simulate('click')
        expect(options[0].onClick).toHaveBeenCalled()
    })

})
