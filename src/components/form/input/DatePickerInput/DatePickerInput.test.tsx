import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { DatePickerInput } from './DatePickerInput'

it('deve renderizar corretamente', () => {
    const wrapper = render(withTheme(<DatePickerInput onChange={jest.fn()} />))
    expect(wrapper).toMatchSnapshot()
})

it('deve conter a classe css "disabled"', () => {
    const wrapper = render(withTheme(<DatePickerInput onChange={jest.fn()} disabled />))
    expect(wrapper).toMatchSnapshot()
})
