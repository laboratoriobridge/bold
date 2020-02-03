import React, { useEffect, useRef, useState } from 'react'

import { ControlledRangeDateCalendarProps } from '../Calendar/RangeCalendar/RangeDateCalendar/ControlledRangeDateCalendar'
import { ControlledRangeDateCalendarPopup } from '../Calendar/RangeCalendar/RangeDateCalendar/ControlledRangeDateCalendarPopup'
import { disableByRange } from '../DateField/DateField'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Icons } from '../Icon'
import { Popper, PopperController } from '../Popper'

import { Period } from './BaseRangeDateInput'
import { RangeDateInput, RangeDateInputProps } from './RangeDateInput'

export interface RangeDateFieldProps extends Omit<RangeDateInputProps, 'onChange | value'> {
  minDate?: Date
  maxDate?: Date
  icon?: Icons
  calendarProps?: ControlledRangeDateCalendarProps
  value?: Period
  onChange?(period: Period): void
}

export function RangeDateField(props: RangeDateFieldProps) {
  const { onChange, minDate, maxDate, value, icon, ...rest } = props
  const [period, setPeriod] = useState(value ? value : ({} as Period))
  const [periodInputFocus, setPeriodInputFocus] = useState(1)
  const [startPointDate, setStartPointDate] = useState()

  const controller = useRef<PopperController>()
  const finalInputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    onChange && onChange(period)
    setPeriod(period)
  }, [period])

  useEffect(() => {
    const point = handleInitialVisibleDate()
    setStartPointDate(point)
  }, [period, periodInputFocus])

  const handleInputFocus = (inputOnFocus: number) => {
    setPeriodInputFocus(inputOnFocus)
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

  const handlePeriodChanged = (periodFromBaseInput: Period) => {
    onChange && onChange(periodFromBaseInput)
    setPeriod(periodFromBaseInput)
  }

  const handleCalendarPeriodChanged = (startDate: Date, finalDate: Date) => {
    onChange && onChange(period)
    setPeriod({
      startDate,
      finalDate,
    } as Period)
  }

  const handleInitialVisibleDate = () => {
    if (periodInputFocus) {
      if (periodInputFocus === 1 && period.startDate) {
        return period.startDate
      } else if (periodInputFocus === 2 && period.finalDate) {
        return period.finalDate
      } else if (period.startDate && !period.finalDate) {
        return period.startDate
      } else if (!period.startDate && period.finalDate) {
        return period.finalDate
      }
    }
    return new Date()
  }

  const renderTarget = (ctrl: PopperController) => {
    return (
      <RangeDateInput
        {...rest}
        minDate={minDate}
        maxDate={maxDate}
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
          <ControlledRangeDateCalendarPopup
            values={{ initialDate: period.startDate, finalDate: period.finalDate }}
            onChange={handleCalendarPeriodChanged}
            onDayClick={handleOnDayClick(ctrl)}
            inputOnFocus={periodInputFocus}
            initialVisibleDate={startPointDate}
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
