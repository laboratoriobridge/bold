import { PopperOptions } from 'popper.js'
import React, { useEffect, useRef, useState } from 'react'

import usePopper from '../../hooks/usePopper'
import { Theme, useStyles } from '../../styles'
import {
  ControlledRangeDateCalendar,
  ControlledRangeDateCalendarProps,
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
  calendarProps?: Partial<ControlledRangeDateCalendarProps>
  popperProps?: PopperOptions
  value?: Period
  onChange?(period: Period): void
}

export function RangeDateField(props: RangeDateFieldProps) {
  const { onChange, popperProps, minDate, maxDate, value, icon, calendarProps, ...rest } = props

  const [period, setPeriod] = useState(value ? value : ({} as Period))
  const [periodInputFocus, setPeriodInputFocus] = useState(1)
  const [visibleDate, setVisibleDate] = useState<Date>(new Date())
  const [open, setOpen] = useState(false)

  const { classes, css } = useStyles(createStyles)

  const finalInputRef = useRef<HTMLInputElement>()
  const anchorRef = useRef<HTMLDivElement>()
  const popupRef = useRef<HTMLDivElement>()

  useEffect(() => {
    onChange && onChange(period)
  }, [onChange, period])

  useEffect(() => {
    const point = (): Date => {
      if (periodInputFocus === 1 && period?.startDate) {
        return period.startDate
      } else if (periodInputFocus === 2 && period?.finalDate) {
        return period.finalDate
      } else if (period?.startDate && !period?.finalDate) {
        return period.startDate
      } else if (!period?.startDate && period?.finalDate) {
        return period.finalDate
      } else {
        return new Date()
      }
    }

    setVisibleDate(point)
  }, [periodInputFocus, period])

  const { style: popperStyle, placement } = usePopper(
    {
      anchorRef,
      popperRef: popupRef,
      placement: 'bottom',
      ...popperProps,
    },
    [open]
  )

  const handleInputFocus = (inputOnFocus: number) => setPeriodInputFocus(inputOnFocus)

  const handleOnDayClick = (dayClicked: Date) => finalInputRef.current.focus()

  const handleFocusIn = () => setOpen(true)

  const handleFocusOut = () => setOpen(false)

  const handlePeriodChanged = (periodFromBaseInput: Period) => {
    setPeriod(periodFromBaseInput)
  }

  const handleCalendarPeriodChanged = (startDate: Date, finalDate: Date) => {
    startDate && finalDate
      ? startDate <= finalDate
        ? setPeriod({ startDate: startDate, finalDate: finalDate } as Period)
        : setPeriod({ startDate: finalDate, finalDate: startDate } as Period)
      : setPeriod({ startDate: startDate, finalDate: finalDate } as Period)
  }

  const handleOnVisibleDateChange = (vDate: Date): void => setVisibleDate(vDate)

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
            value={{ initialDate: period.startDate, finalDate: period.finalDate }}
            onChange={handleCalendarPeriodChanged}
            onDayClick={handleOnDayClick}
            inputOnFocus={periodInputFocus}
            visibleDate={visibleDate}
            onVisibleDateChange={handleOnVisibleDateChange}
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
