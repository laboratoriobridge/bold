import { action } from '@storybook/addon-actions'
import React, { useState } from 'react'

import { DateField } from './DateField'
import { DateInput } from './DateInput'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))

export default {
  title: 'Components/DateField',
  component: DateField,
  decorators: [
    (Story) => (
      <div style={{ minHeight: '275px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    name: 'date',
    onChange: action('changed'),
  },
}

export const Default = (args) => {
  const [value, setValue] = useState<Date>()

  const handleChange = (selectedDate: Date) => setValue(selectedDate)

  return <DateField {...args} value={value} onChange={handleChange} />
}

export const MinMaxDate = (args) => <DateField {...args} minDate={todayMinus10} maxDate={new Date()} required />

export const BaseInput = (args) => <DateInput {...args} value={new Date()} />
