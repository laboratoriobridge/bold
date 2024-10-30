import { splitOutlierSeries } from './getOutlierSeries'
import { AxisDomain } from './model'

describe('splitOutlierSeries', () => {
  const yDomain: AxisDomain = { init: 0, end: 100, step: 20 }
  const xDomain: AxisDomain = { init: 0, end: 5, step: 1 }
  const domainPoints = [0, 1, 2, 3, 4, 5]
  const chartSeries = [{ name: 'test', data: [20, 50, 120] }]

  it.each(['auto', 'expand-domain'] as const)(
    'should get outlier series from series with outlier when request outliers based on the suportOutlier param',
    (outliers: 'auto' | 'expand-domain') => {
      const series = chartSeries

      const { rangedSeries, outlierSeries } = splitOutlierSeries(series, xDomain, domainPoints, yDomain, outliers)

      expect(outlierSeries[0]).toHaveProperty('name', 'outlier' + series[0].name)
      expect(outlierSeries[0]).toHaveProperty('dataKey', 'outlier')
      expect(outlierSeries[0]).toHaveProperty('data', [false, false, outliers === 'auto'])
      expect(rangedSeries[0]).toHaveProperty('name', series[0].name)
      expect(rangedSeries[0]).toHaveProperty('dataKey', series[0].name)
      expect(rangedSeries[0]).toHaveProperty('data', series[0].data)
    }
  )

  it('should handle series with values inside and outside yDomain when outliers is set to auto', () => {
    const series = chartSeries

    const { outlierSeries, rangedSeries, hasOutliers } = splitOutlierSeries(
      series,
      xDomain,
      domainPoints,
      yDomain,
      'auto'
    )

    expect(outlierSeries[0].data).toEqual([false, false, true])
    expect(rangedSeries[0].data).toEqual([20, 50, 120])
    expect(hasOutliers).toBe(true)
  })

  it('should consider all data within range when outliers is set to expand-domain', () => {
    const series = chartSeries

    const { outlierSeries, rangedSeries, hasOutliers } = splitOutlierSeries(
      series,
      xDomain,
      domainPoints,
      yDomain,
      'expand-domain'
    )

    expect(outlierSeries[0].data).toEqual([false, false, false])
    expect(rangedSeries[0].data).toEqual([20, 50, 120])
    expect(hasOutliers).toBe(false)
  })

  it('should return hasOutliers as false if no values exceed yDomain', () => {
    const series = [{ name: 'noOutliers', data: [10, 20, 30] }]

    const { outlierSeries, rangedSeries, hasOutliers } = splitOutlierSeries(
      series,
      xDomain,
      domainPoints,
      yDomain,
      'auto'
    )

    expect(outlierSeries[0].data).toEqual([false, false, false])
    expect(rangedSeries[0].data).toEqual([10, 20, 30])
    expect(hasOutliers).toBe(false)
  })

  it('should handle series with empty data', () => {
    const series = [{ name: 'emptySeries', data: [] }]

    const { outlierSeries, rangedSeries, hasOutliers } = splitOutlierSeries(
      series,
      xDomain,
      domainPoints,
      yDomain,
      'auto'
    )

    expect(outlierSeries[0].data).toEqual([])
    expect(rangedSeries[0].data).toEqual([])
    expect(hasOutliers).toBe(false)
  })
})
