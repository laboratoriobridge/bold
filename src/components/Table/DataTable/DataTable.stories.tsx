import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import React from 'react'

import { Button } from '../../Button'
import { Icon } from '../../Icon'

import { DataTable } from './DataTable'

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

export const Default = () => (
  <DataTable
    rows={boolean('empty', false) ? [] : rows}
    onSortChange={action('sort-change')}
    sort={['id', '-name']}
    loading={boolean('loading', false)}
    columns={[
      { name: 'id', header: 'ID', sortable: true, render: (row: Row) => row.id },
      { name: 'name', header: 'Name', sortable: true, render: (row: Row) => row.name },
      { name: 'age', header: 'Age', render: (row: Row) => row.age },
      {
        name: 'buttons',
        align: 'right',
        render: (row: Row) => (
          <>
            <Button size='small' skin='ghost'>
              <Icon icon='penOutline' />
            </Button>
            <Button size='small' skin='ghost'>
              <Icon icon='dots' />
            </Button>
          </>
        ),
      },
    ]}
  />
)
