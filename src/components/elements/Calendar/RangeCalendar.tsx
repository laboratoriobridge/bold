import * as React from 'react'
import { useState } from 'react'

import { Theme } from '../../../styles'

import { Calendar, CalendarProps, defaultModifierStyles } from './Calendar'
import { isSameDay } from './util'

export interface RangeCalendarProps extends CalendarProps {
    initialDate: Date,
    finalDate: Date
}
export const RangeCalendar = ({ initialDate, finalDate, ...rest }: RangeCalendarProps) => {
    if (finalDate < initialDate) {
        if (process.env.NODE_ENV !== 'production') {
            // tslint:disable-next-line no-console
            console.warn(`RangeCalendar: finalDate should not be before initialDate`)
        }
        finalDate = undefined
        initialDate = undefined
    }

    const [hoverFinalDate, setHoverFinalDate] = useState<Date>(undefined)
    const hover = (day) => {
        if (!initialDate) {
            return
        }
        setHoverFinalDate(day)
    }

    const isInTheRange = (day: Date) =>
        ((initialDate <= day && day <= finalDate) || (initialDate && !finalDate && isSameDay(day, initialDate)))

    const isInTheHoverRange = (day: Date) =>
        ((hoverFinalDate <= day && day < initialDate) || (initialDate < day && day <= hoverFinalDate))

    return (
        <Calendar
            {...rest}
            onDayHover={hover}
            modifiers={{
                inTheHoverRange: isInTheHoverRange,
                inTheRange: isInTheRange,
            }}
            modifierStyles={{
                inTheHoverRange: (theme: Theme) => ({ background: theme.pallete.surface.background }),
                inTheRange: defaultModifierStyles.selected,
            }}
        />
    )
}
