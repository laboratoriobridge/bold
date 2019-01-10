import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test/index'

import { TextInput } from './TextInput'

describe('TextInput', () => {
    it('render', () => {
        const wrapper = render(withTheme(<TextInput />))
        expect(wrapper).toMatchSnapshot()
    })

    it('render password', () => {
        const wrapper = render(withTheme(<TextInput type='password' />))
        expect(wrapper).toMatchSnapshot()
    })

    it('should render correctly with input', () => {
        const wrapper = render(withTheme(<TextInput icon='adjust' iconPosition='left' onIconClick={jest.fn()} />))
        expect(wrapper).toMatchSnapshot()
    })

    it('should not render clear icon when clearable prop is false', () => {
        const wrapper1 = mount(withTheme(<TextInput defaultValue='Test' clearable={true} />))
        expect(wrapper1.find('[title="Limpar"]').length).toEqual(1)

        const wrapper2 = mount(withTheme(<TextInput defaultValue='Test' clearable={false} />))
        expect(wrapper2.find('[title="Limpar"]').length).toEqual(0)
    })
})
