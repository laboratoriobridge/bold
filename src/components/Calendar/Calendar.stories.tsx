import { action } from '@storybook/addon-actions'
import { date } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Calendar } from './Calendar'
import { createWeekArray, isSameDay } from './util'

const isCurrentWeek = (day: Date) => {
  const week = createWeekArray(new Date())
  return week.find((d) => isSameDay(d, day)) !== undefined
}

// const isToday = (day: Date) => isSameDay(new Date(), day)

const isOddDay = (day: Date) => day.getDate() % 2 === 1

storiesOf('Components|Calendar', module)
  .add('default', () => (
    <Calendar
      visibleDate={new Date(date('visibleDate', new Date()))}
      onVisibleDateChange={action('onVisibleDateChange')}
      // onDayClick={action('onDayClick')}
      // onDayHover={action('onDayHover')}
      // modifiers={{
      //   selected: isToday,
      // }}
      onlyWeeks
    />
  ))
  .add('disabled dates', () => (
    <Calendar
      visibleDate={new Date(date('visibleDate', new Date()))}
      onVisibleDateChange={action('onVisibleDateChange')}
      onDayClick={action('onDayClick')}
      onDayHover={action('onDayHover')}
      modifiers={{
        disabled: (day) => !isCurrentWeek(day),
      }}
    />
  ))
  .add('custom modifier', () => (
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
  ))
