import React, { useRef } from 'react'

import { CalendarProps } from '../Calendar'
import { CalendarPopup } from '../DateField/CalendarPopup'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Icons } from '../Icon'
import { Popper, PopperController } from '../Popper'

import { PeriodInput, PeriodInputProps } from './PeriodInput'

export interface PeriodFieldProps extends PeriodInputProps {
  icon?: Icons
  calendarProps?: CalendarProps
}

export function PeriodField(props: PeriodFieldProps) {
  const controller = useRef<PopperController>()

  const setController = (ctrl: PopperController) => {
    controller.current = ctrl
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
    const { icon, ...rest } = props
    return <PeriodInput icon={icon} {...rest} />
  }

  return (
    <FocusManagerContainer onFocusIn={handleFocusIn} onFocusOut={handleFocusOut}>
      <Popper control={setController} renderTarget={renderTarget} placement='auto' block>
        {(ctrl: PopperController) => <CalendarPopup {...props.calendarProps} />}
      </Popper>
    </FocusManagerContainer>
  )
}
