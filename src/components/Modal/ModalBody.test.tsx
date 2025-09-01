import { render } from '@testing-library/react'
import * as React from 'react'

import { ModalContextValue, ModalContextProvider } from '../../hooks/useModalContext'
import { ModalBody } from './ModalBody'

const mockContextValue: ModalContextValue = {
  bodyRef: { current: document.createElement('div') },
  scroll: 'body',
  hasHeader: false,
  hasLeftSidebar: false,
  hasRightSidebar: false,
  setSectionState: jest.fn(),
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
    <ModalContextProvider value={mockContextValue}>
      <ModalBody data-testid='modal-body'>Modal content</ModalBody>
    </ModalContextProvider>
  )
  const modalBody = getByTestId('modal-body')
  expect(modalBody).toHaveStyle('overflow: auto;')
})

it("should set ModalBody overflow to initial when scroll is 'full'", () => {
  const { getByTestId } = render(
    <ModalContextProvider value={{ ...mockContextValue, scroll: 'full' }}>
      <ModalBody data-testid='modal-body'>Modal content</ModalBody>
    </ModalContextProvider>
  )
  const modalBody = getByTestId('modal-body')
  expect(modalBody).toHaveStyle('overflow: initial;')
})
