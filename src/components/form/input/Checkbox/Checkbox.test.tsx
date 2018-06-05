import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test/'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
    it('deve renderizar corretamente', () => {
        const wrapper = render(withTheme(<Checkbox label='check' />))
        expect(wrapper).toMatchSnapshot()
    })
    it('deve conter a classe css "disabled"', () => {
        const wrapper = render(withTheme(<Checkbox label='check' disabled />))
        expect(wrapper).toMatchSnapshot()
    })
})
