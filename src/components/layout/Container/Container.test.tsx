import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Container } from './Container'

it('should render correctly', () => {
    const wrapper = render(withTheme(<Container>Content</Container>))
    expect(wrapper).toMatchSnapshot()
})

it('should accept the style prop', () => {
    const wrapper = render(withTheme(<Container style={{ padding: '5rem' }}>Content</Container>))
    expect(wrapper).toMatchSnapshot()
})
