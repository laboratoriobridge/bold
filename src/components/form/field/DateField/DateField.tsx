import * as moment from 'moment'
import * as React from 'react'

import { formats } from '../../../../util/dateTime'
import { Field, FieldProps, RenderProps } from '../../finalForm/Field'
import { FormFieldProps } from '../../FormField'
import { DateInput, DateInputProps } from '../../input/DateInput/DateInput'

export interface DateFieldProps extends DateInputProps, FormFieldProps, Pick<FieldProps, 'validate'> {
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
            <DateInput
                {...this.props}
                {...props.input}
                status={props.hasError && 'error'}
            />
        )
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
            return mom.format(formats.date)
        }
        return value
    }

}
