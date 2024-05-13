import { dateRangeStepToMillis } from './dateRangeStepToMillis'
import { AxisDomain, DateRange, DateRangeStep, isValueRange, ValueRange } from './model'

export function getDomainPoints<XDomain>(domain: AxisDomain): XDomain[] {
  if (!domain || Array.isArray(domain)) return domain as any[]
  if (isValueRange(domain)) return getValueRangeDomainPoints(domain)
  else return getDateRangeDomainPoints(domain)
}

function getValueRangeDomainPoints(domain: ValueRange): any[] {
  const points = []
  const step = domain.step ?? 1
  for (let i = domain.init; i <= domain.end; i += step) points.push(i)
  if (!points.includes(domain.end)) points.push(domain.end)
  return points
}

function getDateRangeDomainPoints(domain: DateRange): any[] {
  const points = []
  const step = domain.step ?? { amount: 1, unit: 'day' }
  const endMillis = +domain.end
  let currValue = +domain.init
  do {
    points.push(currValue.valueOf())
    currValue = addStepToDate(currValue, step)
  } while (currValue < endMillis)
  if (!points.includes(endMillis)) points.push(domain.end.valueOf())
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
