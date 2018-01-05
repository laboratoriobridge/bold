import * as React from 'react'
import { render } from 'enzyme'
import { TextInput } from './TextInput'
import { withTheme } from '../../../../test/index'

describe('TextInput', () => {
    it('render', () => {
        const wrapper = render(withTheme(<TextInput />))
        expect(wrapper).toMatchSnapshot()
    })
})
