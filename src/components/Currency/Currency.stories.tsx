import React from 'react'

import { Currency } from './Currency'

export default {
  title: 'Components/Textual',
  component: Currency,
  args: {
    value: 12.34,
    currency: 'USD',
  },
}

export const Default = (args) => <Currency {...args} />
