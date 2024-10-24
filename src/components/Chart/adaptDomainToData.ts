import { dateRangeStepToMillis } from './dateRangeStepToMillis'
import { AxisDomain, ChartSeries, DateRange, isValueRange, ValueRange } from './model'
import { getDataPointValue } from './util'

export function adaptDomainToSeriesRange<XDomain>(
  domain: AxisDomain,
  series: ChartSeries<XDomain>[],
  hasOutlier?: boolean
): AxisDomain {
  const dataValues = series.flatMap((s) => (s.data as []).map((d) => getDataPointValue(d)))
  return adaptDomainToDataRange(domain, dataValues, hasOutlier)
}

export function adaptDomainToDataRange(
  domain: AxisDomain,
  dataValues: number[] | Date[] | string[],
  hasOutlier?: boolean
): AxisDomain {
  if (!domain || !dataValues) return domain
  if (Array.isArray(domain)) return dataValues as string[]

  const numericDataValues = (dataValues as []).map((d) => +d).filter((d) => !isNaN(d))
  if (!numericDataValues.length) return domain

  if (isValueRange(domain)) return adaptValueRangeDomainToData(domain, numericDataValues, hasOutlier)
  else return adaptDateRangeDomainToData(domain, numericDataValues, hasOutlier)
}

function adaptValueRangeDomainToData(domain: ValueRange, dataValues: number[], hasOutlier: boolean): ValueRange {
  if (domain.init >= domain.end) throw Error('Domain init must be less than domain end')

  const dataMin = Math.min(...dataValues)
  const dataMax = Math.max(...dataValues)

  return {
    init: dataMin < domain.init ? dataMin - (dataMin % domain.step) : domain.init,
    end: dataMax > domain.end && !hasOutlier ? dataMax + (domain.step - (dataMax % domain.step)) : domain.end,
    step: domain.step,
  }
}

function adaptDateRangeDomainToData(domain: DateRange, dataValues: number[], hasOutlier: boolean): DateRange {
  if (+domain.init >= +domain.end) throw Error('Domain init must be less than domain end')

  const valueDomain = adaptValueRangeDomainToData(
    {
      init: +domain.init,
      end: +domain.end,
      step: dateRangeStepToMillis(domain.step),
    },
    dataValues,
    hasOutlier
  )

  return {
    init: new Date(valueDomain.init),
    end: new Date(valueDomain.end),
    step: domain.step,
  }
}
