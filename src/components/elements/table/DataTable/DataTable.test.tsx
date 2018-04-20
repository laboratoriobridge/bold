import { mount, render } from 'enzyme'
import * as React from 'react'

import { Page } from '../../../../store/requester'
import { withTheme } from '../../../../test'
import { SortableLabel } from '../SortableLabel/SortableLabel'

import { DataTable, DataTableColumn } from './DataTable'

interface Row {
    id: number
    name: string
}

const rows = [
    { id: 1, name: 'MARIA MACHADO DE JESUS' },
    { id: 2, name: 'MARIA MACHADO DE JESUS' },
]

const page: Page<Row> = {
    content: rows,
    first: true,
    last: true,
    number: 0,
    size: 10,
    numberOfElements: 3,
    totalElements: rows.length,
    sort: [{ property: 'nome', direction: 'ASC' }, { property: 'id', direction: 'DESC' }],
    totalPages: 1,
}

const sortHandler = jest.fn()
const pageHandler = jest.fn()
const sizeHandler = jest.fn()
const table = withTheme(
    // tslint:disable jsx-no-lambda
    <DataTable page={page} onSortChange={sortHandler} onPageChange={pageHandler} onSizeChange={sizeHandler}>
        <DataTableColumn
            name='id'
            sortable={true}
            title='Column ID'
            render={(row: Row) => (
                <span>{row.id}</span>
            )}
        />
        <DataTableColumn
            name='nome'
            sortable={true}
            title='Column name'
            render={(row: Row) => (
                <span>{row.name}</span>
            )}
        />
        <DataTableColumn
            name='actions'
            title='Column actions'
            render={(row: Row) => (
                <span />
            )}
        />
    </DataTable>
)

it('should render correctyle', () => {
    expect(render(table)).toMatchSnapshot()
})

it('should call onSortChange with right parameters when clicked over column title', () => {
    const wrapper = mount(table)
    wrapper.find('th[data-name="id"]').find(SortableLabel).simulate('click')
    expect(sortHandler).toHaveBeenLastCalledWith(['id,ASC'])

    wrapper.find('th[data-name="nome"]').find(SortableLabel).simulate('click')
    expect(sortHandler).toHaveBeenLastCalledWith(['nome,DESC'])

    expect(wrapper.find('th[data-name="actions"]').find(SortableLabel).exists()).toBeFalsy()
})
