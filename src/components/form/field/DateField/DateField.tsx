import * as moment from 'moment'
import * as React from 'react'
import { Omit } from 'react-redux'

import { formats } from '../../../../util/dateTime'
import { Field, FieldProps, RenderProps } from '../../finalForm/Field'
import { FormFieldProps } from '../../FormField'
import { DatePickerInput, DatePickerInputProps } from '../../input/DatePickerInput/DatePickerInput'

export interface DateFieldProps extends Omit<DatePickerInputProps, 'onChange'>,
    FormFieldProps, Pick<FieldProps, 'validate'> {
    name: string
}

export class DateField extends React.Component<DateFieldProps> {

    render() {
        return (
            <Field
                {...this.props}
                render={this.renderInput}
                validate={this.validate}
                parse={this.parse}
                format={this.format}
            />
        )
    }

    renderInput = (props: RenderProps) => {
        const handleBlur = this.handleBlur(props)

        return (
            <DatePickerInput
                {...this.props}
                {...props.input}
                onChange={props.input.onChange}
                onBlur={handleBlur}
                status={props.hasError && 'error'}
            />
        )
    }

    handleBlur = (renderProps: RenderProps) => (e) => {
        renderProps.input.onBlur(e)

        const value = e.target.value
        if (value) {
            const mom = moment(value, formats.date, true)
            const formatted = mom.format(formats.serverDate)
            renderProps.input.onChange(formatted)
        } else {
            renderProps.input.onChange(null)
        }
    }

    validate = (value) => {
        const mom = moment(value, formats.serverDate, true)
        if (value && !mom.isValid()) {
            return 'Data inválida'
        }
        return undefined
    }

    parse = (value: any) => {
        const mom = moment(value, formats.date, true)
        if (mom.isValid()) {
            return mom.format(formats.serverDate)
        }
        return value
    }

    format = (value: any) => {
        const mom = moment(value, formats.serverDate, true)
        if (mom.isValid()) {
            return mom
        }
        return value
    }

}
