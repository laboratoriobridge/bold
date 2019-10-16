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
  const [period, setPeriod] = useState(props.value ? props.value : ({} as Period))

  const controller = useRef<PopperController>()
  const finalInputRef = useRef<HTMLInputElement>()

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
      <PeriodInput {...rest} icon={icon} value={period} onChange={handlePeriodChanged} finalInputRef={finalInputRef} />
    )
  }

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <Popper control={setController} renderTarget={renderTarget} placement='auto' block>
        {(ctrl: PopperController) => (
          <ControlledRangeCalendarPopup
            values={{ initialDate: period.startDate, finalDate: period.finalDate }}
            onChange={handleCalendarPeriodChanged}
            onDayClick={handleOnDayClick(ctrl)}
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
