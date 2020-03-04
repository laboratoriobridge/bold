import * as React from 'react'

import { Theme } from '../../../../styles'
import { CalendarProps } from '../../Calendar'
import { isSameDay } from '../../util'
import { GenericRangeCalendar } from '../GenericRangeCalendar/GenericRangeCalendar'

export interface RangeDateCalendarProps extends CalendarProps {
  initialDate: Date
  finalDate: Date
  minDate?: Date
  maxDate?: Date
  inputOnFocus: number
}

export function RangeDateCalendar({
  initialDate,
  finalDate,
  inputOnFocus,
  maxDate,
  minDate,
  ...rest
}: RangeDateCalendarProps) {
  const handleIsInTheRange = (day: Date): boolean => {
    initialDate?.setHours(0, 0, 0, 0)
    finalDate?.setHours(0, 0, 0, 0)
    day?.setHours(0, 0, 0, 0)

    if (!initialDate) {
      if (finalDate) {
        return isSameDay(day, finalDate)
      } else {
        return false
      }
    }
    if (!finalDate) {
      return isSameDay(day, initialDate)
    }
    if ((initialDate <= day && day <= finalDate) || (finalDate <= day && day <= initialDate)) {
      return true
    }
    return false
  }

  const hoverControl = (day: Date, hoverDate: Date) => {
    if (!initialDate && !finalDate) {
      return isSameDay(day, hoverDate)
    } else if (inputOnFocus) {
      if (!initialDate && finalDate) {
        if (inputOnFocus === 1) {
          return (finalDate < day && hoverDate >= day) || (finalDate > day && hoverDate <= day)
        } else {
          return isSameDay(day, hoverDate)
        }
      } else if (initialDate && !finalDate) {
        if (inputOnFocus === 2) {
          return (initialDate < day && hoverDate >= day) || (initialDate > day && hoverDate <= day)
        } else {
          return isSameDay(day, hoverDate)
        }
      } else {
        if (inputOnFocus === 1) {
          return (initialDate > day && hoverDate <= day) || (finalDate < day && isSameDay(day, hoverDate))
        } else if (inputOnFocus === 2) {
          return (finalDate < day && hoverDate >= day) || (finalDate > day && isSameDay(day, hoverDate))
        }
      }
    }
  }

  const isInHoverRange = (day: Date, hoverDate: Date) =>
    hoverDate && (!minDate || day >= minDate) && (!maxDate || day <= maxDate) && hoverControl(day, hoverDate)

  return (
    <GenericRangeCalendar
      {...rest}
      initialDate={initialDate}
      finalDate={finalDate}
      isInTheRange={handleIsInTheRange}
      isInTheHoverRange={isInHoverRange}
    />
  )
}

export const dayHoverStyle = (theme: Theme) => ({ background: theme.pallete.surface.background })
