import { AxisDomain, DataPoint, isDateRange, isValueRange } from './model'

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
