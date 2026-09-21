import { action } from '@storybook/addon-actions'
import React from 'react'

import { Switch } from './Switch'

export default {
  title: 'Components/Switch',
  component: Switch,
  args: {
    label: 'Label',
    onChange: action('changed'),
    name: 'switch',
  },
}

export const Default = (args) => <Switch {...args} />
