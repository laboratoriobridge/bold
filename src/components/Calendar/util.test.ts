import {
  createMonthMatrix,
  createWeekArray,
  getFirstDayOfMonth,
  getLastDayOfMonth,
  isSameDay,
  isBelongingAWeek,
  isValidReferenceMonth,
} from './util'

describe('getFirstDayOfMonth', () => {
  it('should return the first day of a month', () => {
    expect(getFirstDayOfMonth(new Date('2018-10-25'))).toEqual(new Date('2018-10-01'))
    expect(getFirstDayOfMonth(new Date('2018-11-25'))).toEqual(new Date('2018-11-01'))
    expect(getFirstDayOfMonth(new Date('2018-02-20'))).toEqual(new Date('2018-02-01'))
  })
})

describe('getLastDayOfMonth', () => {
  it('should return the last day of a month', () => {
    expect(getLastDayOfMonth(new Date('2018-10-25'))).toEqual(new Date('2018-10-31'))
    expect(getLastDayOfMonth(new Date('2018-11-25'))).toEqual(new Date('2018-11-30'))
    expect(getLastDayOfMonth(new Date('2018-02-20'))).toEqual(new Date('2018-02-28'))
  })
})

describe('createWeekArray', () => {
  it('should create an ordered date array containing the week of the date param', () => {
    expect(createWeekArray(new Date('2018-10-25'))).toEqual([
      new Date('2018-10-21'),
      new Date('2018-10-22'),
      new Date('2018-10-23'),
      new Date('2018-10-24'),
      new Date('2018-10-25'),
      new Date('2018-10-26'),
      new Date('2018-10-27'),
    ])
  })
})

describe('createMonthMatrix', () => {
  it('should create and array of arrays containing all ordered dates of the target month', () => {
    expect(createMonthMatrix(new Date('2019-02-25'))).toEqual(fev2019)
    expect(createMonthMatrix(new Date('2019-02-28'))).toEqual(fev2019)
    expect(createMonthMatrix(new Date('2019-02-01'))).toEqual(fev2019)

    expect(createMonthMatrix(new Date('2018-09-25'))).toEqual(set2018)
  })
})

describe('isSameDay', () => {
  it('should return true if two dates are the same day, month and year', () => {
    expect(isSameDay(new Date('2018-10-25'), new Date('2018-10-25'))).toEqual(true)
    expect(isSameDay(new Date('2018-10-25'), new Date('2018-10-24'))).toEqual(false)
    expect(isSameDay(new Date('2018-10-25'), new Date('2018-11-25'))).toEqual(false)
    expect(isSameDay(new Date('2018-10-25'), new Date('2017-10-25'))).toEqual(false)
    expect(isSameDay(new Date('2018-10-25T18:00:00'), new Date('2018-10-25T10:00:00'))).toEqual(true)
  })
})

describe('isBelongingAWeek', () => {
  it('should return true if a day belongs to a week', () => {
    expect(
      isBelongingAWeek(new Date('2021-01-21'), { start: new Date('2021-01-17'), end: new Date('2021-01-23') })
    ).toBeTruthy()
    expect(
      isBelongingAWeek(new Date('2021-01-23'), { start: new Date('2021-01-17'), end: new Date('2021-01-23') })
    ).toBeTruthy()
    expect(
      isBelongingAWeek(new Date('2021-01-21'), { start: new Date('2021-01-03'), end: new Date('2021-01-09') })
    ).toBeFalsy()
    expect(
      isBelongingAWeek(new Date('2020-01-21'), { start: new Date('2021-01-17'), end: new Date('2021-01-23') })
    ).toBeFalsy()
  })
})

describe('isValidReferenceMonth', () => {
  it('should return true for a valid ReferenceMonth', () => {
    expect(isValidReferenceMonth({ year: 2022, month: 5 })).toBeTruthy()
    expect(isValidReferenceMonth({ year: 2022, month: 12 })).toBeTruthy()
  })
  ;['', null, false, undefined].forEach((value: any) => {
    it(`should return false for "${value}"`, () => {
      expect(isValidReferenceMonth(value)).toBeFalsy()
    })
  })
})

const fev2019 = [
  [
    new Date('2019-01-27'),
    new Date('2019-01-28'),
    new Date('2019-01-29'),
    new Date('2019-01-30'),
    new Date('2019-01-31'),
    new Date('2019-02-01'),
    new Date('2019-02-02'),
  ],
  [
    new Date('2019-02-03'),
    new Date('2019-02-04'),
    new Date('2019-02-05'),
    new Date('2019-02-06'),
    new Date('2019-02-07'),
    new Date('2019-02-08'),
    new Date('2019-02-09'),
  ],
  [
    new Date('2019-02-10'),
    new Date('2019-02-11'),
    new Date('2019-02-12'),
    new Date('2019-02-13'),
    new Date('2019-02-14'),
    new Date('2019-02-15'),
    new Date('2019-02-16'),
  ],
  [
    new Date('2019-02-17'),
    new Date('2019-02-18'),
    new Date('2019-02-19'),
    new Date('2019-02-20'),
    new Date('2019-02-21'),
    new Date('2019-02-22'),
    new Date('2019-02-23'),
  ],
  [
    new Date('2019-02-24'),
    new Date('2019-02-25'),
    new Date('2019-02-26'),
    new Date('2019-02-27'),
    new Date('2019-02-28'),
    new Date('2019-03-01'),
    new Date('2019-03-02'),
  ],
]

const set2018 = [
  [
    new Date('2018-08-26'),
    new Date('2018-08-27'),
    new Date('2018-08-28'),
    new Date('2018-08-29'),
    new Date('2018-08-30'),
    new Date('2018-08-31'),
    new Date('2018-09-01'),
  ],
  [
    new Date('2018-09-02'),
    new Date('2018-09-03'),
    new Date('2018-09-04'),
    new Date('2018-09-05'),
    new Date('2018-09-06'),
    new Date('2018-09-07'),
    new Date('2018-09-08'),
  ],
  [
    new Date('2018-09-09'),
    new Date('2018-09-10'),
    new Date('2018-09-11'),
    new Date('2018-09-12'),
    new Date('2018-09-13'),
    new Date('2018-09-14'),
    new Date('2018-09-15'),
  ],
  [
    new Date('2018-09-16'),
    new Date('2018-09-17'),
    new Date('2018-09-18'),
    new Date('2018-09-19'),
    new Date('2018-09-20'),
    new Date('2018-09-21'),
    new Date('2018-09-22'),
  ],
  [
    new Date('2018-09-23'),
    new Date('2018-09-24'),
    new Date('2018-09-25'),
    new Date('2018-09-26'),
    new Date('2018-09-27'),
    new Date('2018-09-28'),
    new Date('2018-09-29'),
  ],
  [
    new Date('2018-09-30'),
    new Date('2018-10-01'),
    new Date('2018-10-02'),
    new Date('2018-10-03'),
    new Date('2018-10-04'),
    new Date('2018-10-05'),
    new Date('2018-10-06'),
  ],
]
