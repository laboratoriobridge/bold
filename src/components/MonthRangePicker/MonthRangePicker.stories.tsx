import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'
import { ReferenceMonth } from '../MonthPicker'
import { MonthRangePicker } from './MonthRangePicker'

const start: ReferenceMonth = { month: 5, year: 2020 }
const end: ReferenceMonth = { month: 1, year: 2021 }
const range = { start: start, end: end }

export default {
  title: 'Components/MonthRangePicker',
}

export const Default = () => (
  <MonthRangePicker
    label={text('label', 'Month Field')}
    error={text('error', '')}
    onChange={action('changed')}
    inline={boolean('inline', false)}
    required={boolean('required', false)}
    disabled={boolean('disabled', false)}
    value={range}
  />
)

export const MinMax = () => (
  <MonthRangePicker
    label={text('label', 'Month Field')}
    error={text('error', '')}
    onChange={action('changed')}
    disabled={boolean('disabled', false)}
    value={range}
    minMonth={{ month: 0, year: 2020 }}
    maxMonth={{ month: 3, year: 2021 }}
  />
)
