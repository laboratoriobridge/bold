import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test/index'

import { TextInput } from './TextInput'

describe('TextInput', () => {
    it('render', () => {
        const wrapper = render(withTheme(<TextInput />))
        expect(wrapper).toMatchSnapshot()
    })

    it('render password', () => {
        const wrapper = render(withTheme(<TextInput password />))
        expect(wrapper).toMatchSnapshot()
    })

    it('should render correctly with input', () => {
        const wrapper = render(withTheme(<TextInput icon={{ icon: 'adjust', position: 'left', onClick: jest.fn() }} />))
        expect(wrapper).toMatchSnapshot()
    })
})
