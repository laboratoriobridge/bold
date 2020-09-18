import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { MonthPaginator } from './MonthPaginator'

storiesOf('Components|MonthPaginator', module).add('default', () => (
  <MonthPaginator
    month={number('month', new Date().getMonth())}
    year={number('year', new Date().getFullYear())}
    formatter={(date, month) => month.format(date).replace('.', '')}
    onChange={action('changed')}
  />
))

storiesOf('Components|MonthPaginator', module).add('ghost', () => (
  <MonthPaginator
    month={number('month', new Date().getMonth())}
    year={number('year', new Date().getFullYear())}
    formatter={(date, month) => month.format(date).replace('.', '')}
    onChange={action('changed')}
    ghost={true}
  />
))
