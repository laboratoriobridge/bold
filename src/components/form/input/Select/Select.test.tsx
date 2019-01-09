import { mount } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { Select } from './Select'

it('should render correctly', () => {
    const wrapper = mount(withTheme(<Select />))
    expect(wrapper.render()).toMatchSnapshot()
})

it('should render correctly when multivalue', () => {
    const wrapper = mount(withTheme(<Select isMulti />))
    expect(wrapper.render()).toMatchSnapshot()
})

it('should accept to override components', () => {
    const wrapper = mount(withTheme(
        <Select
            components={{
                Placeholder: (p) => <span className='placeholder' />,
            }}
        />
    ))
    expect(wrapper.render()).toMatchSnapshot()
})
