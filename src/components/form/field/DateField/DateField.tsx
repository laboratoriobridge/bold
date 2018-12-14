import moment = require('moment')

import { withField } from '../../finalForm/Field'
import { DatePickerInput } from '../../input/DateInput'

export const parse = (value: Date): string => {
    return value ? moment(value).format('YYYY-MM-DD') : null
}

export const format = (value: string): Date => {
    return value ? moment(value, 'YYYY-MM-DD', true).toDate() : null
}

export const DateField = withField(DatePickerInput, {
    parse,
    format,
})
