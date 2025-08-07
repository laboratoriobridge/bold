import { render } from '@testing-library/react'
import React from 'react'

import { ModalContainer } from './ModalContainer'
import { ModalHeader } from './ModalHeader'

jest.mock('../../util/string')

jest.mock('./ModalHeader', () => ({
  ModalHeader: jest.fn((props) => <div {...props} />),
}))

beforeEach(() => {
  jest.clearAllMocks()
})

it('should render correctly', () => {
  const { container } = render(<ModalContainer title='Modal container'>Container</ModalContainer>)
  expect(container).toMatchSnapshot()
})

it('should accept the "style" prop', () => {
  const { container } = render(
    <ModalContainer title='Modal container' style={{ color: 'red' }}>
      Container
    </ModalContainer>
  )
  expect(container).toMatchSnapshot()
})

it('should provide a ref to the div html element', () => {
  const ref = React.createRef<HTMLDivElement>()
  render(
    <ModalContainer title='Modal container' ref={ref}>
      Container
    </ModalContainer>
  )
  expect(ref.current.tagName).toEqual('DIV')
})

describe('prop passing to ModalHeader', () => {
  it('passes all expected props correctly to ModalHeader', () => {
    const onClose = jest.fn()

    render(
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
