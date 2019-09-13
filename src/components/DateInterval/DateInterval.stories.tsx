import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { DateInterval, Period } from './DateInterval'

const todayMinus10 = new Date(new Date().setDate(new Date().getDate() - 10))
const period: Period = { startDate: todayMinus10, finalDate: new Date() }

storiesOf('Components|DateInterval', module).add('default', () => (
  <DateInterval
    initialValue={period}
    onChange={action('changed')}
    disabled={boolean('disabled', false)}
    icon={'calendarOutline'}
  />
))
