import React from 'react'
import { render, screen } from '@testing-library/react'
import { useModalContext, ModalContextProvider, ModalContextValue } from '../useModalContext'
import { ModalBody, ModalHeader, ModalSidebar } from '../../components/Modal'

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
  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setHasHeader: jest.fn(),
    setHasLeftSidebar: jest.fn(),
    setHasRightSidebar: jest.fn(),
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
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setHasHeader: mockSetHasHeader,
    setHasLeftSidebar: jest.fn(),
    setHasRightSidebar: jest.fn(),
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalHeader title='Modal title' />
    </ModalContextProvider>
  )

  expect(mockSetHasHeader).toHaveBeenCalledTimes(1)
})

it('should not call setHasHeader when modal has no header', () => {
  const mockSetHasHeader = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setHasHeader: mockSetHasHeader,
    setHasLeftSidebar: jest.fn(),
    setHasRightSidebar: jest.fn(),
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalBody>Modal body content</ModalBody>
    </ModalContextProvider>
  )

  expect(mockSetHasHeader).not.toHaveBeenCalled()
})

it('should call setHasLeftSidebar when modal has left sidebar', () => {
  const mockSetHasLeftSidebar = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    hasLeftSidebar: true,
    hasRightSidebar: false,
    setHasLeftSidebar: mockSetHasLeftSidebar,
    setHasRightSidebar: jest.fn(),
    setHasHeader: jest.fn(),
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalHeader title='Modal title' />
      <ModalSidebar position='left' />
    </ModalContextProvider>
  )

  expect(mockSetHasLeftSidebar).toHaveBeenCalledTimes(1)
})

it('should not call setHasLeftSidebar when modal has no left sidebar', () => {
  const mockSetHasLeftSidebar = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setHasLeftSidebar: mockSetHasLeftSidebar,
    setHasRightSidebar: jest.fn(),
    setHasHeader: jest.fn(),
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalHeader title='Modal title' />
    </ModalContextProvider>
  )

  expect(mockSetHasLeftSidebar).not.toHaveBeenCalled()
})

it('should call setHasRightSidebar when modal has right sidebar', () => {
  const mockSetHasRightSidebar = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    hasLeftSidebar: false,
    hasRightSidebar: true,
    setHasLeftSidebar: jest.fn(),
    setHasRightSidebar: mockSetHasRightSidebar,
    setHasHeader: jest.fn(),
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalHeader title='Modal title' />
      <ModalSidebar position='right' />
    </ModalContextProvider>
  )

  expect(mockSetHasRightSidebar).toHaveBeenCalledTimes(1)
})

it('should not call setHasLeftSidebar when modal has no right sidebar', () => {
  const mockSetHasRightSidebar = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setHasLeftSidebar: jest.fn(),
    setHasRightSidebar: mockSetHasRightSidebar,
    setHasHeader: jest.fn(),
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalHeader title='Modal title' />
    </ModalContextProvider>
  )

  expect(mockSetHasRightSidebar).not.toHaveBeenCalled()
})
