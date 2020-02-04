import { PopperOptions } from 'popper.js'
import React, { useEffect, useRef, useState } from 'react'

import usePopper from '../../hooks/usePopper'
import { Theme } from '../../styles'
import { useStyles } from '../../styles/hooks/useStyles'
import { composeHandlers } from '../../util/react'
import { Calendar, CalendarProps } from '../Calendar'
import { isSameDay, isValidDate } from '../Calendar/util'
import { FocusManagerContainer } from '../FocusManagerContainer'

import { DateInput, DateInputProps } from './DateInput'

export interface DateFieldProps extends DateInputProps {
  /**
   * Minimum date that can be selected in the calendar
   */
  minDate?: Date

  /**
   * Maximum date that can be selected in the calendar.
   */
  maxDate?: Date

  /**
   * Props delegated to the Calendar
   */
  calendarProps?: Partial<CalendarProps>

  /**
   * Props delegated to the Popper instance
   */
  popperProps?: PopperOptions
}

export function DateField(props: DateFieldProps) {
  const { calendarProps, popperProps, minDate, maxDate, value, onClick, onIconClick, ...rest } = props

  const { css, classes } = useStyles(createStyles)

  const inputRef = useRef<HTMLInputElement>()
  const popupRef = useRef<HTMLDivElement>()

  const [open, setOpen] = useState(false)

  const [visibleDate, setVisibleDate] = useState(new Date())
  useEffect(() => {
    if (visibleDate !== value) {
      setVisibleDate(isValidDate(value) ? value : new Date())
    }
  }, [value, visibleDate])

  const { style: popperStyle, placement } = usePopper(
    {
      anchorRef: inputRef,
      popperRef: popupRef,
      placement: 'bottom-start',
      ...popperProps,
    },
    [open]
  )

  const handleDayClick = (day: Date) => {
    inputRef.current.focus()
    setOpen(false)
    return props.onChange(day)
  }

  const handleInputIconClick = () => setOpen(true)
  const handleFocusIn = () => setOpen(true)
  const handleFocusOut = () => setOpen(false)

  const handleVisibleDateChange = (newVisibleDate: Date) => setVisibleDate(newVisibleDate)

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <DateInput
        inputRef={inputRef}
        value={value}
        icon='calendarOutline'
        onIconClick={composeHandlers(handleInputIconClick, onIconClick)}
        {...rest}
      />

      {open && (
        <div ref={popupRef} className={css(classes.root, popperStyle)} data-placement={placement} tabIndex={-1}>
          <Calendar
            visibleDate={visibleDate}
            onVisibleDateChange={handleVisibleDateChange}
            onDayClick={handleDayClick}
            modifiers={{
              selected: day => value && isSameDay(day, value),
              disabled: disableByRange(props.minDate, props.maxDate),
            }}
            {...calendarProps}
          />
        </div>
      )}
    </FocusManagerContainer>
  )
}

DateField.defaultProps = {
  onChange: () => null,
  onFocus: () => null,
  onClick: () => null,
} as Partial<DateFieldProps>

export const disableByRange = (minDate?: Date, maxDate?: Date) => {
  const realMinDate = new Date(minDate)
  realMinDate.setHours(0, 0, 0, 0)

  const realMaxDate = new Date(maxDate)
  realMaxDate.setHours(23, 59, 59, 999)

  return (day: Date) => {
    return (minDate && day < realMinDate) || (maxDate && day > realMaxDate)
  }
}

const createStyles = (theme: Theme) => ({
  root: {
    zIndex: theme.zIndex.popper,
    background: theme.pallete.surface.main,
    boxShadow: theme.shadows.outer[40],
    borderRadius: theme.radius.popper,
    padding: '0.5rem .25rem .25rem .25rem',
    outline: 'none',
  },
})
