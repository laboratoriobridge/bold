import { render } from '@testing-library/react'
import React from 'react'

import { FormControl } from './FormControl'

it('should render correctly', () => {
  const { container, rerender } = render(<FormControl>Test</FormControl>)
  expect(container).toMatchSnapshot()

  rerender(
    <FormControl label='Label' error='Error' htmlFor='test' required>
      Test
    </FormControl>
  )
  expect(container).toMatchSnapshot()
})

it('should accept the style prop', () => {
  const { container } = render(<FormControl style={{ color: 'pink' }}>Test</FormControl>)
  expect(container).toMatchSnapshot()
})
