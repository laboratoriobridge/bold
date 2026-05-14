import { render } from '@testing-library/react'
import * as React from 'react'

import { ModalContextProvider } from '../../hooks/useModalContext'
import { createMockModalContext } from '../../test/utils/createMockModalContext'
import { ModalFooter } from './ModalFooter'

it('should render correctly', () => {
  const mockContextValue = createMockModalContext()

  const { container } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalFooter>Footer</ModalFooter>
    </ModalContextProvider>
  )

  expect(container).toMatchSnapshot()
})

it('should accept the "style" prop', () => {
  const mockContextValue = createMockModalContext()

  const { container } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalFooter style={{ color: 'red' }}>Footer</ModalFooter>
    </ModalContextProvider>
  )

  expect(container).toMatchSnapshot()
})

it('should have gridRow 2 when has no header', () => {
  const mockContextValue = createMockModalContext()

  const { getByTestId } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalFooter data-testid='footer-grid-row'>Footer</ModalFooter>
    </ModalContextProvider>
  )

  const modalBody = getByTestId('footer-grid-row')
  expect(modalBody).toHaveStyle('grid-row: 2;')
})

it('should have gridRow 3 when has header', () => {
  const mockContextValue = createMockModalContext({ hasHeader: true })

  const { getByTestId } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalFooter data-testid='footer-grid-row'>Footer</ModalFooter>
    </ModalContextProvider>
  )

  const modalBody = getByTestId('footer-grid-row')
  expect(modalBody).toHaveStyle('grid-row: 3;')
})

it('should forward ref to the underlying element', () => {
  const mockContextValue = createMockModalContext()
  const ref = React.createRef<HTMLDivElement>()

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalFooter ref={ref}>Content</ModalFooter>
    </ModalContextProvider>
  )

  expect(ref.current).toBeInstanceOf(HTMLDivElement)
})

it('should allow ref access to DOM methods', () => {
  const mockContextValue = createMockModalContext()
  const ref = React.createRef<HTMLDivElement>()

  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalFooter ref={ref}>Content</ModalFooter>
    </ModalContextProvider>
  )

  expect(ref.current?.tagName).toBe('DIV')
  expect(ref.current?.textContent).toBe('Content')
})
