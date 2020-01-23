import * as React from 'react'

import { Theme } from '../../../../styles'
import { CalendarProps } from '../../Calendar'
import { isSameDay } from '../../util'
import { GenericRangeCalendar } from '../GenericRangeCalendar/GenericRangeCalendar'

export interface RangeDatePickerCalendarProps extends CalendarProps {
  initialDate: Date
  finalDate: Date
  inputOnFocus?: number
}

export const RangeDatePickerCalendar = ({
  initialDate,
  finalDate,
  inputOnFocus,
  ...rest
}: RangeDatePickerCalendarProps) => {
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

  const isInHoverRange = (day: Date, hoverDate: Date) =>
    (!initialDate && !finalDate && hoverDate && isSameDay(day, hoverDate)) ||
    (!initialDate &&
      finalDate &&
      hoverDate &&
      ((inputOnFocus &&
        inputOnFocus === 1 &&
        hoverDate &&
        ((finalDate < day && hoverDate >= day) || (finalDate > day && hoverDate <= day))) ||
        (inputOnFocus === 2 && hoverDate && isSameDay(day, hoverDate)))) ||
    (initialDate &&
      !finalDate &&
      hoverDate &&
      inputOnFocus === 2 &&
      ((initialDate < day && hoverDate >= day) || (initialDate > day && hoverDate <= day))) ||
    (initialDate &&
      finalDate &&
      hoverDate &&
      ((inputOnFocus === 1 && initialDate > day && hoverDate <= day) ||
        isSameDay(day, hoverDate) ||
        (inputOnFocus === 2 && ((finalDate < day && hoverDate >= day) || (finalDate > day && hoverDate <= day)))))

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
