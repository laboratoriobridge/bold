import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { HFlow } from '../../layout'

import { Calendar } from './Calendar'
import { RangeCalendar } from './RangeCalendar'
import { createWeekArray, isSameDay } from './util'

const now = new Date()

const isCurrentWeek = (day: Date) => {
    // Disables entire date week
    const week = createWeekArray(new Date())
    return week.find(d => isSameDay(d, day)) !== undefined
}

const isToday = (day: Date) => isSameDay(new Date(), day)

const isOddDay = (day: Date) => day.getDate() % 2 === 1

storiesOf('Components/Calendar', module)
    .add('default', () => (
        <Calendar
            onDayClick={action('day-click')}
            onDayHover={action('day-hover')}
            modifiers={{
                selected: isToday,
            }}
        />
    ))
    .add('disabled dates', () => (
        <Calendar
            onDayClick={action('day-click')}
            onDayHover={action('day-hover')}
            modifiers={{
                disabled: (day) => !isCurrentWeek(day),
            }}
        />
    ))
    .add('custom modifier', () => (
        <Calendar
            onDayClick={action('day-click')}
            onDayHover={action('day-hover')}
            modifiers={{
                oddDays: isOddDay,
            }}
            modifierStyles={{
                today: () => ({ background: 'pink' }),
                oddDays: () => ({ color: 'red', fontWeight: 'bold' }),
            }}
        />
    ))
    .add('range calendar', () => {
        const final = new Date()
        final.setDate(now.getDate() + 10)
        return (
            <HFlow>
                <RangeCalendar
                    initialDate={now}
                    finalDate={final}
                    onDayHover={action('dayHover')}
                />
                <RangeCalendar
                    initialDate={now}
                    finalDate={undefined}
                    onDayHover={action('dayHover')}
                />
                <RangeCalendar
                    initialDate={undefined}
                    finalDate={undefined}
                    onDayHover={action('dayHover')}
                />
            </HFlow>
        )
    })
