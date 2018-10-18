import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Icon } from './Icon'

it('should render correctly', () => {
    const wrapper = render(withTheme(
        <Icon icon='pen' />
    ))
    expect(wrapper).toMatchSnapshot()
})

it('should accept size prop', () => {
    expect(render(withTheme(<Icon icon='bell' size={3} />))).toMatchSnapshot()
})

it('should accept style prop', () => {
    expect(render(withTheme(<Icon icon='bell' style={{ strokeWidth: 5 }} />))).toMatchSnapshot()
})

it('should accept fill prop', () => {
    expect(render(withTheme(<Icon icon='bell' fill='danger' />))).toMatchSnapshot()
})

it('should accept stroke prop', () => {
    expect(render(withTheme(<Icon icon='bell' stroke='alert' />))).toMatchSnapshot()
})
