/**
 * Return the user locale baed on browser's language.
 *
 * @returns The user locale.
 */
export const getUserLocale = () => {
    return (navigator.languages && navigator.languages.length) ? navigator.languages[0] : navigator.language
}
