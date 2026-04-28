import { action } from '@storybook/addon-actions'
import React from 'react'

import { SortableLabel, SortDirection } from './SortableLabel'

const dirOptions: SortDirection[] = ['', 'ASC', 'DESC']

export default {
  title: 'Components/Table',
  component: SortableLabel,
  argTypes: {
    direction: {
      options: dirOptions,
      control: { type: 'select' },
    },
  },
  args: {
    direction: '',
    onClick: action('clicked'),
  },
}

export const _SortableLabel = (args) => <SortableLabel {...args}>Property</SortableLabel>
