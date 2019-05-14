import React from 'react'
import { render } from 'react-testing-library'

import { Radio } from './Radio'

it('should render correctly', () => {
  const { container } = render(<Radio label='First' />)
  expect(container).toMatchSnapshot()
})
