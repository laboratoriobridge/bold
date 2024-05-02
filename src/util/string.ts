/**
 * Returns a string of random alphanumeric characters.
 */
export const randomStr = () => {
  return Math.random().toString(36).substr(2)
}

export const capitalize = (word: string): string => {
  return word.charAt(0).toLocaleUpperCase() + word.slice(1)
}

export function splitIntoLines(str: string, maxCharsPerLine: number): string[] {
  return str.split(' ').reduce((acc, word) => {
    const lastLine = acc.length ? acc[acc.length - 1] : ''
    if (lastLine && lastLine.length + word.length <= maxCharsPerLine) acc[acc.length - 1] += ' ' + word
    else acc.push(word)
    return acc
  }, [])
}
