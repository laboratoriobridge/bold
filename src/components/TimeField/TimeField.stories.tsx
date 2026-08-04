import { action } from '@storybook/addon-actions'
import React from 'react'

import { TimeField } from './TimeField'

export default {
  title: 'Components/TimeField',
  component: TimeField,
  argTypes: {
    label: {
      control: 'text',
    },
    error: {
      control: 'text',
    },
  },
  args: {
    name: 'time',
    label: 'Time',
    error: '',
    inline: false,
    required: false,
    disabled: false,
    guide: true,
    keepCharPositions: false,
    onChange: action('changed'),
  },
}

export const Default = (args) => <TimeField {...args} />
