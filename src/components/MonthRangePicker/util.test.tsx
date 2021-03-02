import {
  disabledByMonth,
  isGreaterOrEqualThan,
  isGreaterThan,
  isLessOrEqualThan,
  isLessThan,
  isSameReferenceMonth,
  transformRangeReferenceMonth,
} from './util'

const month1 = { month: 1, year: 2021 }
const month2 = { month: 1, year: 2020 }

describe('isGreaterOrEqualThan', () => {
  it('should return true if the second is bigger than or equal to first', () => {
    expect(isGreaterOrEqualThan(month1, month2)).toBeTruthy()
    expect(isGreaterOrEqualThan(month2, month1)).toBeFalsy()
    expect(isGreaterOrEqualThan(month1, month1)).toBeTruthy()
  })
})

describe('isLessOrEqualThan', () => {
  it('should return true if the second is less than or equal to first', () => {
    expect(isLessOrEqualThan(month1, month2)).toBeFalsy()
    expect(isLessOrEqualThan(month2, month1)).toBeTruthy()
    expect(isLessOrEqualThan(month1, month1)).toBeTruthy()
  })
})

describe('isLessThan', () => {
  it('should return true if the second is less than or equal to first', () => {
    expect(isLessThan(month1, month2)).toBeFalsy()
    expect(isLessThan(month2, month1)).toBeTruthy()
    expect(isLessThan(month1, month1)).toBeFalsy()
  })
})

describe('isGreaterThan', () => {
  it('should return true if the second is less than or equal to first', () => {
    expect(isGreaterThan(month1, month2)).toBeTruthy()
    expect(isGreaterThan(month2, month1)).toBeFalsy()
    expect(isGreaterThan(month1, month1)).toBeFalsy()
  })
})

describe('isSameReferenceMonth', () => {
  it('should return true if the second is equal to first', () => {
    expect(isSameReferenceMonth(month1, month2)).toBeFalsy()
    expect(isSameReferenceMonth(month2, month1)).toBeFalsy()
    expect(isSameReferenceMonth(month1, month1)).toBeTruthy()
  })
})

describe('disabledByMonth', () => {
  const min = { month: 0, year: 2021 }
  const max = { month: 2, year: 2021 }

  it('should return true if the month is outside the max and min range', () => {
    const isDisabled = disabledByMonth(min, max)
    expect(isDisabled(month2)).toBeTruthy()
    expect(isDisabled(month1)).toBeFalsy()
    expect(isDisabled(min)).toBeFalsy()
    expect(isDisabled(max)).toBeFalsy()
  })
  it('should return true if the month is greater than the max', () => {
    const isDisabled = disabledByMonth(null, max)
    expect(isDisabled({ month: 10, year: 2021 })).toBeTruthy()
    expect(isDisabled({ month: 2, year: 2022 })).toBeTruthy()
    expect(isDisabled(month2)).toBeFalsy()
    expect(isDisabled(month1)).toBeFalsy()
  })
  it('should return true if the month is less than the min', () => {
    const isDisabled = disabledByMonth(min, null)
    expect(isDisabled({ month: 0, year: 2019 })).toBeTruthy()
    expect(isDisabled(month2)).toBeTruthy()
    expect(isDisabled(month1)).toBeFalsy()
  })
})

describe('transformRangeReferenceMonth', () => {
  it('should return only the start month if the end is not defined', () => {
    expect(transformRangeReferenceMonth({ start: month1, end: undefined })).toEqual({
      startDate: new Date(2021, 1, 1, 0, 0, 0, 0),
      endDate: undefined,
    })
  })

  it('should return only the the end month if the start is not defined', () => {
    expect(transformRangeReferenceMonth({ start: undefined, end: month1 })).toEqual({
      startDate: undefined,
      endDate: new Date(2021, 2, 0, 0, 0, 0),
    })
  })

  it('should return the first date of start month and final date of end month if both are defined', () => {
    expect(transformRangeReferenceMonth({ start: month2, end: month1 })).toEqual({
      startDate: new Date(2020, 1, 1, 0, 0, 0, 0),
      endDate: new Date(2021, 2, 0, 0, 0, 0),
    })
  })

  it('should return undefined for startDate and endDate if the both are undefined', () => {
    expect(transformRangeReferenceMonth({ start: undefined, end: undefined })).toEqual({
      startDate: undefined,
      endDate: undefined,
    })
  })
})
