import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { MaskedInput } from './MaskedInput'

it('should render correctly', () => {
  const { container } = render(<MaskedInput mask={['(', /\d/, ')']} />)
  expect(container).toMatchSnapshot()
})

it('should accept the style prop', () => {
  const { container } = render(<MaskedInput mask={['(', /\d/, ')']} style={{ color: 'red' }} />)
  expect(container).toMatchSnapshot()
})

it('should mask input value', () => {
  const { container } = render(<MaskedInput mask={['(', /\d/, /[a-z]/, ')']} />)
  const input = container.querySelector('input')
  fireEvent.change(input, { target: { value: 'aaaaa333333bbbbb' } })
  expect(input.value).toEqual('(3b)')
})
