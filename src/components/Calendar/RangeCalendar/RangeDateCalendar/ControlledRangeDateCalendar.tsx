import React from 'react'

import { CalendarProps } from '../..'

import { RangeDateCalendar } from './RangeDateCalendar'

export interface ControlledRangeDateCalendarProps extends CalendarProps {
  value?: {
    initialDate: Date
    finalDate: Date
  }
  inputOnFocus?: number
  onChange?(initialDate: Date, finalDate: Date): void
}

export function ControlledRangeDateCalendar(props: ControlledRangeDateCalendarProps) {
  const { inputOnFocus, onChange, value, onDayClick, ...rest } = props
  const { initialDate, finalDate } = value

  const controllDayClick = (day: Date) => {
    onDayClick && onDayClick(day)
    if (inputOnFocus === 1) {
      if (day < initialDate) {
        onChange && onChange(day, finalDate)
      } else if (day > finalDate) {
        onChange && onChange(day, undefined)
      } else {
        onChange && onChange(day, finalDate)
      }
      return
    }
    if (inputOnFocus === 2) {
      if (finalDate && day < initialDate) {
        onChange && onChange(day, undefined)
      } else {
        onChange && onChange(initialDate, day)
      }
      return
    }
  }

  return (
    <RangeDateCalendar
      {...rest}
      initialDate={initialDate}
      finalDate={finalDate}
      onDayClick={controllDayClick}
      inputOnFocus={inputOnFocus}
    />
  )
}
