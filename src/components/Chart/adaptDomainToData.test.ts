import { adaptDomainToDataRange, adaptDomainToSeriesRange } from './adaptDomainToData'
import { ChartSeries, DateRange, ValueRange } from './model'

const valueRangeDomain: ValueRange = { init: 10, end: 15, step: 5 }

describe('adaptDomainToSeriesRange', () => {
  it('should adapt correctly value range domain to series range', () => {
    const domain = valueRangeDomain
    const series: ChartSeries<string>[] = [
      { name: 'a', data: [18, 14] },
      { name: 'b', data: [8, 10] },
    ]
    const adaptedDomain = adaptDomainToSeriesRange(domain, series)

    expect(adaptedDomain).toEqual({ init: 5, end: 20, step: 5 })
  })
})

describe('adaptDomainToDataRange', () => {
  it('should return domain when domain is null', () => {
    const domain = null
    const dataValues = [18, 8]
    const adaptedDomain = adaptDomainToDataRange(domain as any, dataValues)

    expect(adaptedDomain).toBeNull()
  })

  it('should return domain when dataValues is null', () => {
    const domain = ['18', '8']
    const dataValues = null
    const adaptedDomain = adaptDomainToDataRange(domain, dataValues as any)

    expect(adaptedDomain).toEqual(['18', '8'])
  })

  it('should return dataValues when domain is a array', () => {
    const domain = ['cat 1', 'cat 2', 'cat 3', 'cat 4', 'cat 5']
    const dataValues = ['cat 1', 'cat 2', 'cat 3', 'cat 4', 'cat 5', 'cat 6', 'cat 7']
    const adaptedDomain = adaptDomainToDataRange(domain, dataValues)

    expect(adaptedDomain).toEqual(dataValues)
  })

  it('should return domain when numericDataValues is empty', () => {
    const domain = valueRangeDomain
    const dataValues = ['invalid', 'text']

    const result = adaptDomainToDataRange(domain, dataValues)

    expect(result).toEqual(domain)
  })

  describe('valueRangeDomain', () => {
    const dataValues = [18, 8]

    it('should adapt correctly value range domain to date range', () => {
      const domain = valueRangeDomain
      const data = dataValues
      const adaptedDomain = adaptDomainToDataRange(domain, data)

      expect(adaptedDomain).toEqual({ init: 5, end: 20, step: 5 })
    })

    it.each([
      { init: 11, end: 10, step: 5 },
      { init: 10, end: 10, step: 5 },
    ])('should throw error if domain start is greater or equal to end for value range', (domain: ValueRange) => {
      const data = dataValues

      expect(() => adaptDomainToDataRange(domain, data)).toThrow('Domain init must be less than domain end')
    })

    it('should not expand the domain end if hasOutlier is true', () => {
      const domain = valueRangeDomain
      const data = dataValues
      const hasOutlier = true

      const result = adaptDomainToDataRange(domain, data, hasOutlier)

      expect(result).toEqual({ init: 5, end: 15, step: 5 })
    })
  })

  describe('dateRangeDomain', () => {
    const dateRangeDomain: DateRange = {
      init: new Date('2020-04-11'),
      end: new Date('2020-04-16'),
      step: { unit: 'day', amount: 5 },
    }
    const dataValues = [new Date('2020-04-10'), new Date('2020-04-17')]

    it('should adapt correctly date range domain to date range', () => {
      const step = { unit: 'day', amount: 5 }
      const domain = dateRangeDomain
      const data = dataValues
      const adaptedDomain = adaptDomainToDataRange(domain, data) as DateRange

      expect({
        init: +adaptedDomain.init,
        end: +adaptedDomain.end,
        step: adaptedDomain.step,
      }).toEqual({
        init: +Date.parse('2020-04-08'),
        end: +Date.parse('2020-04-18'),
        step: step,
      })
    })

    it.each([
      { init: new Date('2020-04-16'), end: new Date('2020-04-11'), step: { unit: 'day', amount: 5 } } as DateRange,
      { init: new Date('2020-04-11'), end: new Date('2020-04-11'), step: { unit: 'day', amount: 5 } } as DateRange,
    ])('should throw error if domain start is greater or equal to end for date range', (domain: DateRange) => {
      const data = [new Date('2020-04-10'), new Date('2020-04-17')]

      expect(() => adaptDomainToDataRange(domain, data)).toThrow('Domain init must be less than domain end')
    })

    it('should not expand the domain end if hasOutlier is true', () => {
      const domain = dateRangeDomain
      const data = dataValues
      const hasOutlier = true

      const result = adaptDomainToDataRange(domain, data, hasOutlier)

      expect(result).toEqual({
        init: new Date('2020-04-08'),
        end: new Date('2020-04-16'),
        step: { unit: 'day', amount: 5 },
      })
    })
  })
})
