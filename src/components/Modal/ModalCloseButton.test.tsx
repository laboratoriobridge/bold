import { render } from '@testing-library/react'
import * as React from 'react'
import { ModalCloseButton } from './ModalCloseButton'

it('should render correctly', () => {
  const { container } = render(<ModalCloseButton onClose={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

it('should apply external styles prop', () => {
  const { container } = render(<ModalCloseButton onClose={jest.fn()} style={{ margin: '0.5rem' }} />)
  expect(container).toMatchSnapshot()
})
