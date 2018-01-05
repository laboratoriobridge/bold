import * as React from 'react'
import { render } from 'enzyme'
import { Checkbox } from './Checkbox'
import { withTheme } from '../../../../test/'

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
