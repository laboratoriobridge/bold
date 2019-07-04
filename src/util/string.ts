/**
 * Returns a string of random alphanumeric characters.
 */
export const randomStr = () => {
  return Math.random()
    .toString(36)
    .substr(2)
}

export const capitalize = (word: string): string => {
  return word.charAt(0).toLocaleUpperCase() + word.slice(1)
}
