import { DateRangeStep, UnitOfTime } from './model'

const MULTIPLIERS: Record<UnitOfTime, number> = {
  year: 8760 * 60 * 60 * 1000,
  month: 43800 * 60 * 1000,
  week: 7 * 24 * 60 * 60 * 1000,
  day: 24 * 60 * 60 * 1000,
  hour: 60 * 60 * 1000,
  minute: 60 * 1000,
  second: 1000,
  millisecond: 1,
}

export function dateRangeStepToMillis(step: DateRangeStep): number {
  return step.amount * MULTIPLIERS[step.unit]
}
