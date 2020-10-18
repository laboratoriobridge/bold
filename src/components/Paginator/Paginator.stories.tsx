import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import React from 'react'

import { Paginator } from './Paginator'

export default {
  title: 'Components/Paginator',
}

export const Default = () => (
  <Paginator page={number('page', 4)} total={number('total', 20)} onChange={action('page-changed')} />
)
