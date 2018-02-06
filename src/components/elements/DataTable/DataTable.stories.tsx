import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes } from '../../../stories-addons/withPropTypes'
import { withTheme } from '../../../stories-addons/withTheme'
import { TableColumn } from '../Table/Table'
import { Text } from '../textual/Text/Text'

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

storiesOf('Components', module)
    // .addDecorator(withKnobs)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .add('DataTable', () => (
        // tslint:disable jsx-no-lambda
        <DataTable sort={['cns,DESC', 'nome']} onSort={action('sort')} rows={rows}>
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
