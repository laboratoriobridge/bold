import { DateRange, UnitOfTime } from './model'

const MULTIPLIERS: Record<UnitOfTime, number> = {
  year: 3156000000,
  month: 2628000000,
  week: 604800000,
  day: 86400000,
  hour: 3600000,
  minute: 60000,
  second: 1000,
  millisecond: 1,
}

export function dateRangeStepToMillis(step: DateRange['step']): number {
  return step.amount * MULTIPLIERS[step.unit]
}
