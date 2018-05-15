import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { TableFilledBody, TableFilledBodyProps } from './TableFilledBody'
import { TableLoadingRow } from './TableLoadingRow'
import { TablePlaceholderRow } from './TablePlaceholderRow'

interface Row {
    id: number
    name: string
}

const rows: Row[] = [
    { id: 1, name: 'MARIA MACHADO DE JESUS' },
    { id: 2, name: 'JOSÉ DA SILVA MOREIRA' },
    { id: 3, name: 'ALICE BARBOSA' },
]

const createTable = (props?: Partial<TableFilledBodyProps>) => withTheme(
    <table>
        <TableFilledBody
            columns={[
                { name: 'id', header: 'ID', sortable: true, render: (row: Row) => row.id },
                { name: 'name', header: 'Name', sortable: true, render: (row: Row) => row.name },
            ]}
            rows={rows}
            loading={false}
            {...props}
        />
    </table>
)

it('should render correctly', () => {
    expect(render(createTable())).toMatchSnapshot()
})

it('should render the TableLoadingRow if loading is true', () => {
    expect(mount(createTable({ loading: false })).find(TableLoadingRow).length).toEqual(0)
    expect(mount(createTable({ loading: true })).find(TableLoadingRow).length).toEqual(1)
})

it('should render TablePlaceholderRow if loading is false and there are no rows', () => {
    expect(mount(createTable()).find(TablePlaceholderRow).length).toEqual(0)
    expect(mount(createTable({ rows: [], loading: true })).find(TablePlaceholderRow).length).toEqual(0)
    expect(mount(createTable({ rows: [], loading: false })).find(TablePlaceholderRow).length).toEqual(1)
})
