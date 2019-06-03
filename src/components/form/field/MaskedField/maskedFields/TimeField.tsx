import { BaseFieldProps, withField } from '../../../finalForm/Field'
import { TimeInput, TimeInputProps } from '../../../input/TimeInput'

export const format = (value: string) => {
  // Omit seconds in case the initial field value is in format 'HH:mm:ss'
  return value ? value.slice(0, 5) : null
}

export type TimeFieldProps = BaseFieldProps<TimeInputProps>

export const TimeField = withField(TimeInput, {
  format,
})
