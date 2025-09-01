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
    setSectionState: jest.fn(),
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

it('should call setSectionState when modal has header', () => {
  const mockSetSectionState = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setSectionState: mockSetSectionState,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalHeader title='Modal title' />
    </ModalContextProvider>
  )

  expect(mockSetSectionState).toHaveBeenCalledTimes(1)
  expect(mockSetSectionState).toHaveBeenCalledWith('hasHeader', true)
})

it('should call setSectionState when modal has left sidebar', () => {
  const mockSetSectionState = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    hasLeftSidebar: true,
    hasRightSidebar: false,
    setSectionState: mockSetSectionState,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalSidebar position='left' />
      <ModalBody>Body content</ModalBody>
    </ModalContextProvider>
  )

  expect(mockSetSectionState).toHaveBeenCalledTimes(1)
  expect(mockSetSectionState).toHaveBeenCalledWith('hasLeftSidebar', true)
})

it('should call setSectionState when modal has right sidebar', () => {
  const mockSetSectionState = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    hasLeftSidebar: false,
    hasRightSidebar: true,
    setSectionState: mockSetSectionState,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalSidebar position='right' />
      <ModalBody>Body content</ModalBody>
    </ModalContextProvider>
  )

  expect(mockSetSectionState).toHaveBeenCalledTimes(1)
  expect(mockSetSectionState).toHaveBeenCalledWith('hasRightSidebar', true)
})

it('should not call setSectionState when modal has no optional sections (header, left sidebar, right sidebar)', () => {
  const mockSetSectionState = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: false,
    hasLeftSidebar: false,
    hasRightSidebar: false,
    setSectionState: mockSetSectionState,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalBody>Body content</ModalBody>
    </ModalContextProvider>
  )

  expect(mockSetSectionState).not.toHaveBeenCalled()
})

it('should call setSectionState three times when modal has header, left sidebar and right sidebar', () => {
  const mockSetSectionState = jest.fn()

  const mockContextValue: ModalContextValue = {
    bodyRef: { current: document.createElement('div') },
    scroll: 'body',
    hasHeader: true,
    hasLeftSidebar: false,
    hasRightSidebar: true,
    setSectionState: mockSetSectionState,
  }

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalHeader title='Modal title' />
      <ModalSidebar position='left' />
      <ModalBody>Body content</ModalBody>
      <ModalSidebar position='right' />
    </ModalContextProvider>
  )

  expect(mockSetSectionState).toHaveBeenCalledTimes(3)
  expect(mockSetSectionState).toHaveBeenCalledWith('hasHeader', true)
  expect(mockSetSectionState).toHaveBeenCalledWith('hasLeftSidebar', true)
  expect(mockSetSectionState).toHaveBeenCalledWith('hasRightSidebar', true)
})
