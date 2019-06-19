import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { FormRenderProps } from 'react-final-form'

import { Flow, VFlow } from '../../components/Flow'
import { CheckboxField } from '../inputs/CheckboxField'
import { RadioField } from '../inputs/RadioField'
import { TextAreaField } from '../inputs/TextAreaField'
import { TextField } from '../inputs/TextField'
import { SubmitButton } from '../SubmitButton'

import { Form } from './Form'

storiesOf('Form|Form', module).add('default', () => {
  const validate = form => {
    const errors: any = {}

    if (!form.name) {
      errors.name = 'Required field'
    }

    if (!form.cpf) {
      errors.cpf = 'Required field'
    }

    if (!form.text) {
      errors.text = 'Required field'
    }

    return errors
  }

  const renderForm = (props: FormRenderProps) => (
    <form onSubmit={props.handleSubmit}>
      <VFlow>
        <TextField name='name' label='Name' required />
        <TextAreaField name='text' label='Text' maxLength={100} required />
        <Flow>
          <RadioField name='radio' label='Option1' value='1' />
          <RadioField name='radio' label='Option2' value='2' />
        </Flow>
        <CheckboxField name='check' label='Check' />
        <SubmitButton handleSubmit={props.handleSubmit}>Submit</SubmitButton>
      </VFlow>
    </form>
  )

  const submit = () => ({ nome: 'test' })

  return <Form onSubmit={submit} render={renderForm} validate={validate} focusOnError={boolean('focusOnError', true)} />
})
