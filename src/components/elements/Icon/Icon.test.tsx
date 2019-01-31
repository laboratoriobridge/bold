import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Icon } from './Icon'

it('should render correctly', () => {
    const wrapper = render(withTheme(
        <Icon icon='penOutline' />
    ))
    expect(wrapper).toMatchSnapshot()
})

it('should accept size prop', () => {
    expect(render(withTheme(<Icon icon='bellOutline' size={3} />))).toMatchSnapshot()
})

it('should accept style prop', () => {
    expect(render(withTheme(<Icon icon='bellOutline' style={{ strokeWidth: 5 }} />))).toMatchSnapshot()
})

it('should accept fill prop', () => {
    expect(render(withTheme(<Icon icon='bellOutline' fill='danger' />))).toMatchSnapshot()
})

it('should accept stroke prop', () => {
    expect(render(withTheme(<Icon icon='bellOutline' stroke='alert' />))).toMatchSnapshot()
})
