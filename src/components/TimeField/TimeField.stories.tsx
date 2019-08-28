import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { TimeField } from './TimeField'

storiesOf('Components|TimeField', module).add('default', () => (
  <TimeField
    name='time'
    label={text('text', 'Time')}
    error={text('error', '')}
    disabled={boolean('disabled', false)}
    guide={boolean('guide', true)}
    keepCharPositions={boolean('keepCharPositions', false)}
    onChange={action('changed')}
  />
))
