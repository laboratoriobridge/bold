import React from 'react'

import { Radio, RadioProps } from '../../../components/Radio'
import { BaseFieldProps, extractInputProps, Field, RenderProps } from '../../Field'

export interface RadioFieldProps extends BaseFieldProps<RadioProps> {}

export class RadioField extends React.Component<RadioFieldProps> {
  render() {
    return <Field {...this.props} type='radio' hasWrapper={false} render={this.renderRadio} />
  }

  private renderRadio = (props: RenderProps) => (
    <Radio {...extractInputProps(this.props)} {...props.input} label={this.props.label} />
  )
}