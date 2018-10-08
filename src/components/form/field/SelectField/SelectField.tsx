import * as React from 'react'

import { FieldWrapperProps } from '../../FieldWrapper'
import { Field, RenderProps } from '../../finalForm/Field'
import { DefaultOptionType, Select, SelectProps } from '../../input/Select/Select'

export interface SelectFieldProps<OptionType = DefaultOptionType> extends FieldWrapperProps, SelectProps<OptionType> {
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
                {...this.props}
                {...props.input}
            />
        )
    }

}
