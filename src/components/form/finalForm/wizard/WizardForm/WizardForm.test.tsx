import { render } from 'enzyme'
import React from 'react'

import { withForm, withRouter } from '../../../../../test'

import { WizardForm, WizardRenderProps, WizardStep } from './WizardForm'

const renderStep = (props: WizardRenderProps) => {
  return <h1>Step #{props.wizard.currentStep}</h1>
}

describe('rendering', () => {
  it('should render correctly', () => {
    expect(
      render(
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
    ).toMatchSnapshot()
  })
})
