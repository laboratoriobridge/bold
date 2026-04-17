import { action } from '@storybook/addon-actions'
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
  component: Calendar,
  argTypes: {
    visibleDate: { control: 'date' },
  },
  args: {
    visibleDate: new Date(),
    onVisibleDateChange: action('onVisibleDateChange'),
    onDayClick: action('onDayClick'),
    onDayHover: action('onDayHover'),
  },
}

export const Default = (args) => (
  <Calendar
    {...args}
    visibleDate={new Date(args.visibleDate)}
    modifiers={{
      selected: isToday,
    }}
  />
)

export const DisabledDates = (args) => (
  <Calendar
    {...args}
    visibleDate={new Date(args.visibleDate)}
    modifiers={{
      disabled: (day) => !isCurrentWeek(day),
    }}
  />
)

export const CustomModifier = (args) => (
  <Calendar
    {...args}
    visibleDate={args.visibleDate}
    modifiers={{
      oddDays: isOddDay,
    }}
    modifierStyles={{
      today: () => ({ background: 'pink' }),
      oddDays: () => ({ color: 'red', fontWeight: 'bold' }),
    }}
  />
)
