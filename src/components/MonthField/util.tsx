import { ReferenceMonth } from '../MonthPicker/MonthPicker'

/**
 * Check if the value matches the month reference model
 * A value corresponds to the model if it has two digits followed by a slash and four more digits
 *
 * @param value Input value
 */
export const isValidInput = (value: string) => {
  return /\d\d\/\d\d\d\d/.test(value)
}

/**
 * Format a reference month value to pt-br model (month/year)
 *
 * @param value A reference month to be formatted
 */
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
