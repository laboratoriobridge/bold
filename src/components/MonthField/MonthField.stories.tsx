import { action } from '@storybook/addon-actions'
import React from 'react'

import { MonthField } from './MonthField'
import { MonthInput } from './MonthInput'

const today = new Date()
const value = { month: today.getMonth(), year: today.getFullYear() }

export default {
  title: 'Components/MonthField',
  component: MonthField,
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200px' }}>
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
    onChange: action('changed'),
    disabled: false,
  },
}

export const Default = (args) => <MonthField {...args} value={{ month: 0, year: 2019 }} />

export const MinMax = (args) => (
  <MonthField {...args} value={value} minMonth={{ month: 0, year: 2026 }} maxMonth={{ month: 3, year: 2027 }} />
)

export const BaseInput = (args) => <MonthInput {...args} />
