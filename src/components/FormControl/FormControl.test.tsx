import { render } from '@testing-library/react'
import React from 'react'

import { FormControl } from './FormControl'

it('should render correctly', () => {
  const { container, rerender } = render(<FormControl>Test</FormControl>)
  expect(container).toMatchSnapshot()

  rerender(
    <FormControl name='test' label='Label' error='Error' required>
      Test
    </FormControl>
  )
  expect(container).toMatchSnapshot()
})
