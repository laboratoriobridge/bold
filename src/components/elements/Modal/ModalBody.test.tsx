import * as React from 'react'
import { render } from 'react-testing-library'

import { ModalBody } from './ModalBody'

it('should render correctly', () => {
  const { container } = render(<ModalBody>Body</ModalBody>)
  expect(container).toMatchSnapshot()
})

it('should accept the "style" prop', () => {
  const { container } = render(<ModalBody style={{ color: 'red' }}>Body</ModalBody>)
  expect(container).toMatchSnapshot()
})
