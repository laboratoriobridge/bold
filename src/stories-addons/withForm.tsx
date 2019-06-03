import { Renderable, RenderFunction } from '@storybook/react'
import React from 'react'
import { FormProps } from 'react-final-form'

import { Form } from '../components/form/finalForm/Form'

// tslint:disable jsx-no-lambda

export const withForm = (formProps: Partial<FormProps> = {}) => (
  story: RenderFunction,
  context: { kind: string; story: string }
): Renderable => {
  const submit = () => undefined
  return <Form onSubmit={submit} render={() => story()} {...formProps} />
}
