import { splitOutlierSeries } from './getOutlierSeries'
import { AxisDomain, ChartSeries, OutliersType } from './model'

describe('splitOutlierSeries', () => {
  const yDomain: AxisDomain = { init: 0, end: 100, step: 20 }
  const xDomain: AxisDomain = { init: 0, end: 5, step: 1 }
  const domainPoints: number[] = [0, 1, 2, 3, 4, 5]
  const chartSeries: ChartSeries<number>[] = [{ name: 'test', data: [20, 50, 120] }]

  const outliersOptions: OutliersType[] = ['auto', 'expand-domain']

  it.each(outliersOptions)(
    'should get outlier series from series with outlier when request outliers based on the outlier type param',
    (outliers) => {
      const series = chartSeries
      const seriesFirstData = series[0]

      const { rangedSeries, outlierSeries } = splitOutlierSeries(series, xDomain, domainPoints, yDomain, outliers)

      const outlierSeriesFirstResult = outlierSeries[0]
      const rangedSeriesFirstResult = rangedSeries[0]

      expect(outlierSeriesFirstResult).toHaveProperty('name', 'outlier' + seriesFirstData.name)
      expect(outlierSeriesFirstResult).toHaveProperty('dataKey', 'outlier')
      expect(outlierSeriesFirstResult).toHaveProperty('data', [false, false, outliers === 'auto'])

      expect(rangedSeriesFirstResult).toHaveProperty('name', seriesFirstData.name)
      expect(rangedSeriesFirstResult).toHaveProperty('dataKey', seriesFirstData.name)
      expect(rangedSeriesFirstResult).toHaveProperty('data', seriesFirstData.data)
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

  it('should return hasOutliers as false if no values exceed yDomain and outliers is set to auto', () => {
    const series: ChartSeries<number>[] = [{ name: 'noOutliers', data: [10, 20, 30] }]

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

  it('should handle series with empty data when outliers is set to auto', () => {
    const series = [{ name: 'emptySeries', data: [] }]

    const { outlierSeries, rangedSeries, hasOutliers } = splitOutlierSeries(
      series,
      xDomain,
      domainPoints,
      yDomain,
      'auto'
    )

    expect(outlierSeries[0].data).toHaveLength(0)
    expect(rangedSeries[0].data).toHaveLength(0)
    expect(hasOutliers).toBe(false)
  })
})
