import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes } from '../../../stories-addons/withPropTypes'
import { withTheme } from '../../../stories-addons/withTheme'
import { Text } from '../textual/Text/Text'

import { Table, TableColumn } from './Table'

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
    .add('Table', () => (
        // tslint:disable jsx-no-lambda
        <Table rows={rows}>
            <TableColumn
                title='ID'
                render={(row: Row) => (
                    <Text>{row.id}</Text>
                )}
            />
            <TableColumn
                title='Profissional'
                render={(row: Row) => (
                    <Text>{row.name}</Text>
                )}
            />
            <TableColumn
                title='CNS'
                render={(row: Row) => (
                    <Text>{row.cns}</Text>
                )}
            />
            <TableColumn
                title='CPF'
                render={(row: Row) => (
                    <Text>{row.cpf}</Text>
                )}
            />
            <TableColumn
                render={(row: Row) => (
                    <div>
                        <a href=''>a</a>
                        {' '}|{' '}
                        <a href=''>b</a>
                    </div>
                )}
            />
        </Table>
    ))
