import React from 'react'

import { useFormControl } from '../../hooks/useFormControl'
import { FormControl } from '../FormControl'

import { TextInput, TextInputProps } from './TextInput'

export interface TextFieldProps extends TextInputProps {
  label?: string
  errorText?: string
}

export function TextField(props: TextFieldProps) {
  const { label, errorText, ...rest } = props

  const { getFormControlProps, getInputProps } = useFormControl(props)
  const inputProps = getInputProps()

  return (
    <FormControl {...getFormControlProps()}>
      <TextInput invalid={inputProps['aria-invalid']} {...inputProps} {...rest} />
    </FormControl>
  )
}
