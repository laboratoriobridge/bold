import { mount } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { AsyncSelect } from './AsyncSelect'

it('should render correctly', () => {
    const wrapper = mount(withTheme(<AsyncSelect />))
    expect(wrapper.render()).toMatchSnapshot()
})

it('should render correctly when multivalue', () => {
    const wrapper = mount(withTheme(<AsyncSelect isMulti />))
    expect(wrapper.render()).toMatchSnapshot()
})

it('should accept to override components', () => {
    const wrapper = mount(withTheme(
        <AsyncSelect
            components={{
                Placeholder: (p) => <span className='placeholder' />,
            }}
        />
    ))
    expect(wrapper.render()).toMatchSnapshot()
})
