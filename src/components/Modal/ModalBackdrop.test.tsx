import { render } from '@testing-library/react'
import * as React from 'react'

import { ModalBackdrop } from './ModalBackdrop'

it('should render correctly', () => {
  const { container } = render(<ModalBackdrop />)
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(<ModalBackdrop style={{ color: 'red' }} />)
  expect(container).toMatchSnapshot()
})

it('should accept "depthLevel" prop', () => {
  const { container } = render(<ModalBackdrop depthLevel={3} />)
  expect(container).toMatchSnapshot()
})
