import { action } from '@storybook/addon-actions'
import { boolean, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Period } from './BaseRangeDateInput'
import { RangeDateField } from './RangeDateField'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))
const period: Period = { startDate: todayMinus10, finalDate: new Date() }

storiesOf('Components|RangeDateField ', module)
  .add('default', () => (
    <RangeDateField
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      onChange={action('changed')}
      icon='calendarOutline'
      value={period}
      startDateName={'start'}
      finalDateName={'final'}
    />
  ))

  .add('min/max date', () => (
    <RangeDateField
      label={text('label', 'Text label')}
      disabled={boolean('disabled', false)}
      error={text('error', '')}
      required={boolean('required', true)}
      onChange={action('changed')}
      icon='calendarOutline'
      minDate={todayMinus10}
      maxDate={new Date()}
      startDateName={'start'}
      finalDateName={'final'}
    />
  ))
