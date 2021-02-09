import React from 'react'
import { ReferenceMonthRange } from '../MonthRangePicker'
import { isGreaterOrEqualThan, isGreaterThan, isLessOrEqualThan, isLessThan, isSameReferenceMonth } from '../util'
import { MonthPickerProps, ReferenceMonth } from '../../MonthPicker/MonthPicker'
import { GenericMonthRangeCalendar } from './GenericMonthRangeCalendar'

export interface MonthRangeCalendarProps extends MonthPickerProps {
  value: ReferenceMonthRange
  minMonth?: ReferenceMonth
  maxMonth?: ReferenceMonth
  inputOnFocus: number
}

export function MonthRangeCalendar(props: MonthRangeCalendarProps) {
  const { value, inputOnFocus, minMonth, maxMonth, ...rest } = props

  const handleIsInTheRange = (month: ReferenceMonth): boolean => {
    if (!value?.start) {
      if (value?.end) {
        return isSameReferenceMonth(month, value.end)
      } else {
        return false
      }
    }

    if (!value.end) {
      return isSameReferenceMonth(month, value.start)
    }
    if (
      (isLessOrEqualThan(value.start, month) && isLessOrEqualThan(month, value.end)) ||
      (isLessOrEqualThan(value.end, month) && isLessOrEqualThan(month, value.start))
    ) {
      return true
    }
    return false
  }

  const hoverControl = (month: ReferenceMonth, hoverMonth: ReferenceMonth) => {
    if (!value.start && !value.end) {
      return isSameReferenceMonth(month, hoverMonth)
    } else if (inputOnFocus) {
      if (!value?.start && value?.end) {
        if (inputOnFocus === 1) {
          return (
            (isLessThan(value.end, month) && isGreaterOrEqualThan(hoverMonth, month)) ||
            (isGreaterThan(value.end, month) && isLessOrEqualThan(hoverMonth, month))
          )
        } else {
          return isSameReferenceMonth(month, hoverMonth)
        }
      } else if (value?.start && !value?.end) {
        if (inputOnFocus === 2) {
          return (
            (isLessThan(value.start, month) && isGreaterOrEqualThan(hoverMonth, month)) ||
            (isGreaterThan(value.start, month) && isLessOrEqualThan(hoverMonth, month))
          )
        } else {
          return isSameReferenceMonth(month, hoverMonth)
        }
      } else {
        if (inputOnFocus === 1) {
          return (
            (isGreaterThan(value.start, month) && isLessOrEqualThan(hoverMonth, month)) ||
            (isLessThan(value.end, month) && isSameReferenceMonth(hoverMonth, month))
          )
        } else {
          return (
            (isLessThan(value.end, month) && isGreaterOrEqualThan(hoverMonth, month)) ||
            (isGreaterThan(value.end, month) && isSameReferenceMonth(hoverMonth, month))
          )
        }
      }
    }
  }

  const isInHoverRange = (month: ReferenceMonth, hoverMonth: ReferenceMonth) =>
    hoverMonth &&
    (!minMonth || isGreaterOrEqualThan(month, minMonth)) &&
    (!maxMonth || isLessOrEqualThan(month, maxMonth)) &&
    hoverControl(month, hoverMonth)

  return <GenericMonthRangeCalendar isInTheRange={handleIsInTheRange} isInTheHoverRange={isInHoverRange} {...rest} />
}
