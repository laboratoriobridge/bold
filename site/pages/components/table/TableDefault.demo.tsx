import { Button, Icon, PagedTable } from '../../../../lib'

const rows = [
  { id: 1, name: 'MARIA MACHADO DE JESUS', age: 42 },
  { id: 2, name: 'JOSÉ DA SILVA MOREIRA', age: 34 },
  { id: 3, name: 'ALICE BARBOSA', age: 27 },
  { id: 4, name: 'MARIA MACHADO DE JESUS', age: 42 },
  { id: 5, name: 'JOSÉ DA SILVA MOREIRA', age: 34 },
  { id: 6, name: 'ALICE BARBOSA', age: 27 },
  { id: 7, name: 'MARIA MACHADO DE JESUS', age: 42 },
  { id: 8, name: 'JOSÉ DA SILVA MOREIRA', age: 34 },
  { id: 9, name: 'ALICE BARBOSA', age: 27 },
  { id: 10, name: 'ALICE BARBOSA', age: 27 },
]

function Table() {
  return (
    <PagedTable
      rows={rows}
      page={0}
      size={10}
      totalElements={100}
      totalPages={10}
      sort={['-id', 'name']}
      onSortChange={console.log}
      onPageChange={console.log}
      onSizeChange={console.log}
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
          sortable: true,
          render: item => item.name,
        },
        {
          name: 'age',
          header: 'Age',
          sortable: true,
          render: item => item.age,
        },
        {
          name: 'actions',
          render: item => (
            <Button size='small' skin='ghost'>
              <Icon icon='penOutline' />
            </Button>
          ),
          style: { textAlign: 'right' },
        },
      ]}
    />
  )
}

export default Table
