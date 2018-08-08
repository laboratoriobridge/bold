import * as React from 'react'

import { Field, RenderProps } from '../../finalForm/Field'
import { FormFieldProps } from '../../FormField'
import { AsyncSelect, AsyncSelectProps } from '../../select/AsyncSelect/AsyncSelect'
import { DefaultOptionType } from '../../select/Select/Select'

export interface AsyncSelectFieldProps<OptionType> extends FormFieldProps, AsyncSelectProps<OptionType> {
    name: string
    convertToValueKey?: boolean
}

export class AsyncSelectField<OptionType = DefaultOptionType> extends
    React.Component<AsyncSelectFieldProps<OptionType>> {

    static defaultProps: Partial<AsyncSelectFieldProps<any>> = {
        ...AsyncSelect.defaultProps,
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

    private renderSelect = (props: RenderProps) => (
        <AsyncSelect
            {...this.props}
            {...props.input}
            status={props.hasError && 'error'}
        />
    )

}
