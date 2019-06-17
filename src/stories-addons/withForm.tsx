import { Renderable, RenderFunction } from '@storybook/react'
import React from 'react'
import { FormProps } from 'react-final-form'

import { Form } from '../final-form/Form'

// tslint:disable jsx-no-lambda

export const withForm = (formProps: Partial<FormProps> = {}) => (story: RenderFunction): Renderable => {
  const submit = () => undefined
  return <Form onSubmit={submit} render={() => story()} {...formProps} />
}
