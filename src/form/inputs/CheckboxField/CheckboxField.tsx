import React from 'react'

import { Checkbox, CheckboxProps } from '../../../components/Checkbox'
import { BaseFieldProps, extractInputProps, Field, FieldRenderProps } from '../../Field'

export interface CheckboxFieldProps extends BaseFieldProps<CheckboxProps> {}

export function CheckboxField(props: CheckboxFieldProps) {
  const renderCheck = (fieldProps: FieldRenderProps) => (
    <Checkbox {...extractInputProps(props)} {...fieldProps.input} label={props.label} />
  )

  return <Field {...props} type='checkbox' hasWrapper={false} render={renderCheck} />
}
