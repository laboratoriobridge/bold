import React from 'react'

import { BaseFieldProps } from '../../finalForm/Field'
import { TextInputProps } from '../../input/TextInput/TextInput'
import { TextField } from '../TextField/TextField'

export const parse = value => value.replace(/[^\d]/g, '')

export interface NumberFieldProps extends BaseFieldProps<TextInputProps> {}

export class NumberField extends React.Component<NumberFieldProps> {
  render() {
    return <TextField parse={parse} {...this.props} />
  }
}
