import createMonotoneCubicInterpolator from './createMonotoneCubicInterpolator'
import { AxisDomain, ChartSeries, ChartSeriesDataPoint, DataPoint, ReferenceAreaWithPercents } from './model'
import { getDataPointValue, getOutlierSeriesName, getDomainMaxValue, getOutlierStepFromDomain } from './util'

export function convertSeries<XDomain>(
  series: ChartSeries<XDomain>[],
  domainPoints: XDomain[],
  adaptedYDomain: AxisDomain,
  refsAreas?: ReferenceAreaWithPercents<XDomain>[],
  outlierSeries?: ChartSeries<XDomain>[]
): any[] {
  const outlierTickValue = getOutlierTickValue(adaptedYDomain)

  const refs = (refsAreas ?? []).flatMap((refsAreas) => {
    return refsAreas.areaPercents.map((data, i) => {
      return {
        x: data.x,
        [refsAreas.name]: data.percent,
      }
    })
  })

  const data = (series ?? [])
    .flatMap((serie, serieIndex) => {
      return (serie.data as any[]).map((data: ChartSeriesDataPoint<XDomain>, dataIndex: number) => {
        const hasOutliers = outlierSeries && seriesHasOutliers(outlierSeries, serieIndex, dataIndex)

        return {
          x: (data as DataPoint<XDomain>).x ?? domainPoints[dataIndex],
          ...(hasOutliers
            ? getOutlierSeriesConfig(serie.name, data, outlierTickValue)
            : { [serie.name]: getDataPointValue(data) }),
        }
      })
    })
    .concat(...refs)
    .sort((a, b) => (a.x === b.x ? 0 : a.x > b.x ? 1 : -1))
    .reduce((map, obj) => {
      map.set(obj.x, { ...map.get(obj.x), ...obj })
      return map
    }, new Map())

  /*
   * The values must be interpolated because Recharts considers empty values as 0
   * and the reference area crashes when there are X or Y points without a corresponding
   * reference area point.
   */
  const refValueNames = new Set(refs.flatMap((v) => Object.keys(v)))
  return interpolateValues(Array.from(data.values()), refValueNames)
}

const asNumber = (x: any) => (isNaN(+x) ? null : +x)

function interpolateValues(orderedValues: any[], valueNames: Set<string>): any[] {
  valueNames.delete('x')
  const interpolators = getValuesInterpolators(orderedValues, valueNames)

  return orderedValues.map((v, i) => {
    valueNames.forEach((vn) => {
      if (!(vn in v)) v[vn] = interpolators.get(vn)(asNumber(v.x) ?? i)
    })
    return v
  })
}

function getValuesInterpolators(orderedValues: any[], valueNames: Set<string>): Map<string, (x: number) => number> {
  return Array.from(valueNames).reduce((interpolators, vn) => {
    const valsWithVn = orderedValues.filter((v) => vn in v)
    const xs = valsWithVn.map((v, i) => asNumber(v.x) ?? i)
    const ys = valsWithVn.map((v) => v[vn])
    interpolators.set(vn, createMonotoneCubicInterpolator(xs, ys))
    return interpolators
  }, new Map<string, (x: number) => number>())
}

function getOutlierTickValue(adaptedYDomain: AxisDomain): number | Date {
  const maxRange = getDomainMaxValue(adaptedYDomain)
  const outlierStep = getOutlierStepFromDomain(adaptedYDomain)

  const outlierTickValue =
    typeof maxRange === 'number'
      ? maxRange + outlierStep
      : maxRange instanceof Date
      ? new Date(maxRange.getTime() + outlierStep)
      : null

  return outlierTickValue
}

const seriesHasOutliers = <XDomain>(
  outlierSeries: ChartSeries<XDomain>[],
  seriesIndex: number,
  dataIndex: number
): boolean => !!outlierSeries[seriesIndex]?.data[dataIndex]

const getOutlierSeriesConfig = <XDomain>(
  seriesName: string,
  seriesData: ChartSeriesDataPoint<XDomain>,
  outlierTickValue: number | Date
) => {
  return {
    [seriesName]: outlierTickValue,
    [getOutlierSeriesName(seriesName)]: { value: getDataPointValue(seriesData), series: seriesName },
  }
}
