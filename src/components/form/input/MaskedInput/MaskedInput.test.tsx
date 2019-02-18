import { render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../../test'

import { MaskedInput } from './MaskedInput'

it('should render correctly', () => {
    const wrapper = render(withTheme(<MaskedInput mask={['(', /\d/, ')']} />))
    expect(wrapper).toMatchSnapshot()
})

it('should accept the style prop', () => {
    const wrapper = render(withTheme(<MaskedInput mask={['(', /\d/, ')']} style={{ color: 'red' }} />))
    expect(wrapper).toMatchSnapshot()
})
