import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { PeriodField } from './PeriodField'
import { Period, PeriodInput } from './PeriodInput'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))
const period: Period = { startDate: todayMinus10, finalDate: new Date() }

storiesOf('Components|PeriodField', module)
  .add('PeriodField', () => <PeriodField icon='calendarOutline' />)

  .add('PeriodInput', () => (
    <PeriodInput value={period} onChange={action('changed')} disabled={boolean('disabled', false)} />
  ))
