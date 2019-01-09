import * as React from 'react'

import { BaseFieldProps, extractInputProps, Field, RenderProps } from '../../finalForm/Field'
import { DefaultOptionType, Select, SelectProps } from '../../input/Select'

export interface SelectFieldProps<OptionType = DefaultOptionType> extends BaseFieldProps<SelectProps<OptionType>> {
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

    private convert = (value: any) => {
        if (this.props.convertToValueKey && this.props.getOptionValue) {
            if (Array.isArray(value)) {
                return value.map(item => this.props.getOptionValue(item))
            } else {
                return this.props.getOptionValue(value)
            }
        } else {
            return value
        }
    }

    private renderSelect = (props: RenderProps) => {
        return (
            <Select
                {...extractInputProps(this.props)}
                {...props.input}
                status={props.hasError ? 'error' : undefined}
            />
        )
    }

}
