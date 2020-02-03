import React from 'react'

import { GenericRangeCalendarPopupWrapper } from '../GenericRangeCalendar/GenericRangeCalendarPopupWrapper'

import { ControlledRangeDateCalendar, ControlledRangeDateCalendarProps } from './ControlledRangeDateCalendar'

export interface ControlledPeriodRangeCalendarPopupProps extends ControlledRangeDateCalendarProps {}

export function ControlledRangeDateCalendarPopup(props: ControlledPeriodRangeCalendarPopupProps) {
  return (
    <GenericRangeCalendarPopupWrapper>
      <ControlledRangeDateCalendar {...props} />
    </GenericRangeCalendarPopupWrapper>
  )
}
