import { PopperOptions } from 'popper.js'
import React, { useEffect, useRef, useState } from 'react'

import usePopper from '../../hooks/usePopper'
import { useStyles, Theme } from '../../styles'
import {
  ControlledRangeDateCalendarProps,
  ControlledRangeDateCalendar,
} from '../Calendar/RangeCalendar/RangeDateCalendar/ControlledRangeDateCalendar'
import { disableByRange } from '../DateField/DateField'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Icons } from '../Icon'

import { Period } from './BaseRangeDateInput'
import { RangeDateInput, RangeDateInputProps } from './RangeDateInput'

export interface RangeDateFieldProps extends Omit<RangeDateInputProps, 'onChange | value'> {
  minDate?: Date
  maxDate?: Date
  icon?: Icons
  calendarProps?: ControlledRangeDateCalendarProps
  value?: Period
  onChange?(period: Period): void
  popperProps?: PopperOptions
}

export function RangeDateField(props: RangeDateFieldProps) {
  const { onChange, popperProps, minDate, maxDate, value, icon, ...rest } = props

  const [period, setPeriod] = useState(value ? value : ({} as Period))
  const [periodInputFocus, setPeriodInputFocus] = useState(1)
  const [startPointDate, setStartPointDate] = useState()
  const [open, setOpen] = useState(false)

  const { classes, css } = useStyles(createStyles)

  const finalInputRef = useRef<HTMLInputElement>()
  const anchorRef = useRef<HTMLDivElement>()
  const popupRef = useRef<HTMLDivElement>()

  useEffect(() => {
    onChange && onChange(period)
    setPeriod(period)
  }, [period])

  useEffect(() => {
    const point = handleInitialVisibleDate()
    setStartPointDate(point)
  }, [period, periodInputFocus])

  const { style: popperStyle, placement } = usePopper(
    {
      anchorRef: anchorRef,
      popperRef: popupRef,
      placement: 'bottom',
      ...popperProps,
    },
    [open]
  )

  const handleInputFocus = (inputOnFocus: number) => {
    setPeriodInputFocus(inputOnFocus)
  }

  const handleOnDayClick = (day: Date) => {
    finalInputRef.current.focus()
  }

  const handleFocusIn = () => setOpen(true)
  const handleFocusOut = () => setOpen(false)

  const handlePeriodChanged = (periodFromBaseInput: Period) => {
    onChange && onChange(periodFromBaseInput)
    setPeriod(periodFromBaseInput)
  }

  const handleCalendarPeriodChanged = (startDate: Date, finalDate: Date) => {
    onChange && onChange(period)
    setPeriod({
      startDate,
      finalDate,
    } as Period)
  }

  const handleInitialVisibleDate = () => {
    if (periodInputFocus) {
      if (periodInputFocus === 1 && period.startDate) {
        return period.startDate
      } else if (periodInputFocus === 2 && period.finalDate) {
        return period.finalDate
      } else if (period.startDate && !period.finalDate) {
        return period.startDate
      } else if (!period.startDate && period.finalDate) {
        return period.finalDate
      }
    }
    return new Date()
  }

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <RangeDateInput
        {...rest}
        divRef={anchorRef}
        minDate={minDate}
        maxDate={maxDate}
        icon={icon}
        value={period}
        onChange={handlePeriodChanged}
        finalInputRef={finalInputRef}
        onInputOnFocus={handleInputFocus}
      />

      {open && (
        <div ref={popupRef} className={css(classes.root, popperStyle)} data-placement={placement} tabIndex={-1}>
          <ControlledRangeDateCalendar
            values={{ initialDate: period.startDate, finalDate: period.finalDate }}
            onChange={handleCalendarPeriodChanged}
            onDayClick={handleOnDayClick}
            inputOnFocus={periodInputFocus}
            onVisibleDateChange={() => startPointDate}
            modifiers={{
              disabled: disableByRange(minDate, maxDate),
            }}
            {...props.calendarProps}
          />
        </div>
      )}
    </FocusManagerContainer>
  )
}

export const createStyles = (theme: Theme) => ({
  root: {
    background: theme.pallete.surface.main,
    boxShadow: theme.shadows.outer[40],
    borderRadius: theme.radius.popper,
    padding: '0.5rem .25rem .25rem .25rem',
    outline: 'none',
  },
})
