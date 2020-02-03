import React from 'react'

import { useFormControl, UseFormControlProps } from '../../hooks/useFormControl'
import { FormControl } from '../FormControl'

import { BaseRangeDateInput, BaseRangeDateInputProps } from './BaseRangeDateInput'

export interface RangeDateInputProps extends BaseRangeDateInputProps, UseFormControlProps {}

export function RangeDateInput(props: RangeDateInputProps) {
  const { label, error, ...rest } = props

  const { getFormControlProps, getInputProps } = useFormControl(props)
  const inputProps = getInputProps()

  return (
    <FormControl {...getFormControlProps()}>
      <BaseRangeDateInput invalid={inputProps['aria-invalid']} {...inputProps} {...rest} />
    </FormControl>
  )
}
