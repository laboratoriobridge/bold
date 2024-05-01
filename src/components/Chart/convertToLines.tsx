export function convertToLines(str: string, maxCharsPerLine: number): string[] {
  return str.split(' ').reduce((acc, word) => {
    const lastLine = acc.length ? acc[acc.length - 1] : ''
    if (lastLine && lastLine.length + word.length <= maxCharsPerLine) acc[acc.length - 1] += ' ' + word
    else acc.push(word)
    return acc
  }, [])
}
