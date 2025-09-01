import { render } from '@testing-library/react'
import React from 'react'
import { ModalContextProvider } from '../../hooks/useModalContext'
import { createMockModalContext } from '../../test/utils/createMockModalContext'
import { ModalSidebar } from './ModalSidebar'

const mockContextValue = createMockModalContext({ hasLeftSidebar: true })

it('should render correctly', () => {
  const { container } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalSidebar position='left'>Content</ModalSidebar>
    </ModalContextProvider>
  )
  expect(container).toMatchSnapshot()
})

it('should accept "style" prop', () => {
  const { container } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalSidebar position='left' style={{ background: 'red' }}>
        Content
      </ModalSidebar>
    </ModalContextProvider>
  )
  expect(container).toMatchSnapshot()
})

it('should apply border right when side is left', () => {
  const { getByTestId } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalSidebar position='left' data-testid='sidebar-left-border'>
        Content
      </ModalSidebar>
    </ModalContextProvider>
  )
  const sidebar = getByTestId('sidebar-left-border')
  expect(getComputedStyle(sidebar).borderRight).toBe('1px solid #D3D4DD')
  expect(getComputedStyle(sidebar).borderLeft).toBe('0px')
})

it('should apply border left when side is right', () => {
  const { getByTestId } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalSidebar position='right' data-testid='sidebar-right-border'>
        Content
      </ModalSidebar>
    </ModalContextProvider>
  )
  const sidebar = getByTestId('sidebar-right-border')
  expect(getComputedStyle(sidebar).borderLeft).toBe('1px solid #D3D4DD')
  expect(getComputedStyle(sidebar).borderRight).toBe('0px')
})
