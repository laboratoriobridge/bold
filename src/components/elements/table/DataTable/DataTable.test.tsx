import { mount, render } from 'enzyme'
import * as React from 'react'

import { Page } from '../../../../store/requester'
import { withTheme } from '../../../../test'

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
    numberOfElements: 10,
    totalElements: rows.length,
    size: rows.length,
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
            title='Column ID'
            render={(row: Row) => (
                <span>{row.id}</span>
            )}
        />
        <DataTableColumn
            name='nome'
            title='Column name'
            render={(row: Row) => (
                <span>{row.name}</span>
            )}
        />
    </DataTable>
)

it('deve renderizar corretamente', () => {
    expect(render(table)).toMatchSnapshot()
})

it('deve chamar onSortChange com os parâmetros corretos ao clicar sobre o título de uma coluna', () => {
    const wrapper = mount(table)
    wrapper.find('th[data-name="id"] > a').simulate('click')
    expect(sortHandler).toHaveBeenLastCalledWith(['id,ASC'])

    wrapper.find('th[data-name="nome"] > a').simulate('click')
    expect(sortHandler).toHaveBeenLastCalledWith(['nome,DESC'])
})
