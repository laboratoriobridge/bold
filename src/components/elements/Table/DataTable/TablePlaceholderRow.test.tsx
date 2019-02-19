import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../../test'

import { TablePlaceholderRow } from './TablePlaceholderRow'

it('should render correctly', () => {
    expect(render(withTheme(
        <TablePlaceholderRow colSpan={3} />
    ))).toMatchSnapshot()
    expect(render(withTheme(
        <TablePlaceholderRow colSpan={2} message='No results' />
    ))).toMatchSnapshot()
})
