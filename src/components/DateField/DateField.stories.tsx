import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { DateField } from './DateField'
import { DateInput } from './DateInput'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))

storiesOf('Components|DateField', module)
  .add('default', () => (
    <DateField
      name='date'
      hasDefaultIcon
      value={new Date()}
      onChange={action('changed')}
      disabled={boolean('disabled', false)}
    />
  ))
  .add('min/max date', () => (
    <DateField
      name='date'
      disabled={boolean('disabled', false)}
      hasDefaultIcon
      onChange={action('changed')}
      minDate={todayMinus10}
      maxDate={new Date()}
      required
    />
  ))
  .add('base input', () => (
    <DateInput name='date' value={new Date()} onChange={action('changed')} disabled={boolean('disabled', false)} />
  ))
