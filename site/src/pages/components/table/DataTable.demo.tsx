import { Button, DataTable, Icon } from 'bold-ui'
import React, { useState } from 'react'

interface RowType {
  id: number
  name: string
  age: number
}

function DataTableExample() {
  const [sort, setSort] = useState(['id'])

  const rows = allRows
    // Naive sorting for example purposes:
    .sort((a, b) => {
      if (sort[0] === 'id') {
        return a.id - b.id
      }
      if (sort[0] === '-id') {
        return b.id - a.id
      }
      return 0
    })

  return (
    <DataTable<RowType>
      rows={rows}
      sort={sort}
      onSortChange={setSort}
      loading={false}
      columns={[
        {
          name: 'id',
          header: 'ID',
          sortable: true,
          render: item => item.id,
        },
        {
          name: 'name',
          header: 'Name',
          render: item => item.name,
        },
        {
          name: 'age',
          header: 'Age',
          render: item => item.age,
        },
        {
          name: 'actions',
          align: 'right',
          render: item => (
            <Button size='small' skin='ghost'>
              <Icon icon='penOutline' />
            </Button>
          ),
        },
      ]}
    />
  )
}

export default DataTableExample

// Fake data to populate table
let id = 1
const allRows: RowType[] = Array(3)
  .fill(true)
  .reduce(
    curr => [
      ...curr,
      { id: id++, name: 'MARIA MACHADO DE JESUS', age: 42 },
      { id: id++, name: 'JOSÉ DA SILVA MOREIRA', age: 34 },
      { id: id++, name: 'ALICE BARBOSA', age: 27 },
    ],
    [] as RowType[]
  )
