import React from 'react'
import { render } from 'react-testing-library'

import { DropdownDivider } from './DropdownDivider'

it('should render correctly', () => {
  const { container } = render(<DropdownDivider />)
  expect(container).toMatchSnapshot()
})
