import React from 'react'
import { render } from 'react-testing-library'

import { withForm } from '../../../../../test'

import { WizardFooter, WizardFooterProps } from './WizardFooter'

const createComponent = (props: Partial<WizardFooterProps> = {}) =>
  withForm(
    <WizardFooter isFirstStep={false} isLastStep={false} onSubmit={jest.fn()} onPrevious={jest.fn()} {...props} />
  )

it('should render correctly', () => {
  const { container } = render(createComponent())
  expect(container).toMatchSnapshot()
})

it('should have only "next" and "previous" buttons on intermediate steps', () => {
  const { container } = render(createComponent())
  const buttons = container.querySelectorAll('button')

  expect(buttons.length).toEqual(2)
  expect(buttons[0].textContent).toEqual('Voltar')
  expect(buttons[1].textContent).toEqual('Avançar')
})

it('should have only "next" button on first step', () => {
  const { container } = render(createComponent({ isFirstStep: true }))
  const buttons = container.querySelectorAll('button')

  expect(buttons.length).toEqual(1)
  expect(buttons[0].textContent).toEqual('Avançar')
})
it('should have "save" and "previous" button on last step', () => {
  const { container } = render(createComponent({ isLastStep: true }))
  const buttons = container.querySelectorAll('button')

  expect(buttons.length).toEqual(2)
  expect(buttons[0].textContent).toEqual('Voltar')
  expect(buttons[1].textContent).toEqual('Salvar')
})
