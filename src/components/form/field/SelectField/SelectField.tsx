import React from 'react'

import { BaseFieldProps, extractInputProps, Field, RenderProps } from '../../finalForm/Field'
import { DefaultItemType, Select, SelectProps } from '../../input/Select'

export interface SelectFieldProps<T = DefaultItemType> extends BaseFieldProps<SelectProps<T>, T | T[]> {
}

export class SelectField<T = DefaultItemType> extends React.Component<SelectFieldProps<T>> {

    static defaultProps: Partial<SelectFieldProps<any>> = {}

    render() {
        return (
            <Field<T | T[]>
                {...this.props}
                render={this.renderSelect}
            />
        )
    }

    private renderSelect = (props: RenderProps) => {
        return (
            <Select<T>
                {...extractInputProps<SelectProps<T>>(this.props)}
                {...props.input}
                status={props.hasError ? 'error' : undefined}
            />
        )
    }

}
