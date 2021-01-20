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
  onlyWeeks,
  ...rest
}: GenericRangeCalendarProps) {
  const [hoverDate, setHoverDate] = useState<Date>(undefined)
  const [hoverWeek, setHoverWeek] = useState<Date[]>(undefined)

  const inRange = (day: Date): boolean => {
    return isInTheRange(day)
  }

  const inHoverRange = (day: Date): boolean => {
    return isInTheHoverRange(day, hoverDate)
  }

  const inWeekRange = (week: Date[]): boolean => {
    return isInTheRange(week[0]) && isInTheRange(week[6])
  }

  const inHoverWeekRange = (week: Date[]): boolean => {
    return hoverWeek && isInTheHoverRange(week[0], hoverWeek[0]) && isInTheHoverRange(week[6], hoverWeek[6])
  }

  const onMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    if (onlyWeeks && onlyWeeks === true) {
      setHoverWeek(undefined)
    } else {
      setHoverDate(undefined)
    }
  }

  if (onlyWeeks && onlyWeeks === true) {
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
        onlyWeeks={true}
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
        onlyWeeks={false}
      />
    )
  }
}

export const hoverStyle = (theme: Theme) => ({ background: theme.pallete.surface.background })
