import { render } from '@testing-library/react'
import React from 'react'

import { ModalContextProvider } from '../../hooks/useModalContext'
import { createMockModalContext } from '../../test/utils/createMockModalContext'
import { ModalContainer } from './ModalContainer'

jest.mock('../../util/string')

const mockContextValue = createMockModalContext()

beforeEach(() => {
  jest.clearAllMocks()
})

it('should render correctly', () => {
  const { container } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalContainer title='Modal container'>Container</ModalContainer>
    </ModalContextProvider>
  )
  expect(container).toMatchSnapshot()
})

it('should accept the "style" prop', () => {
  const { container } = render(
    <ModalContextProvider value={mockContextValue}>
      <ModalContainer title='Modal container' style={{ color: 'red' }}>
        Container
      </ModalContainer>
    </ModalContextProvider>
  )
  expect(container).toMatchSnapshot()
})

it('should provide a ref to the div html element', () => {
  const ref = React.createRef<HTMLDivElement>()
  render(
    <ModalContextProvider value={mockContextValue}>
      <ModalContainer title='Modal container' ref={ref}>
        Container
      </ModalContainer>
    </ModalContextProvider>
  )
  expect(ref.current.tagName).toEqual('DIV')
})
