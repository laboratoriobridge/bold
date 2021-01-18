import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { DateRange } from './BaseDateRangeInput'
import { DateRangePicker } from './DateRangePicker'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))
const todayMinus20 = new Date(new Date().setDate(new Date().getDate() - 20))
const weekStart = new Date(2020, 11, 13)
const weekEnd = new Date(2021, 0, 9)
const period: DateRange = { startDate: todayMinus20, endDate: todayMinus10 }
const periodWeek: DateRange = { startDate: weekStart, endDate: weekEnd }
storiesOf('Components|DateRangePicker ', module)
  .add('default', () => (
    <DateRangePicker
      clearable={boolean('clearable', true)}
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      onChange={(dateRange) =>
        console.log(
          `${dateRange?.startDate?.toLocaleDateString('pt-BR')}-${dateRange?.endDate?.toLocaleDateString('pt-BR')}`
        )
      }
      icon='calendarOutline'
      value={period}
      onlyWeeks={false}
    />
  ))

  .add('week picker', () => (
    <DateRangePicker
      clearable={boolean('clearable', true)}
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      onChange={(dateRange) =>
        console.log(
          `${dateRange?.startDate?.toLocaleDateString('pt-BR')}-${dateRange?.endDate?.toLocaleDateString('pt-BR')}`
        )
      }
      icon='calendarOutline'
      value={periodWeek}
      onlyWeeks={true}
    />
  ))

  .add('min/max date', () => (
    <DateRangePicker
      clearable={boolean('clearable', true)}
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      onChange={action('changed')}
      icon='calendarOutline'
      minDate={todayMinus10}
      maxDate={new Date()}
      onlyWeeks={false}
    />
  ))
