import { dateRangeStepToMillis } from './dateRangeStepToMillis'
import { AxisDomain, DateRange, isValueRange, ValueRange } from './model'

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
    currValue = currValue + dateRangeStepToMillis(step)
  } while (currValue < endMillis)
  if (!points.includes(endMillis)) points.push(domain.end.valueOf())
  return points
}
