/**
 * Return the user locale based on browser's language.
 *
 * @returns The user locale.
 */
export const getUserLocale = () => {
  if (!navigator) {
    return null
  }

  return navigator.languages && navigator.languages.length ? navigator.languages[0] : navigator.language
}
