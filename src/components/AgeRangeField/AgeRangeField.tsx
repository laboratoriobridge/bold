import React from 'react'

import { useFormControl, UseFormControlProps } from '../../hooks/useFormControl'
import { FormControl } from '../FormControl'
import { AgeRangeInput, AgeRangeInputProps } from './AgeRangeInput'

export interface AgeRangeFieldProps extends AgeRangeInputProps, UseFormControlProps {}

export function AgeRangeField(props: AgeRangeFieldProps) {
  const { label, error, ...rest } = props

  const { getFormControlProps, getInputProps } = useFormControl(props)
  const inputProps = getInputProps()

  return (
    <FormControl {...getFormControlProps()}>
      <AgeRangeInput {...inputProps} {...rest} />
    </FormControl>
  )
}
