import React, { useRef, useState } from 'react'

import { ControlledRangeCalendarProps } from '../Calendar/RangeCalendar/ControlledRangeCalendar'
import { ControlledRangeCalendarPopup } from '../Calendar/RangeCalendar/ControlledRangeCalendarPopup'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Icons } from '../Icon'
import { Popper, PopperController } from '../Popper'

import { Period, PeriodInput, PeriodInputProps } from './PeriodInput'

export interface PeriodFieldProps extends PeriodInputProps {
  icon?: Icons
  calendarProps?: ControlledRangeCalendarProps
}

export function PeriodField(props: PeriodFieldProps) {
  const controller = useRef<PopperController>()
  const inputRef = useRef<HTMLInputElement>()

  const [period, setPeriod] = useState({} as Period)

  const setController = (ctrl: PopperController) => {
    controller.current = ctrl
  }

  const handleOnDayClick = (ctrl: PopperController) => () => {}

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

  const handleCalendarPeriodChanged = (startDate, finalDate) => {
    setPeriod({
      startDate,
      finalDate,
    })
  }

  const renderTarget = (ctrl: PopperController) => {
    const { icon, ...rest } = props
    return <PeriodInput {...rest} inputRef={inputRef} icon={icon} value={period} />
  }

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <Popper control={setController} renderTarget={renderTarget} placement='auto' block>
        {(ctrl: PopperController) => (
          <ControlledRangeCalendarPopup
            {...props.calendarProps}
            onDayClick={handleOnDayClick(ctrl)}
            onChange={handleCalendarPeriodChanged}
          />
        )}
      </Popper>
    </FocusManagerContainer>
  )
}
