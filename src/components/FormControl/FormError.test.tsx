import { render } from '@testing-library/react'
import React from 'react'

import { FormError } from './FormError'

it('should render correctly', () => {
  const { container } = render(<FormError>Error</FormError>)
  expect(container).toMatchSnapshot()
})

it('should accept the style prop', () => {
  const { container } = render(<FormError style={{ color: 'blue' }}>Error</FormError>)
  expect(container).toMatchSnapshot()
})

it('should pass down props to the underlying HTML div element', () => {
  const { container } = render(<FormError id='test'>Error</FormError>)
  expect(container.querySelector('div').getAttribute('id')).toEqual('test')
})
