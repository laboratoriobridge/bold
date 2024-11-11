import { getDomainMaxValue, isOutlier, getOutlierStep, getOutlierSeriesName, getOutlierStepFromDomain } from './util'
import { AxisDomain, ValueRange, DateRange, DataPoint } from './model'

describe('getDomainMaxValue', () => {
  it.each([null, undefined])('should return null when domain is null or undefined', (domain) => {
    const result = getDomainMaxValue((domain as unknown) as AxisDomain)

    expect(result).toBeNull()
  })

  it('should return the domain end value when domain is an valid object', () => {
    const domain: AxisDomain = { init: 10, end: 15, step: 10 }

    const result = getDomainMaxValue(domain)

    expect(result).toBe(15)
  })
})

describe('isOutlier', () => {
  const dataPointValue: DataPoint<number> = { x: 10, y: 10 }

  it('should return undefined when max is undefined', () => {
    const max = undefined

    const result = isOutlier(dataPointValue, max, 10)

    expect(result).toBeUndefined()
  })

  it('should return false when the y of dataPoint is equal the max and the min is not defined', () => {
    const max = 10

    const result = isOutlier(dataPointValue, max)

    expect(result).toBeFalsy()
  })

  it('should return false when the y of dataPoint is less than the max and the min is not defined', () => {
    const max = 12

    const result = isOutlier(dataPointValue, max)

    expect(result).toBeFalsy()
  })

  it('should return true when the y of dataPoint is bigger than the max and the min is not defined', () => {
    const max = 5

    const result = isOutlier(dataPointValue, max)

    expect(result).toBeTruthy()
  })

  it('should return true when the y of dataPoint is bigger than the max and less of the min', () => {
    const max = 5
    const min = 30

    const result = isOutlier(dataPointValue, max, min)

    expect(result).toBeTruthy()
  })

  it('should return true when the dataPoint is of the type number and bigger than the max and the min is not defined', () => {
    const dataPointNumberValue = 15
    const max = 10

    const result = isOutlier(dataPointNumberValue, max)

    expect(result).toBeTruthy()
  })
})

describe('getOutlierStep', () => {
  it.each([
    [14, 14],
    [15, 5],
    [16, 5],
    [20, 6],
    [0, 0],
  ])('should return the correctly tickStep for each case', (tickStep: number, expectedResult: number) => {
    const result = getOutlierStep(tickStep)

    expect(result).toBe(expectedResult)
  })
})

describe('getOutlierStepFromDomain', () => {
  it('should return null if domain is undefined', () => {
    const domain = undefined

    const result = getOutlierStepFromDomain((domain as unknown) as AxisDomain)

    expect(result).toBeNull()
  })

  it('should return null if domain is an array', () => {
    const domain: AxisDomain = []

    const result = getOutlierStepFromDomain(domain)

    expect(result).toBeNull()
  })

  it('should return the domain step when domain is a value range and has a numeric step', () => {
    const domain: ValueRange = { init: 30, end: 40, step: 5 }

    const result = getOutlierStepFromDomain(domain)

    expect(result).toBe(5)
  })

  it('should return the amount of the step when domain is not a value range', () => {
    const domain: DateRange = {
      init: new Date('10-12-2024'),
      end: new Date('20-12-2024'),
      step: { amount: 10, unit: 'day' },
    }

    const result = getOutlierStepFromDomain(domain)

    expect(result).toBe(getOutlierStep(10))
  })
})

describe('getOutlierSeriesName', () => {
  it('should return the series name prefixed with "outliers"', () => {
    const seriesName = 'BoldTest'

    const result = getOutlierSeriesName(seriesName)

    expect(result).toBe('outliersBoldTest')
  })

  it('should handle an empty series name', () => {
    const result = getOutlierSeriesName('')

    expect(result).toBe('outliers')
  })

  it('should handle special characters in the series name', () => {
    const result = getOutlierSeriesName('BoldTest#%1')

    expect(result).toBe('outliersBoldTest#%1')
  })
})
