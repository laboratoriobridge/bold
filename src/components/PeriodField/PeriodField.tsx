import React, { useEffect, useRef, useState } from 'react'
import { disableByRange } from '../DateField/DateField'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Icons } from '../Icon'
import { Popper, PopperController } from '../Popper'
import { PeriodInput, PeriodInputProps } from './PeriodInput'
import { Period } from './PeriodInputBase'
import { ControlledPeriodRangeCalendarProps } from '../Calendar/RangeCalendar/PeriodCalendar/ControlledPeriodRangeCalendar'
import { ControlledPeriodRangeCalendarPopup } from '../Calendar/RangeCalendar/PeriodCalendar/ControlledPeriodRangeCalendarPopup'

export interface PeriodFieldProps extends PeriodInputProps {
  minDate?: Date
  maxDate?: Date
  icon?: Icons
  calendarProps?: ControlledPeriodRangeCalendarProps
}

export function PeriodField(props: PeriodFieldProps) {
  const [period, setPeriod] = useState(props.value ? props.value : ({} as Period))
  const [periodInputFocus, setPeriodInputFocus] = useState(1)

  const controller = useRef<PopperController>()
  const finalInputRef = useRef<HTMLInputElement>()

  useEffect(() => {
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
    setPeriod(value)
  }

  const handleCalendarPeriodChanged = (startDate: Date, finalDate: Date) => {
    setPeriod({
      startDate,
      finalDate,
    } as Period)
  }

  const renderTarget = (ctrl: PopperController) => {
    const { icon, ...rest } = props
    return (
      <PeriodInput
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
              disabled: disableByRange(props.minDate, props.maxDate),
            }}
            {...props.calendarProps}
          />
        )}
      </Popper>
    </FocusManagerContainer>
  )
}
