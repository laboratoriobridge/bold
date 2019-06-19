import React from 'react'

import { Switch, SwitchProps } from '../../../components/Switch'
import { BaseFieldProps, extractInputProps, Field, FieldRenderProps } from '../../Field'

export interface SwitchFieldProps extends BaseFieldProps<SwitchProps> {
  name: string
}

export class SwitchField extends React.Component<SwitchFieldProps> {
  render() {
    return <Field {...this.props} type='checkbox' hasWrapper={false} render={this.renderSwitch} />
  }

  private renderSwitch = (props: FieldRenderProps) => (
    <Switch {...extractInputProps(this.props)} {...props.input} label={this.props.label} />
  )
}
