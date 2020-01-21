import React from 'react'

import { GenericRangeCalendarPopupWrapper } from '../GenericRangeCalendar/GenericRangeCalendarPopupWrapper'

import { DefaultControlledRangeCalendar, DefaultControlledRangeCalendarProps } from './DefaultControlledRangeCalendar'

export interface ControlledRangeCalendarPopupProps extends DefaultControlledRangeCalendarProps {}

export function ControlledRangeCalendarPopup(props: ControlledRangeCalendarPopupProps) {
  return (
    <GenericRangeCalendarPopupWrapper>
      <DefaultControlledRangeCalendar {...props} />
    </GenericRangeCalendarPopupWrapper>
  )
}
