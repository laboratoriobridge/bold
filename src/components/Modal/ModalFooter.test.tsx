import { render } from '@testing-library/react'
import * as React from 'react'

import { ModalFooter } from './ModalFooter'

it('should render correctly', () => {
  const { container } = render(<ModalFooter>Footer</ModalFooter>)
  expect(container).toMatchSnapshot()
})

it('should accept the "style" prop', () => {
  const { container } = render(<ModalFooter style={{ color: 'red' }}>Footer</ModalFooter>)
  expect(container).toMatchSnapshot()
})
