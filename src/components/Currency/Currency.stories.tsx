import { number, text } from '@storybook/addon-knobs'
import React from 'react'

import { Currency } from './Currency'

export default {
  title: 'Components/Textual',
}

export const Default = () => <Currency value={number('value', 12.34)} currency={text('currency', 'USD')} />
