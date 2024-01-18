import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

import { MonthField } from './MonthField'
import { MonthInput } from './MonthInput'

const today = new Date()
const value = { month: today.getMonth(), year: today.getFullYear() }

export default {
  title: 'Components/MonthField',
}

export const Default = () => (
  <MonthField
    label={text('label', 'Month Field')}
    error={text('error', '')}
    onChange={action('changed')}
    disabled={boolean('disabled', false)}
    value={{ month: 0, year: 2019 }}
  />
)

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
