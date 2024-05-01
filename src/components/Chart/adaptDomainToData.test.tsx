import { adaptDomainToDataRange, adaptDomainToSeriesRange } from './adaptDomainToData'
import { ChartSeries, DateRange, ValueRange } from './model'

describe('adapt domain to data', () => {
  it('should adapt categorical domain', () => {
    const domain = ['cat 1', 'cat 2', 'cat 3', 'cat 4', 'cat 5']
    const data = ['cat 1', 'cat 2', 'cat 3', 'cat 4', 'cat 5', 'cat 6', 'cat 7']
    const adaptedDomain = adaptDomainToDataRange(domain, data)

    expect(adaptedDomain).toEqual(data)
  })

  it('should adapt domain to series', () => {
    const domain: ValueRange = { init: 10, end: 15, step: 5 }
    const series: ChartSeries<string>[] = [
      { name: 'a', data: [18, 14] },
      { name: 'b', data: [8, 10] },
    ]
    const adaptedDomain = adaptDomainToSeriesRange(domain, series)

    expect(adaptedDomain).toEqual({ init: 5, end: 20, step: 5 })
  })

  it('should adapt value range domain', () => {
    const domain: ValueRange = { init: 10, end: 15, step: 5 }
    const data = [18, 8]
    const adaptedDomain = adaptDomainToDataRange(domain, data)

    expect(adaptedDomain).toEqual({ init: 5, end: 20, step: 5 })
  })

  it('should adapt date range domain', () => {
    const step = { unit: 'day', amount: 5 }
    const domain: DateRange = {
      init: new Date('2020-04-11'),
      end: new Date('2020-04-16'),
      step: { unit: 'day', amount: 5 },
    }
    const data = [new Date('2020-04-10'), new Date('2020-04-17')]
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
})
