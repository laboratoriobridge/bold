import { capitalize, randomStr, splitIntoLines } from '../string'

describe('randomStr', () => {
  it('should return a random string', () => {
    expect(randomStr()).not.toBeFalsy()
    expect(randomStr()).not.toEqual(randomStr())
  })
})

describe('capitalize', () => {
  it('should capitalize a string', () => {
    expect(capitalize('test one')).toEqual('Test one')
  })
})

describe('splitIntoLines', () => {
  it.each([
    [0, ['test', 'one', 'two', 'three', 'four']],
    [6, ['test', 'one', 'two', 'three', 'four']],
    [7, ['test', 'one two', 'three', 'four']],
    [9, ['test one', 'two three', 'four']],
    [11, ['test one', 'two three', 'four']],
    [13, ['test one two', 'three four']],
    [22, ['test one two three', 'four']],
    [23, ['test one two three four']],
    [100, ['test one two three four']],
  ])('should split a string into lines accordingly to max chars', (maxCharsPerLine: number, expected: string[]) => {
    expect(splitIntoLines('test one two three four', maxCharsPerLine)).toEqual(expected)
  })
})
