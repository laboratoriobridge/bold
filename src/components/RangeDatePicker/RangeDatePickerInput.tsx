import React from 'react'

import { useFormControl, UseFormControlProps } from '../../hooks/useFormControl'
import { FormControl } from '../FormControl'

import { BaseRangeDatePicker, BaseRangeDatePickerProps } from './BaseRangeDatePicker'

export interface RangeDatePickerInputProps extends BaseRangeDatePickerProps, UseFormControlProps {}

export function RangeDatePickerInput(props: RangeDatePickerInputProps) {
  const { label, error, ...rest } = props

  const { getFormControlProps, getInputProps } = useFormControl(props)
  const inputProps = getInputProps()

  return (
    <FormControl {...getFormControlProps()}>
      <BaseRangeDatePicker invalid={inputProps['aria-invalid']} {...inputProps} {...rest} />
    </FormControl>
  )
}
