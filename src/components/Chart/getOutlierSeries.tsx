import { AxisDomain, ChartSeries, DataPointWithOutlier, DataPoint, ChartSeriesDataPoint, OutliersType } from './model'
import { isInsideDomain, getDomainMaxValue, isOutlier } from './util'

export function splitOutlierSeries<XDomain>(
  series: ChartSeries<XDomain>[],
  xDomain: AxisDomain,
  rangeDomainPoints: XDomain[],
  yDomain: AxisDomain,
  outliers: OutliersType
): {
  rangedSeries: ChartSeries<XDomain>[]
  outlierSeries: ChartSeries<XDomain>[]
  hasOutliers: boolean
} {
  const [rangedSeries, outlierSeries] = series.reduce(
    (serieAcc: [ChartSeries<XDomain>[], ChartSeries<XDomain>[]], seriesCurr: ChartSeries<XDomain>) => {
      const maxValue = getDomainMaxValue(yDomain)

      const filteredData = (seriesCurr.data as DataPoint<XDomain, number>[]).filter((d, i) =>
        d.x ? isInsideDomain(d.x, xDomain) : i < rangeDomainPoints.length
      )

      const seriesData: DataPointWithOutlier<XDomain>[] = reduceSeriesData(filteredData, maxValue, outliers)

      serieAcc[0].push({
        ...seriesCurr,
        dataKey: seriesCurr.dataKey ?? seriesCurr.name,
        data: seriesData.map((series) => series.data) as ChartSeriesDataPoint<XDomain>[],
      })

      serieAcc[1].push({
        ...seriesCurr,
        name: `outlier${seriesCurr.name}`,
        dataKey: `outlier`,
        data: seriesData.map((series) => series.isOutlier) as boolean[],
      })

      return serieAcc
    },
    [[], []] as [ChartSeries<XDomain>[], ChartSeries<XDomain>[]]
  )

  const hasOutliers = outlierSeries.some((s) => s.data.some((d) => d))

  return {
    rangedSeries,
    outlierSeries,
    hasOutliers,
  }
}

function reduceSeriesData<XDomain>(
  data: (DataPoint<XDomain, number> | number)[],
  maxValue: number | Date,
  outliers: OutliersType
): DataPointWithOutlier<XDomain>[] {
  return data.reduce((acc: DataPointWithOutlier<XDomain>[], cur: DataPoint<XDomain, number> | number) => {
    if (outliers === 'auto') {
      acc.push({ data: cur, isOutlier: isOutlier(cur, maxValue) })
    } else {
      acc.push({ data: cur, isOutlier: false })
    }
    return acc
  }, [])
}
