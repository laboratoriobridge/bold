import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../test'

import { Popover } from './Popover'

it('should render correctly', () => {
    expect(render(withTheme(
        <Popover title='Title' text='Popover text' placement='bottom-start'>
            <span>Testing with title</span>
        </Popover>
    ))).toMatchSnapshot()

    expect(render(withTheme(
        <Popover text='Popover text'>
            <span>Testing no title</span>
        </Popover>
    ))).toMatchSnapshot()
})
