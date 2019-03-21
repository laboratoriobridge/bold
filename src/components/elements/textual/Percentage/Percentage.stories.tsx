import { number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Percentage } from './Percentage'

storiesOf('Components|Textual', module).add('Percentage', () => (
  <Percentage
    value={number('value', 0.34567)}
    minDecimalPlaces={number('minDecimalPlaces', 2)}
    maxDecimalPlaces={number('maxDecimalPlaces', 2)}
    title={text('title', null)}
  />
))
