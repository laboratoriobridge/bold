import React from 'react'

import { CalendarProps } from '../..'

import { DateRange } from '../../../DateRangePicker/BaseDateRangeInput'
import { DateRangeCalendar } from './DateRangeCalendar'

export interface ControlledDateRangeCalendarProps extends CalendarProps {
  value?: DateRange
  inputOnFocus: number
  onChange?(dateRange: DateRange): void
  minDate: Date
  maxDate: Date
}

export function ControlledDateRangeCalendar(props: ControlledDateRangeCalendarProps) {
  const { inputOnFocus, onChange, value, onDayClick, ...rest } = props

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

  return <DateRangeCalendar {...rest} value={value} onDayClick={controllDayClick} inputOnFocus={inputOnFocus} />
}

ControlledDateRangeCalendar.defaultProps = {
  onChange: () => null,
  onDayClick: () => null,
} as Partial<ControlledDateRangeCalendarProps>
