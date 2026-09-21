import { action } from '@storybook/addon-actions'
import React from 'react'

import { HFlow } from '../HFlow'

import { Radio } from './Radio'

export default {
  title: 'Components/Radio',
  component: Radio,
  argTypes: {
    label: { control: 'text' },
  },
  args: {
    label: 'Component label',
    disabled: false,
    name: 'radio1',
    onChange: action('changed'),
  },
}

export const Default = (args) => (
  <HFlow>
    <Radio {...args} value='1' />
    <Radio {...args} value='2' />
  </HFlow>
)
