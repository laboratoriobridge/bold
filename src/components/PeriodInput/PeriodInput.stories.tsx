import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { PeriodField } from './PeriodField'
import { Period, PeriodInputBase } from './PeriodInputBase'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))
const period: Period = { startDate: todayMinus10, finalDate: new Date() }

storiesOf('Components|PeriodField', module)
  .add('default', () => (
    <PeriodField
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      value={period}
      onChange={action('changed')}
      icon='calendarOutline'
    />
  ))

  .add('min/max date', () => (
    <PeriodField
      value={period}
      minDate={todayMinus10}
      maxDate={new Date()}
      onChange={action('changed')}
      icon='calendarOutline'
    />
  ))

  .add('base input', () => <PeriodInputBase value={period} onChange={action('changed')} />)
