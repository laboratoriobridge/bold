import { mount } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { DefaultOptionType } from './base'
import { Select } from './Select'

interface OptionType extends DefaultOptionType {
    extra: string
}

const options: OptionType[] = [
    { value: 1, label: 'Test #1', extra: 'foo' },
    { value: 2, label: 'Test #2', extra: 'bar' },
]

it('should render correctly', () => {
    const wrapper = mount(withTheme(<Select />))
    expect(wrapper.render()).toMatchSnapshot()
})

it('should render correctly when multivalue', () => {
    const wrapper = mount(withTheme(<Select<OptionType> options={options} value={options[0]} isMulti />))
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
