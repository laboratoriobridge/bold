import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { Paper } from './Paper'

it('should render correctly', () => {
    expect(render(withTheme(
        <Paper elevation={20}>
            <span>Testing with title</span>
        </Paper>
    ))).toMatchSnapshot()
})
