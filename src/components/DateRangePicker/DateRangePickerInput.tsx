import React from 'react'

import { useFormControl, UseFormControlProps } from '../../hooks/useFormControl'
import { FormControl } from '../FormControl'

import { BaseDateRangeInput, BaseDateRangeInputProps } from './BaseDateRangeInput'

export interface DateRangePickerInputProps extends BaseDateRangeInputProps, UseFormControlProps {}

export function DateRangePickerInput(props: DateRangePickerInputProps) {
  const { label, error, inline, ...rest } = props

  const { getFormControlProps, getInputProps } = useFormControl(props)
  const inputProps = getInputProps()

  return (
    <FormControl {...getFormControlProps()}>
      <BaseDateRangeInput invalid={inputProps['aria-invalid']} {...inputProps} {...rest} />
    </FormControl>
  )
}
