import { mount, render } from 'enzyme'
import * as React from 'react'

import { Page } from '../../../../store/requester'
import { withTheme } from '../../../../test'
import { SortableLabel } from '../SortableLabel/SortableLabel'

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
const createTable = (props: Partial<DataTableProps> = {}) => withTheme(
    // tslint:disable jsx-no-lambda
    <DataTable
        rows={rows}
        onSortChange={sortHandler}
        sort={{ id: 'ASC', name: 'DESC' }}
        columns={[
            { name: 'id', header: 'ID', sortable: true, render: (row: Row) => row.id },
            { name: 'name', header: 'Name', sortable: true, render: (row: Row) => row.name },
            { name: 'age', header: 'Age', render: (row: Row) => row.age },
        ]}
        {...props}
    />
)

it('should render correctly', () => {
    expect(render(createTable())).toMatchSnapshot()
})

it('should call onSortChange with right parameters when clicked over column title', () => {
    const wrapper = mount(createTable())
    wrapper.find('th[data-name="id"]').find(SortableLabel).simulate('click')
    expect(sortHandler).toHaveBeenLastCalledWith({ id: 'DESC' })

    wrapper.find('th[data-name="name"]').find(SortableLabel).simulate('click')
    expect(sortHandler).toHaveBeenLastCalledWith({ name: 'ASC' })

    wrapper.find('th[data-name="id"]').find(SortableLabel).simulate('click', { shiftKey: true })
    expect(sortHandler).toHaveBeenLastCalledWith({ id: 'DESC', name: 'DESC' })
})

it('should render TableLoadingRow when loading prop is on', () => {
    const notLoading = mount(withTheme(
        <DataTable
            rows={[]}
            columns={[]}
            loading={false}
        />
    ))
    expect(notLoading.find(TableLoadingRow).length).toEqual(0)

    const loading = mount(withTheme(
        <DataTable
            rows={[]}
            columns={[]}
            loading={true}
        />
    ))
    expect(loading.find(TableLoadingRow).length).toEqual(1)
})

it('should accept the render prop', () => {
    expect(render(withTheme(
        <DataTable
            rows={[]}
            columns={[]}
            render={(renderProps: DataTableProps) => {
                return <div />
            }}
        />
    ))).toMatchSnapshot()
})

describe('onRowClick prop', () => {
    it('should call the prop with the clicked row', () => {
        const clickHandler = jest.fn()
        const wrapper = mount(createTable({
            onRowClick: clickHandler,
        }))
        expect(clickHandler).not.toHaveBeenCalled()
        wrapper.find('tbody tr').first().simulate('click')
        expect(clickHandler).toHaveBeenLastCalledWith(rows[0])

        wrapper.find('tbody tr').last().simulate('click')
        expect(clickHandler).toHaveBeenLastCalledWith(rows[rows.length - 1])
    })
})

describe(DataTable.prototype.getColumn, () => {
    const dataTable = new DataTable({
        rows: [],
        columns: [
            { name: 'foo', render: () => null, sortable: true },
        ],
    })

    it('should return the column configuration by its name', () => {
        expect(dataTable.getColumn('foo').name).toEqual('foo')
        expect(dataTable.getColumn('foo').sortable).toEqual(true)
    })

    it('should return undefined for inexistent columns', () => {
        expect(dataTable.getColumn('baz')).toBeUndefined()
    })
})

describe(DataTable.prototype.getHeaderProps, () => {
    const dataTable = new DataTable({
        ...DataTable.defaultProps,
        rows: [],
        columns: [
            { name: 'foo', render: () => null, sortable: true },
        ],
    })

    it('should return the table header props of a column configuration', () => {
        const config = dataTable.getHeaderProps({
            name: 'bar',
            render: () => null,
            sortable: true,
        })

        expect(config).toMatchObject({
            'key': 'bar',
            'data-name': 'bar',
        })
        expect(config).toHaveProperty('onSortChange')
    })

    it('should throw an error for inexistent columns', () => {
        expect(() => dataTable.getHeaderProps('baz')).toThrowError()
    })
})
