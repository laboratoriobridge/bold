import * as React from 'react'
import { MouseEvent, useState } from 'react'

import { Theme } from '../../../../styles'
import { Calendar, CalendarProps, defaultModifierStyles } from '../../Calendar'

export interface GenericRangeCalendarProps extends CalendarProps {
  startDate: Date
  endDate: Date
  isInTheRange(day: Date): boolean
  isInTheHoverRange(day: Date, hoverDate: Date): boolean
}

export function GenericRangeCalendar({
  isInTheRange,
  isInTheHoverRange,
  startDate,
  endDate,
  ...rest
}: GenericRangeCalendarProps) {
  const [hoverDate, setHoverDate] = useState<Date>(undefined)

  const inRange = (day: Date): boolean => {
    return isInTheRange(day)
  }

  const inHoverRange = (day: Date): boolean => {
    return isInTheHoverRange(day, hoverDate)
  }

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => setHoverDate(undefined)
  return (
    <Calendar
      {...rest}
      onMouseLeave={onMouseLeave}
      onDayHover={setHoverDate}
      isDaySelected={isInTheRange}
      modifiers={{
        ...rest.modifiers,
        inTheHoverRange: inHoverRange,
        inTheRange: inRange,
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
