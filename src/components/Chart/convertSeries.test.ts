import { convertSeries } from './convertSeries'
import { ChartSeries, ReferenceAreaWithPercents } from './model'

describe('convert series to Recharts format', () => {
  it('should convert categories correctly', () => {
    const series: ChartSeries<string>[] = [
      {
        name: 'Test',
        data: [1, 2, 3, 4, 5],
      },
      {
        name: 'Test2',
        data: [5, 4, 3, 2, 1],
      },
    ]

    const domain = ['cat 1', 'cat 2', 'cat 3', 'cat 4', 'cat 5']
    const domainPoints = domain

    const seriesConverted = convertSeries(series, domainPoints, undefined)
    expect(seriesConverted).toMatchObject([
      { x: 'cat 1', Test: 1, Test2: 5 },
      { x: 'cat 2', Test: 2, Test2: 4 },
      { x: 'cat 3', Test: 3, Test2: 3 },
      { x: 'cat 4', Test: 4, Test2: 2 },
      { x: 'cat 5', Test: 5, Test2: 1 },
    ])
  })

  it('should convert category reference areas correctly', () => {
    const series: ChartSeries<string>[] = [
      {
        name: 'Test',
        data: [1, 2, 3, 4, 5],
      },
      {
        name: 'Test2',
        data: [5, 4, 3, 2, 1],
      },
    ]

    const referenceAreas: ReferenceAreaWithPercents<string>[] = [
      {
        label: { name: 'ref1' },
        area: [],
        areaPercents: [
          { x: 'cat 1', percent: 0 },
          { x: 'cat 5', percent: 120 },
        ],
      },
    ]
    const domain = ['cat 1', 'cat 2', 'cat 3', 'cat 4', 'cat 5']
    const domainPoints = domain

    const seriesConverted = convertSeries(series, domainPoints, referenceAreas)
    expect(seriesConverted).toMatchObject([
      { x: 'cat 1', Test: 1, Test2: 5, ref1: 0 },
      { x: 'cat 2', Test: 2, Test2: 4, ref1: 120 },
      { x: 'cat 3', Test: 3, Test2: 3, ref1: 240 },
      { x: 'cat 4', Test: 4, Test2: 2, ref1: 360 },
      { x: 'cat 5', Test: 5, Test2: 1, ref1: 120 },
    ])
  })

  it('should convert numeric series reference areas correctly', () => {
    const series: ChartSeries<number>[] = [
      {
        name: 'Test',
        data: [1, 2, 3, 4, 5],
      },
      {
        name: 'Test2',
        data: [5, 4, 3, 2, 1],
      },
      {
        name: 'Test3',
        data: [
          { x: 20, y: 20 },
          { x: 15, y: 15 },
        ],
      },
    ]

    const domainPoints = [0, 10, 20, 30, 40]

    const seriesConverted = convertSeries(series, domainPoints, undefined)
    expect(seriesConverted).toMatchObject([
      { x: 0, Test: 1, Test2: 5 },
      { x: 10, Test: 2, Test2: 4 },
      { x: 15, Test3: 15 },
      { x: 20, Test: 3, Test2: 3, Test3: 20 },
      { x: 30, Test: 4, Test2: 2 },
      { x: 40, Test: 5, Test2: 1 },
    ])
  })

  it('should convert numeric series reference areas correctly', () => {
    const series: ChartSeries<number>[] = [
      {
        name: 'Test',
        data: [1, 2, 3, 4, 5],
      },
      {
        name: 'Test2',
        data: [5, 4, 3, 2, 1],
      },
    ]

    const referenceAreas: ReferenceAreaWithPercents<number>[] = [
      {
        label: { name: 'ref1' },
        area: [],
        areaPercents: [
          { x: 20, percent: 0 },
          { x: 40, percent: 120 },
        ],
      },
    ]

    const domainPoints = [20, 30, 40, 50, 60]

    const seriesConverted = convertSeries(series, domainPoints, referenceAreas)
    expect(seriesConverted).toMatchObject([
      { x: 20, Test: 1, Test2: 5, ref1: 0 },
      { x: 30, Test: 2, Test2: 4, ref1: 60 },
      { x: 40, Test: 3, Test2: 3, ref1: 120 },
      { x: 50, Test: 4, Test2: 2, ref1: 180 },
      { x: 60, Test: 5, Test2: 1, ref1: 240 },
    ])
  })
})
