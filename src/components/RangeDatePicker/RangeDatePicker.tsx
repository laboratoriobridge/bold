import React, { useEffect, useRef, useState } from 'react'
import { disableByRange } from '../DateField/DateField'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Icons } from '../Icon'
import { Popper, PopperController } from '../Popper'
import { RangeDatePickerInput, RangeDatePickerInputProps } from './RangeDatePickerInput'
import { Period } from './BaseRangeDatePicker'
import { ControlledPeriodRangeCalendarPopup } from '../Calendar/RangeCalendar/RangeDatePickerCalendar/ControlledPeriodRangeCalendarPopup'
import { ControlledRangeDatePickerCalendarProps } from '../Calendar/RangeCalendar/RangeDatePickerCalendar/ControlledRangeDatePickerCalendar'

export interface RangeDatePickerProps extends Omit<RangeDatePickerInputProps, 'onChange'> {
  minDate?: Date
  maxDate?: Date
  icon?: Icons
  calendarProps?: ControlledRangeDatePickerCalendarProps
  onChange?(period: Period): void
}

export function RangeDatePicker(props: RangeDatePickerProps) {
  const { onChange, minDate, maxDate } = props
  const [period, setPeriod] = useState(props.value ? props.value : ({} as Period))
  const [periodInputFocus, setPeriodInputFocus] = useState(1)

  const controller = useRef<PopperController>()
  const finalInputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    onChange && onChange(period)
    setPeriod(period)
  }, [period])

  const handleInputFocus = (value: number) => {
    setPeriodInputFocus(value)
  }

  const setController = (ctrl: PopperController) => {
    controller.current = ctrl
  }

  const handleOnDayClick = (ctrl: PopperController) => (day: Date) => {
    finalInputRef.current.focus()
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

  const handlePeriodChanged = (value: Period) => {
    onChange && onChange(period)
    setPeriod(value)
  }

  const handleCalendarPeriodChanged = (startDate: Date, finalDate: Date) => {
    onChange && onChange(period)
    setPeriod({
      startDate,
      finalDate,
    } as Period)
  }

  const renderTarget = (ctrl: PopperController) => {
    const { icon, ...rest } = props
    return (
      <RangeDatePickerInput
        {...rest}
        icon={icon}
        value={period}
        onChange={handlePeriodChanged}
        finalInputRef={finalInputRef}
        onInputOnFocus={handleInputFocus}
      />
    )
  }

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <Popper control={setController} renderTarget={renderTarget} placement='auto' block>
        {(ctrl: PopperController) => (
          <ControlledPeriodRangeCalendarPopup
            values={{ initialDate: period.startDate, finalDate: period.finalDate }}
            onChange={handleCalendarPeriodChanged}
            onDayClick={handleOnDayClick(ctrl)}
            inputOnFocus={periodInputFocus}
            modifiers={{
              disabled: disableByRange(minDate, maxDate),
            }}
            {...props.calendarProps}
          />
        )}
      </Popper>
    </FocusManagerContainer>
  )
}
