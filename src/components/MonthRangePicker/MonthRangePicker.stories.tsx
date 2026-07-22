import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'
import { ReferenceMonth } from '../MonthPicker'
import { DateRange } from '../DateRangePicker'
import { MonthRangePicker, ReferenceMonthRange } from './MonthRangePicker'

const start: ReferenceMonth = { month: 5, year: 2020 }
const end: ReferenceMonth = { month: 1, year: 2021 }
const initialValue: ReferenceMonthRange = { start: start, end: end }

const minMonth: ReferenceMonth = { month: 0, year: 2020 }
const maxMonth: ReferenceMonth = { month: 3, year: 2021 }

export default {
  title: 'Components/MonthRangePicker',
  component: MonthRangePicker,
  decorators: [
    (Story) => (
      <div style={{ minHeight: '250px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    label: { control: 'text' },
    error: { control: 'text' },
  },
  args: {
    label: 'Month Field',
    error: '',
    inline: false,
    required: false,
    disabled: false,
  },
}

const handleChange = (setRange: (referenceMonthRange: ReferenceMonthRange) => void) => (dateRange: DateRange) => {
  const { startDate, endDate } = dateRange

  if (startDate && endDate) {
    setRange({
      start: { month: startDate.getMonth(), year: startDate.getFullYear() },
      end: { month: endDate.getMonth(), year: endDate.getFullYear() },
    })
  } else if (startDate) {
    setRange({
      start: { month: startDate.getMonth(), year: startDate.getFullYear() },
      end: undefined,
    })
  } else if (endDate) {
    setRange({
      start: undefined,
      end: { month: endDate.getMonth(), year: endDate.getFullYear() },
    })
  } else {
    setRange({ start: undefined, end: undefined })
  }

  action('changed')(dateRange)
}

export const Default = (args) => {
  const [range, setRange] = useState<ReferenceMonthRange>(initialValue)

  return <MonthRangePicker {...args} onChange={(dateRange) => handleChange(setRange)(dateRange)} value={range} />
}

export const MinMax = (args) => {
  const [range, setRange] = useState<ReferenceMonthRange>(initialValue)

  return <MonthRangePicker {...args} onChange={(dateRange) => handleChange(setRange)(dateRange)} value={range} />
}

MinMax.args = {
  minMonth: minMonth,
  maxMonth: maxMonth,
}
