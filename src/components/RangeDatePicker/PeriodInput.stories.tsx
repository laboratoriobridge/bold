import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { RangeDatePicker } from './RangeDatePicker'
import { RangeDatePickerInput } from './RangeDatePickerInput'
import { Period } from './BaseRangeDatePicker'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))
const period: Period = { startDate: todayMinus10, finalDate: new Date() }

storiesOf('Components | RangeDatePicker ', module)
  .add('default', () => (
    <RangeDatePicker
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      onChange={action('changed')}
      icon='calendarOutline'
      value={period}
    />
  ))

  .add('min/max date', () => (
    <RangeDatePicker
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      onChange={action('changed')}
      icon='calendarOutline'
      minDate={todayMinus10}
      maxDate={new Date()}
    />
  ))

  .add('base input without calendar', () => (
    <RangeDatePickerInput
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      label={text('label', 'Text label')}
      onChange={action('changed')}
      required={boolean('required', true)}
      value={period}
    />
  ))
