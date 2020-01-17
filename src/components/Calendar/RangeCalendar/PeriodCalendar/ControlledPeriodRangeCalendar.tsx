import React, { useEffect, useRef, useState } from 'react'
import { CalendarProps } from '../..'
import { PeriodRangeCalendar } from './PeriodRangeCalendar'

export interface ControlledPeriodRangeCalendarProps extends CalendarProps {
  values?: {
    initialDate: Date
    finalDate: Date
  }
  periodBehavior?: boolean
  inputOnFocus?: number
  onChange?(initialDate: Date, finalDate: Date): void
}
export const ControlledPeriodRangeCalendar = ({
  inputOnFocus,
  onChange,
  values,
  onDayClick,
  ...rest
}: ControlledPeriodRangeCalendarProps) => {
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
      setInitialDate(values.initialDate)
      setFinalDate(values.finalDate)
    }
  }, [values])

  const controllDayClick = (day: Date) => {
    onDayClick(day)
    if (inputOnFocus === 1) {
      setInitialDate(day)
    }
    if (inputOnFocus === 2) {
      setFinalDate(day)
    }
    if (day < initialDate) {
      setInitialDate(day)
      setFinalDate(finalDate)
    }
    return
  }

  return <PeriodRangeCalendar {...rest} initialDate={initialDate} finalDate={finalDate} onDayClick={controllDayClick} />
}
