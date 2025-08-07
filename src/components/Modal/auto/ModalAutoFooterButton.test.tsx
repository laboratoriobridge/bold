import React from 'react'
import { fireEvent, render } from '@testing-library/react'
import { Button } from '../../Button'
import { ModalAutoFooterButton } from './ModalAutoFooterButton'

jest.mock('../../Button', () => ({
  Button: jest.fn((props) => <button {...props} />),
}))

it('should render correctly', () => {
  const { container } = render(<ModalAutoFooterButton action={{ label: 'Label' }} onClose={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

it('should apply action label as button children correctly', () => {
  const { getByRole } = render(<ModalAutoFooterButton action={{ label: 'Label' }} onClose={jest.fn()} />)
  const button = getByRole('button')
  expect(button).toHaveTextContent('Label')
})

it('should call action "onClick" when button is clicked', () => {
  const handleClick = jest.fn()

  const { getByRole } = render(
    <ModalAutoFooterButton action={{ label: 'Label', onClick: handleClick }} onClose={jest.fn()} />
  )
  const button = getByRole('button')

  expect(handleClick).not.toHaveBeenCalled()

  fireEvent.click(button)
  expect(handleClick).toHaveBeenCalledTimes(1)
})

it('should call "onClose" after onClick', () => {
  const handleClick = jest.fn()
  const handleClose = jest.fn()

  const { getByRole } = render(
    <ModalAutoFooterButton action={{ label: 'Label', onClick: handleClick }} onClose={handleClose} />
  )
  const button = getByRole('button')

  expect(handleClick).not.toHaveBeenCalled()
  expect(handleClose).not.toHaveBeenCalled()

  fireEvent.click(button)
  expect(handleClick).toHaveBeenCalledTimes(1)
  expect(handleClose).toHaveBeenCalledTimes(1)
})

it('should pass action props to button', () => {
  render(<ModalAutoFooterButton action={{ label: 'Label', kind: 'primary', skin: 'outline' }} onClose={jest.fn()} />)

  expect(Button).toHaveBeenCalledWith(
    expect.objectContaining({
      kind: 'primary',
      skin: 'outline',
      children: 'Label',
    }),
    {}
  )
})
