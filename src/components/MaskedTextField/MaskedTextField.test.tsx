import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import * as stringUtils from '../../util/string'

import { MaskedTextField } from './MaskedTextField'

const stringUtilsModule = stringUtils as any
stringUtilsModule.randomStr = jest.fn(() => 'abc')

it('should render correctly', () => {
  const { container } = render(<MaskedTextField label='Masked' mask={['(', /\d/, ')']} />)
  expect(container).toMatchSnapshot()
})

it('should render correctly with error', () => {
  const { container } = render(<MaskedTextField label='Masked' error='Some error' mask={['(', /\d/, ')']} />)
  expect(container).toMatchSnapshot()
})

it('should accept the style prop', () => {
  const { container } = render(<MaskedTextField mask={['(', /\d/, ')']} style={{ color: 'red' }} />)
  expect(container).toMatchSnapshot()
})

it('should mask input value', () => {
  const { container } = render(<MaskedTextField mask={['(', /\d/, /[a-z]/, ')']} />)
  const input = container.querySelector('input')
  fireEvent.change(input, { target: { value: 'aaaaa333333bbbbb' } })
  expect(input.value).toEqual('(3b)')
})
