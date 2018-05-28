import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Tag } from './Tag'

it('should render correctly', () => {
    expect(render(withTheme(<Tag>Test</Tag>))).toMatchSnapshot()
})
