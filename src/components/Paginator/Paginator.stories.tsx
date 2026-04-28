import { action } from '@storybook/addon-actions'
import React from 'react'

import { Paginator } from './Paginator'

export default {
  title: 'Components/Paginator',
  component: Paginator,
  args: { page: 4, total: 20, onChange: action('page-changed') },
}

export const Default = (args) => <Paginator {...args} />
