import React from 'react'
import { isBiggerOrEqualThan, isLessOrEqualThan, ReferenceMonthRange } from '../../MonthRangePicker/MonthRangePicker'
import { MonthPickerProps, ReferenceMonth } from '../MonthPicker'
import { MonthRangeCalendar } from './MonthRangeCalendar'

export interface ControlledMonthRangeCalendarProps extends MonthPickerProps {
  value?: ReferenceMonthRange
  inputOnFocus: number
  minMonth: ReferenceMonth
  maxMonth: ReferenceMonth
}

export function ControlledMonthRangeCalendar(props: ControlledMonthRangeCalendarProps) {
  const { inputOnFocus, onChange, value, ...rest } = props

  const controllMonthClick = (refMonth: ReferenceMonth) => {
    if (inputOnFocus === 1) {
      if (!isBiggerOrEqualThan(refMonth, value?.start)) {
        onChange({ start: refMonth, end: value?.end } as ReferenceMonthRange)
      } else if (!isLessOrEqualThan(refMonth, value?.end)) {
        onChange({ start: refMonth, end: undefined } as ReferenceMonthRange)
      } else {
        onChange({ start: refMonth, end: value?.end } as ReferenceMonthRange)
      }
      return
    }
    if (inputOnFocus === 2) {
      if (value?.end && !isBiggerOrEqualThan(refMonth, value?.start)) {
        onChange({ start: refMonth, end: undefined } as ReferenceMonthRange)
      } else {
        onChange({ start: value?.start, end: refMonth } as ReferenceMonthRange)
      }
    }
  }

  return <MonthRangeCalendar {...rest} value={value} onMonthClick={controllMonthClick} inputOnFocus={inputOnFocus} />
}

ControlledMonthRangeCalendar.defaultProps = {
  onChange: () => null,
} as Partial<ControlledMonthRangeCalendarProps>
