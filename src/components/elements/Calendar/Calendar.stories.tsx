import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { HFlow } from '../../layout'

import { Calendar } from './Calendar'
import { ControlledRangeCalendar } from './RangeCalendar/ControlledRangeCalendar'
import { RangeCalendar } from './RangeCalendar/RangeCalendar'
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
        disabled: day => !isCurrentWeek(day),
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
        <RangeCalendar initialDate={now} finalDate={final} onDayClick={action('Day Clicked')} />
        <RangeCalendar initialDate={now} finalDate={undefined} onDayClick={action('Day Clicked')} />
        <RangeCalendar initialDate={undefined} finalDate={undefined} onDayClick={action('Day Clicked')} />
      </HFlow>
    )
  })
  .add('controlled range calendar', () => {
    const final = new Date()
    final.setDate(now.getDate() + 5)
    return (
      <HFlow justifyContent={'space-around'}>
        <ControlledRangeCalendar
          onChange={action('OnChange')}
          initialValues={{ initialDate: new Date(), finalDate: final }}
        />
        <ControlledRangeCalendar
          onChange={action('OnChange')}
          modifiers={{
            disabled: day => !isCurrentWeek(day),
          }}
        />
        <ControlledRangeCalendar
          onChange={action('OnChange')}
          modifiers={{
            oddDays: isOddDay,
          }}
          modifierStyles={{
            today: () => ({ background: 'pink' }),
            oddDays: () => ({ color: 'red', fontWeight: 'bold' }),
          }}
        />
        <ControlledRangeCalendar
          onChange={action('OnChange')}
          modifiers={{
            disabled: day => day.getDate() > 11 && day.getDate() < 15,
          }}
        />
      </HFlow>
    )
  })
