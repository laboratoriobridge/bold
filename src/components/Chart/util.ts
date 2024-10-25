import { AxisDomain, DataPoint, isDateRange, isValueRange, ChartSeriesDataPoint } from './model'

export function getDataPointValue(dp: number | DataPoint<any>): number {
  if (typeof dp === 'number') return dp
  else return dp.y
}

export function isInsideDomain(value: any, domain: AxisDomain) {
  if (Array.isArray(domain)) return domain.includes(value)
  else return +value >= +domain.init && +value <= +domain.end
}
export const getAxisDomainInit = (x: AxisDomain): number | string =>
  isValueRange(x) || isDateRange(x) ? +x.init : x.length && x[0]

export const getAxisDomainEnd = (x: AxisDomain): number | string =>
  isValueRange(x) || isDateRange(x) ? +x.end : x.length && x[x.length - 1]

export const defaultChartDateFormatter = (date: Date) => date.toLocaleDateString()

const getDomainNumericStep = (domain: AxisDomain) =>
  !domain || Array.isArray(domain) ? null : isValueRange(domain) ? domain.step : domain.step?.amount

export const getDomainMaxValue = (domain: AxisDomain) => (!domain || Array.isArray(domain) ? null : domain.end)

export function isOutlier<XDomain>(value: ChartSeriesDataPoint<XDomain>, max?: number | Date, min?: number | Date) {
  return max && getDataPointValue(value) > +max && (!min || getDataPointValue(value) < +min)
}

export const getOutlierStep = (tickStep: number) => (tickStep < 15 ? tickStep : Math.floor(tickStep / 3))

export const getOutlierStepFromDomain = (domain: AxisDomain) => getOutlierStep(getDomainNumericStep(domain))

export const getOutlierSeriesName = (seriesName: string) => `outliers${seriesName}`
