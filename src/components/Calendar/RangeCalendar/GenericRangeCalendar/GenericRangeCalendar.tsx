import * as React from 'react'
import { MouseEvent, useState } from 'react'

import { Theme } from '../../../../styles'
import { Week } from '../../../DateRangePicker/DateRangePicker'
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
  onlyWeeks,
  ...rest
}: GenericRangeCalendarProps) {
  const [hoverDate, setHoverDate] = useState<Date>(undefined)

  const [hoverWeek, setHoverWeek] = useState<Week>({ start: undefined, end: undefined })

  const inRange = (day: Date): boolean => {
    return isInTheRange(day)
  }

  const inHoverRange = (day: Date): boolean => {
    return isInTheHoverRange(day, hoverDate)
  }

  const inWeekRange = (week: Week): boolean => {
    return isInTheRange(week.start) && isInTheRange(week.end)
  }

  const inHoverWeekRange = (week: Week): boolean => {
    return hoverWeek && isInTheHoverRange(week.start, hoverWeek.start) && isInTheHoverRange(week.end, hoverWeek.end)
  }

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    if (onlyWeeks) {
      setHoverWeek({ start: undefined, end: undefined })
    } else {
      setHoverDate(undefined)
    }
  }

  if (onlyWeeks) {
    return (
      <Calendar
        {...rest}
        onMouseLeave={onMouseLeave}
        onWeekHover={setHoverWeek}
        modifiers={{
          ...rest.modifiers,
          inHoverWeekRange: inHoverWeekRange,
          inWeekRange: inWeekRange,
        }}
        modifierStyles={{
          ...rest.modifierStyles,
          inHoverWeekRange: hoverStyle,
          inWeekRange: defaultModifierStyles.selected,
        }}
        onlyWeeks={onlyWeeks}
      />
    )
  } else {
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
          inTheHoverRange: hoverStyle,
          inTheRange: defaultModifierStyles.selected,
        }}
        onlyWeeks={onlyWeeks}
      />
    )
  }
}

export const hoverStyle = (theme: Theme) => ({ background: theme.pallete.surface.background })
