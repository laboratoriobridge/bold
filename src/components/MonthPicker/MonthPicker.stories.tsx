// import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { MonthPicker, ReferenceMonth } from './MonthPicker'

const today = new Date()
const value = { month: today.getMonth(), year: today.getFullYear() }

const printChange = (month: ReferenceMonth) => {
  console.log(`[CHANGE]: ${month.month}/${month.year}`)
}

storiesOf('Components|MonthPicker', module).add('default', () => (
  <MonthPicker visibleMonth={value} onVisibleMonthChange={printChange} />
))
