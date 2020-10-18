import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

import { MonthField, MonthInput } from './MonthField'

export default {
  title: 'Components/MonthField',
}

export const Default = () => (
  <MonthField
    label={text('label', 'Month Field')}
    error={text('error', '')}
    onChange={action('changed')}
    disabled={boolean('disabled', false)}
  />
)

export const BaseInput = () => (
  <MonthInput
    label={text('label', 'Month Field')}
    error={text('error', '')}
    onChange={action('changed')}
    disabled={boolean('disabled', false)}
  />
)
