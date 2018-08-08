import * as React from 'react'

import { Field, RenderProps } from '../../finalForm/Field'
import { FormFieldProps } from '../../FormField'
import { Select, SelectProps } from '../../select/Select/Select'

export interface SelectFieldProps<OptionType> extends FormFieldProps, SelectProps<OptionType> {
    name: string
    convertToValueKey?: boolean
}

export class SelectField<OptionType = any> extends React.Component<SelectFieldProps<OptionType>> {

    static defaultProps: Partial<SelectFieldProps<any>> = {
        ...Select.defaultProps,
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

    private convert = (value: OptionType) => {
        return this.props.convertToValueKey ? this.props.getOptionValue(value) : value
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
