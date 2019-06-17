import React from 'react'

import { Checkbox, CheckboxProps } from '../../../components/Checkbox'
import { BaseFieldProps, extractInputProps, Field, RenderProps } from '../../Field'

export interface CheckboxFieldProps extends BaseFieldProps<CheckboxProps> {}

export class CheckboxField extends React.Component<CheckboxFieldProps> {
  render() {
    return <Field<boolean> {...this.props} type='checkbox' hasWrapper={false} render={this.renderCheck} />
  }

  private renderCheck = (props: RenderProps) => (
    <Checkbox {...extractInputProps(this.props)} {...props.input} label={this.props.label} />
  )
}
