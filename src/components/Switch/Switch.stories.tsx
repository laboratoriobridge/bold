import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

import { Switch } from './Switch'

export default {
  title: 'Components/Switch',
}

export const Default = () => (
  <Switch
    name='switch'
    label={text('label', 'Label')}
    disabled={boolean('disabled', false)}
    onChange={action('changed')}
  />
)
