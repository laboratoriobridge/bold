import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { DropdownItem, DropdownMenu } from './DropdownMenu'

it('should render correctly', () => {
    expect(render(withTheme(
        <DropdownMenu>
            <DropdownItem>Normal</DropdownItem>
            <DropdownItem disabled>Disabled</DropdownItem>
            <DropdownItem type='danger'>Danger</DropdownItem>
        </DropdownMenu>
    ))).toMatchSnapshot()
})

it('should call onClick when clicked', () => {
    const clickNormal = jest.fn()
    const clickDisabled = jest.fn()
    const wrapper = mount(withTheme(
        <DropdownMenu>
            <DropdownItem onClick={clickNormal}>Normal</DropdownItem>
            <DropdownItem onClick={clickDisabled} disabled>Disabled</DropdownItem>
        </DropdownMenu>
    ))
    wrapper.find('a').first().simulate('click')
    expect(clickNormal).toHaveBeenCalled()
    wrapper.find('a').last().simulate('click')
    expect(clickDisabled).not.toHaveBeenCalled()
})
