import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { FormRenderProps } from 'react-final-form'

import { withPropTypes, withRouter, withTheme } from '../../../../stories-addons'
import { Flow } from '../../../layout/Flow/Flow'
import { CheckboxField } from '../../field/CheckboxField/CheckboxField'
import { RadioField } from '../../field/RadioField/RadioField'
import { TextField } from '../../field/TextField/TextField'
import { SubmitButton } from '../SubmitButton'

import { Form } from './Form'

storiesOf('Form', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .addDecorator(withRouter())
    .add('Form example', () => {
        const validate = form => {
            const errors: any = {}

            if (!form.nome) {
                errors.nome = 'Preenchimento obrigatório.'
            }

            return errors
        }

        const renderForm = (props: FormRenderProps) => (
            <form onSubmit={props.handleSubmit}>
                <Flow vSpacing={1} direction='vertical'>
                    <TextField name='nome' label='Nome' required />
                    <Flow>
                        <RadioField name='radio' label='Option1' value='1' />
                        <RadioField name='radio' label='Option2' value='2' />
                    </Flow>
                    <CheckboxField name='check' label='Check' />
                    <SubmitButton label='Submit' handleSubmit={props.handleSubmit} />
                </Flow>
            </form>
        )

        const submit = () => ({ nome: 'test' })

        return (
            <Form
                onSubmit={submit}
                render={renderForm}
                validate={validate}
                focusOnError={boolean('focusOnError', true)}
            />
        )
    })
