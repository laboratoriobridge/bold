import * as React from 'react'

import { FieldWrapperProps } from '../../FieldWrapper'
import { Field, FieldProps, RenderProps } from '../../finalForm/Field'
import { DatePickerInput, DatePickerInputProps } from '../../input/DateInput/DatePickerInput'

export interface DateFieldProps extends DatePickerInputProps, FieldWrapperProps, Pick<FieldProps, 'validate'> {
    name: string
}

export class DateField extends React.Component<DateFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                render={this.renderInput}
                parse={this.parse}
                format={this.format}
            />
        )
    }

    renderInput = (props: RenderProps) => {
        return (
            <DatePickerInput
                {...this.props}
                {...props.input}
                status={props.hasError && 'error'}
            />
        )
    }

    parse = (value: Date) => {
        return value ? value.toISOString().slice(0, 10) : null
    }

    format = (value: string) => {
        return value ? new Date(value + 'T00:00:00') : null
    }

}
