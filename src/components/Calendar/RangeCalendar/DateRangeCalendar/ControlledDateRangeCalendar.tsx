import React from 'react'

import { CalendarProps } from '../..'

import { DateRange } from '../../../DateRangePicker/BaseDateRangeInput'
import { Week } from '../../../DateRangePicker/DateRangePicker'
import { DateRangeCalendar } from './DateRangeCalendar'

export interface ControlledDateRangeCalendarProps extends CalendarProps {
  value?: DateRange
  inputOnFocus: number
  onChange?(dateRange: DateRange): void
  minDate: Date
  maxDate: Date
}

export function ControlledDateRangeCalendar(props: ControlledDateRangeCalendarProps) {
  const { inputOnFocus, onChange, value, onDayClick, onlyWeeks, ...rest } = props

  const controllDayClick = (day: Date) => {
    onDayClick && onDayClick(day)
    if (inputOnFocus === 1) {
      if (day < value?.startDate) {
        onChange({ startDate: day, endDate: value?.endDate } as DateRange)
      } else if (day > value?.endDate) {
        onChange({ startDate: day, endDate: undefined } as DateRange)
      } else {
        onChange({ startDate: day, endDate: value?.endDate } as DateRange)
      }
      return
    }
    if (inputOnFocus === 2) {
      if (value?.endDate && day < value?.startDate) {
        onChange({ startDate: day, endDate: undefined } as DateRange)
      } else {
        onChange({ startDate: value?.startDate, endDate: day } as DateRange)
      }
      return
    }
  }

  const controllWeekClick = (week: Week) => {
    const firstDayWeek = week.start
    const lastDayWeek = week.end

    onDayClick && onDayClick(firstDayWeek)

    var startDate = value?.startDate
    var endDate = value?.endDate

    if (inputOnFocus === 1) {
      if (firstDayWeek < value?.startDate) {
        startDate = firstDayWeek
      } else if (firstDayWeek > value?.endDate) {
        startDate = firstDayWeek
        endDate = lastDayWeek
      } else {
        startDate = firstDayWeek
      }
      onChange({ startDate: startDate, endDate: endDate } as DateRange)
      return
    }
    if (inputOnFocus === 2) {
      if (value?.endDate && firstDayWeek < value?.startDate) {
        startDate = firstDayWeek
        endDate = lastDayWeek
      } else {
        endDate = lastDayWeek
      }
      onChange({ startDate: startDate, endDate: endDate } as DateRange)
      return
    }
  }

  return (
    <DateRangeCalendar
      {...rest}
      value={value}
      onWeekClick={controllWeekClick}
      onDayClick={controllDayClick}
      inputOnFocus={inputOnFocus}
      onlyWeeks={onlyWeeks}
    />
  )
}

ControlledDateRangeCalendar.defaultProps = {
  onChange: () => null,
  onDayClick: () => null,
} as Partial<ControlledDateRangeCalendarProps>
