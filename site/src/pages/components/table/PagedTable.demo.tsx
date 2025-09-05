import { Button, Icon, PagedTable } from 'bold-ui'
import React, { useState } from 'react'

interface RowType {
  id: number
  name: string
  age: number
}

function PagedTableExample() {
  const [params, setParams] = useState({
    page: 0,
    size: 10,
    totalElements: allRows.length,
    totalPages: allRows.length / 10,
    sort: ['id'],
  })

  const handleSortChange = (sort: string[]) => setParams(state => ({ ...state, sort }))
  const handlePageChange = (page: number) => setParams(state => ({ ...state, page }))
  const handleSizeChange = (size: number) =>
    setParams(state => ({ ...state, size, totalPages: Math.max(1, Math.ceil(state.totalElements / size)) }))

  const rows = allRows
    // Naive sorting for example purposes:
    .sort((a, b) => {
      if (params.sort[0] === 'id') {
        return a.id - b.id
      }
      if (params.sort[0] === '-id') {
        return b.id - a.id
      }
      return 0
    })
    // Naive pagination for example purposes:
    .slice(params.page * params.size, params.page * params.size + params.size)

  return (
    <PagedTable<RowType>
      rows={rows}
      page={params.page}
      size={params.size}
      totalElements={params.totalElements}
      totalPages={params.totalPages}
      sort={params.sort}
      onSortChange={handleSortChange}
      onPageChange={handlePageChange}
      onSizeChange={handleSizeChange}
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

export default PagedTableExample

// Fake data to populate table
let id = 1
const allRows: RowType[] = Array(30)
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
