import { dateRangeStepToMillis } from './dateRangeStepToMillis'
import { AxisDomain, DateRange, DateRangeStep, isValueRange, ValueRange } from './model'
import { getOutlierStep } from './util'

export function getDomainPoints<XDomain>(domain: AxisDomain, hasOutliers: boolean = false): XDomain[] {
  if (!domain || Array.isArray(domain)) return domain as any[]
  if (isValueRange(domain)) return getValueRangeDomainPoints(domain, hasOutliers)
  else return getDateRangeDomainPoints(domain, hasOutliers)
}

function getValueRangeDomainPoints(domain: ValueRange, hasOutliers: boolean): any[] {
  const points = []
  const step = domain.step ?? 1
  for (let i = domain.init; i <= domain.end; i += step) points.push(i)
  if (!points.includes(domain.end)) points.push(domain.end)
  if (hasOutliers) points.push(domain.end + getOutlierStep(step))
  return points
}

function getDateRangeDomainPoints(domain: DateRange, hasOutliers: boolean = false): any[] {
  const points = []
  const step = domain.step ?? { amount: 1, unit: 'day' }
  const endMillis = +domain.end
  let currValue = +domain.init
  do {
    points.push(currValue.valueOf())
    currValue = addStepToDate(currValue, step)
  } while (currValue < endMillis)
  if (!points.includes(endMillis)) points.push(domain.end.valueOf())
  if (hasOutliers) {
    const outlierStepAmount = getOutlierStep(step.amount)
    const outlierDate = addStepToDate(+domain.end, { amount: outlierStepAmount, unit: step.unit })
    points.push(outlierDate)
  }

  return points
}

function addStepToDate(dateMillis: number, step: DateRangeStep): number {
  switch (step.unit) {
    case 'year':
      const newDateY = new Date(dateMillis)
      newDateY.setFullYear(newDateY.getFullYear() + step.amount)
      return +newDateY
    case 'month':
      const newDateM = new Date(dateMillis)
      newDateM.setMonth(newDateM.getMonth() + step.amount)
      return +newDateM
    default:
      return dateMillis + dateRangeStepToMillis(step)
  }
}
