import { render } from '@testing-library/react'
import * as React from 'react'

import { ModalContextProvider } from '../../hooks/useModalContext'
import { createMockModalContext } from '../../test/utils/createMockModalContext'
import { ModalBody } from './ModalBody'
import { ModalHeader } from './ModalHeader'

it('should render correctly', () => {
  const mockContextValue = createMockModalContext()

  const { container } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalBody>Body</ModalBody>
    </ModalContextProvider>
  )
  expect(container).toMatchSnapshot()
})

it('should accept the "style" prop', () => {
  const mockContextValue = createMockModalContext()

  const { container } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalBody style={{ color: 'red' }}>Body</ModalBody>
    </ModalContextProvider>
  )
  expect(container).toMatchSnapshot()
})

it("should set ModalBody overflow to auto when scroll is 'body'", () => {
  const mockContextValue = createMockModalContext()

  const { getByTestId } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalBody data-testid='modal-body'>Modal content</ModalBody>
    </ModalContextProvider>
  )
  const modalBody = getByTestId('modal-body')
  expect(modalBody).toHaveStyle('overflow: auto;')
})

it("should set ModalBody overflow to initial when scroll is 'full'", () => {
  const mockContextValue = createMockModalContext({ scroll: 'full' })

  const { getByTestId } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalBody data-testid='modal-body'>Modal content</ModalBody>
    </ModalContextProvider>
  )
  const modalBody = getByTestId('modal-body')
  expect(modalBody).toHaveStyle('overflow: initial;')
})

it('should have gridRow 1 when has no header', () => {
  const mockContextValue = createMockModalContext()

  const { getByTestId } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalBody data-testid='modal-body'>Modal content</ModalBody>
    </ModalContextProvider>
  )
  const modalBody = getByTestId('modal-body')
  expect(modalBody).toHaveStyle('grid-row: 1;')
})

it('should have gridRow 2 when has header', () => {
  const mockContextValue = createMockModalContext({ hasHeader: true })

  const { getByTestId } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalHeader title='Modal title' />
      <ModalBody data-testid='modal-body'>Modal content</ModalBody>
    </ModalContextProvider>
  )
  const modalBody = getByTestId('modal-body')
  expect(modalBody).toHaveStyle('grid-row: 2;')
})
