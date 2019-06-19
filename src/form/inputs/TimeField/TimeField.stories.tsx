import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { withForm } from '../../../stories-addons'

import { TimeField } from './TimeField'

storiesOf('Form|TimeField', module)
  .addDecorator(withForm())
  .add('default', () => (
    <TimeField
      name='time'
      label='Time (hour:minute)'
      disabled={boolean('disabled', false)}
      guide={boolean('guide', true)}
      keepCharPositions={boolean('keepCharPositions', false)}
      onChange={action('changed')}
    />
  ))
