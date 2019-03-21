import { boolean, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Number } from './Number'

storiesOf('Components|Textual', module).add('Number', () => (
  <Number
    value={number('value', 1234.56789)}
    minDecimalPlaces={number('minDecimalPlaces', 2)}
    maxDecimalPlaces={number('maxDecimalPlaces', 5)}
    placeholder={text('placeholder', '')}
    title={text('title', '')}
    abbrev={boolean('abbrev', false)}
    prefix={text('prefix', '')}
    sufix={text('sufix', '')}
  />
))
