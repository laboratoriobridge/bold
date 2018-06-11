import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'
import { PopperController } from '../Popper'

import { Dropdown } from './Dropdown'
import { DropdownItem } from './DropdownMenu'

const createComponent = () => {
    return withTheme(
        // tslint:disable jsx-no-lambda
        <Dropdown placement='top-start' renderTarget={() => <span />}>
            {(ctrl: PopperController) => (
                <>
                    <DropdownItem>Item #1</DropdownItem>
                    <DropdownItem>Item #2</DropdownItem>
                </>
            )}
        </Dropdown>
    )
}

it('should render correctly', () => {
    expect(render(createComponent())).toMatchSnapshot()
})
