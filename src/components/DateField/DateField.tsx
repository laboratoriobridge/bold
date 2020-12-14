import { Options as PopperOptions } from '@popperjs/core'
import React, { useEffect, useState } from 'react'
import { usePopper } from 'react-popper'
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
  const { calendarProps, popperProps, minDate, maxDate, value, onClick, icon, onIconClick, ...rest } = props

  const { css, classes } = useStyles(createStyles)

  const [inputRef, setInputRef] = useState<HTMLInputElement>()
  const [popupRef, setPopupRef] = useState<HTMLDivElement>()

  const [open, setOpen] = useState(false)

  const [visibleDate, setVisibleDate] = useState(new Date())
  useEffect(() => {
    setVisibleDate(isValidDate(value) ? value : new Date())
  }, [value])

  const {
    styles: { popper: popperStyle },
    attributes: { placement },
  } = usePopper(inputRef, popupRef, { ...popperProps, placement: 'bottom-start' })

  const handleDayClick = (day: Date) => {
    inputRef.focus()
    setOpen(false)
    return props.onChange(day)
  }

  const handleIconClick = () => setOpen(true)
  const handleInputIconClick = () => setOpen(true)
  const handleFocusIn = () => setOpen(true)
  const handleFocusOut = () => setOpen(false)

  const handleVisibleDateChange = (newVisibleDate: Date) => setVisibleDate(newVisibleDate)

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <DateInput
        inputRef={setInputRef}
        value={value}
        icon={icon}
        onIconClick={composeHandlers(handleInputIconClick, onIconClick)}
        onClick={composeHandlers(handleIconClick, onClick)}
        {...rest}
      />

      {open && (
        <div
          ref={setPopupRef}
          className={css(classes.root, popperStyle as any)}
          data-placement={placement}
          tabIndex={-1}
        >
          <Calendar
            visibleDate={visibleDate}
            onVisibleDateChange={handleVisibleDateChange}
            onDayClick={handleDayClick}
            modifiers={{
              selected: (day) => value && isSameDay(day, value),
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
  icon: 'calendarOutline',
  onChange: () => null,
  onFocus: () => null,
  onClick: () => null,
  transformTwoYearDigit: false,
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
