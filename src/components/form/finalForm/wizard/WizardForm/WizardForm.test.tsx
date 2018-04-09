import { mount, render, shallow } from 'enzyme'
import * as React from 'react'

import { withForm, withRouter, withTheme } from '../../../../../test'
import { Button } from '../../../../elements/button/Button/Button'

import { WizardForm, WizardRenderProps, WizardStep } from './WizardForm'

const renderStep = (props: WizardRenderProps) => {
    return (
        <h1>Step #{props.wizard.currentStep}</h1>
    )
}

describe('rendering', () => {
    it('should render correctly', () => {
        expect(render(withRouter(withForm(withTheme(
            <WizardForm onSubmit={jest.fn()}>
                <WizardStep render={renderStep} />
                <WizardStep render={renderStep} />
                <WizardStep render={renderStep} />
            </WizardForm>
        ))))).toMatchSnapshot()
    })
})
