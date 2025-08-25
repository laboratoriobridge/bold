import { render } from '@testing-library/react'
import * as React from 'react'

import { ModalContextProps, ModalContextProvider } from '../../hooks/useModalContext'
import { Modal, ModalScroll } from './Modal'
import { ModalBody } from './ModalBody'

const mockContextValue: ModalContextProps = {
  bodyRef: { current: document.createElement('div') },
  scroll: 'body' as ModalScroll,
}

it('should render correctly', () => {
  const { container } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalBody>Body</ModalBody>
    </ModalContextProvider>
  )
  expect(container).toMatchSnapshot()
})

it('should accept the "style" prop', () => {
  const { container } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalBody style={{ color: 'red' }}>Body</ModalBody>
    </ModalContextProvider>
  )
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
