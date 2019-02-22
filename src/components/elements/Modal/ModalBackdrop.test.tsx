import * as React from 'react'
import { render } from 'react-testing-library'

import { ModalBackdrop } from './ModalBackdrop'

it('should render correctly', () => {
  const { container } = render(<ModalBackdrop />)
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(<ModalBackdrop style={{ color: 'red' }} />)
  expect(container).toMatchSnapshot()
})
