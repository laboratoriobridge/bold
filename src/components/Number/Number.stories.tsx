import { boolean, number, text } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { Number } from './Number'

storiesOf('Components|Textual', module).add('Number', () => (
  <Number
    value={number('value', 1234.56789)}
    formatOptions={{
      minimumFractionDigits: number('formatOptions.minimumFractionDigits', 2),
      maximumFractionDigits: number('formatOptions.maximumFractionDigits', 5),
    }}
    placeholder={text('placeholder', '')}
    abbrev={boolean('abbrev', false)}
    prefix={text('prefix', '')}
    suffix={text('sufix', '')}
  />
))
