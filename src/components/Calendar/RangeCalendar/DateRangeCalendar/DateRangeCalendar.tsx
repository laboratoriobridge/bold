import * as React from 'react'

import { Theme } from '../../../../styles'
import { CalendarProps } from '../../Calendar'
import { isSameDay } from '../../util'
import { GenericRangeCalendar } from '../GenericRangeCalendar/GenericRangeCalendar'
import { DateRange } from '../../../DateRangePicker'

export interface DateRangeCalendarProps extends CalendarProps {
  value: DateRange
  minDate?: Date
  maxDate?: Date
  inputOnFocus: number
}

export function DateRangeCalendar({ value, inputOnFocus, maxDate, minDate, ...rest }: DateRangeCalendarProps) {
  const handleIsInTheRange = (day: Date): boolean => {
    value?.startDate?.setHours(0, 0, 0, 0)
    value?.endDate?.setHours(0, 0, 0, 0)
    day?.setHours(0, 0, 0, 0)

    if (!value?.startDate) {
      if (value?.endDate) {
        return isSameDay(day, value?.endDate)
      } else {
        return false
      }
    }
    if (!value.endDate) {
      return isSameDay(day, value?.startDate)
    }
    if ((value?.startDate <= day && day <= value?.endDate) || (value?.endDate <= day && day <= value?.startDate)) {
      return true
    }
    return false
  }

  const hoverControl = (day: Date, hoverDate: Date) => {
    if (!value?.startDate && !value?.endDate) {
      return isSameDay(day, hoverDate)
    } else if (inputOnFocus) {
      if (!value?.startDate && value?.endDate) {
        if (inputOnFocus === 1) {
          return (value?.endDate < day && hoverDate >= day) || (value?.endDate > day && hoverDate <= day)
        } else {
          return isSameDay(day, hoverDate)
        }
      } else if (value?.startDate && !value?.endDate) {
        if (inputOnFocus === 2) {
          return (value?.startDate < day && hoverDate >= day) || (value?.startDate > day && hoverDate <= day)
        } else {
          return isSameDay(day, hoverDate)
        }
      } else {
        if (inputOnFocus === 1) {
          return (value?.startDate > day && hoverDate <= day) || (value?.endDate < day && isSameDay(day, hoverDate))
        } else if (inputOnFocus === 2) {
          return (value?.endDate < day && hoverDate >= day) || (value?.endDate > day && isSameDay(day, hoverDate))
        }
      }
    }
  }

  const isInHoverRange = (day: Date, hoverDate: Date) =>
    hoverDate && (!minDate || day >= minDate) && (!maxDate || day <= maxDate) && hoverControl(day, hoverDate)

  return (
    <GenericRangeCalendar
      {...rest}
      startDate={value?.startDate}
      endDate={value?.endDate}
      isInTheRange={handleIsInTheRange}
      isInTheHoverRange={isInHoverRange}
    />
  )
}

export const dayHoverStyle = (theme: Theme) => ({ background: theme.pallete.surface.background })
