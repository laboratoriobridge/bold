import { render } from '@testing-library/react'
import React from 'react'

import { TextArea } from './TextArea'

jest.mock('../../util/string')

it('should render correctly', () => {
  const { container } = render(<TextArea name='input' label='Label' placeholder='Test' defaultValue='Value' />)
  expect(container).toMatchSnapshot()
})

it('should render correctly when disabled', () => {
  const { container } = render(<TextArea name='input' disabled />)
  expect(container).toMatchSnapshot()
})

it('should render correctly with error', () => {
  const { container } = render(<TextArea name='input' error='Some error' />)
  expect(container).toMatchSnapshot()
})

it('should accept style prop', () => {
  const { container } = render(<TextArea name='input' style={{ color: 'green' }} />)
  expect(container).toMatchSnapshot()
})

it('should render character counter', () => {
  const { container, rerender } = render(<TextArea name='input' defaultValue='Testing counter' maxLength={200} />)
  expect(container).toMatchSnapshot()

  rerender(<TextArea name='input' maxLength={200} />)
  expect(container).toMatchSnapshot()
})

describe('error', () => {
  it('should render the error text', () => {
    const { queryByText } = render(<TextArea error='Some error' />)
    expect(queryByText('Some error')).toBeTruthy()
  })

  it('input should have an "aria-invalid=true" attribute when "error" is provided', () => {
    const { container } = render(<TextArea error='Some error' />)
    expect(container.querySelector('textarea').getAttribute('aria-invalid')).toEqual('true')
  })

  it('input should have an "aria-errormessage" attribute when "error" is provided', () => {
    const { container } = render(<TextArea error='Some error' />)
    expect(container.querySelector('textarea').getAttribute('aria-errormessage')).toEqual('error-abc')
    expect(container.querySelector('#error-abc').textContent).toEqual('Some error')
  })
})

describe('textarea label', () => {
  it('label should have a htmlFor prop equals to the used id', () => {
    const { container } = render(<TextArea id='foo' label='Foo' />)

    expect(container.querySelector('label').getAttribute('for')).toEqual('foo')
    expect(container).toMatchSnapshot()
  })

  it('should use aria-labelledby equals to an auto-assigned label id, if "id" is not provided', () => {
    const { container } = render(<TextArea label='test' />)

    expect(container.querySelector('label').getAttribute('id')).toEqual('label-abc')
    expect(container.querySelector('textarea').getAttribute('aria-labelledby')).toEqual('label-abc')
    expect(container).toMatchSnapshot()
  })

  it('should not have aria description if "label" prop is not provided', () => {
    const { container } = render(<TextArea />)
    expect(container.querySelector('textarea').getAttribute('aria-labelledby')).toBeFalsy()
  })
})
