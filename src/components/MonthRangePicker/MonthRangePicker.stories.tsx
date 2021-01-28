// import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'
import { DateRange } from '..'
import { ReferenceMonth } from '../MonthPicker'
import { MonthRangePicker } from './MonthRangePicker'

const start: ReferenceMonth = { month: 0, year: 2020 }
const end: ReferenceMonth = { month: 1, year: 2021 }

const printChange = (range: DateRange) => {
  console.log(
    `[CHANGE]: ${range?.startDate?.toLocaleDateString('pt-BR')} until ${range?.endDate?.toLocaleDateString('pt-BR')}`
  )
}

storiesOf('Components|MonthRangePicker', module)
  .add('default', () => (
    <MonthRangePicker
      clearable={boolean('clearable', true)}
      label={text('label', 'Month Field')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      onChange={printChange}
      icon='calendarOutline'
      value={{ start: start, end: end }}
    />
  ))
  .add('max/min', () => (
    <MonthRangePicker
      clearable={boolean('clearable', true)}
      label={text('label', 'Month Field')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      onChange={printChange}
      icon='calendarOutline'
      value={{ start: start, end: end }}
      minMonth={{ month: 0, year: 2020 }}
      maxMonth={end}
    />
  ))
