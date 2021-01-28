import React from 'react'
import {
  isBiggerOrEqualThan,
  isBiggerThan,
  isLessOrEqualThan,
  isLessThan,
  isSameReferenceMonth,
  ReferenceMonthRange,
} from '../../MonthRangePicker/MonthRangePicker'
import { MonthPickerProps, ReferenceMonth } from '../MonthPicker'
import { GenericMonthRangeCalendar } from './GenericMonthRangeCalendar'

export interface MonthRangeCalendarProps extends MonthPickerProps {
  value: ReferenceMonthRange
  minRefMonth?: ReferenceMonth
  maxRefMonth?: ReferenceMonth
  inputOnFocus: number
}

export function MonthRangeCalendar(props: MonthRangeCalendarProps) {
  const { value, inputOnFocus, minRefMonth, maxRefMonth, ...rest } = props

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
            (isLessThan(value.end, month) && isBiggerOrEqualThan(hoverMonth, month)) ||
            (isBiggerThan(value.end, month) && isLessOrEqualThan(hoverMonth, month))
          )
        } else {
          return isSameReferenceMonth(month, hoverMonth)
        }
      } else if (value?.start && !value?.end) {
        if (inputOnFocus === 2) {
          return (
            (isLessThan(value.start, month) && isBiggerOrEqualThan(hoverMonth, month)) ||
            (isBiggerThan(value.start, month) && isLessOrEqualThan(hoverMonth, month))
          )
        } else {
          return isSameReferenceMonth(month, hoverMonth)
        }
      } else {
        if (inputOnFocus === 1) {
          return (
            (isBiggerThan(value.start, month) && isLessOrEqualThan(hoverMonth, month)) ||
            (isLessThan(value.end, month) && isSameReferenceMonth(hoverMonth, month))
          )
        } else {
          return (
            (isLessThan(value.end, month) && isBiggerOrEqualThan(hoverMonth, month)) ||
            (isBiggerThan(value.end, month) && isSameReferenceMonth(hoverMonth, month))
          )
        }
      }
    }
  }

  const isInHoverRange = (month: ReferenceMonth, hoverMonth: ReferenceMonth) =>
    hoverMonth &&
    (!minRefMonth || isBiggerOrEqualThan(month, minRefMonth)) &&
    (!maxRefMonth || isLessOrEqualThan(month, maxRefMonth)) &&
    hoverControl(month, hoverMonth)

  return (
    <GenericMonthRangeCalendar
      start={value?.start}
      end={value?.end}
      isInTheRange={handleIsInTheRange}
      isInTheHoverRange={isInHoverRange}
      {...rest}
    />
  )
}
