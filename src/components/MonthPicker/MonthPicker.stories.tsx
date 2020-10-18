import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import React from 'react'

import { MonthPicker } from './MonthPicker'

export default {
  title: 'Components|MonthPicker',
}

export const Default = () => (
  <MonthPicker
    month={number('month', new Date().getMonth())}
    year={number('year', new Date().getFullYear())}
    onChange={action('changed')}
  />
)
