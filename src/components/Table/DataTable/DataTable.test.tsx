import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { DataTable, DataTableProps } from './DataTable'
import { TableLoadingRow } from './TableLoadingRow'

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

const sortHandler = jest.fn()
const DataTableTest = (props: Partial<DataTableProps>) => (
  <DataTable
    rows={rows}
    onSortChange={sortHandler}
    sort={['id', '-name']}
    columns={[
      { name: 'id', header: 'ID', sortable: true, render: (row: Row) => row.id },
      { name: 'name', header: 'Name', sortable: true, render: (row: Row) => row.name },
      {
        name: 'age',
        header: 'Age',
        sortable: true,
        align: 'right',
        style: { color: 'red' },
        render: (row: Row) => row.age,
      },
    ]}
    {...props}
  />
)

it('should render correctly', () => {
  const { container } = render(<DataTableTest />)
  expect(container).toMatchSnapshot()
})

it('should call onSortChange with right parameters when clicked over column title', () => {
  const { container } = render(<DataTableTest />)
  fireEvent.click(container.querySelector('th[data-name="id"] span'))
  expect(sortHandler).toHaveBeenLastCalledWith(['-id'])

  fireEvent.click(container.querySelector('th[data-name="name"] span'))
  expect(sortHandler).toHaveBeenLastCalledWith(['name'])

  fireEvent.click(container.querySelector('th[data-name="id"] span'), { shiftKey: true })
  expect(sortHandler).toHaveBeenLastCalledWith(['-id', '-name'])

  fireEvent.click(container.querySelector('th[data-name="age"] span'), { shiftKey: true })
  expect(sortHandler).toHaveBeenLastCalledWith(['id', '-name', 'age'])
})

it('should render TableLoadingRow when loading prop is on', () => {
  const queryText = TableLoadingRow.defaultProps.message
  expect(render(<DataTable rows={[]} columns={[]} loading={false} />).queryAllByText(queryText).length).toEqual(0)
  expect(render(<DataTable rows={[]} columns={[]} loading={true} />).queryAllByText(queryText).length).toEqual(1)
})

it('should accept the render prop', () => {
  const renderSpy = jest.fn()
  render(<DataTableTest render={renderSpy} />)
  expect(renderSpy).toHaveBeenCalledWith(
    expect.objectContaining({
      columns: expect.anything(),
    })
  )
})

describe('onRowClick prop', () => {
  it('should call the prop with the clicked row', () => {
    const clickHandler = jest.fn()
    const { container } = render(<DataTableTest onRowClick={clickHandler} />)
    const trs = container.querySelectorAll('tbody tr')

    expect(clickHandler).not.toHaveBeenCalled()

    fireEvent.click(trs[0])
    expect(clickHandler).toHaveBeenLastCalledWith(rows[0])

    fireEvent.click(trs[trs.length - 1])
    expect(clickHandler).toHaveBeenLastCalledWith(rows[rows.length - 1])
  })
})

describe('getColumn', () => {
  const renderSpy = jest.fn()
  render(<DataTableTest render={renderSpy} />)
  const getColumn = renderSpy.mock.calls[0][0].getColumn

  it('should return the column configuration by its name', () => {
    expect(getColumn('id').name).toEqual('id')
    expect(getColumn('id').sortable).toEqual(true)
  })

  it('should return undefined for inexistent columns', () => {
    expect(getColumn('foo')).toBeUndefined()
  })
})

describe('getHeaderProps', () => {
  const renderSpy = jest.fn()
  render(<DataTableTest render={renderSpy} />)
  const getHeaderProps = renderSpy.mock.calls[0][0].getHeaderProps

  it('should return the table header props of a column configuration', () => {
    const config = getHeaderProps({
      name: 'id',
      render: () => null,
      sortable: true,
      align: 'right',
    })

    expect(config).toMatchObject({
      key: 'id',
      'data-name': 'id',
    })
    expect(config).toHaveProperty('onSortChange')
  })

  it('should throw an error for inexistent columns', () => {
    expect(() => getHeaderProps('foo')).toThrowError()
  })
})
