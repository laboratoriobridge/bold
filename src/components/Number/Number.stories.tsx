import { boolean, number, text } from '@storybook/addon-knobs'
import React from 'react'

import { Number } from './Number'

export default {
  title: 'Components/Textual',
}

export const _Number = () => (
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
)
