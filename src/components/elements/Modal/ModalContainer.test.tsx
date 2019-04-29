import * as React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { LocaleContext } from '../../../locale'
import ptBr from '../../../locale/locales/pt-BR'
import * as stringUtils from '../../../util/string'

import { ModalContainer } from './ModalContainer'
;(stringUtils as any).randomStr = jest.fn(() => 'abc')

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
