import { action } from '@storybook/addon-actions'
import React from 'react'

import { TableFooter } from './TableFooter'

export default {
  title: 'Components/Table',
  component: TableFooter,
  args: {
    page: 0,
    pageSize: 10,
    totalPages: 10,
    abbrev: false,
    totalElements: 1000,
    onPageChange: action('page-changed'),
    onSizeChange: action('size-changed'),
  },
}

export const _TableFooter = (args) => <TableFooter {...args} />
