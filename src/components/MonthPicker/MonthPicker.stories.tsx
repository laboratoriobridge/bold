import { action } from '@storybook/addon-actions'
import React from 'react'

import { MonthPicker } from './MonthPicker'

const today = new Date()
const value = { month: today.getMonth(), year: today.getFullYear() }

export default {
  title: 'Components/MonthPicker',
}

export const Default = () => <MonthPicker visibleMonth={value} onVisibleMonthChange={action('changed')} />
