import { Week } from '../DateRangePicker/DateRangePicker'
import { ReferenceMonth } from '../MonthPicker'

/**
 * Calculate the first day of a month.
 *
 * @param target Target month.
 * @returns A new date which is the first day of the target month.
 */
export const getFirstDayOfMonth = (target: Date): Date => {
  const firstDayOfMonth = new Date(target)
  firstDayOfMonth.setDate(1)
  return firstDayOfMonth
}

/**
 * Calculate the last day of a month.
 * @param target  Target month.
 * @returns A new date which is the last day of the target month.
 */
export const getLastDayOfMonth = (target: Date): Date => {
  return new Date(target.getFullYear(), target.getMonth() + 1, 0)
}

/**
 * Creates an ordered array of the week containing the target date
 *
 * @param target Target date of the week
 * @returns An array starting by sunday and finished by saturday which includes the target date
 */
export const createWeekArray = (target: Date): Date[] => {
  const week: Date[] = []

  for (let i = 0; i < 7; i++) {
    const d = new Date(target)
    d.setDate(target.getDate() - target.getDay() + i)
    week.push(d)
  }

  return week
}

/**
 * Creates an array of weeks for the target month. Each week is itself an array of dates containing the week's dates.
 *
 * @param target The target month to create.
 * @returns A new array of array of dates containing all month dates.
 */
export const createMonthMatrix = (target: Date): Date[][] => {
  target.setHours(0, 0, 0, 0)
  const firstDayOfMonth = getFirstDayOfMonth(target)
  const lastDayOfMonth = getLastDayOfMonth(target)
  const weeks = []

  let curr = firstDayOfMonth

  while (true) {
    const week = createWeekArray(curr)
    if (week[0] > lastDayOfMonth && !isSameDay(week[0], lastDayOfMonth)) {
      break
    } else {
      weeks.push(week)
      curr = new Date(curr)
      curr.setDate(curr.getDate() + 7)
    }
  }

  return weeks
}

/**
 * Check if two dates belongs to the same day.
 *
 * @param d1 First date
 * @param d2 Second date
 * @returns Whether the dates are the same day, month and year
 */
export const isSameDay = (d1: Date, d2: Date): boolean => {
  return d1.getDate() === d2.getDate() && d1.getMonth() === d2.getMonth() && d1.getFullYear() === d2.getFullYear()
}

/**
 * Check if the day belongs to the week
 *
 * @param day A day to check
 * @param week A week
 * @returns Whether the day belongs to the week
 */
export const isBelongingAWeek = (day: Date, week: Week): boolean => {
  day.setHours(0, 0, 0, 0)
  return day >= week.start && day <= week.end
}

/**
 * Check if the parameter is a valid date.
 */
export const isValidDate = (possibleDate: any): boolean => {
  // If possibleDate is not a valid date, getTime() will return NaN, and NaN is never equal to itself.
  // eslint-disable-next-line no-self-compare
  return possibleDate && possibleDate.getTime() === possibleDate.getTime()
}

/**
 * Check if the parameter is a valid ReferenceMonth.
 * @param possibleReferenceMonth - The ReferenceMonth object to be validated.
 * @returns True if the ReferenceMonth is valid, false otherwise.
 */
export const isValidReferenceMonth = (possibleReferenceMonth: ReferenceMonth): boolean => {
  const date = new Date(possibleReferenceMonth?.year, possibleReferenceMonth?.month, 1)

  return isValidDate(date)
}
