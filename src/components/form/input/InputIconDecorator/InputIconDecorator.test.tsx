import { render } from 'enzyme'
import * as moment from 'moment'
import * as React from 'react'

import { withTheme } from '../../../../test'
import { Input } from '../Input/Input'

import { InputIconDecorator } from './InputIconDecorator'

it('should render correctly', () => {
    const wrapper = render(withTheme(
        <InputIconDecorator icon='search'>
            <Input />
        </InputIconDecorator>
    ))
    expect(wrapper).toMatchSnapshot()
})

it('should render correctly with button', () => {
    const wrapper = render(withTheme(
        <InputIconDecorator icon='search' onClick={jest.fn()}>
            <Input />
        </InputIconDecorator>
    ))
    expect(wrapper).toMatchSnapshot()
})

it('should render correctly with left position', () => {
    const wrapper = render(withTheme(
        <InputIconDecorator icon='search' position='left'>
            <Input />
        </InputIconDecorator>
    ))
    expect(wrapper).toMatchSnapshot()
})
