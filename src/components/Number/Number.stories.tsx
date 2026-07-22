import React from 'react'

import { Number } from './Number'

export default {
  title: 'Components/Textual',
  component: Number,
  args: {
    value: 1234.56789,
    formatOptions: {
      minimumFractionDigits: 2,
      maximumFractionDigits: 5,
    },
    placeholder: '',
    abbrev: false,
    prefix: '',
    suffix: '',
  },
}

export const _Number = (args) => <Number {...args} />
