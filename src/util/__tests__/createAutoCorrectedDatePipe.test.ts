// adaptation from https://github.com/text-mask/text-mask/blob/master/addons/test/createAutoCorrectedDatePipe.spec.js

import createAutoCorrectedDatePipe from '../createAutoCorrectedDatePipe'

describe('createAutoCorrectedDatePipe', () => {
  let autoCorrectedDatePipe

  it('accepts the date format as the first parameter and returns a date pipe function', () => {
    autoCorrectedDatePipe = createAutoCorrectedDatePipe('mm dd yyyy')
  })

  it('completes the month if the 1st digit is bigger than 1 and returns `indexesOfPipedChars`', () => {
    expect(autoCorrectedDatePipe('1')).toEqual({ value: '1', indexesOfPipedChars: [] })
    expect(autoCorrectedDatePipe('2')).toEqual({ value: '02', indexesOfPipedChars: [0] })
  })

  it('returns false if month 1st digit is 1 and 2nd digit is bigger than 2', () => {
    expect(autoCorrectedDatePipe('14')).toEqual(false)
  })

  it('returns false if month 1st digit is 0 and 2nd digit is also 0', () => {
    expect(autoCorrectedDatePipe('00')).toEqual(false)
  })

  it('completes the day if the 1st digit is bigger than 3 and returns `indexesOfPipedChars`', () => {
    expect(autoCorrectedDatePipe('12/3')).toEqual({ value: '12/3', indexesOfPipedChars: [] })
    expect(autoCorrectedDatePipe('12/4')).toEqual({ value: '12/04', indexesOfPipedChars: [3] })
  })

  it('returns false if day 1st digit is 3 and 2nd digit is bigger than 1', () => {
    expect(autoCorrectedDatePipe('12/32')).toEqual(false)
  })

  it('returns false if day 1st digit is 0 and 2nd digit is also 0', () => {
    expect(autoCorrectedDatePipe('12/00')).toEqual(false)
  })

  it('returns unmodified partial entry if it could develop to correct date', () => {
    expect(autoCorrectedDatePipe('0 /  /    ')).toEqual({ value: '0 /  /    ', indexesOfPipedChars: [] })
  })

  it('allows yy format', () => {
    let pipe = createAutoCorrectedDatePipe('mm/yy')
    expect(pipe('12/99')).toEqual({ value: '12/99', indexesOfPipedChars: [] })
  })

  it('allows 00 for yy', () => {
    let pipe = createAutoCorrectedDatePipe('mm dd yy')
    expect(pipe('12 31 00')).toEqual({ value: '12 31 00', indexesOfPipedChars: [] })
  })

  it('returns false for out of range day before known month', () => {
    const pipe = createAutoCorrectedDatePipe('dd/mm')
    expect(pipe('30/02')).toEqual(false)
    expect(pipe('32/01')).toEqual(false)
  })
  it('returns false if month is not known and day is greater than 31', () => {
    const pipe = createAutoCorrectedDatePipe('dd/mm')
    expect(pipe('32/')).toEqual(false)
  })
  it('returns false if month is known and day is greater than allowed value in month', () => {
    let pipe = createAutoCorrectedDatePipe('mm/dd')
    expect(pipe('02/30')).toEqual(false)
    expect(pipe('02/31')).toEqual(false)
    expect(pipe('11/31')).toEqual(false)
    expect(pipe('01/32')).toEqual(false)
  })
  describe('datetime', () => {
    let autoCorrectedDateTimePipe

    it('accepts the date time format as the first parameter and returns a date time pipe function', () => {
      autoCorrectedDateTimePipe = createAutoCorrectedDatePipe('mm dd yyyy HH MM SS')
    })

    it('completes the hours if the 1st digit is bigger than 2 and returns `indexesOfPipedChars`', () => {
      expect(autoCorrectedDateTimePipe('12/31/9999 1')).toEqual({
        value: '12/31/9999 1',
        indexesOfPipedChars: [],
      })
      expect(autoCorrectedDateTimePipe('12/31/9999 2')).toEqual({
        value: '12/31/9999 2',
        indexesOfPipedChars: [],
      })
      expect(autoCorrectedDateTimePipe('12/31/9999 3')).toEqual({
        value: '12/31/9999 03',
        indexesOfPipedChars: [11],
      })
    })

    it('returns false if hours 1st digit is 2 and 2nd digit is bigger than 3', () => {
      expect(autoCorrectedDateTimePipe('12/31/9999 24')).toEqual(false)
    })

    it('completes the minutes if the 1st digit is bigger than 5 and returns `indexesOfPipedChars`', () => {
      expect(autoCorrectedDateTimePipe('12/31/9999 23:5')).toEqual({
        value: '12/31/9999 23:5',
        indexesOfPipedChars: [],
      })
      expect(autoCorrectedDateTimePipe('12/31/9999 23:6')).toEqual({
        value: '12/31/9999 23:06',
        indexesOfPipedChars: [14],
      })
    })

    it('returns false if minutes 1st digit is 6 and 2nd digit is 0', () => {
      expect(autoCorrectedDateTimePipe('12/31/9999 23:60')).toEqual(false)
    })

    it('completes the seconds if the 1st digit is bigger than 5 and returns `indexesOfPipedChars`', () => {
      expect(autoCorrectedDateTimePipe('12/31/9999 23:59:5')).toEqual({
        value: '12/31/9999 23:59:5',
        indexesOfPipedChars: [],
      })
      expect(autoCorrectedDateTimePipe('12/31/9999 23:59:6')).toEqual({
        value: '12/31/9999 23:59:06',
        indexesOfPipedChars: [17],
      })
    })

    it('returns false if seconds 1st digit is 6 and 2nd digit is 0', () => {
      expect(autoCorrectedDateTimePipe('12/31/9999 23:59:60')).toEqual(false)
    })

    it('returns unmodified partial entry if it could develop to correct date', () => {
      expect(autoCorrectedDateTimePipe('0 /  /     :  :  ')).toEqual({
        value: '0 /  /     :  :  ',
        indexesOfPipedChars: [],
      })
    })
  })
  describe('createAutoCorrectDatePipe with min year', () => {
    let autoCorrectedDateTimePipe

    it('accepts minimum year as the second parameter and returns a date time pipe function', () => {
      autoCorrectedDateTimePipe = createAutoCorrectedDatePipe('mm dd yyyy', { minYear: 1999 })
    })

    it('returns false if year 1st digit is less than 1', () => {
      expect(autoCorrectedDateTimePipe('12/31/0')).toEqual(false)
    })

    it('returns false if year 2st digit is less than 9', () => {
      expect(autoCorrectedDateTimePipe('12/31/18')).toEqual(false)
    })

    it('returns false if year 3rd digit is less than 9', () => {
      expect(autoCorrectedDateTimePipe('12/31/198')).toEqual(false)
    })

    it('returns false if year 4th digit is less than 9', () => {
      expect(autoCorrectedDateTimePipe('12/31/1998')).toEqual(false)
    })

    it('allows for min year', () => {
      let pipe = createAutoCorrectedDatePipe('mm dd yyyy', { minYear: 1999 })
      expect(pipe('12 31 1999')).toEqual({ value: '12 31 1999', indexesOfPipedChars: [] })
    })
  })

  describe('createAutoCorrectDatePipe with min and max year', () => {
    let autoCorrectedDateTimePipe

    it('accepts min and max year as the second/third parameter and returns a date time pipe function', () => {
      autoCorrectedDateTimePipe = createAutoCorrectedDatePipe('mm dd yyyy', { minYear: 1999, maxYear: 2020 })
    })

    it('returns false if year 1st digit is more than 2', () => {
      expect(autoCorrectedDateTimePipe('12/31/3')).toEqual(false)
    })

    it('returns false if year 2st digit is more than 0', () => {
      expect(autoCorrectedDateTimePipe('12/31/21')).toEqual(false)
    })

    it('returns false if year 3rd digit is more than 2', () => {
      expect(autoCorrectedDateTimePipe('12/31/203')).toEqual(false)
    })

    it('returns false if year 4th digit is more than 0', () => {
      expect(autoCorrectedDateTimePipe('12/31/2021')).toEqual(false)
    })

    it('allows for a year at the top side of the range', () => {
      let pipe = createAutoCorrectedDatePipe('mm dd yyyy', { minYear: 1990, maxYear: 2020 })
      expect(pipe('12 31 2020')).toEqual({ value: '12 31 2020', indexesOfPipedChars: [] })
    })

    it('allows for a year within the range', () => {
      let pipe = createAutoCorrectedDatePipe('mm dd yyyy', { minYear: 1990, maxYear: 2020 })
      expect(pipe('12 31 2000')).toEqual({ value: '12 31 2000', indexesOfPipedChars: [] })
    })

    it('allows for a year at the bottom side of the range', () => {
      let pipe = createAutoCorrectedDatePipe('mm dd yyyy', { minYear: 1990, maxYear: 2020 })
      expect(pipe('12 31 1990')).toEqual({ value: '12 31 1990', indexesOfPipedChars: [] })
    })
  })
})
