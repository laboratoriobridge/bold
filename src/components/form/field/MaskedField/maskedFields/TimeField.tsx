import { withField } from '../../../finalForm/Field'
import { TimeInput } from '../../../input/TimeInput'

export const format = (value: string) => {
    // Omit seconds in case the initial field value is in format 'HH:mm:ss'
    return value ? value.slice(0, 5) : value
}

export const TimeField = withField(TimeInput, {
    format,
})
