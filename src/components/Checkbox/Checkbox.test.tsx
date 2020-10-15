import { render, fireEvent } from '@testing-library/react'
import React from 'react'

import { Checkbox } from './Checkbox'

describe('Checkbox', () => {
  it('should render correctly', () => {
    const { container } = render(<Checkbox label='check' />)
    expect(container).toMatchSnapshot()
  })
  it('should render correctly when disabled', () => {
    const { container } = render(<Checkbox label='check' disabled />)
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
  it('should use external inputRef', () => {
    const ref = React.createRef<HTMLInputElement>()

    const { container } = render(<Checkbox label='check' inputRef={ref} checked={false} />)
    const input = container.querySelector('input')
    fireEvent(input, new MouseEvent('click'))
    expect(input.checked).toBeTruthy()
    expect(ref.current.checked).toBeTruthy()
  })
})
