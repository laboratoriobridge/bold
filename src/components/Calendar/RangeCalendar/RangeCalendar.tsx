import * as React from 'react'
import { MouseEvent, useState } from 'react'

import { Theme } from '../../../styles'
import { Calendar, CalendarProps, defaultModifierStyles } from '../Calendar'
import { isSameDay } from '../util'

export interface RangeCalendarProps extends CalendarProps {
  initialDate: Date
  finalDate: Date
}

export const RangeCalendar = ({ initialDate, finalDate, ...rest }: RangeCalendarProps) => {
  if (initialDate && finalDate && finalDate < initialDate) {
    if (process.env.NODE_ENV !== 'production') {
      // tslint:disable-next-line no-console
      console.warn(`RangeCalendar: finalDate should not be before initialDate`)
    }
    finalDate = undefined
    initialDate = undefined
  }

  const [hoverFinalDate, setHoverFinalDate] = useState<Date>(undefined)

  const isInTheRange = (day: Date): boolean => {
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

  const isInTheHoverRange = (day: Date) =>
    (!initialDate && hoverFinalDate && isSameDay(day, hoverFinalDate)) ||
    ((hoverFinalDate <= day && day < initialDate) || (initialDate < day && day <= hoverFinalDate))

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => setHoverFinalDate(undefined)
  return (
    <Calendar
      {...rest}
      onMouseLeave={onMouseLeave}
      onDayHover={setHoverFinalDate}
      isDaySelected={isInTheRange}
      modifiers={{
        ...rest.modifiers,
        inTheHoverRange: isInTheHoverRange,
        inTheRange: isInTheRange,
      }}
      modifierStyles={{
        ...rest.modifierStyles,
        inTheHoverRange: dayHoverStyle,
        inTheRange: defaultModifierStyles.selected,
      }}
    />
  )
}
export const dayHoverStyle = (theme: Theme) => ({ background: theme.pallete.surface.background })
