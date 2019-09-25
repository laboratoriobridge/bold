import { render } from '@testing-library/react'
import React from 'react'

import { TextField } from './TextField'

jest.mock('../../util/string')

it('should render correctly', () => {
  const { container } = render(<TextField label='Label' error='Some error' />)
  expect(container).toMatchSnapshot()
})

describe('error', () => {
  it('should render the error text', () => {
    const { queryByText } = render(<TextField error='Some error' />)
    expect(queryByText('Some error')).toBeTruthy()
  })

  it('input should have an "aria-invalid=true" attribute when "error" is provided', () => {
    const { container } = render(<TextField error='Some error' />)
    expect(container.querySelector('input').getAttribute('aria-invalid')).toEqual('true')
  })

  it('input should have an "aria-errormessage" attribute when "error" is provided', () => {
    const { container } = render(<TextField error='Some error' />)
    expect(container.querySelector('input').getAttribute('aria-errormessage')).toEqual('error-abc')
    expect(container.querySelector('#error-abc').textContent).toEqual('Some error')
  })
})

describe('input label', () => {
  it('label should have a htmlFor prop equals to the used id', () => {
    const { container } = render(<TextField id='foo' label='Foo' />)

    expect(container.querySelector('label').getAttribute('for')).toEqual('foo')
    expect(container).toMatchSnapshot()
  })

  it('should use aria-labelledby equals to an auto-assigned label id, if "id" is not provided', () => {
    const { container } = render(<TextField label='test' />)

    expect(container.querySelector('label').getAttribute('id')).toEqual('label-abc')
    expect(container.querySelector('input').getAttribute('aria-labelledby')).toEqual('label-abc')
    expect(container).toMatchSnapshot()
  })

  it('should not have aria description if "label" prop is not provided', () => {
    const { container } = render(<TextField />)
    expect(container.querySelector('input').getAttribute('aria-labelledby')).toBeFalsy()
  })
})
