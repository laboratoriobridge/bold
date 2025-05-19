import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { LocaleContext } from '../../i18n'
import ptBr from '../../i18n/locales/pt-BR'
import { ModalHeader, ModalHeaderProps } from './ModalHeader'

const defaultProps: ModalHeaderProps = {
  title: 'Title',
  backgroundColor: 'red',
  hasCloseIcon: true,
  onCloseButtonClick: jest.fn(),
}

it('should render correctly', () => {
  const { container } = render(<ModalHeader {...defaultProps} />)

  expect(container).toMatchSnapshot()
})

it('should render with string title', () => {
  const { getByText } = render(<ModalHeader {...defaultProps} />)

  expect(getByText('Title')).toBeInTheDocument()
})

it('should render with JSX element as title', () => {
  const jsxTitle = <div data-testid='custom-jsx-element'>Custom JSX Element</div>
  const { getByTestId } = render(<ModalHeader {...defaultProps} title={jsxTitle} />)

  expect(getByTestId('custom-jsx-element')).toBeInTheDocument()
})

it('should apply backgroundColor prop correctly', () => {
  const { container } = render(<ModalHeader {...defaultProps} />)

  expect(container.firstChild).toHaveStyle('background-color: red')
})

it('should render the close button when hasCloseIcon is true', () => {
  const { getByRole } = render(
    <LocaleContext.Provider value={ptBr}>
      <ModalHeader {...defaultProps} />
    </LocaleContext.Provider>
  )

  expect(getByRole('button', { name: ptBr.modal.close })).toBeInTheDocument()
})

it('should not render the close button when hasCloseIcon is false', () => {
  const { queryByRole } = render(
    <LocaleContext.Provider value={ptBr}>
      <ModalHeader {...defaultProps} hasCloseIcon={false} />
    </LocaleContext.Provider>
  )

  expect(queryByRole('button', { name: ptBr.modal.close })).toBeNull()
})

it('should call onCloseButtonClick when close button is clicked', () => {
  const onCloseMock = jest.fn()
  const { getByRole } = render(
    <LocaleContext.Provider value={ptBr}>
      <ModalHeader {...defaultProps} onCloseButtonClick={onCloseMock} />
    </LocaleContext.Provider>
  )

  expect(onCloseMock).not.toHaveBeenCalled()
  fireEvent.click(getByRole('button', { name: ptBr.modal.close }))
  expect(onCloseMock).toHaveBeenCalledTimes(1)
})
