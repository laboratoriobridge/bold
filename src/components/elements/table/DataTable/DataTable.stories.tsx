import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Page } from '../../../../store/requester'
import { withPropTypes, withTheme } from '../../../../stories-addons'
import { Text } from '../../textual/Text/Text'
import { TableColumn } from '../Table/Table'

import { DataTable, DataTableColumn } from './DataTable'

interface Row {
    id: number
    name: string
    cpf: string
    cns: string
}

const rows: Row[] = [
    { id: 1, name: 'MARIA MACHADO DE JESUS', cns: '000.000', cpf: '000.111.222-33' },
    { id: 2, name: 'MARIA MACHADO DE JESUS', cns: '000.000', cpf: '000.111.222-33' },
    { id: 3, name: 'MARIA MACHADO DE JESUS', cns: '000.000', cpf: '000.111.222-33' },
]

const page: Page<Row> = {
    content: rows,
    first: true,
    last: true,
    number: 0,
    numberOfElements: 10,
    totalElements: rows.length,
    size: 10,
    sort: [{ property: 'cns', direction: 'DESC' }, { property: 'nome', direction: 'ASC' }],
    totalPages: 1,
}

storiesOf('Components', module)
    // .addDecorator(withKnobs)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .add('DataTable', () => (
        // tslint:disable jsx-no-lambda
        <DataTable
            page={page}
            onSortChange={action('sort')}
            onPageChange={action('page-change')}
            onSizeChange={action('size-change')}
        >
            <TableColumn
                title='ID'
                render={(row: Row) => (
                    <Text>{row.id}</Text>
                )}
            />
            <DataTableColumn
                title='Profissional'
                name='nome'
                render={(row: Row) => (
                    <Text>{row.name}</Text>
                )}
            />
            <DataTableColumn
                title='CNS'
                name='cns'
                render={(row: Row) => (
                    <Text>{row.cns}</Text>
                )}
            />
            <DataTableColumn
                title='CPF'
                name='cpf'
                render={(row: Row) => (
                    <Text>{row.cpf}</Text>
                )}
            />
            <DataTableColumn
                name='buttons'
                render={(row: Row) => (
                    <div>
                        <a href=''>a</a>
                        {' '}|{' '}
                        <a href=''>b</a>
                    </div>
                )}
            />
        </DataTable>
    ))
