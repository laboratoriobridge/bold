import { render } from '@testing-library/react'
import * as React from 'react'

import { Modal } from './Modal'
import { ModalBody } from './ModalBody'

it('should render correctly', () => {
  const { container } = render(<ModalBody>Body</ModalBody>)
  expect(container).toMatchSnapshot()
})

it('should accept the "style" prop', () => {
  const { container } = render(<ModalBody style={{ color: 'red' }}>Body</ModalBody>)
  expect(container).toMatchSnapshot()
})

it("should set ModalBody overflow to auto when scroll is 'body'", () => {
  const { getByTestId } = render(
    <Modal open>
      <ModalBody data-testid='modal-body'>Modal content</ModalBody>
    </Modal>
  )
  const modalBody = getByTestId('modal-body')
  expect(modalBody).toHaveStyle('overflow: auto;')
})

it("should set ModalBody overflow to hidden when scroll is 'full'", () => {
  const { getByTestId } = render(
    <Modal open scroll='full'>
      <ModalBody data-testid='modal-body'>Modal content</ModalBody>
    </Modal>
  )
  const modalBody = getByTestId('modal-body')
  expect(modalBody).toHaveStyle('overflow: hidden;')
})
