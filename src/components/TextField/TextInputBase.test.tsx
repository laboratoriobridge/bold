import { render } from '@testing-library/react'
import 'jest-emotion'
import React from 'react'

import { TextInputBase } from './TextInputBase'

it('should render correctly', () => {
  const { container } = render(<TextInputBase />)
  expect(container).toMatchSnapshot()
})

it('should accept style prop', () => {
  const { container } = render(<TextInputBase style={{ color: 'red' }} />)
  expect(container.querySelector('input')).toHaveStyleRule('color', 'red')
})
