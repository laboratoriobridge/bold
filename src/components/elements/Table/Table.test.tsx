import { render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../test'

import { Table, TableColumn } from './Table'

interface Row {
    id: number
    name: string
}

const rows = [
    { id: 1, name: 'MARIA MACHADO DE JESUS' },
    { id: 2, name: 'MARIA MACHADO DE JESUS' },
]

it('deve renderizar corretamente', () => {
    // tslint:disable jsx-no-lambda
    const wrapper = render(withTheme(
        <Table rows={rows} styles={{ color: 'red' }}>
            <TableColumn
                title='Column ID'
                render={(row: Row) => (
                    <span>{row.id}</span>
                )}
            />
            <TableColumn
                title='Column name'
                render={(row: Row) => (
                    <span>{row.name}</span>
                )}
            />
        </Table>
    ))

    expect(wrapper).toMatchSnapshot()
})
