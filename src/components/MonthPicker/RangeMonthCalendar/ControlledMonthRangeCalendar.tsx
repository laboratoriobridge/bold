import React from 'react'
import { isBiggerThan, isLessThan, ReferenceMonthRange } from '../../MonthRangePicker/MonthRangePicker'
import { MonthPickerProps, ReferenceMonth } from '../MonthPicker'
import { MonthRangeCalendar } from './MonthRangeCalendar'

export interface ControlledMonthRangeCalendarProps extends MonthPickerProps {
  value?: ReferenceMonthRange
  inputOnFocus: number
  minMonth: ReferenceMonth
  maxMonth: ReferenceMonth
}

export function ControlledMonthRangeCalendar(props: ControlledMonthRangeCalendarProps) {
  const { inputOnFocus, onChange, value, onMonthClick, ...rest } = props

  const controllMonthClick = (month: ReferenceMonth) => {
    onMonthClick && onMonthClick(month)
    if (inputOnFocus === 1) {
      if (isLessThan(month, value?.start)) {
        onChange({ start: month, end: value?.end } as ReferenceMonthRange)
      } else if (isBiggerThan(month, value?.end)) {
        onChange({ start: month, end: undefined } as ReferenceMonthRange)
      } else {
        onChange({ start: month, end: value?.end } as ReferenceMonthRange)
      }
      return
    }
    if (inputOnFocus === 2) {
      if (value?.end && isLessThan(month, value?.start)) {
        onChange({ start: month, end: undefined } as ReferenceMonthRange)
      } else {
        onChange({ start: value?.start, end: month } as ReferenceMonthRange)
      }
    }
  }

  return <MonthRangeCalendar {...rest} value={value} onMonthClick={controllMonthClick} inputOnFocus={inputOnFocus} />
}

ControlledMonthRangeCalendar.defaultProps = {
  onChange: () => null,
} as Partial<ControlledMonthRangeCalendarProps>
