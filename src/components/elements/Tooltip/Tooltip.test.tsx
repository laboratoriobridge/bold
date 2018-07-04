import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Tooltip } from './Tooltip'

it('should render correctly', () => {
    expect(render(withTheme(
        <Tooltip text='Tooltip text' placement='bottom-start'>
            <span>Testing</span>
        </Tooltip>
    ))).toMatchSnapshot()
})
