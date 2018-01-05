import { render } from 'enzyme'
import * as React from 'react'
import { withTheme } from '../../../../test/index'
import { TextInput } from './TextInput'

describe('TextInput', () => {
    it('render', () => {
        const wrapper = render(withTheme(<TextInput />))
        expect(wrapper).toMatchSnapshot()
    })
})
