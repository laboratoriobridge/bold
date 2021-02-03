import React, { useState } from 'react'
import { Theme } from '../../../styles'
import { defaultModifierStyles } from '../../Calendar/Calendar'
import { MonthPicker, MonthPickerProps, ReferenceMonth } from '../../MonthPicker/MonthPicker'

export interface GenericMonthRangeCalendarProps extends MonthPickerProps {
  start: ReferenceMonth
  end: ReferenceMonth
  isInTheRange(month: ReferenceMonth): boolean
  isInTheHoverRange(month: ReferenceMonth, hoverMonth: ReferenceMonth): boolean
}

export function GenericMonthRangeCalendar(props: GenericMonthRangeCalendarProps) {
  const { isInTheHoverRange, isInTheRange, start, end, ...rest } = props

  const [hoverMonth, setHoverMonth] = useState<ReferenceMonth>({ month: undefined, year: undefined })

  const inRange = (month: ReferenceMonth): boolean => isInTheRange(month)

  const inHoverRange = (month: ReferenceMonth): boolean => isInTheHoverRange(month, hoverMonth)

  const onMouseLeave = () => setHoverMonth({ month: undefined, year: undefined })

  return (
    <MonthPicker
      {...rest}
      onMouseLeave={onMouseLeave}
      onMonthHover={setHoverMonth}
      modifiers={{
        ...rest.modifiers,
        inTheRange: inRange,
        inTheHoverRange: inHoverRange,
      }}
      modifierStyles={{
        ...rest.modifierStyles,
        inTheRange: defaultModifierStyles.selected,
        inTheHoverRange: hoverStyle,
      }}
    />
  )
}

export const hoverStyle = (theme: Theme) => ({ background: theme.pallete.surface.background })
