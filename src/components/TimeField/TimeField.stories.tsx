import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import React from 'react'

import { TimeField } from './TimeField'

export default {
  title: 'Components/TimeField',
}

export const Default = () => (
  <TimeField
    name='time'
    label={text('text', 'Time')}
    error={text('error', '')}
    inline={boolean('inline', false)}
    required={boolean('required', false)}
    disabled={boolean('disabled', false)}
    guide={boolean('guide', true)}
    keepCharPositions={boolean('keepCharPositions', false)}
    onChange={action('changed')}
  />
)
