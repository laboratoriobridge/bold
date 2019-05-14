import React from 'react'

import { BaseFieldProps, extractInputProps, Field, RenderProps } from '../../finalForm/Field'
import { Radio, RadioProps } from '../../input/Radio/Radio'

export interface RadioFieldProps extends BaseFieldProps<RadioProps> {}

export class RadioField extends React.Component<RadioFieldProps> {
  render() {
    return <Field {...this.props} type='radio' hasWrapper={false} render={this.renderRadio} />
  }

  private renderRadio = (props: RenderProps) => (
    <Radio {...extractInputProps(this.props)} {...props.input} label={this.props.label} />
  )
}
