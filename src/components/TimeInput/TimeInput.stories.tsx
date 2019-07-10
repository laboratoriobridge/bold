import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { TimeInput } from './TimeInput'

storiesOf('Components|TimeInput', module).add('default', () => (
  <TimeInput
    name='time'
    disabled={boolean('disabled', false)}
    guide={boolean('guide', true)}
    keepCharPositions={boolean('keepCharPositions', false)}
    onChange={action('changed')}
  />
))
