import { action } from '@storybook/addon-actions'
import React from 'react'

import { MonthPaginator } from './MonthPaginator'

export default {
  title: 'Components/MonthPaginator',
  component: MonthPaginator,
  decorators: [
    (Story) => (
      <div style={{ minHeight: '200px' }}>
        <Story />
      </div>
    ),
  ],
  args: {
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    formatter: (date, month) => month.format(date).replace('.', ''),
    onChange: action('changed'),
  },
}

export const Default = (args) => <MonthPaginator {...args} />

export const Ghost = (args) => <MonthPaginator {...args} ghost={true} />
