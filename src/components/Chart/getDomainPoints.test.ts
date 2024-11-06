import { getDomainPoints } from './getDomainPoints'
import { DateRange, ValueRange } from './model'

describe('getDomainPoints', () => {
  it('should return the domain when domain is null', () => {
    const domain = null
    const domainPoints = getDomainPoints(domain as any)

    expect(domainPoints).toBeNull()
  })

  it('should return the domain when domain is an array', () => {
    const domain: string[] = ['cat 1', 'cat 2', 'cat 3', 'cat 4', 'cat 5']
    const domainPoints = getDomainPoints(domain)

    expect(domainPoints).toEqual(domain)
  })

  describe('valueRangeDomain', () => {
    const valueRangeDomain: ValueRange = { init: 0, end: 5, step: 2 }

    it('should correctly return the domain points from a value range domain', () => {
      const domain = valueRangeDomain
      const domainPoints = getDomainPoints(domain)

      expect(domainPoints).toEqual([0, 2, 4, 5])
    })

    it('should correctly return the domain points from a value range domain with outlier tick', () => {
      const domain = valueRangeDomain
      const hasOutlier = true
      const domainPoints = getDomainPoints(domain, hasOutlier)

      expect(domainPoints).toEqual([0, 2, 4, 5, 7])
    })
  })

  describe('dateRangeDomain', () => {
    const testCases = [
      [
        {
          init: new Date(2011, 10, 5),
          end: new Date(2020, 5, 1),
          step: { unit: 'year', amount: 4 },
        },
        [+new Date(2011, 10, 5), +new Date(2015, 10, 5), +new Date(2019, 10, 5), +new Date(2020, 5, 1)],
      ],
      [
        {
          init: new Date(2019, 10, 1),
          end: new Date(2020, 5, 1),
          step: { unit: 'month', amount: 2 },
        },
        [
          +new Date(2019, 10, 1),
          +new Date(2020, 0, 1),
          +new Date(2020, 2, 1),
          +new Date(2020, 4, 1),
          +new Date(2020, 5, 1),
        ],
      ],
      [
        {
          init: new Date(2019, 10, 1),
          end: new Date(2020, 1, 1),
          step: { unit: 'week', amount: 3 },
        },
        [
          +new Date(2019, 10, 1),
          +new Date(2019, 10, 22),
          +new Date(2019, 11, 13),
          +new Date(2020, 0, 3),
          +new Date(2020, 0, 24),
          +new Date(2020, 1, 1),
        ],
      ],
      [
        {
          init: new Date(2019, 10, 2),
          end: new Date(2019, 11, 1),
          step: { unit: 'day', amount: 10 },
        },
        [+new Date(2019, 10, 2), +new Date(2019, 10, 12), +new Date(2019, 10, 22), +new Date(2019, 11, 1)],
      ],
      [
        {
          init: new Date(2019, 10, 30, 1),
          end: new Date(2019, 11, 1, 1),
          step: { unit: 'hour', amount: 10 },
        },
        [
          +new Date(2019, 10, 30, 1),
          +new Date(2019, 10, 30, 11),
          +new Date(2019, 10, 30, 21),
          +new Date(2019, 11, 1, 1),
        ],
      ],
      [
        {
          init: new Date(2019, 10, 1, 1, 1),
          end: new Date(2019, 10, 1, 2, 10),
          step: { unit: 'minute', amount: 20 },
        },
        [
          +new Date(2019, 10, 1, 1, 1),
          +new Date(2019, 10, 1, 1, 21),
          +new Date(2019, 10, 1, 1, 41),
          +new Date(2019, 10, 1, 2, 1),
          +new Date(2019, 10, 1, 2, 10),
        ],
      ],
      [
        {
          init: new Date(2019, 10, 1, 1, 1, 1),
          end: new Date(2019, 10, 1, 1, 2, 10),
          step: { unit: 'second', amount: 20 },
        },
        [
          +new Date(2019, 10, 1, 1, 1, 1),
          +new Date(2019, 10, 1, 1, 1, 21),
          +new Date(2019, 10, 1, 1, 1, 41),
          +new Date(2019, 10, 1, 1, 2, 1),
          +new Date(2019, 10, 1, 1, 2, 10),
        ],
      ],
      [
        {
          init: new Date(2019, 10, 1, 1, 1, 1, 1),
          end: new Date(2019, 10, 1, 1, 1, 2, 300),
          step: { unit: 'millisecond', amount: 400 },
        },
        [
          +new Date(2019, 10, 1, 1, 1, 1, 1),
          +new Date(2019, 10, 1, 1, 1, 1, 401),
          +new Date(2019, 10, 1, 1, 1, 1, 801),
          +new Date(2019, 10, 1, 1, 1, 2, 201),
          +new Date(2019, 10, 1, 1, 1, 2, 300),
        ],
      ],
    ]

    it.each(testCases)(
      'should correctly return the domain points from a date range domain',
      (dateRangeDomain, expectedPoints) => {
        const domainPoints = getDomainPoints(dateRangeDomain as DateRange)

        expect(domainPoints).toEqual(expectedPoints)
      }
    )

    it('should correctly return the domain points from a date range domain with outlier tick', () => {
      const domain: DateRange = {
        init: new Date(2020, 0, 1),
        end: new Date(2020, 5, 1),
        step: { unit: 'month', amount: 2 },
      }
      const hasOutlier = true
      const domainPoints = getDomainPoints(domain, hasOutlier)

      expect(domainPoints).toEqual([
        +new Date(2020, 0, 1),
        +new Date(2020, 2, 1),
        +new Date(2020, 4, 1),
        +new Date(2020, 5, 1),
        +new Date(2020, 7, 1),
      ])
    })
  })
})
