import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'
import { PopperController } from '../Popper'

import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownMenu'

// tslint:disable jsx-no-lambda

it('should render correctly', () => {
    expect(render(withTheme(
        <Dropdown renderTarget={() => <span />}>
            {(ctrl: PopperController) => (
                <>
                    <DropdownItem>Item #1</DropdownItem>
                    <DropdownItem>Item #2</DropdownItem>
                </>
            )}
        </Dropdown>
    ))).toMatchSnapshot()
})

it('should accept Popper props', () => {
    expect(render(withTheme(
        <Dropdown renderTarget={() => <span />} placement='left-end' offset={0} closeOnOutsideClick={false}>
            {(ctrl: PopperController) => (
                <>
                    <DropdownItem>Item #1</DropdownItem>
                    <DropdownItem>Item #2</DropdownItem>
                </>
            )}
        </Dropdown>
    ))).toMatchSnapshot()
})
