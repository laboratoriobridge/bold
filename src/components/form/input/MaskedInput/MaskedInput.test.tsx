import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { withTheme } from '../../../../test'

import { MaskedInput } from './MaskedInput'

it('should render correctly', () => {
  const { container } = render(withTheme(<MaskedInput mask={['(', /\d/, ')']} />))
  expect(container).toMatchSnapshot()
})

it('should accept the style prop', () => {
  const { container } = render(withTheme(<MaskedInput mask={['(', /\d/, ')']} style={{ color: 'red' }} />))
  expect(container).toMatchSnapshot()
})

it('should mask input value', () => {
  const { container } = render(withTheme(<MaskedInput mask={['(', /\d/, /[a-z]/, ')']} />))
  const input = container.querySelector('input')
  fireEvent.change(input, { target: { value: 'aaaaa333333bbbbb' } })
  expect(input.value).toEqual('(3b)')
})
