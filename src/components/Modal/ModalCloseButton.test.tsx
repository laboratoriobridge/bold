import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { LocaleContext } from '../../i18n'
import ptBr from '../../i18n/locales/pt-BR'
import { ModalCloseButton } from './ModalCloseButton'

it('should render correctly', () => {
  const { container } = render(<ModalCloseButton onClick={jest.fn()} />)

  expect(container).toMatchSnapshot()
})

it('should apply external styles prop', () => {
  const { container } = render(<ModalCloseButton onClick={jest.fn()} style={{ margin: '0.5rem' }} />)

  expect(container).toMatchSnapshot()
})

it('should call onClick when the button is clicked', () => {
  const onClickMock = jest.fn()
  const { getByRole } = render(
    <LocaleContext.Provider value={ptBr}>
      <ModalCloseButton onClick={onClickMock} />
    </LocaleContext.Provider>
  )

  expect(onClickMock).not.toHaveBeenCalled()
  fireEvent.click(getByRole('button', { name: ptBr.modal.close }))
  expect(onClickMock).toHaveBeenCalledTimes(1)
})
