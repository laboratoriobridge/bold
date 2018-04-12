import { storiesOf } from '@storybook/react'
import * as React from 'react'
import { FormRenderProps } from 'react-final-form'

import { withPropTypes, withTheme } from '../../../stories-addons'
import { withStore } from '../../../stories-addons/withStore'
import { Flow } from '../../layout/Flow/Flow'
import { CheckboxField } from '../field/CheckboxField/CheckboxField'
import { RadioField } from '../field/RadioField/RadioField'
import { TextField } from '../field/TextField/TextField'

import { Form } from './Form'
import { SubmitButton } from './SubmitButton'

storiesOf('Form', module)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .addDecorator(withStore())
    .add('Form example', () => {
        const validate = form => {
            const errors: any = {}

            if (!form.nome) {
                errors.nome = 'Preenchimento obrigatório.'
            }

            return errors
        }

        const renderForm = (props: FormRenderProps) => (
            <Flow vSpacing={1} direction='vertical'>
                <TextField name='nome' label='Nome' required />
                <Flow>
                    <RadioField name='radio' label='Option1' value='1' />
                    <RadioField name='radio' label='Option2' value='2' />
                </Flow>
                <CheckboxField name='check' label='Check' />
                <SubmitButton label='Submit' handleSubmit={props.handleSubmit} />
            </Flow>
        )

        const submit = () => ({ nome: 'test' })

        return (
            <Form
                onSubmit={submit}
                render={renderForm}
                validate={validate}
            />
        )
    })
