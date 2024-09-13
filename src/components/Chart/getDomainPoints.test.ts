import { getDomainPoints } from './getDomainPoints'
import { DateRange, ValueRange } from './model'

describe('get domain points from domain', () => {
  it('should get domain points from categories correctly', () => {
    const domain = ['cat 1', 'cat 2', 'cat 3', 'cat 4', 'cat 5']
    const domainPoints = getDomainPoints(domain)

    expect(domainPoints).toEqual(domain)
  })

  it('should get domain points from value range correctly', () => {
    const domain: ValueRange = { init: 0, end: 5, step: 2 }
    const domainPoints = getDomainPoints(domain)

    expect(domainPoints).toEqual([0, 2, 4, 5])
  })

  it('should get domain points from date range correctly - years', () => {
    const domain: DateRange = {
      init: new Date(2011, 10, 5),
      end: new Date(2020, 5, 1),
      step: { unit: 'year', amount: 4 },
    }
    const domainPoints = getDomainPoints(domain)

    expect(domainPoints).toEqual([
      +new Date(2011, 10, 5),
      +new Date(2015, 10, 5),
      +new Date(2019, 10, 5),
      +new Date(2020, 5, 1),
    ])
  })

  it('should get domain points from date range correctly - months', () => {
    const domain: DateRange = {
      init: new Date(2019, 10, 1),
      end: new Date(2020, 5, 1),
      step: { unit: 'month', amount: 2 },
    }
    const domainPoints = getDomainPoints(domain)

    expect(domainPoints).toEqual([
      +new Date(2019, 10, 1),
      +new Date(2020, 0, 1),
      +new Date(2020, 2, 1),
      +new Date(2020, 4, 1),
      +new Date(2020, 5, 1),
    ])
  })

  it('should get domain points from date range correctly - weeks', () => {
    const domain: DateRange = {
      init: new Date(2019, 10, 1),
      end: new Date(2020, 1, 1),
      step: { unit: 'week', amount: 3 },
    }
    const domainPoints = getDomainPoints(domain)

    expect(domainPoints).toEqual([
      +new Date(2019, 10, 1),
      +new Date(2019, 10, 22),
      +new Date(2019, 11, 13),
      +new Date(2020, 0, 3),
      +new Date(2020, 0, 24),
      +new Date(2020, 1, 1),
    ])
  })

  it('should get domain points from date range correctly - days', () => {
    const domain: DateRange = {
      init: new Date(2019, 10, 2),
      end: new Date(2019, 11, 1),
      step: { unit: 'day', amount: 10 },
    }
    const domainPoints = getDomainPoints(domain)

    expect(domainPoints).toEqual([
      +new Date(2019, 10, 2),
      +new Date(2019, 10, 12),
      +new Date(2019, 10, 22),
      +new Date(2019, 11, 1),
    ])
  })

  it('should get domain points from date range correctly - hours', () => {
    const domain: DateRange = {
      init: new Date(2019, 10, 30, 1),
      end: new Date(2019, 11, 1, 1),
      step: { unit: 'hour', amount: 10 },
    }
    const domainPoints = getDomainPoints(domain)

    expect(domainPoints).toEqual([
      +new Date(2019, 10, 30, 1),
      +new Date(2019, 10, 30, 11),
      +new Date(2019, 10, 30, 21),
      +new Date(2019, 11, 1, 1),
    ])
  })

  it('should get domain points from date range correctly - minutes', () => {
    const domain: DateRange = {
      init: new Date(2019, 10, 1, 1, 1),
      end: new Date(2019, 10, 1, 2, 10),
      step: { unit: 'minute', amount: 20 },
    }
    const domainPoints = getDomainPoints(domain)

    expect(domainPoints).toEqual([
      +new Date(2019, 10, 1, 1, 1),
      +new Date(2019, 10, 1, 1, 21),
      +new Date(2019, 10, 1, 1, 41),
      +new Date(2019, 10, 1, 2, 1),
      +new Date(2019, 10, 1, 2, 10),
    ])
  })

  it('should get domain points from date range correctly - seconds', () => {
    const domain: DateRange = {
      init: new Date(2019, 10, 1, 1, 1, 1),
      end: new Date(2019, 10, 1, 1, 2, 10),
      step: { unit: 'second', amount: 20 },
    }
    const domainPoints = getDomainPoints(domain)

    expect(domainPoints).toEqual([
      +new Date(2019, 10, 1, 1, 1, 1),
      +new Date(2019, 10, 1, 1, 1, 21),
      +new Date(2019, 10, 1, 1, 1, 41),
      +new Date(2019, 10, 1, 1, 2, 1),
      +new Date(2019, 10, 1, 1, 2, 10),
    ])
  })

  it('should get domain points from date range correctly - milliseconds', () => {
    const domain: DateRange = {
      init: new Date(2019, 10, 1, 1, 1, 1, 1),
      end: new Date(2019, 10, 1, 1, 1, 2, 300),
      step: { unit: 'millisecond', amount: 400 },
    }
    const domainPoints = getDomainPoints(domain)

    expect(domainPoints).toEqual([
      +new Date(2019, 10, 1, 1, 1, 1, 1),
      +new Date(2019, 10, 1, 1, 1, 1, 401),
      +new Date(2019, 10, 1, 1, 1, 1, 801),
      +new Date(2019, 10, 1, 1, 1, 2, 201),
      +new Date(2019, 10, 1, 1, 1, 2, 300),
    ])
  })
})
