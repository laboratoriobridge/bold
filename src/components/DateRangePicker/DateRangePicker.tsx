import { Options as PopperOptions } from '@popperjs/core'
import React, { useEffect, useRef, useState } from 'react'

import { usePopper } from 'react-popper'
import { Theme, useStyles } from '../../styles'

import { disableByRange } from '../DateField/DateField'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { IconImage } from '../Icon'

import {
  ControlledDateRangeCalendarProps,
  ControlledDateRangeCalendar,
} from '../Calendar/RangeCalendar/DateRangeCalendar/ControlledDateRangeCalendar'
import { DateRange } from './BaseDateRangeInput'
import { DateRangePickerInput, DateRangePickerInputProps } from './DateRangePickerInput'

export interface DateRangePickerProps extends DateRangePickerInputProps {
  minDate?: Date
  maxDate?: Date
  icon?: IconImage
  calendarProps?: Partial<ControlledDateRangeCalendarProps>
  popperProps?: PopperOptions
  onFocus?(e: React.FocusEvent<HTMLDivElement>): void
  onBlur?(e: React.FocusEvent<HTMLDivElement>): void
  onlyWeeks?: boolean
}

export interface Week {
  start: Date
  end: Date
}

export function DateRangePicker(props: DateRangePickerProps) {
  const {
    onChange,
    popperProps,
    minDate,
    maxDate,
    value,
    icon,
    calendarProps,
    onFocus,
    onBlur,
    onlyWeeks,
    ...rest
  } = props

  const [dateRangeInputFocus, setDateRangeInputFocus] = useState(1)
  const [visibleDate, setVisibleDate] = useState<Date>(new Date())
  const [open, setOpen] = useState(false)

  const { classes, css } = useStyles(createStyles)

  const finalInputRef = useRef<HTMLInputElement>()
  const [anchorRef, setAnchorRef] = useState<HTMLDivElement>()
  const [popupRef, setPopupRef] = useState<HTMLDivElement>()

  useEffect(() => {
    const point = (): Date => {
      if (dateRangeInputFocus === 1 && value?.startDate) {
        return value.startDate
      } else if (dateRangeInputFocus === 2 && value?.endDate) {
        return value.endDate
      } else if (value?.startDate && !value?.endDate) {
        return value.startDate
      } else if (!value?.startDate && value?.endDate) {
        return value.endDate
      } else {
        return new Date()
      }
    }

    setVisibleDate(point)
  }, [dateRangeInputFocus, value])

  const {
    styles: { popper: popperStyle },
    attributes: { placement },
  } = usePopper(anchorRef, popupRef, { ...popperProps, placement: 'bottom' })

  const handleInputFocus = (inputOnFocus: number) => setDateRangeInputFocus(inputOnFocus)

  const handleOnDayClick = () => finalInputRef.current.focus()

  const handleFocusIn = (event: React.FocusEvent<HTMLDivElement>) => {
    onFocus && onFocus(event)
    setOpen(true)
  }

  const handleFocusOut = (event: React.FocusEvent<HTMLDivElement>) => {
    onBlur && onBlur(event)
    setOpen(false)
  }

  const handleDateRangeChanged = (rangeDateFromBaseInput: DateRange) => {
    onChange(rangeDateFromBaseInput)
  }

  const handleCalendarDateRangeChanged = (dateRange: DateRange) => {
    const { startDate, endDate } = dateRange
    startDate && endDate
      ? startDate <= endDate
        ? onChange({ startDate: startDate, endDate: endDate } as DateRange)
        : onChange({ startDate: endDate, endDate: startDate } as DateRange)
      : onChange({ startDate: startDate, endDate: endDate } as DateRange)
  }

  const handleOnVisibleDateChange = (vDate: Date): void => setVisibleDate(vDate)
  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <DateRangePickerInput
        value={value}
        onChange={handleDateRangeChanged}
        divRef={setAnchorRef}
        minDate={minDate}
        maxDate={maxDate}
        icon={icon}
        finalInputRef={finalInputRef}
        onInputOnFocus={handleInputFocus}
        {...rest}
      />

      {open && (
        <div
          ref={setPopupRef}
          className={css(classes.root, popperStyle as any)}
          data-placement={placement}
          tabIndex={-1}
        >
          <ControlledDateRangeCalendar
            value={value}
            onChange={handleCalendarDateRangeChanged}
            onDayClick={handleOnDayClick}
            inputOnFocus={dateRangeInputFocus}
            visibleDate={visibleDate}
            onVisibleDateChange={handleOnVisibleDateChange}
            minDate={minDate}
            maxDate={maxDate}
            modifiers={{
              disabled: onlyWeeks ? disableByWeekRange(minDate, maxDate) : disableByRange(minDate, maxDate),
            }}
            onlyWeeks={onlyWeeks}
            {...calendarProps}
          />
        </div>
      )}
    </FocusManagerContainer>
  )
}

DateRangePicker.defaultProps = {
  onlyWeeks: false,
  icon: 'calendarOutline',
} as Partial<DateRangePickerProps>

export const disableByWeekRange = (minDate: Date, maxDate: Date) => {
  const realMinDate = new Date(minDate)
  realMinDate.setHours(0, 0, 0, 0)

  const realMaxDate = new Date(maxDate)
  realMaxDate.setHours(23, 59, 59, 999)

  return (week: Week) => {
    return (minDate && week.start < realMinDate) || (maxDate && week.end > realMaxDate)
  }
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
