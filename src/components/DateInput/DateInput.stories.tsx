import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { DateInput } from './DateInput'
import { DatePickerInput } from './DatePickerInput'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))

storiesOf('Components|DateInput', module).add('default', () => (
  <DateInput name='date' value={new Date()} onChange={action('changed')} disabled={boolean('disabled', false)} />
))

storiesOf('Components|DatePickerInput', module)
  .add('default', () => (
    <DatePickerInput
      name='date'
      value={new Date()}
      onChange={action('changed')}
      disabled={boolean('disabled', false)}
    />
  ))
  .add('min/max date', () => (
    <DatePickerInput
      name='date'
      disabled={boolean('disabled', false)}
      onChange={action('changed')}
      minDate={todayMinus10}
      maxDate={new Date()}
      required
    />
  ))
