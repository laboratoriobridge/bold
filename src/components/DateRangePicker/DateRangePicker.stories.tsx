import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { DateRange } from './BaseDateRangeInput'
import { DateRangePicker } from './DateRangePicker'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))
const period: DateRange = { startDate: todayMinus10, endDate: new Date() }

storiesOf('Components|DateRangePicker ', module)
  .add('default', () => (
    <DateRangePicker
      clearable={boolean('clearable', true)}
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      onChange={action('changed')}
      icon='calendarOutline'
      value={period}
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
    />
  ))
