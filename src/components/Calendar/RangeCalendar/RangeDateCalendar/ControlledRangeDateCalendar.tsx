import React, { useEffect, useRef, useState } from 'react'

import { CalendarProps } from '../..'

import { RangeDateCalendar } from './RangeDateCalendar'

export interface ControlledRangeDateCalendarProps extends CalendarProps {
  values?: {
    initialDate: Date
    finalDate: Date
  }
  inputOnFocus?: number
  onChange?(initialDate: Date, finalDate: Date): void
}

export function ControlledRangeDateCalendar(props: ControlledRangeDateCalendarProps) {
  const { inputOnFocus, onChange, values, onDayClick, ...rest } = props
  const [initialDate, setInitialDate] = useState<Date>(values ? values.initialDate : undefined)
  const [finalDate, setFinalDate] = useState<Date>(values ? values.finalDate : undefined)
  const [visibleDate, setVisibleDate] = useState<Date>(inputOnFocus === 2 ? finalDate : initialDate)
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
      if (initialDate && finalDate && initialDate > finalDate) {
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
      if (finalDate && day < initialDate) {
        setInitialDate(day)
      } else {
        setFinalDate(day)
      }
      return
    }
  }

  const handleVisibleDateChange = (day: Date) => {
    setVisibleDate(day)
  }

  return (
    <RangeDateCalendar
      {...rest}
      initialDate={initialDate}
      finalDate={finalDate}
      onDayClick={controllDayClick}
      inputOnFocus={inputOnFocus}
      onVisibleDateChange={handleVisibleDateChange}
      visibleDate={visibleDate}
    />
  )
}
