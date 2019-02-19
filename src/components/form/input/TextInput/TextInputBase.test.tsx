import 'jest-emotion'
import React from 'react'
import { render } from 'react-testing-library'

import { withTheme } from '../../../../test'

import { TextInputBase } from './TextInputBase'

it('should render correctly', () => {
    const { container } = render(withTheme(<TextInputBase />))
    expect(container).toMatchSnapshot()
})

it('should accept style prop', () => {
    const { container } = render(withTheme(<TextInputBase style={{ color: 'red' }} />))
    expect(container.querySelector('input')).toHaveStyleRule('color', 'red')
})
