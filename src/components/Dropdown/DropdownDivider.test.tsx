import { render } from '@testing-library/react'
import React from 'react'

import { DropdownDivider } from './DropdownDivider'

it('should render correctly', () => {
  const { container } = render(<DropdownDivider />)
  expect(container).toMatchSnapshot()
})
