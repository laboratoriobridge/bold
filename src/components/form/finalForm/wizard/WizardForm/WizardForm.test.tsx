import React from 'react'
import { render } from 'react-testing-library'

import { withForm, withRouter } from '../../../../../test'

import { WizardForm, WizardRenderProps, WizardStep } from './WizardForm'

const renderStep = (props: WizardRenderProps) => {
  return <h1>Step #{props.wizard.currentStep}</h1>
}

it('should render correctly', () => {
  const { container } = render(
    withRouter(
      withForm(
        <WizardForm onSubmit={jest.fn()}>
          <WizardStep render={renderStep} />
          <WizardStep render={renderStep} />
          <WizardStep render={renderStep} />
        </WizardForm>
      )
    )
  )
  expect(container).toMatchSnapshot()
})
