import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { TableLoadingRow } from './TableLoadingRow'

it('should render correctly', () => {
    expect(render(withTheme(
        <TableLoadingRow colSpan={3} />
    ))).toMatchSnapshot()
    expect(render(withTheme(
        <TableLoadingRow colSpan={2} message='Loading...' />
    ))).toMatchSnapshot()
})
