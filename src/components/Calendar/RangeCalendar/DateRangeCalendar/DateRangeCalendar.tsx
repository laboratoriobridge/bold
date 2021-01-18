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
      // se nao tem uma startDate
      if (value?.endDate) {
        // se tem uma endDate
        return isSameDay(day, value?.endDate) // verifica se o day eh igual ao endDate -> se for, retorna true
      } else {
        // nao tem nenhuma das duas
        return false
      }
    }
    if (!value.endDate) {
      // se nao tem uma endDate
      return isSameDay(day, value?.startDate) // verificar se o day eh igual ao startDate -> se for, retorna true
    }
    if ((value?.startDate <= day && day <= value?.endDate) || (value?.endDate <= day && day <= value?.startDate)) {
      return true
    }
    return false
  }

  const hoverControl = (day: Date, hoverDate: Date) => {
    if (!value?.startDate && !value?.endDate) {
      // se nao tem um range, verifica se day e hoverDate sao as mesmas
      return isSameDay(day, hoverDate)
    } else if (inputOnFocus) {
      // senao, verifica se tem uma input em foco
      if (!value?.startDate && value?.endDate) {
        // se nao tem uma startDate mas tem uma endDate
        if (inputOnFocus === 1) {
          // se eh a primeira input
          return (value?.endDate < day && hoverDate >= day) || (value?.endDate > day && hoverDate <= day)
        } else {
          return isSameDay(day, hoverDate)
        }
      } else if (value?.startDate && !value?.endDate) {
        // se tem a startDate e nao tem a endDate
        if (inputOnFocus === 2) {
          // se eh a segunda input
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

  const isInHoverRange = (day: Date, hoverDate: Date) => {
    return hoverDate && (!minDate || day >= minDate) && (!maxDate || day <= maxDate) && hoverControl(day, hoverDate)
  }

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
