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
    setPart: jest.fn(),
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

it('should call setPart when modal has header', () => {
  const mockSetPart = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setPart: mockSetPart,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalHeader title='Modal title' />
    </ModalContextProvider>
  )

  expect(mockSetPart).toHaveBeenCalledTimes(1)
  expect(mockSetPart).toHaveBeenCalledWith('hasHeader', true)
})

it('should call setPart when modal has left sidebar', () => {
  const mockSetPart = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    hasLeftSidebar: true,
    hasRightSidebar: false,
    setPart: mockSetPart,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalSidebar position='left' />
      <ModalBody>Body content</ModalBody>
    </ModalContextProvider>
  )

  expect(mockSetPart).toHaveBeenCalledTimes(1)
  expect(mockSetPart).toHaveBeenCalledWith('hasLeftSidebar', true)
})

it('should call setPart when modal has right sidebar', () => {
  const mockSetPart = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    hasLeftSidebar: false,
    hasRightSidebar: true,
    setPart: mockSetPart,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalSidebar position='right' />
      <ModalBody>Body content</ModalBody>
    </ModalContextProvider>
  )

  expect(mockSetPart).toHaveBeenCalledTimes(1)
  expect(mockSetPart).toHaveBeenCalledWith('hasRightSidebar', true)
})

it('should not call setPart when modal has no optional sections (header, left sidebar, right sidebar)', () => {
  const mockSetPart = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setPart: mockSetPart,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalBody>Body content</ModalBody>
    </ModalContextProvider>
  )

  expect(mockSetPart).not.toHaveBeenCalled()
})

it('should call setPart three times when modal has header, left sidebar and right sidebar', () => {
  const mockSetPart = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    hasLeftSidebar: false,
    hasRightSidebar: true,
    setPart: mockSetPart,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalHeader title='Modal title' />
      <ModalSidebar position='left' />
      <ModalBody>Body content</ModalBody>
      <ModalSidebar position='right' />
    </ModalContextProvider>
  )

  expect(mockSetPart).toHaveBeenCalledTimes(3)
  expect(mockSetPart).toHaveBeenCalledWith('hasHeader', true)
  expect(mockSetPart).toHaveBeenCalledWith('hasLeftSidebar', true)
  expect(mockSetPart).toHaveBeenCalledWith('hasRightSidebar', true)
})
