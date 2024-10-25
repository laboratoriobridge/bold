import { getDomainMaxValue, isOutlier } from './util'
import { AxisDomain, ChartSeriesDataPoint } from './model'

describe('getDomainMaxValue', () => {
  it.each([null, undefined])('should return null when domain is null or undefined', (domain) => {
    const result = getDomainMaxValue((domain as unknown) as AxisDomain)

    expect(result).toBeNull()
  })

  it('should return the domain end value when domain is an valid object', () => {
    const domain: AxisDomain = { init: 10, end: 10, step: 10 }

    const result = getDomainMaxValue(domain)

    expect(result).toBe(10)
  })
})

describe('isOutlier', () => {
  const dataPointValue: ChartSeriesDataPoint<number> = { x: 10, y: 10 }

  it('should return false when max is undefined', () => {
    const max = undefined

    const result = isOutlier(dataPointValue, max, 10)

    expect(result).toBeNull()
  })

  it('should return true when value is greater than max and min is undefined', () => {
    const max = 10
    const min = undefined

    const result = isOutlier(dataPointValue, max, min)

    expect(result).toBeTruthy()
  })

  it('should return true when max is defined and the value is less than min', () => {
    const max = 10
    const min = 30

    const result = isOutlier(dataPointValue, max, min)

    expect(result).toBeTruthy()
  })
})
