import React from 'react'
import { FormControl } from '..'
import { useFormControl, UseFormControlProps } from '../../hooks'
import { BaseMonthRangeInput, BaseMonthRangeInputProps } from './BaseMonthRangeInput'

export interface MonthRangePickerInputProps extends BaseMonthRangeInputProps, UseFormControlProps {}

export function MonthRangePickerInput(props: MonthRangePickerInputProps) {
  const { label, error, inline, ...rest } = props

  const { getFormControlProps, getInputProps } = useFormControl(props)
  const inputProps = getInputProps()

  return (
    <FormControl {...getFormControlProps()}>
      <BaseMonthRangeInput {...inputProps} {...rest} />
    </FormControl>
  )
}
