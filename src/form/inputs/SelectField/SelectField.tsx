import React from 'react'

import { DefaultItemType, Select, SelectProps } from '../../../components/Select'
import { BaseFieldProps, extractInputProps, Field, FieldRenderProps } from '../../Field'

export interface SelectFieldProps<T = DefaultItemType> extends BaseFieldProps<SelectProps<T>, T | T[]> {}

export class SelectField<T = DefaultItemType> extends React.Component<SelectFieldProps<T>> {
  static defaultProps: Partial<SelectFieldProps<any>> = {}

  render() {
    return <Field<T | T[]> {...this.props} render={this.renderSelect} />
  }

  private renderSelect = (props: FieldRenderProps<any>) => {
    return (
      <Select<T>
        {...extractInputProps<SelectProps<T>>(this.props)}
        {...(props.input as any)}
        status={props.hasError ? 'error' : undefined}
      />
    )
  }
}
