import { Options as PopperOptions } from '@popperjs/core'
import React, { useEffect, useRef, useState } from 'react'
import { usePopper } from 'react-popper'
import { DateRange } from '../DateRangePicker'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { ReferenceMonth } from '../MonthPicker'
import { ControlledMonthRangeCalendar } from '../MonthPicker/RangeMonthCalendar/ControlledMonthRangeCalendar'
import { MonthRangePickerInput, MonthRangePickerInputProps } from './MonthRangePickerInput'

export interface MonthRangePickerProps extends Omit<MonthRangePickerInputProps, 'onChange'> {
  popperProps?: PopperOptions
  onFocus?(e: React.FocusEvent<HTMLDivElement>): void
  onBlur?(e: React.FocusEvent<HTMLDivElement>): void
  onChange?(dateRange: DateRange): void
}

export interface ReferenceMonthRange {
  start?: ReferenceMonth
  end?: ReferenceMonth
}

export function MonthRangePicker(props: MonthRangePickerProps) {
  const { minMonth, maxMonth, popperProps, onFocus, onBlur, onChange, value, icon, ...rest } = props

  const [rangeInputFocus, setRangeInputFocus] = useState(1)
  const [visibleMonth, setVisibleMonth] = useState<ReferenceMonth>({ month: undefined, year: undefined })
  const [open, setOpen] = useState(false)

  const finalInputRef = useRef<HTMLInputElement>()
  const [anchorRef, setAnchorRef] = useState<HTMLDivElement>()
  const [popupRef, setPopupRef] = useState<HTMLDivElement>()

  useEffect(() => {
    const month = (): ReferenceMonth => {
      if (rangeInputFocus === 1 && value?.start) {
        return value.start
      } else if (rangeInputFocus === 2 && value?.end) {
        return value.end
      } else if (value?.start && !value?.end) {
        return value.start
      } else if (!value?.start && value?.end) {
        return value.end
      } else {
        const today = new Date()
        return { month: today.getMonth(), year: today.getFullYear() }
      }
    }

    setVisibleMonth(month)
  }, [rangeInputFocus, value])

  usePopper(anchorRef, popupRef, { ...popperProps, placement: 'bottom' })

  const handleInputFocus = (inputOnFocus: number) => setRangeInputFocus(inputOnFocus)

  const handleFocusIn = (event: React.FocusEvent<HTMLDivElement>) => {
    onFocus && onFocus(event)
    setOpen(true)
  }

  const handleFocusOut = (event: React.FocusEvent<HTMLDivElement>) => {
    onBlur && onBlur(event)
    setOpen(false)
  }

  const handleMonthRangeChanged = (range: ReferenceMonthRange) => {
    const { start, end } = range
    const startDate = new Date(range?.start?.year, range?.start?.month, 1, 0, 0, 0)
    const endDate = new Date(range?.end?.year, range?.end?.month + 1, 0, 0, 0, 0)

    start && end
      ? onChange({ startDate: startDate, endDate: endDate })
      : !end && onChange({ startDate: startDate, endDate: undefined })
  }

  const handleOnVisibleRefMonthChange = (month: ReferenceMonth) => setVisibleMonth(month)

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <MonthRangePickerInput
        value={value}
        onChange={handleMonthRangeChanged}
        divRef={setAnchorRef}
        minMonth={minMonth}
        maxMonth={maxMonth}
        icon={icon}
        finalInputRef={finalInputRef}
        onInputOnFocus={handleInputFocus}
        {...rest}
      />

      {open && (
        <div ref={setPopupRef} tabIndex={-1}>
          <ControlledMonthRangeCalendar
            value={value}
            onChange={handleMonthRangeChanged}
            inputOnFocus={rangeInputFocus}
            visibleMonth={visibleMonth}
            onVisibleMonthChange={handleOnVisibleRefMonthChange}
            minMonth={minMonth}
            maxMonth={maxMonth}
            modifiers={{
              disabled: disabledByMonthRange(minMonth, maxMonth),
            }}
            {...rest}
          />
        </div>
      )}
    </FocusManagerContainer>
  )
}

export const isBiggerOrEqualThan = (month: ReferenceMonth, min: ReferenceMonth) => {
  return isBiggerThan(month, min) || isSameReferenceMonth(month, min)
}

export const isLessOrEqualThan = (month: ReferenceMonth, max: ReferenceMonth) => {
  return isLessThan(month, max) || isSameReferenceMonth(month, max)
}

export const isLessThan = (month: ReferenceMonth, max: ReferenceMonth) => {
  if (month.year === max.year) {
    return month.month < max.month
  } else {
    return month.year < max.year
  }
}

export const isBiggerThan = (month: ReferenceMonth, max: ReferenceMonth) => {
  if (month.year === max.year) {
    return month.month > max.month
  } else {
    return month.year > max.year
  }
}

export const isSameReferenceMonth = (refMonth1: ReferenceMonth, refMonth2: ReferenceMonth) =>
  refMonth1.year === refMonth2.year && refMonth1.month === refMonth2.month

export const disabledByMonthRange = (minMonth: ReferenceMonth, maxMonth: ReferenceMonth) => {
  return (month: ReferenceMonth) => {
    return (minMonth && isLessThan(month, minMonth)) || (maxMonth && isBiggerThan(month, maxMonth))
  }
}
