import React, { useRef, useState } from 'react'

import { ControlledRangeCalendarProps } from '../Calendar/RangeCalendar/ControlledRangeCalendar'
import { ControlledRangeCalendarPopup } from '../Calendar/RangeCalendar/ControlledRangeCalendarPopup'
import { disableByRange } from '../DateField/DateField'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Icons } from '../Icon'
import { Popper, PopperController } from '../Popper'

import { PeriodInput, PeriodInputProps } from './PeriodInput'
import { Period } from './PeriodInputBase'

export interface PeriodFieldProps extends PeriodInputProps {
  minDate?: Date
  maxDate?: Date
  icon?: Icons
  calendarProps?: ControlledRangeCalendarProps
}

export function PeriodField(props: PeriodFieldProps) {
  const controller = useRef<PopperController>()
  const inputRef = useRef<HTMLInputElement>()

  const [period, setPeriod] = useState(props.value ? props.value : ({} as Period))

  const setController = (ctrl: PopperController) => {
    controller.current = ctrl
  }

  const handleOnClick = (ctrl: PopperController) => (e: React.MouseEvent<HTMLInputElement>) => {
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
        inputRef={inputRef}
        icon={icon}
        value={period}
        onChange={handlePeriodChanged}
        onClick={handleOnClick(ctrl)}
        onFocus={handleInputFocus(ctrl)}
      />
    )
  }

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <Popper control={setController} renderTarget={renderTarget} placement='auto' block>
        {(ctrl: PopperController) => (
          <ControlledRangeCalendarPopup
            values={{ initialDate: period.startDate, finalDate: period.finalDate }}
            onChange={handleCalendarPeriodChanged}
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
