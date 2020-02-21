import React from 'react'

import { CalendarProps } from '../..'

import { RangeDateCalendar } from './RangeDateCalendar'

export interface ControlledRangeDateCalendarProps extends CalendarProps {
  value?: {
    initialDate: Date
    finalDate: Date
  }
  inputOnFocus: number
  onChange?(initialDate: Date, finalDate: Date): void
  minDate: Date
  maxDate: Date
}

export function ControlledRangeDateCalendar(props: ControlledRangeDateCalendarProps) {
  const { inputOnFocus, onChange, value, onDayClick, ...rest } = props

  const controllDayClick = (day: Date) => {
    onDayClick && onDayClick(day)
    if (inputOnFocus === 1) {
      if (day < value?.initialDate) {
        onChange(day, value?.finalDate)
      } else if (day > value?.finalDate) {
        onChange(day, undefined)
      } else {
        onChange(day, value?.finalDate)
      }
      return
    }
    if (inputOnFocus === 2) {
      if (value?.finalDate && day < value?.initialDate) {
        onChange(day, undefined)
      } else {
        onChange(value?.initialDate, day)
      }
      return
    }
  }

  return (
    <RangeDateCalendar
      {...rest}
      initialDate={value?.initialDate}
      finalDate={value?.finalDate}
      onDayClick={controllDayClick}
      inputOnFocus={inputOnFocus}
    />
  )
}

ControlledRangeDateCalendar.defaultProps = {
  onChange: () => null,
  onDayClick: () => null,
} as Partial<ControlledRangeDateCalendarProps>
