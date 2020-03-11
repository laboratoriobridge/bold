import { PopperOptions } from 'popper.js'
import React, { useEffect, useRef, useState } from 'react'

import { usePopper } from '../../hooks/usePopper'
import { Theme, useStyles } from '../../styles'

import { disableByRange } from '../DateField/DateField'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Icons } from '../Icon'

import {
  ControlledDateRangeCalendarProps,
  ControlledDateRangeCalendar,
} from '../Calendar/RangeCalendar/DateRangeCalendar/ControlledDateRangeCalendar'
import { DateRange } from './BaseDateRangeInput'
import { DateRangeInput, DateRangeInputProps } from './DateRangeInput'

export interface DateRangeFieldProps extends DateRangeInputProps {
  minDate?: Date
  maxDate?: Date
  icon?: Icons
  calendarProps?: Partial<ControlledDateRangeCalendarProps>
  popperProps?: PopperOptions
}

export function DateRangeField(props: DateRangeFieldProps) {
  const { onChange, popperProps, minDate, maxDate, value, icon, calendarProps, ...rest } = props

  const [dateRange, setDateRange] = useState(value ? value : ({} as DateRange))
  const [dateRangeInputFocus, setDateRangeInputFocus] = useState(1)
  const [visibleDate, setVisibleDate] = useState<Date>(new Date())
  const [open, setOpen] = useState(false)

  const { classes, css } = useStyles(createStyles)

  const finalInputRef = useRef<HTMLInputElement>()
  const anchorRef = useRef<HTMLDivElement>()
  const popupRef = useRef<HTMLDivElement>()

  useEffect(() => {
    onChange && onChange(dateRange)
  }, [onChange, dateRange])

  useEffect(() => {
    const point = (): Date => {
      if (dateRangeInputFocus === 1 && dateRange?.startDate) {
        return dateRange.startDate
      } else if (dateRangeInputFocus === 2 && dateRange?.endDate) {
        return dateRange.endDate
      } else if (dateRange?.startDate && !dateRange?.endDate) {
        return dateRange.startDate
      } else if (!dateRange?.startDate && dateRange?.endDate) {
        return dateRange.endDate
      } else {
        return new Date()
      }
    }

    setVisibleDate(point)
  }, [dateRange, dateRangeInputFocus])

  const { style: popperStyle, placement } = usePopper(
    {
      anchorRef,
      popperRef: popupRef,
      placement: 'bottom',
      ...popperProps,
    },
    [open]
  )

  const handleInputFocus = (inputOnFocus: number) => setDateRangeInputFocus(inputOnFocus)

  const handleOnDayClick = (dayClicked: Date) => finalInputRef.current.focus()

  const handleFocusIn = () => setOpen(true)

  const handleFocusOut = () => setOpen(false)

  const handleDateRangeChanged = (rangeDateFromBaseInput: DateRange) => {
    setDateRange(rangeDateFromBaseInput)
  }

  const handleCalendarDateRangeChanged = (dateRange: DateRange) => {
    const { startDate, endDate } = dateRange
    startDate && endDate
      ? startDate <= endDate
        ? setDateRange({ startDate: startDate, endDate: endDate } as DateRange)
        : setDateRange({ startDate: endDate, endDate: startDate } as DateRange)
      : setDateRange({ startDate: startDate, endDate: endDate } as DateRange)
  }

  const handleOnVisibleDateChange = (vDate: Date): void => setVisibleDate(vDate)

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <DateRangeInput
        {...rest}
        divRef={anchorRef}
        minDate={minDate}
        maxDate={maxDate}
        icon={icon}
        value={dateRange}
        onChange={handleDateRangeChanged}
        finalInputRef={finalInputRef}
        onInputOnFocus={handleInputFocus}
      />

      {open && (
        <div ref={popupRef} className={css(classes.root, popperStyle)} data-placement={placement} tabIndex={-1}>
          <ControlledDateRangeCalendar
            value={dateRange}
            onChange={handleCalendarDateRangeChanged}
            onDayClick={handleOnDayClick}
            inputOnFocus={dateRangeInputFocus}
            visibleDate={visibleDate}
            onVisibleDateChange={handleOnVisibleDateChange}
            minDate={minDate}
            maxDate={maxDate}
            modifiers={{
              disabled: disableByRange(minDate, maxDate),
            }}
            {...calendarProps}
          />
        </div>
      )}
    </FocusManagerContainer>
  )
}

export const createStyles = (theme: Theme) => ({
  root: {
    zIndex: theme.zIndex.popper,
    background: theme.pallete.surface.main,
    boxShadow: theme.shadows.outer[40],
    borderRadius: theme.radius.popper,
    padding: '0.5rem .25rem .25rem .25rem',
    outline: 'none',
  },
})
