import React from 'react'
import { render } from 'react-testing-library'

import { TextArea } from './TextArea'

it('should render correctly', () => {
  const { container } = render(<TextArea name='input' placeholder='Test' defaultValue='Value' />)
  expect(container).toMatchSnapshot()
})

it('should render correctly when disabled', () => {
  const { container } = render(<TextArea name='input' disabled />)
  expect(container).toMatchSnapshot()
})

it('should render with error status', () => {
  const { container } = render(<TextArea name='input' status='error' />)
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
