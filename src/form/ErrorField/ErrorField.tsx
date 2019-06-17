import React from 'react'
import { Field, FieldRenderProps } from 'react-final-form'

import { FormError } from '../../components/FormControl'

export interface ErrorFieldProps {
  name: string
  ignoreObjectError?: boolean
}

export function ErrorField(props: ErrorFieldProps) {
  const { name, ignoreObjectError } = props

  const renderField = (renderProps: FieldRenderProps<any, HTMLElement>) => {
    const {
      meta: { touched, error, dirtySinceLastSubmit, submitError },
    } = renderProps

    const hasError = (!!error && touched) || (!!submitError && !dirtySinceLastSubmit)

    const ignore = ignoreObjectError && !(typeof error === 'string') && !(typeof submitError === 'string')

    if (hasError && !ignore) {
      return <FormError>{error || submitError}</FormError>
    }

    return null
  }

  return <Field name={name} render={renderField} />
}
