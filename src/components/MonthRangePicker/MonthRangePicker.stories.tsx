import { action } from '@storybook/addon-actions'
import { boolean, object, text } from '@storybook/addon-knobs'
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

export const Default = () => {
  const [range, setRange] = useState<ReferenceMonthRange>(initialValue)

  return (
    <MonthRangePicker
      label={text('label', 'Month Field')}
      error={text('error', '')}
      onChange={(dateRange) => handleChange(setRange)(dateRange)}
      inline={boolean('inline', false)}
      required={boolean('required', false)}
      disabled={boolean('disabled', false)}
      value={range}
    />
  )
}

export const MinMax = () => {
  const [range, setRange] = useState<ReferenceMonthRange>(initialValue)

  return (
    <MonthRangePicker
      label={text('label', 'Month Field')}
      error={text('error', '')}
      onChange={(dateRange) => handleChange(setRange)(dateRange)}
      disabled={boolean('disabled', false)}
      value={range}
      minMonth={object('minMonth', minMonth)}
      maxMonth={object('maxMonth', maxMonth)}
    />
  )
}
