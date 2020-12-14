import { capitalize } from './string'

export const DEFAULT_LOCALE = 'en'

/**
 * Return the user locale based on browser's language.
 *
 * @returns The user locale.
 */
export const getUserLocale = () => {
  if (typeof navigator !== 'undefined') {
    return (navigator.languages || []).length ? navigator.languages[0] : navigator.language
  }

  return DEFAULT_LOCALE
}

/**
 * Returns month in short format with the first capital letter based on browser's language.
 * EN: short format: Jan
 * PT-BR: short format: Jan.
 *
 * @param date
 * @param formatter?: (date: Date, month: Intl.DateTimeFormat) => string, to change the formatting pattern
 * @return an array with month names in short and long format.
 */
export const getMonthShortFormat = (
  date: Date,
  formatter?: (date: Date, month: Intl.DateTimeFormat) => string,
  locale?: string
) => {
  const shortFormatter = new Intl.DateTimeFormat(locale ?? getUserLocale(), { month: 'short' })
  return formatter ? capitalize(formatter(date, shortFormatter)) : capitalize(shortFormatter.format(date))
}

/**
 * Returns month names in short and long format with the first capital letter based on browser's language.
 * EN: short format: Jan | long format: January
 * PT-BR: short format: Jan. | long format: Janeiro
 *
 * @param locale
 * @param formatter?: (date: Date, month: Intl.DateTimeFormat) => string, to change the formatting pattern
 * @return an array with month names in short and long format.
 */
export function getMonthNames(locale: string, formatter?: (date: Date, month: Intl.DateTimeFormat) => string) {
  const year = new Date().getFullYear()

  const longFormatter = new Intl.DateTimeFormat(locale, { month: 'long' })

  const baseDates = Array.from(Array(12)).map((_, i) => new Date(year, i, 1, 0, 0, 0))
  return baseDates.map((date) => ({
    short: getMonthShortFormat(date, formatter, locale),
    long: capitalize(longFormatter.format(date)),
  }))
}
