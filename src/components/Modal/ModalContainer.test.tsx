import { render } from '@testing-library/react'
import React from 'react'

import { ModalContextProvider } from '../../hooks/useModalContext'
import { ModalContainer } from './ModalContainer'
import { ModalHeader } from './ModalHeader'
import { ModalScroll } from './Modal'

jest.mock('../../util/string')

jest.mock('./ModalHeader', () => ({
  ModalHeader: jest.fn((props) => <div {...props} />),
}))

const mockContextValue = {
  bodyRef: { current: document.createElement('div') },
  scroll: 'body' as ModalScroll,
}

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

describe('prop passing to ModalHeader', () => {
  it('passes all expected props correctly to ModalHeader', () => {
    const onClose = jest.fn()

    render(
      <ModalContextProvider value={mockContextValue}>
        <ModalContainer
          title='title'
          subtitle='subtitle'
          icon='infoCircleFilled'
          iconFill='primary'
          onClose={onClose}
          hasCloseIcon
        >
          Container
        </ModalContainer>
      </ModalContextProvider>
    )

    expect(ModalHeader).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'title',
        subtitle: 'subtitle',
        icon: 'infoCircleFilled',
        iconFill: 'primary',
        hasCloseIcon: true,
        onCloseButtonClick: onClose,
      }),
      {}
    )
  })
})
