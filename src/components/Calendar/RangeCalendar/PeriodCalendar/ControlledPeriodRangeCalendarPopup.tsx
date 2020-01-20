import React from 'react'
import { ControlledPeriodRangeCalendar, ControlledPeriodRangeCalendarProps } from './ControlledPeriodRangeCalendar'
import { GenericRangeCalendarPopupWrapper } from '../GenericRangeCalendar/GenericRangeCalendarPopupWrapper'

export interface ControlledPeriodRangeCalendarPopupProps extends ControlledPeriodRangeCalendarProps {}

export function ControlledPeriodRangeCalendarPopup(props: ControlledPeriodRangeCalendarPopupProps) {
  return (
    <GenericRangeCalendarPopupWrapper>
      <ControlledPeriodRangeCalendar {...props} />
    </GenericRangeCalendarPopupWrapper>
  )
}
