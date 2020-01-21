import React, { useEffect, useRef, useState } from 'react'

import { CalendarProps } from '../..'

import { RangeDatePickerCalendar } from './RangeDatePickerCalendar'

export interface ControlledRangeDatePickerCalendarProps extends CalendarProps {
  values?: {
    initialDate: Date
    finalDate: Date
  }
  inputOnFocus?: number
  onChange?(initialDate: Date, finalDate: Date): void
}

export const ControlledRangeDatePickerCalendar = (props: ControlledRangeDatePickerCalendarProps) => {
  const { inputOnFocus, onChange, values, onDayClick, ...rest } = props
  const [initialDate, setInitialDate] = useState<Date>(values ? values.initialDate : undefined)
  const [finalDate, setFinalDate] = useState<Date>(values ? values.finalDate : undefined)
  const cmpMounted = useRef(false)

  // Call to onChange prop only after component has been mounted
  useEffect(() => {
    if (cmpMounted.current && onChange) {
      onChange(initialDate, finalDate)
      return
    }
    cmpMounted.current = true
  }, [initialDate, finalDate])

  useEffect(() => {
    if (values) {
      if (values.initialDate > values.finalDate) {
        setInitialDate(values.finalDate)
        setFinalDate(values.initialDate)
      } else {
        setInitialDate(values.initialDate)
        setFinalDate(values.finalDate)
      }
    }
  }, [values])

  const controllDayClick = (day: Date) => {
    onDayClick && onDayClick(day)
    if (inputOnFocus === 1) {
      if (day < initialDate) {
        setInitialDate(day)
        setFinalDate(finalDate)
      } else if (day > finalDate) {
        setInitialDate(day)
        setFinalDate(undefined)
      } else {
        setInitialDate(day)
      }
      return
    }
    if (inputOnFocus === 2) {
      if (day > finalDate) {
        setInitialDate(day)
        setFinalDate(undefined)
      } else if (finalDate && day < initialDate) {
        setInitialDate(day)
      } else {
        setFinalDate(day)
      }
      return
    }
  }

  return (
    <RangeDatePickerCalendar
      {...rest}
      initialDate={initialDate}
      finalDate={finalDate}
      onDayClick={controllDayClick}
      inputOnFocus={inputOnFocus}
    />
  )
}
