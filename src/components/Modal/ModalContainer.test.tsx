import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { LocaleContext } from '../../i18n'
import ptBr from '../../i18n/locales/pt-BR'

import { ModalContainer } from './ModalContainer'
import { ModalHeader } from './ModalHeader'

jest.mock('../../util/string')

jest.mock('./ModalHeader', () => ({
  ModalHeader: jest.fn((props) => <div {...props} />),
}))

it('should render correctly', () => {
  const { container } = render(<ModalContainer>Container</ModalContainer>)
  expect(container).toMatchSnapshot()
})

it('should accept the "style" prop', () => {
  const { container } = render(<ModalContainer style={{ color: 'red' }}>Container</ModalContainer>)
  expect(container).toMatchSnapshot()
})

it('should call "onClose" when close button is pressed', () => {
  const handleClose = jest.fn()
  const { container } = render(<ModalContainer onClose={handleClose}>Container</ModalContainer>)
  const button = container.querySelector('button')
  expect(handleClose).not.toHaveBeenCalled()
  fireEvent.click(button)
  expect(handleClose).toHaveBeenCalled()
})

it('should have close icon only if "hasCloseIcon" is true', () => {
  const { container: containerWithoutClose } = render(<ModalContainer hasCloseIcon={false}>Container</ModalContainer>)
  expect(containerWithoutClose.querySelector('button')).toBeFalsy()

  const { container: containerWithClose } = render(<ModalContainer>Container</ModalContainer>)
  expect(containerWithClose.querySelector('button')).toBeTruthy()
})

it('should allow message customization via locale context', () => {
  const { container } = render(
    <LocaleContext.Provider value={ptBr}>
      <ModalContainer>Container</ModalContainer>
    </LocaleContext.Provider>
  )
  expect(container.querySelector('button').getAttribute('aria-label')).toEqual(ptBr.modal.close)
})

it('should provide a ref to the div html element', () => {
  const ref = React.createRef<HTMLDivElement>()
  render(<ModalContainer ref={ref}>Container</ModalContainer>)
  expect(ref.current.tagName).toEqual('DIV')
})

describe('conditional rendering and prop passing to ModalHeader', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('does not render ModalHeader when headerTitle is not provided', () => {
    render(<ModalContainer>Container content</ModalContainer>)

    expect(ModalHeader).not.toHaveBeenCalled()
  })

  it('passes all expected props correctly to ModalHeader', () => {
    const onClose = jest.fn()

    render(
      <ModalContainer
        title='title'
        subtitle='subtitle'
        headerIcon='infoCircleOutline'
        headerBackgroundColor='red'
        hasHeaderDivider={true}
        hasCloseIcon={true}
        onClose={onClose}
      >
        Container
      </ModalContainer>
    )

    expect(ModalHeader).toHaveBeenCalledWith(
      expect.objectContaining({
        title: 'title',
        subtitle: 'subtitle',
        icon: 'infoCircleOutline',
        backgroundColor: 'red',
        hasDivider: true,
        hasCloseIcon: true,
        onCloseButtonClick: onClose,
      }),
      expect.anything()
    )
  })
})
