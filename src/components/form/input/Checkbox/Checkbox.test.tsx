import React from 'react'
import { render } from 'react-testing-library'

import { withTheme } from '../../../../test/'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('should render correctly', () => {
    const { container } = render(<Checkbox label='check' />)
    expect(container).toMatchSnapshot()
  })
  it('should render correctly when disabled', () => {
    const { container } = render(withTheme(<Checkbox label='check' disabled />))
    expect(container).toMatchSnapshot()
  })
  it('should render correctly when indeterminate', () => {
    const { container } = render(<Checkbox label='check' indeterminate />)
    expect(container).toMatchSnapshot()
  })
  it('should have the indeterminate attribute on input when prop is specified', () => {
    const { container } = render(<Checkbox label='check' indeterminate />)
    const input = container.querySelector('input')
    expect(input.indeterminate).toEqual(true)
  })
})
