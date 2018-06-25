import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Tag } from './Tag'

it('should render correctly', () => {
    expect(render(withTheme(<Tag>Normal</Tag>))).toMatchSnapshot()
    expect(render(withTheme(<Tag type='alert'>Alert</Tag>))).toMatchSnapshot()
    expect(render(withTheme(<Tag type='danger'>Danger</Tag>))).toMatchSnapshot()
    expect(render(withTheme(<Tag type='info'>Info</Tag>))).toMatchSnapshot()
    expect(render(withTheme(<Tag type='success'>Success</Tag>))).toMatchSnapshot()
})

it('should accept the style prop', () => {
    expect(render(withTheme(<Tag style={{ color: 'green' }}>Normal</Tag>))).toMatchSnapshot()
})
