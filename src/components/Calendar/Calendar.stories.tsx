import { action } from '@storybook/addon-actions'
import { date } from '@storybook/addon-knobs'
import React from 'react'

import { Calendar } from './Calendar'
import { createWeekArray, isSameDay } from './util'

const isCurrentWeek = (day: Date) => {
  const week = createWeekArray(new Date())
  return week.find((d) => isSameDay(d, day)) !== undefined
}

const isToday = (day: Date) => isSameDay(new Date(), day)

const isOddDay = (day: Date) => day.getDate() % 2 === 1

export default {
  title: 'Components/Calendar',
}

export const Default = () => {
  const visibleDate = new Date(date('visibleDate', new Date()))
  return (
    <Calendar
      visibleDate={visibleDate}
      onVisibleDateChange={action('onVisibleDateChange')}
      onDayClick={action('onDayClick')}
      onDayHover={action('onDayHover')}
      modifiers={{
        selected: isToday,
      }}
      highlightDates={{
        dates: [
          visibleDate,
          new Date(visibleDate.getTime() + 86400000),
          new Date(visibleDate.getTime() + 2 * 86400000),
        ],
        hint: 'Data disponível',
      }}
    />
  )
}

export const DisabledDates = () => (
  <Calendar
    visibleDate={new Date(date('visibleDate', new Date()))}
    onVisibleDateChange={action('onVisibleDateChange')}
    onDayClick={action('onDayClick')}
    onDayHover={action('onDayHover')}
    modifiers={{
      disabled: (day) => !isCurrentWeek(day),
    }}
  />
)

export const CustomModifier = () => (
  <Calendar
    visibleDate={new Date(date('visibleDate', new Date()))}
    onVisibleDateChange={action('onVisibleDateChange')}
    onDayClick={action('onDayClick')}
    onDayHover={action('onDayHover')}
    modifiers={{
      oddDays: isOddDay,
    }}
    modifierStyles={{
      today: () => ({ background: 'pink' }),
      oddDays: () => ({ color: 'red', fontWeight: 'bold' }),
    }}
  />
)
