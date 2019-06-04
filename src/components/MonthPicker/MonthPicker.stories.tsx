import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { MonthPicker } from './MonthPicker/MonthPicker'

storiesOf('Components|MonthPicker', module).add('default', () => (
  <MonthPicker
    month={number('month', new Date().getMonth())}
    year={number('year', new Date().getFullYear())}
    onChange={action('changed')}
  />
))
