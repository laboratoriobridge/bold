import * as React from 'react'

import { BaseFieldProps, extractInputProps, Field, RenderProps } from '../../finalForm/Field'
import { AsyncSelect, AsyncSelectProps, DefaultOptionType } from '../../input/Select'

export interface AsyncSelectFieldProps<OptionType = DefaultOptionType> extends
    BaseFieldProps<AsyncSelectProps<OptionType>> {
    convertToValueKey?: boolean
}

export class AsyncSelectField<OptionType = DefaultOptionType> extends
    React.Component<AsyncSelectFieldProps<OptionType>> {

    static defaultProps: Partial<AsyncSelectFieldProps<any>> = {
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

    private renderSelect = (props: RenderProps) => (
        <AsyncSelect
            {...extractInputProps(this.props)}
            {...props.input}
            status={props.hasError ? 'error' : undefined}
        />
    )

}
