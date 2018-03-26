import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Badge } from './Badge'

it('should render correctly', () => {
    expect(render(withTheme(<Badge>Test</Badge>))).toMatchSnapshot()
})
