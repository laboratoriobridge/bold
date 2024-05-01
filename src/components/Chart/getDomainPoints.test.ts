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

  it('should get domain points from date range correctly', () => {
    const domain: DateRange = {
      init: new Date(2020, 0, 1),
      end: new Date(2020, 5, 1),
      step: { unit: 'month', amount: 2 },
    }
    const domainPoints = getDomainPoints(domain)

    expect(domainPoints).toEqual([
      +new Date(2020, 0, 1),
      +new Date(2020, 2, 1),
      +new Date(2020, 4, 1),
      +new Date(2020, 5, 1),
    ])
  })
})
