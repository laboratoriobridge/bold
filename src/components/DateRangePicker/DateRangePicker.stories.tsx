import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'
import { DateRange } from './BaseDateRangeInput'
import { DateRangePicker } from './DateRangePicker'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))
const weekStart = new Date(2020, 11, 13)
const weekEnd = new Date(2021, 0, 9)
const period: DateRange = { startDate: todayMinus10, endDate: new Date() }
const periodWeek: DateRange = { startDate: weekStart, endDate: weekEnd }

export default {
  title: 'Components/DateRangePicker',
}

export const Default = () => (
  <DateRangePicker
    clearable={boolean('clearable', true)}
    label={text('label', 'Text label')}
    disabled={boolean('disabled', false)}
    error={text('error', '')}
    inline={boolean('inline', false)}
    required={boolean('required', true)}
    onChange={action('changed')}
    icon='calendarOutline'
    value={period}
  />
)

export const MinMaxDate = () => (
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
)

export const WeekPicker = () => (
  <DateRangePicker
    clearable={boolean('clearable', true)}
    label={text('label', 'Text label')}
    disabled={boolean('disabled', false)}
    error={text('error', '')}
    required={boolean('required', true)}
    onChange={action('changed')}
    icon='calendarOutline'
    onlyWeeks
    value={periodWeek}
  />
)

export const WeekPickerMinMaxDate = () => (
  <DateRangePicker
    clearable={boolean('clearable', true)}
    label={text('label', 'Text label')}
    disabled={boolean('disabled', false)}
    error={text('error', '')}
    required={boolean('required', true)}
    onChange={action('changed')}
    icon='calendarOutline'
    minDate={weekStart}
    maxDate={new Date()}
    onlyWeeks
    value={periodWeek}
  />
)
