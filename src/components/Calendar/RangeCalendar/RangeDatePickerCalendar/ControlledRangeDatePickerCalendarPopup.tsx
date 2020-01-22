import React from 'react'

import { GenericRangeCalendarPopupWrapper } from '../GenericRangeCalendar/GenericRangeCalendarPopupWrapper'

import {
  ControlledRangeDatePickerCalendar,
  ControlledRangeDatePickerCalendarProps,
} from './ControlledRangeDatePickerCalendar'

export interface ControlledPeriodRangeCalendarPopupProps extends ControlledRangeDatePickerCalendarProps {}

export function ControlledRangeDatePickerCalendarPopup(props: ControlledPeriodRangeCalendarPopupProps) {
  return (
    <GenericRangeCalendarPopupWrapper>
      <ControlledRangeDatePickerCalendar {...props} />
    </GenericRangeCalendarPopupWrapper>
  )
}
