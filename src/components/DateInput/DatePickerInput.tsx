import React, { useRef } from 'react'

import { CalendarProps } from '../Calendar'
import { isSameDay } from '../Calendar/util'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Popper, PopperController } from '../Popper'

import { CalendarPopup } from './CalendarPopup'
import { DateInput, DateInputProps } from './DateInput'

export interface DatePickerInputProps extends DateInputProps {
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
  calendarProps?: CalendarProps
}

export function DatePickerInput(props: DatePickerInputProps) {
  const inputRef = useRef<HTMLInputElement>()
  const controller = useRef<PopperController>()

  const setController = (ctrl: PopperController) => {
    controller.current = ctrl
  }

  const handleDayClick = (ctrl: PopperController) => (day: Date) => {
    inputRef.current.focus()
    ctrl.hide()
    return props.onChange(day)
  }

  const handleInputClick = (ctrl: PopperController) => (e: React.MouseEvent<HTMLInputElement>) => {
    ctrl.show()
    return props.onClick(e)
  }

  const handleInputFocus = (ctrl: PopperController) => (e: React.FocusEvent<HTMLInputElement>) => {
    ctrl.show()
    return props.onFocus(e)
  }

  const handleFocusIn = () => {
    if (controller.current) {
      controller.current.show()
    }
  }

  const handleFocusOut = () => {
    if (controller.current) {
      controller.current.hide()
    }
  }

  const renderTarget = (ctrl: PopperController) => {
    const { calendarProps, minDate, maxDate, ...rest } = props
    return (
      <DateInput
        icon='calendarOutline'
        onIconClick={ctrl.show}
        {...rest}
        inputRef={inputRef}
        onClick={handleInputClick(ctrl)}
        onFocus={handleInputFocus(ctrl)}
      />
    )
  }

  const { value } = props

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <Popper control={setController} renderTarget={renderTarget} placement='bottom-start' block>
        {(ctrl: PopperController) => (
          <CalendarPopup
            key={value && value.getTime()}
            initialVisibleDate={value || new Date()}
            onDayClick={handleDayClick(ctrl)}
            modifiers={{
              selected: day => value && isSameDay(day, value),
              disabled: disableByRange(props.minDate, props.maxDate),
            }}
            {...props.calendarProps}
          />
        )}
      </Popper>
    </FocusManagerContainer>
  )
}

DatePickerInput.defaultProps = {
  onChange: () => null,
  onFocus: () => null,
  onClick: () => null,
} as Partial<DatePickerInputProps>

export const disableByRange = (minDate?: Date, maxDate?: Date) => {
  const realMinDate = new Date(minDate)
  realMinDate.setHours(0, 0, 0, 0)

  const realMaxDate = new Date(maxDate)
  realMaxDate.setHours(23, 59, 59, 999)

  return (day: Date) => {
    return (minDate && day < realMinDate) || (maxDate && day > realMaxDate)
  }
}
