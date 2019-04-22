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
