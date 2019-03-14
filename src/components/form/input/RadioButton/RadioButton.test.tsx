import React from 'react'
import { render } from 'react-testing-library'

import { RadioButton } from './RadioButton'

it('should render correctly', () => {
  const { container } = render(<RadioButton label='First' />)
  expect(container).toMatchSnapshot()
})
