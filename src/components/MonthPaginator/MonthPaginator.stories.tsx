import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import React from 'react'

import { MonthPaginator } from './MonthPaginator'

export default {
  title: 'Components/MonthPaginator',
}

export const Default = () => (
  <MonthPaginator
    month={number('month', new Date().getMonth())}
    year={number('year', new Date().getFullYear())}
    formatter={(date, month) => month.format(date).replace('.', '')}
    onChange={action('changed')}
  />
)

export const Ghost = () => (
  <MonthPaginator
    month={number('month', new Date().getMonth())}
    year={number('year', new Date().getFullYear() + 1)}
    formatter={(date, month) => month.format(date).replace('.', '')}
    onChange={action('changed')}
    ghost={true}
  />
)
