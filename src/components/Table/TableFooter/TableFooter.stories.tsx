import { action } from '@storybook/addon-actions'
import { boolean, number } from '@storybook/addon-knobs'
import React from 'react'

import { TableFooter } from './TableFooter'

export default {
  title: 'Components/Table',
}

export const _TableFooter = () => (
  <TableFooter
    page={number('page', 0)}
    pageSize={number('pageSize', 10)}
    totalPages={number('totalPages', 10)}
    abbrev={boolean('abbrev', false)}
    totalElements={number('totalElements', 1000)}
    onPageChange={action('page-changed')}
    onSizeChange={action('size-changed')}
  />
)
