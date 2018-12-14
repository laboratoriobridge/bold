import moment = require('moment')

import { BaseFieldProps, withField } from '../../finalForm/Field'
import { DatePickerInput, DatePickerInputProps } from '../../input/DateInput'

export const parse = (value: Date): string => {
    return value ? moment(value).format('YYYY-MM-DD') : null
}

export const format = (value: string): Date => {
    return value ? moment(value, 'YYYY-MM-DD', true).toDate() : null
}

export type DateFieldProps = BaseFieldProps<DatePickerInputProps>

export const DateField = withField(DatePickerInput, {
    parse,
    format,
})
