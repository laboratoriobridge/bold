import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { DateInput } from './DateInput'

it('deve renderizar corretamente', () => {
    const wrapper = render(withTheme(<DateInput />))
    expect(wrapper).toMatchSnapshot()
})

it('deve conter a classe css "disabled"', () => {
    const wrapper = render(withTheme(<DateInput disabled />))
    expect(wrapper).toMatchSnapshot()
})
