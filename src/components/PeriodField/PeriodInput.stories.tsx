import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { PeriodField } from './PeriodField'
import { PeriodInput } from './PeriodInput'
import { Period } from './PeriodInputBase'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))
const period: Period = { startDate: todayMinus10, finalDate: new Date() }

storiesOf('Components|PeriodField', module)
  .add('default', () => (
    <PeriodField
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
    <PeriodField
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

  .add('base input', () => (
    <PeriodInput
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      label={text('label', 'Text label')}
      onChange={action('changed')}
      required={boolean('required', true)}
      value={period}
    />
  ))
