import { render } from '@testing-library/react'
import React from 'react'

import { Switch } from './Switch'

it('should render correctly', () => {
  const { container } = render(<Switch />)
  expect(container).toMatchSnapshot()
})

it('should render correctly with label', () => {
  const { container } = render(<Switch label='Active' value='true' />)
  expect(container).toMatchSnapshot()
})

it('should render correctly when disabled', () => {
  const { container } = render(<Switch label='Disabled' value='true' disabled />)
  expect(container).toMatchSnapshot()
  expect(container.querySelector('input').getAttribute('disabled')).not.toBeNull()
})
