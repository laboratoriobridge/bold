import React from 'react'
import { render, screen } from '@testing-library/react'
import { useModalContext, ModalContextProvider } from '../useModalContext'
import { createMockModalContext } from '../../test/utils/createMockModalContext'

function TestComponent() {
  const { scroll, bodyRef, hasHeader, hasLeftSidebar, hasRightSidebar } = useModalContext()

  return (
    <div>
      <span data-testid='modal-context-scroll-value'>{scroll}</span>
      <span data-testid='modal-context-body-ref'>{bodyRef ? 'has-ref' : 'no-ref'}</span>
      <span data-testid='modal-context-has-header'>{hasHeader ? 'has-header' : 'no-header'}</span>
      <span data-testid='modal-context-has-left-sidebar'>
        {hasLeftSidebar ? 'has-left-sidebar' : 'no-left-sidebar'}
      </span>
      <span data-testid='modal-context-has-right-sidebar'>
        {hasRightSidebar ? 'has-right-sidebar' : 'no-right-sidebar'}
      </span>
    </div>
  )
}

it('should return provided context values when inside ModalContextProvider', () => {
  const mockContextValue = createMockModalContext({ hasHeader: true })

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
