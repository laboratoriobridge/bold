import { abbrev, format, formatDecimalOrInteger } from '../number'
import * as localeModule from '../locale'

describe('format', () => {
  it('should format integers', () => {
    expect(format(1234)).toEqual('1,234')
    expect(format(1234567)).toEqual('1,234,567')
    expect(format(1234567, { minimumFractionDigits: 2 })).toEqual('1,234,567.00')
  })

  it('should format decimals', () => {
    expect(format(1234.567)).toEqual('1,234.567')
    expect(format(1234.56789, { minimumFractionDigits: 5 })).toEqual('1,234.56789')
    expect(format(1234, { minimumFractionDigits: 3 })).toEqual('1,234.000')
  })

  it('should format correctly in pt-BR format', () => {
    const getUserLocaleMock = jest.spyOn(localeModule, 'getUserLocale').mockReturnValue('pt-BR')
    expect(format(1.2)).toEqual('1,2')
    expect(format(1234.5)).toEqual('1.234,5')
    getUserLocaleMock.mockRestore()
  })
})

describe('formatDecimalOrInteger', () => {
  it('when value is integer, should keep it with zero digits', () => {
    const result = formatDecimalOrInteger(1)
    expect(result).toEqual('1')
  })
  it('when value has one decimal digit, should add a digit', () => {
    const result = formatDecimalOrInteger(1.2)
    expect(result).toEqual('1.20')
  })
  it('when value has more than 2 decimal digits, should limit to two digits', () => {
    const result = formatDecimalOrInteger(1.234)
    expect(result).toEqual('1.23')
  })
})

describe('abbrev', () => {
  it('should abbreviate number to a compact representation', () => {
    expect(abbrev(999)).toEqual('999')
    expect(abbrev(1000)).toEqual('1k')
    expect(abbrev(1001)).toEqual('1k')
    expect(abbrev(1011)).toEqual('1k')
    expect(abbrev(1111)).toEqual('1.1k')
    expect(abbrev(10900)).toEqual('10.9k')
    expect(abbrev(100400)).toEqual('100.4k')
    expect(abbrev(1000.23)).toEqual('1k')
    expect(abbrev(100000, { minimumFractionDigits: 1 })).toEqual('100.0k')
    expect(abbrev(100450, { minimumFractionDigits: 0, maximumFractionDigits: 2 })).toEqual('100.45k')

    expect(abbrev(1000000)).toEqual('1m')
    expect(abbrev(1000010)).toEqual('1m')
    expect(abbrev(1000100)).toEqual('1m')
    expect(abbrev(1001000)).toEqual('1m')
    expect(abbrev(1010000)).toEqual('1m')
    expect(abbrev(1010000.42)).toEqual('1m')
    expect(abbrev(1100000)).toEqual('1.1m')
    expect(abbrev(1000000, { minimumFractionDigits: 3, maximumFractionDigits: 4 })).toEqual('1.000m')
    expect(abbrev(1110000, { minimumFractionDigits: 0, maximumFractionDigits: 2 })).toEqual('1.11m')

    expect(abbrev(1000000000)).toEqual('1b')
    expect(abbrev(1100000000)).toEqual('1.1b')
    expect(abbrev(1100000000, { minimumFractionDigits: 3, maximumFractionDigits: 4 })).toEqual('1.100b')
    expect(abbrev(1111000000, { minimumFractionDigits: 0, maximumFractionDigits: 2 })).toEqual('1.11b')

    expect(abbrev(1000000000000)).toEqual('1t')
    expect(abbrev(1100000000000)).toEqual('1.1t')
    expect(abbrev(1100000000000, { minimumFractionDigits: 3, maximumFractionDigits: 4 })).toEqual('1.100t')
    expect(abbrev(1111110000000, { minimumFractionDigits: 0, maximumFractionDigits: 2 })).toEqual('1.11t')

    expect(abbrev(1.23)).toEqual('1.2')
    expect(abbrev(1000.5673)).toEqual('1k')
    expect(abbrev(1000000.123213)).toEqual('1m')
  })
})
