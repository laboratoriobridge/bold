import { mount, render } from 'enzyme'
import * as React from 'react'

import { Page } from '../../../../store/requester'
import { withTheme } from '../../../../test'
import { SortableLabel } from '../SortableLabel/SortableLabel'

import { DataTable } from './DataTable'
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
const table = withTheme(
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
    />
)

it('should render correctly', () => {
    expect(render(table)).toMatchSnapshot()
})

it('should call onSortChange with right parameters when clicked over column title', () => {
    const wrapper = mount(table)
    wrapper.find('th[data-name="id"]').find(SortableLabel).simulate('click')
    expect(sortHandler).toHaveBeenLastCalledWith({ id: 'DESC' })

    wrapper.find('th[data-name="name"]').find(SortableLabel).simulate('click')
    expect(sortHandler).toHaveBeenLastCalledWith({ name: 'ASC' })
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
