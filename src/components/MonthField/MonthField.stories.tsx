import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import React, { useState } from 'react'

import { ReferenceMonth } from '../MonthPicker'
import { MonthField } from './MonthField'
import { MonthInput } from './MonthInput'

const today = new Date()
const value = { month: today.getMonth(), year: today.getFullYear() }

export default {
  title: 'Components/MonthField',
}

export const Default = () => {
  const [value, setValue] = useState<ReferenceMonth>()
  const handleChange = (selectedMonth: ReferenceMonth) => setValue(selectedMonth)

  return (
    <MonthField
      label={text('label', 'Month Field')}
      error={text('error', '')}
      onChange={handleChange}
      disabled={boolean('disabled', false)}
      value={value}
    />
  )
}

export const MinMax = () => (
  <MonthField
    label={text('label', 'Month Field')}
    error={text('error', '')}
    onChange={action('changed')}
    disabled={boolean('disabled', false)}
    value={value}
    minMonth={{ month: 0, year: 2020 }}
    maxMonth={{ month: 3, year: 2021 }}
  />
)

export const BaseInput = () => (
  <MonthInput
    label={text('label', 'Month Field')}
    error={text('error', '')}
    onChange={action('changed')}
    disabled={boolean('disabled', false)}
  />
)
