import React from 'react'

import { Switch, SwitchProps } from '../../../components/Switch'
import { BaseFieldProps, extractInputProps, Field, RenderProps } from '../../Field'

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
