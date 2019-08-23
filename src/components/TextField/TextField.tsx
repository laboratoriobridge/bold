import React, { useRef } from 'react'

import { randomStr } from '../../util/string'
import { FormControl } from '../FormControl'

import { TextInput, TextInputProps } from './TextInput'

export interface TextFieldProps extends TextInputProps {
  label?: string
  errorText?: string
}

export function TextField(props: TextFieldProps) {
  const { id, label, errorText, required, name, ...rest } = props

  const labelIdRef = useRef(`label-${randomStr()}`)
  const errorIdRef = useRef(`error-${randomStr()}`)

  const labelId = label && !id ? labelIdRef.current : undefined
  const errorId = errorText ? errorIdRef.current : undefined

  return (
    <FormControl
      label={label}
      htmlFor={id}
      labelId={labelId}
      errorId={errorId}
      error={errorText}
      required={required}
      data-name={name}
    >
      <TextInput
        id={id}
        name={name}
        required={required}
        aria-labelledby={labelId}
        invalid={!!errorText}
        aria-errormessage={errorId}
        {...rest}
      />
    </FormControl>
  )
}
