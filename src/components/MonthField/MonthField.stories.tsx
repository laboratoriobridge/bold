import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { MonthField } from './MonthField'

storiesOf('Components|MonthField', module).add('default', () => (
  <MonthField
    label={text('label', 'Month Field')}
    error={text('error', '')}
    onChange={action('changed')}
    disabled={boolean('disabled', false)}
  />
))
