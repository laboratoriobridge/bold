import * as React from 'react'

import { Field, RenderProps } from '../../finalForm/Field'
import { FormFieldProps } from '../../FormField'
import { Select, SelectProps } from '../../select/Select/Select'

export interface SelectFieldProps extends FormFieldProps, SelectProps {
    name: string
    convertToValueKey?: boolean
}

export class SelectField extends React.Component<SelectFieldProps> {

    static defaultProps: Partial<SelectFieldProps> = {
        valueKey: 'value',
        convertToValueKey: true,
    }

    render() {
        return (
            <Field
                {...this.props}
                render={this.renderSelect}
                convert={this.convert}
            />
        )
    }

    private convert = (value: any) => {
        return this.props.convertToValueKey ? value[this.props.valueKey] : value
    }

    private renderSelect = (props: RenderProps) => {
        return (
            <Select
                {...this.props}
                {...props.input}
                status={props.hasError && 'error'}
            />
        )
    }

}
