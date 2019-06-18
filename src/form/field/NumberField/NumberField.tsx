import React from 'react'

import { TextInputProps } from '../../../components/TextInput'
import { BaseFieldProps } from '../../Field'
import { TextField } from '../TextField/TextField'

export const parse = value => value.replace(/[^\d]/g, '')

export interface NumberFieldProps extends BaseFieldProps<TextInputProps> {}

export class NumberField extends React.Component<NumberFieldProps> {
  render() {
    return <TextField parse={parse} {...this.props} />
  }
}
