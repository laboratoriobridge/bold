import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'
import { DateRange } from './BaseDateRangeInput'
import { DateRangeField } from './DateRangeField'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))
const period: DateRange = { startDate: todayMinus10, endDate: new Date() }

export default {
  title: 'Components/DateRangeField',
}

export const Default = () => (
  <DateRangeField
    clearable={boolean('clearable', true)}
    label={text('label', 'Text label')}
    disabled={boolean('disabled', false)}
    error={text('error', '')}
    required={boolean('required', true)}
    onChange={action('changed')}
    icon='calendarOutline'
    value={period}
  />
)

export const MinMaxDate = () => (
  <DateRangeField
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
)
