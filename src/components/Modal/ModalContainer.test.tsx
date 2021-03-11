import { fireEvent, render } from '@testing-library/react'
import * as React from 'react'

import { LocaleContext } from '../../i18n'
import ptBr from '../../i18n/locales/pt-BR'

import { ModalContainer } from './ModalContainer'

jest.mock('../../util/string')

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
