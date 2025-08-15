import React from 'react'
import { render, screen } from '@testing-library/react'
import { useModalContext, ModalContextProvider } from '../useModalContext'
import { ModalScroll } from '../../components/Modal'

function TestComponent() {
  const { scroll, bodyRef } = useModalContext()

  return (
    <div>
      <span data-testid='modal-context-scroll-value'>{scroll}</span>
      <span data-testid='modal-context-body-ref'>{bodyRef ? 'has-ref' : 'no-ref'}</span>
    </div>
  )
}

it('should return provided context values when inside ModalContextProvider', () => {
  const mockContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body' as ModalScroll,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <TestComponent />
    </ModalContextProvider>
  )

  expect(screen.getByTestId('modal-context-scroll-value').textContent).toBe('body')
  expect(screen.getByTestId('modal-context-body-ref').textContent).toBe('has-ref')
})

it('should throw an error when used outside ModalContextProvider', () => {
  const renderWithoutProvider = () => render(<TestComponent />)

  expect(renderWithoutProvider).toThrow(
    'Modal subcomponents (ModalBody, ModalContainer, ModalFooter) must be used inside <Modal>'
  )
})
