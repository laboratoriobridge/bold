import { TimeInput, TimeInputProps } from '../../../components/TimeInput'
import { BaseFieldProps, withField } from '../../Field'

export const format = (value: string) => {
  // Omit seconds in case the initial field value is in format 'HH:mm:ss'
  return value ? value.slice(0, 5) : null
}

export type TimeFieldProps = BaseFieldProps<TimeInputProps>

export const TimeField = withField(TimeInput, {
  format,
})
