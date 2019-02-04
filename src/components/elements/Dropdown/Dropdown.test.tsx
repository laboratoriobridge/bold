import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Dropdown } from './Dropdown'
import { DropdownItem, DropdownMenu } from './DropdownMenu'

// tslint:disable jsx-no-lambda

it('should render correctly', () => {
    expect(render(withTheme(
        <Dropdown renderTarget={() => <span />}>
            {({ highlightedIndex }) => (
                <DropdownMenu highlightedIndex={highlightedIndex}>
                    <DropdownItem>Item #1</DropdownItem>
                    <DropdownItem>Item #2</DropdownItem>
                </DropdownMenu>
            )}
        </Dropdown>
    ))).toMatchSnapshot()
})

it('should accept Popper props', () => {
    expect(render(withTheme(
        <Dropdown renderTarget={() => <span />} >
            {({ highlightedIndex }) => (
                <DropdownMenu highlightedIndex={highlightedIndex}>
                    <DropdownItem>Item #1</DropdownItem>
                    <DropdownItem>Item #2</DropdownItem>
                </DropdownMenu>
            )}
        </Dropdown>
    ))).toMatchSnapshot()
})
