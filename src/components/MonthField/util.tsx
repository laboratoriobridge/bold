import { ReferenceMonth } from '../MonthPicker/MonthPicker'

export const isValidInput = (value: string) => {
  return /\d\d\/\d\d\d\d/.test(value)
}

export const format = (value: ReferenceMonth) => {
  if (!value || !value.year || value.month == null) {
    return null
  }

  if (value.month < 9) {
    return `0${value.month + 1}/${value.year}`
  } else {
    return `${value.month + 1}/${value.year}`
  }
}
