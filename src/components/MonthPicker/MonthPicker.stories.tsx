import { action } from '@storybook/addon-actions'
import { boolean, number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { MonthPicker } from './MonthPicker/MonthPicker'
import { MonthPickerInput } from './MonthPickerInput/MonthPickerInput'

storiesOf('Components|MonthPicker', module).add('default', () => (
  <MonthPicker
    month={number('month', new Date().getMonth())}
    year={number('year', new Date().getFullYear())}
    onChange={action('changed')}
  />
))

storiesOf('Components|MonthPickerInput', module).add('default', () => (
  <MonthPickerInput onChange={action('changed')} disabled={boolean('disabled', false)} />
))
