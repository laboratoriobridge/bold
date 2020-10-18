import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import React from 'react'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './index'

export default {
  title: 'Components/Table',
}

export const _Table = () => (
  <Table hovered={boolean('hovered', false)}>
    <TableHead>
      <TableRow>
        <TableHeader sortable={true} sortDirection='ASC' onSortChange={action('sort-changed')}>
          Header #1
        </TableHeader>
        <TableHeader>Header #2</TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow>
        <TableCell colSpan={2}>Row #1</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Row #2 - Cell #1</TableCell>
        <TableCell>Row #2 - Cell #2</TableCell>
      </TableRow>
      <TableRow onClick={action('row-click')}>
        <TableCell>Row #3 - Cell #1</TableCell>
        <TableCell>Row #3 - Cell #2</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)
