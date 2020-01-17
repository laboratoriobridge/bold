import * as React from 'react'
import { Theme } from '../../../../styles'
import { CalendarProps } from '../../Calendar'
import { GenericRangeCalendar } from '../GenericRangeCalendar/GenericRangeCalendar'
import { isSameDay } from '../../util'

export interface PeriodRangeCalendarProps extends CalendarProps {
  initialDate: Date
  finalDate: Date
}

export const PeriodRangeCalendar = ({ initialDate, finalDate, ...rest }: PeriodRangeCalendarProps) => {
  if (initialDate && finalDate && finalDate < initialDate) {
    if (process.env.NODE_ENV !== 'production') {
      // tslint:disable-next-line no-console
      console.warn(`RangeCalendar: finalDate should not be before initialDate`)
    }
    finalDate = undefined
    initialDate = undefined
  }

  const isInTheRange = (day: Date): boolean => {
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
    if (initialDate <= day && day <= finalDate) {
      return true
    }
    return false
  }

  const isInHoverRange = (day: Date, hoverDate: Date) =>
    (!initialDate && hoverDate && isSameDay(day, hoverDate)) ||
    (!initialDate && finalDate && hoverDate && isSameDay(day, hoverDate)) ||
    (hoverDate <= day && day < initialDate) ||
    (hoverDate >= day && day > finalDate) ||
    (initialDate < day && day <= hoverDate) ||
    (finalDate > day && day >= hoverDate)

  return (
    <GenericRangeCalendar
      {...rest}
      initialDate={initialDate}
      finalDate={finalDate}
      isInTheRange={isInTheRange}
      isInTheHoverRange={isInHoverRange}
    />
  )
}
export const dayHoverStyle = (theme: Theme) => ({ background: theme.pallete.surface.background })
