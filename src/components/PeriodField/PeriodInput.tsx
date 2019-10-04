import React from 'react'

import { useFormControl, UseFormControlProps } from '../../hooks/useFormControl'
import { FormControl } from '../FormControl'

import { PeriodInputBase, PeriodInputBaseProps } from './PeriodInputBase'

export interface PeriodInputProps extends PeriodInputBaseProps, UseFormControlProps {}

export function PeriodInput(props: PeriodInputProps) {
  const { label, error, ...rest } = props

  const { getFormControlProps, getInputProps } = useFormControl(props)
  const inputProps = getInputProps()

  return (
    <FormControl {...getFormControlProps()}>
      <PeriodInputBase invalid={inputProps['aria-invalid']} {...inputProps} {...rest} />
    </FormControl>
  )
}
