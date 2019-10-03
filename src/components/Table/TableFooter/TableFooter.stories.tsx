import { action } from '@storybook/addon-actions'
import { number } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import React from 'react'

import { TableFooter } from './TableFooter'

storiesOf('Components|Table', module).add('TableFooter', () => (
  <TableFooter
    page={number('page', 0)}
    pageSize={number('pageSize', 10)}
    totalPages={number('totalPages', 10)}
    totalElements={number('totalElements', 1000)}
    onPageChange={action('page-changed')}
    onSizeChange={action('size-changed')}
  />
))
