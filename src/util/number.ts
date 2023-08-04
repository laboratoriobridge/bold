import { getUserLocale } from './locale'

/**
 * Formats a numeric value to its number format representation and current locale, using Intl.NumberFormat.
 *
 * @param value Value to be formatted
 * @param options Number format options
 * @return The formatted value.
 */
export function format(value: number, options?: Intl.NumberFormatOptions) {
  return new Intl.NumberFormat(getUserLocale(), {
    style: 'decimal',
    ...options,
  }).format(value)
}

/**
 * Formats a numeric value to its local number format representation, using two digits when it is decimal and zero when it is integer
 * @param value Value to be formatted
 * @returns The formatted value
 */
export const formatDecimalOrInteger = (value: number): string => {
  const isDecimal = value % 1 !== 0

  const formatOptions: Intl.NumberFormatOptions = isDecimal
    ? {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }
    : {
        maximumFractionDigits: 0,
      }

  return format(value, formatOptions)
}

/**
 * Abrreviates a number to its compact representation.
 * Example: 1000000 is abbreviated to '1m'
 *
 * @param value Value to be abbreviated.
 * @param options?: Intl.NumberFormatOptions
 * @return The abbreviated value.
 */
export function abbrev(value: number, options?: Intl.NumberFormatOptions) {
  if (!value) {
    return value
  }

  if (value >= 1e12) {
    return format(value / 1e12, { minimumFractionDigits: 0, maximumFractionDigits: 1, ...options }) + 't'
  }

  if (value >= 1e9) {
    return format(value / 1e9, { minimumFractionDigits: 0, maximumFractionDigits: 1, ...options }) + 'b'
  }

  if (value >= 1e6) {
    return format(value / 1e6, { minimumFractionDigits: 0, maximumFractionDigits: 1, ...options }) + 'm'
  }

  if (value >= 1e3) {
    return format(value / 1e3, { minimumFractionDigits: 0, maximumFractionDigits: 1, ...options }) + 'k'
  }

  return format(value, { minimumFractionDigits: 0, maximumFractionDigits: 1, ...options })
}
