import { action } from '@storybook/addon-actions'
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
  component: DateRangePicker,
  decorators: [
    (Story) => (
      <div style={{ minHeight: '300px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    clearable: true,
    label: 'Text label',
    disabled: false,
    error: '',
    inline: false,
    required: true,
    icon: 'calendarOutline',
    onChange: action('changed'),
  },
}

export const Default = (args) => <DateRangePicker {...args} value={period} />

export const MinMaxDate = (args) => <DateRangePicker {...args} minDate={todayMinus10} maxDate={new Date()} />

export const WeekPicker = (args) => <DateRangePicker {...args} onlyWeeks value={periodWeek} />

export const WeekPickerMinMaxDate = (args) => (
  <DateRangePicker {...args} minDate={weekStart} maxDate={new Date()} onlyWeeks value={periodWeek} />
)
