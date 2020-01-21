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
  const handleIsInTheRange = (day: Date): boolean => {
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
    (!initialDate && !finalDate && hoverDate && isSameDay(day, hoverDate)) ||
    (initialDate && !finalDate && hoverDate <= day && day < initialDate) ||
    (finalDate && hoverDate >= day && day > finalDate) ||
    (initialDate && !finalDate && initialDate < day && day <= hoverDate) ||
    (finalDate && !initialDate && finalDate > day && day >= hoverDate)

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
