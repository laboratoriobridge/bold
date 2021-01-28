// import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { ReferenceMonth } from '..'

import { MonthField } from './MonthField'
import { MonthInput } from './MonthInput'

const today = new Date()
const value = { month: today.getMonth(), year: today.getFullYear() }

const printChange = (month: ReferenceMonth) => {
  console.log(`[CHANGE]: ${month.month}/${month.year}`)
}

storiesOf('Components|MonthField', module)
  .add('default', () => (
    <MonthField
      label={text('label', 'Month Field')}
      error={text('error', '')}
      onChange={printChange}
      disabled={boolean('disabled', false)}
      value={value}
    />
  ))
  .add('min/max', () => (
    <MonthField
      label={text('label', 'Month Field')}
      error={text('error', '')}
      onChange={printChange}
      disabled={boolean('disabled', false)}
      value={value}
      maxMonth={value}
    />
  ))
  .add('base input', () => (
    <MonthInput
      label={text('label', 'Month Field')}
      error={text('error', '')}
      onChange={printChange}
      disabled={boolean('disabled', false)}
    />
  ))
