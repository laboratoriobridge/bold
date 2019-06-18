import { DatePickerInput, DatePickerInputProps } from '../../../components/DateInput'
import { BaseFieldProps, withField } from '../../Field'

export const parse = (value: Date): string => {
  if (!value) {
    return null
  }

  const year = ('000' + value.getFullYear()).slice(-4)
  const month = ('0' + (value.getMonth() + 1)).slice(-2)
  const day = ('0' + value.getDate()).slice(-2)

  return `${year}-${month}-${day}`
}

export const format = (value: string): Date => {
  if (!value) {
    return null
  }

  const dateParts = value.split('-')
  try {
    const date = new Date(parseInt(dateParts[0], 10), parseInt(dateParts[1], 10) - 1, parseInt(dateParts[2], 10))
    return date && date.getTime() ? date : null
  } catch (err) {
    return null
  }
}

export type DateFieldProps = BaseFieldProps<DatePickerInputProps>

export const DateField = withField(DatePickerInput, {
  parse,
  format,
})
