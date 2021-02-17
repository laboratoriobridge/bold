import { format, isValidInput } from './util'

describe('format', () => {
  it('format should return null when argument is null', () => {
    let formatedValue = format(null)
    expect(formatedValue).toBeNull()

    formatedValue = format({ month: null, year: null })
    expect(formatedValue).toBeNull()
  })
  it('format should return null when months argument is null', () => {
    const formatedValue = format({ month: null, year: 2000 })
    expect(formatedValue).toBeNull()
  })
  it('format should return null when years argument is null', () => {
    const formatedValue = format({ month: 1, year: null })
    expect(formatedValue).toBeNull()
  })
  it('format should include 0 when month = 1', () => {
    const formatedValue = format({ month: 1, year: 2000 })
    expect(formatedValue).toBe('02/2000')
  })
  it('format should include 0 when month = 8', () => {
    const formatedValue = format({ month: 8, year: 2000 })
    expect(formatedValue).toBe('09/2000')
  })
  it('format should not include 0 when month > 8', () => {
    const formatedValue = format({ month: 9, year: 2000 })
    expect(formatedValue).toBe('10/2000')
  })
})

describe('isValidInput', () => {
  it('isValidInput should accept mm/aaaa format', () => {
    expect(isValidInput('00/0000')).toBe(true)
  })
  it('isValidInput should not accept m/aaaa format', () => {
    expect(isValidInput('0/0000')).toBe(false)
  })
  it('isValidInput should not accept mm/aa format', () => {
    expect(isValidInput('00/00')).toBe(false)
  })
  it('isValidInput should not accept null', () => {
    expect(isValidInput(null)).toBe(false)
  })
})
