import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import React from 'react'

import { Button } from '../../Button'
import { Icon } from '../../Icon'

import { PagedTable } from './PagedTable'

interface Row {
  id: number
  name: string
  age: number
}

const rows: Row[] = [
  { id: 1, name: 'MARIA MACHADO DE JESUS', age: 42 },
  { id: 2, name: 'JOSÉ DA SILVA MOREIRA', age: 34 },
  { id: 3, name: 'ALICE BARBOSA', age: 27 },
]

export default {
  title: 'Components/Table',
}

export const _PagedTable = () => (
  <PagedTable
    rows={boolean('empty', false) ? [] : rows}
    page={0}
    size={10}
    totalElements={10}
    totalPages={1}
    sort={['-id', 'name']}
    sizeOptions={[10, 30, 50, 100]}
    onSortChange={action('sort')}
    onPageChange={action('page-change')}
    onSizeChange={action('size-change')}
    loading={boolean('loading', false)}
    columns={[
      { name: 'id', header: 'ID', sortable: true, render: (row: Row) => row.id },
      { name: 'name', header: 'Name', sortable: true, render: (row: Row) => row.name },
      { name: 'age', header: 'Age', sortable: true, render: (row: Row) => row.age },
      {
        name: 'buttons',
        style: { textAlign: 'right' },
        render: (row: Row) => (
          <Button size='small' skin='ghost'>
            <Icon icon='penOutline' />
          </Button>
        ),
      },
    ]}
  />
)
