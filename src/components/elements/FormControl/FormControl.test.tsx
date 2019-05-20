import React from 'react'
import { render } from 'react-testing-library'

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
