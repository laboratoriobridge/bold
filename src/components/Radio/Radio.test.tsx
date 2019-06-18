import { render } from '@testing-library/react'
import React from 'react'

import { Radio } from './Radio'

it('should render correctly', () => {
  const { container } = render(<Radio label='First' />)
  expect(container).toMatchSnapshot()
})
