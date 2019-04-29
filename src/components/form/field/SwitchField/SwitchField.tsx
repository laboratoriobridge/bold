import React from 'react'

import { BaseFieldProps, extractInputProps, Field, RenderProps } from '../../finalForm/Field'
import { Switch, SwitchProps } from '../../input/Switch/Switch'

export interface SwitchFieldProps extends BaseFieldProps<SwitchProps> {
  name: string
}

export class SwitchField extends React.Component<SwitchFieldProps> {
  render() {
    return <Field {...this.props} type='checkbox' hasWrapper={false} render={this.renderSwitch} />
  }

  private renderSwitch = (props: RenderProps) => (
    <Switch {...extractInputProps(this.props)} {...props.input} label={this.props.label} />
  )
}
