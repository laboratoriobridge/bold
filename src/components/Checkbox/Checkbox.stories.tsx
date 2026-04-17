import { action } from '@storybook/addon-actions'
import React from 'react'

import { Checkbox } from './Checkbox'

export default {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Component label',
    disabled: false,
    indeterminate: false,
    name: 'check',
    onChange: action('changed'),
  },
}

export const Default = (args) => <Checkbox {...args} name='check' onChange={action('changed')} />
