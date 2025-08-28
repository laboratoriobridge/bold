import React from 'react'
import { render, screen } from '@testing-library/react'
import { useModalContext, ModalContextProvider, ModalContextValue } from '../useModalContext'
import { ModalBody, ModalHeader } from '../../components/Modal'

function TestComponent() {
  const { scroll, bodyRef, hasHeader } = useModalContext()

  return (
    <div>
      <span data-testid='modal-context-scroll-value'>{scroll}</span>
      <span data-testid='modal-context-body-ref'>{bodyRef ? 'has-ref' : 'no-ref'}</span>
      <span data-testid='modal-context-has-header'>{hasHeader ? 'has-header' : 'no-header'}</span>
    </div>
  )
}

it('should return provided context values when inside ModalContextProvider', () => {
  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    setHasHeader: jest.fn(),
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <TestComponent />
    </ModalContextProvider>
  )

  expect(screen.getByTestId('modal-context-scroll-value').textContent).toBe('body')
  expect(screen.getByTestId('modal-context-body-ref').textContent).toBe('has-ref')
  expect(screen.getByTestId('modal-context-has-header').textContent).toBe('has-header')
})

it('should throw an error when used outside ModalContextProvider', () => {
  const renderWithoutProvider = () => render(<TestComponent />)

  expect(renderWithoutProvider).toThrow(
    'Modal subcomponents (ModalHeader, ModalBody, ModalContainer, ModalFooter, ModalCloseButton) must be used inside <Modal>'
  )
})

it('should call setHasHeader when modal has header', () => {
  const mockSetHasHeader = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    setHasHeader: mockSetHasHeader,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalHeader title='Modal title' />
    </ModalContextProvider>
  )

  expect(mockSetHasHeader).toHaveBeenCalledTimes(1)
})

it('should not call setHasHeader when modal has header', () => {
  const mockSetHasHeader = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: false,
    setHasHeader: mockSetHasHeader,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalBody>Modal body content</ModalBody>
    </ModalContextProvider>
  )

  expect(mockSetHasHeader).not.toHaveBeenCalled()
})
