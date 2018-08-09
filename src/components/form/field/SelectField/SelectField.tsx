import * as React from 'react'

import { Field, RenderProps } from '../../finalForm/Field'
import { FormFieldProps } from '../../FormField'
import { DefaultOptionType, Select, SelectProps } from '../../input/Select/Select'

export interface SelectFieldProps<OptionType = DefaultOptionType> extends FormFieldProps, SelectProps<OptionType> {
    name: string
    convertToValueKey?: boolean
}

export class SelectField<OptionType = DefaultOptionType> extends React.Component<SelectFieldProps<OptionType>> {

    static defaultProps: Partial<SelectFieldProps<any>> = {
        convertToValueKey: true,
        getOptionValue: (option) => option && option.value,
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
        return this.props.convertToValueKey && this.props.getOptionValue ? this.props.getOptionValue(value) : value
    }

    private renderSelect = (props: RenderProps) => {
        return (
            <Select
                status={props.hasError && 'error'}
                {...props.input}
                {...this.props}
            />
        )
    }

}
