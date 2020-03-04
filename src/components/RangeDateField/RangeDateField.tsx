import { PopperOptions } from 'popper.js'
import React, { useEffect, useRef, useState } from 'react'

import { usePopper } from '../../hooks/usePopper'
import { Theme, useStyles } from '../../styles'
import {
  ControlledRangeDateCalendar,
  ControlledRangeDateCalendarProps,
} from '../Calendar/RangeCalendar/RangeDateCalendar/ControlledRangeDateCalendar'
import { disableByRange } from '../DateField/DateField'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Icons } from '../Icon'

import { RangeDate } from './BaseRangeDateInput'
import { RangeDateInput, RangeDateInputProps } from './RangeDateInput'

export interface RangeDateFieldProps extends RangeDateInputProps {
  minDate?: Date
  maxDate?: Date
  icon?: Icons
  calendarProps?: Partial<ControlledRangeDateCalendarProps>
  popperProps?: PopperOptions
}

export function RangeDateField(props: RangeDateFieldProps) {
  const { onChange, popperProps, minDate, maxDate, value, icon, calendarProps, ...rest } = props

  const [rangeDate, setRangeDate] = useState(value ? value : ({} as RangeDate))
  const [rangeDateInputFocus, setRangeDateInputFocus] = useState(1)
  const [visibleDate, setVisibleDate] = useState<Date>(new Date())
  const [open, setOpen] = useState(false)

  const { classes, css } = useStyles(createStyles)

  const finalInputRef = useRef<HTMLInputElement>()
  const anchorRef = useRef<HTMLDivElement>()
  const popupRef = useRef<HTMLDivElement>()

  useEffect(() => {
    onChange && onChange(rangeDate)
  }, [onChange, rangeDate])

  useEffect(() => {
    const point = (): Date => {
      if (rangeDateInputFocus === 1 && rangeDate?.startDate) {
        return rangeDate.startDate
      } else if (rangeDateInputFocus === 2 && rangeDate?.finalDate) {
        return rangeDate.finalDate
      } else if (rangeDate?.startDate && !rangeDate?.finalDate) {
        return rangeDate.startDate
      } else if (!rangeDate?.startDate && rangeDate?.finalDate) {
        return rangeDate.finalDate
      } else {
        return new Date()
      }
    }

    setVisibleDate(point)
  }, [rangeDateInputFocus, rangeDate])

  const { style: popperStyle, placement } = usePopper(
    {
      anchorRef,
      popperRef: popupRef,
      placement: 'bottom',
      ...popperProps,
    },
    [open]
  )

  const handleInputFocus = (inputOnFocus: number) => setRangeDateInputFocus(inputOnFocus)

  const handleOnDayClick = (dayClicked: Date) => finalInputRef.current.focus()

  const handleFocusIn = () => setOpen(true)

  const handleFocusOut = () => setOpen(false)

  const handleRangeDateChanged = (rangeDateFromBaseInput: RangeDate) => {
    setRangeDate(rangeDateFromBaseInput)
  }

  const handleCalendarRangeDateChanged = (startDate: Date, finalDate: Date) => {
    startDate && finalDate
      ? startDate <= finalDate
        ? setRangeDate({ startDate: startDate, finalDate: finalDate } as RangeDate)
        : setRangeDate({ startDate: finalDate, finalDate: startDate } as RangeDate)
      : setRangeDate({ startDate: startDate, finalDate: finalDate } as RangeDate)
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
        value={rangeDate}
        onChange={handleRangeDateChanged}
        finalInputRef={finalInputRef}
        onInputOnFocus={handleInputFocus}
      />

      {open && (
        <div ref={popupRef} className={css(classes.root, popperStyle)} data-placement={placement} tabIndex={-1}>
          <ControlledRangeDateCalendar
            value={{ initialDate: rangeDate.startDate, finalDate: rangeDate.finalDate }}
            onChange={handleCalendarRangeDateChanged}
            onDayClick={handleOnDayClick}
            inputOnFocus={rangeDateInputFocus}
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
