import { DateRange } from '../DateRangePicker/BaseDateRangeInput'
import { ReferenceMonth } from '../MonthPicker'
import { ReferenceMonthRange } from './MonthRangePicker'

/**
 * Check if the first reference month is bigger than or equal to the second reference month
 *
 * @param month1 First reference month
 * @param month2 Second reference month
 */
export const isGreaterOrEqualThan = (month1: ReferenceMonth, month2: ReferenceMonth) =>
  isGreaterThan(month1, month2) || isSameReferenceMonth(month1, month2)

/**
 * Check if the first reference month is less than or equal to the second reference month
 *
 * @param month1 First reference month
 * @param month2 Second reference month
 */
export const isLessOrEqualThan = (month1: ReferenceMonth, month2: ReferenceMonth) =>
  isLessThan(month1, month2) || isSameReferenceMonth(month1, month2)

/**
 * Check if the first reference month is less than the second reference month
 *
 * @param month1 First reference month
 * @param month2 Second reference month
 */
export const isLessThan = (month1: ReferenceMonth, month2: ReferenceMonth) => {
  if (month1?.year === month2?.year) {
    return month1?.month < month2?.month
  } else {
    return month1?.year < month2?.year
  }
}

/**
 * Check if the first reference month is bigger than the second reference month
 *
 * @param month1 First reference month
 * @param month2 Second reference month
 */
export const isGreaterThan = (month1: ReferenceMonth, month2: ReferenceMonth) => {
  if (month1?.year === month2?.year) {
    return month1?.month > month2?.month
  } else {
    return month1?.year > month2?.year
  }
}

/**
 * Check if the first reference month is equal to the second reference month
 *
 * @param month1 First reference month
 * @param month2 Second reference month
 */
export const isSameReferenceMonth = (month1: ReferenceMonth, month2: ReferenceMonth) =>
  month1?.year === month2?.year && month1?.month === month2?.month

/**
 * Check if a reference month is between the minimum and maximum values
 *
 * @param minMonth The minimum value
 * @param maxMonth The maximum value
 */
export const disabledByMonth = (minMonth: ReferenceMonth, maxMonth: ReferenceMonth) => {
  return (month: ReferenceMonth) => {
    return (minMonth && isLessThan(month, minMonth)) || (maxMonth && isGreaterThan(month, maxMonth))
  }
}

/**
 * Transform a range reference month in date range
 *
 * @param range The range to be transformed
 */
export const transformRangeReferenceMonth = (range: ReferenceMonthRange): DateRange => ({
  startDate: range.start ? new Date(range.start.year, range.start.month, 1, 0, 0, 0) : undefined,
  endDate: range.end ? new Date(range.end.year, range.end.month + 1, 0, 0, 0, 0) : undefined,
})
