import * as React from 'react'
import { useState } from 'react'

import { Theme } from '../../../styles'

import { Calendar, CalendarProps, defaultModifierStyles } from './Calendar'

export interface RangePickerCalendar extends CalendarProps {
    onChange?(initialDate: Date, finalDate: Date): void
    getValues?(initialDate: Date, finalDate: Date): void
}
export const RangePickerCalendar = (props: RangePickerCalendar) => {
    const [initialDate, setInitialDate] = useState<Date>(undefined)
    const [finalDate, setFinalDate] = useState<Date>(undefined)
    const [hoverFinalDate, setHoverFinalDate] = useState<Date>(undefined)

    const onDayClick = (day: Date) => {
        if (!initialDate) {
            setInitialDate(day)
            props.onChange(initialDate, finalDate)
            return
        }

        if (day.getTime() === initialDate.getTime() && !finalDate) {
            return
        }

        // Restart selection
        if (finalDate) {
            setInitialDate(day)
            setFinalDate(undefined)
            props.onChange(initialDate, finalDate)
            return
        }

        // Switch initialDate && finalDate
        if (day < initialDate) {
            setFinalDate(initialDate)
            setInitialDate(day)
            setHoverFinalDate(undefined)
            props.onChange(initialDate, finalDate)
            return
        }

        // Range correctly selected
        setFinalDate(day)
        setHoverFinalDate(undefined)
        props.onChange(initialDate, finalDate)
        return
    }
    const onDayHover = (day: Date) => {
        if (initialDate && finalDate || !initialDate) {
            return
        }
        setHoverFinalDate(day)
    }

    const isInTheRange = (endDate: Date) => (day: Date) => {
        // User selecting interval
        if (initialDate && !endDate && initialDate.getTime() === day.getTime()) {
            return true
        }
        // User selected range
        if ((initialDate <= day && day <= endDate) || (initialDate >= day && day >= endDate)) {
            return true
        }
        return false
    }

    props.getValues(initialDate, finalDate)
    return (
        <Calendar
            onDayClick={onDayClick}
            onDayHover={onDayHover}
            modifiers={{
                inTheHoverRange: isInTheRange(hoverFinalDate),
                inTheRange: isInTheRange(finalDate),
            }}
            modifierStyles={{
                inTheHoverRange: (theme: Theme) => ({ background: theme.pallete.surface.background }),
                inTheRange: defaultModifierStyles.selected,
            }}
            {...props}
        />
    )
}
