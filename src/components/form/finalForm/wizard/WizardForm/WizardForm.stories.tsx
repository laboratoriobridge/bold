import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withRouter } from '../../../../../stories-addons'
import { TextField } from '../../../field/TextField/TextField'

import { WizardForm, WizardStep } from './WizardForm'

storiesOf('Form', module)
    .addDecorator(withRouter())
    .add('WizardForm', () => {
        return (
            <WizardForm
                onSubmit={action('submit')}
                onSubmitSucceeded={action('submitSucceeded')}
            >
                <WizardStep
                    render={renderStep1}
                    validate={validateStep1}
                />
                <WizardStep
                    render={renderStep2}
                />
                <WizardStep
                    render={renderStep3}
                />
            </WizardForm>
        )
    })

const validateStep1 = (values) => {
    if (!values.step1) {
        return {
            step1: 'Preenchimento obrigatório',
        }
    }
    return null
}

const renderStep1 = () => {
    return (
        <>
            <h1>Step 1</h1>
            <TextField name='step1' label='First name' required />
        </>
    )
}

const renderStep2 = () => {
    return (
        <>
            <h1>Step 2</h1>
            <TextField name='step2' label='Middle name' />
        </>
    )
}

const renderStep3 = () => {
    return (
        <>
            <h1>Step 3</h1>
            <TextField name='step3' label='Last name' />
        </>
    )
}
