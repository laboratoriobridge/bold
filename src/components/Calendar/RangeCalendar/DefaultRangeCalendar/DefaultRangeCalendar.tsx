import * as React from 'react'
import { Theme } from '../../../../styles'
import { CalendarProps } from '../../Calendar'
import { isSameDay } from '../../util'
import { GenericRangeCalendar } from '../GenericRangeCalendar/GenericRangeCalendar'

export interface DefaultRangeCalendarProps extends CalendarProps {
  initialDate: Date
  finalDate: Date
}

export const DefaultRangeCalendar = ({ initialDate, finalDate, ...rest }: DefaultRangeCalendarProps) => {
  const handleIsInTheRange = (day: Date): boolean => {
    if (!initialDate) {
      return false
    }
    if (!finalDate) {
      return isSameDay(day, initialDate)
    }
    if (initialDate <= day && day <= finalDate) {
      return true
    }
    return false
  }

  const handleIsInTheHoverRange = (day: Date, hoverFinalDate: Date) =>
    (!initialDate && hoverFinalDate && isSameDay(day, hoverFinalDate)) ||
    (hoverFinalDate <= day && day < initialDate) ||
    (initialDate < day && day <= hoverFinalDate)

  return (
    <GenericRangeCalendar
      {...rest}
      initialDate={initialDate}
      finalDate={finalDate}
      isInTheRange={handleIsInTheRange}
      isInTheHoverRange={handleIsInTheHoverRange}
    />
  )
}
export const dayHoverStyle = (theme: Theme) => ({ background: theme.pallete.surface.background })
