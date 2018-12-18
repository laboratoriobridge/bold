import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { FormRenderProps } from 'react-final-form'

import { withRouter } from '../../../../stories-addons'
import { Flow } from '../../../layout/Flow/Flow'
import { CheckboxField } from '../../field/CheckboxField/CheckboxField'
import { CpfField } from '../../field/MaskedField/maskedFields'
import { RadioField } from '../../field/RadioField/RadioField'
import { TextAreaField } from '../../field/TextAreaField/TextAreaField'
import { TextField } from '../../field/TextField/TextField'
import { SubmitButton } from '../SubmitButton'

import { Form } from './Form'

storiesOf('Form', module)
    .addDecorator(withRouter())
    .add('Form example', () => {
        const validate = form => {
            const errors: any = {}

            if (!form.nome) {
                errors.nome = 'Preenchimento obrigatório.'
            }

            if (!form.cpf) {
                errors.cpf = 'Preenchimento obrigatório.'
            }

            if (!form.text) {
                errors.text = 'Preenchimento obrigatório.'
            }

            return errors
        }

        const renderForm = (props: FormRenderProps) => (
            <form onSubmit={props.handleSubmit}>
                <Flow vSpacing={1} direction='vertical'>
                    <TextField name='nome' label='Nome' required />
                    <CpfField name='cpf' label='CPF' required />
                    <TextAreaField name='text' label='Text' maxLength={100} required />
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
