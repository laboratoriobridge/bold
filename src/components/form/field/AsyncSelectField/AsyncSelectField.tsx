import * as React from 'react'

import { Field, RenderProps } from '../../finalForm/Field'
import { FormFieldProps } from '../../FormField'
import { AsyncSelect, AsyncSelectProps } from '../../input/AsyncSelect/AsyncSelect'
import { DefaultOptionType } from '../../input/Select/Select'

export interface AsyncSelectFieldProps<OptionType = DefaultOptionType> extends FormFieldProps,
    AsyncSelectProps<OptionType> {
    name: string
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

    private convert = (value: OptionType) => {
        return this.props.convertToValueKey && this.props.getOptionValue ? this.props.getOptionValue(value) : value
    }

    private renderSelect = (props: RenderProps) => (
        <AsyncSelect
            status={props.hasError && 'error'}
            {...props.input}
            {...this.props}
        />
    )

}
