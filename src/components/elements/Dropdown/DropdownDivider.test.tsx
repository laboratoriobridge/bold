import React from 'react'
import { render } from 'react-testing-library'

import { withTheme } from '../../../test'

import { DropdownDivider } from './DropdownDivider'

it('should render correctly', () => {
    const { container } = render(withTheme(
        <DropdownDivider />
    ))
    expect(container).toMatchSnapshot()
})
