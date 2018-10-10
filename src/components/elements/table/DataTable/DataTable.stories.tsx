import { action } from '@storybook/addon-actions'
import { boolean } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Button } from '../../button/Button/Button'

import { DataTable } from './DataTable'

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

storiesOf('Components/Table', module)
    .add('DataTable', () => (
        // tslint:disable jsx-no-lambda
        <DataTable
            rows={boolean('empty', false) ? [] : rows}
            onSortChange={action('sort-change')}
            sort={['id', '-name']}
            loading={boolean('loading', false)}
            columns={[
                { name: 'id', header: 'ID', sortable: true, render: (row: Row) => row.id },
                { name: 'name', header: 'Name', sortable: true, render: (row: Row) => row.name },
                { name: 'age', header: 'Age', render: (row: Row) => row.age },
                {
                    name: 'buttons',
                    style: { textAlign: 'right', whiteSpace: 'nowrap' },
                    render: (row: Row) => (
                        <>
                            <Button size='small' skin='ghost' icon='pen' />
                            <Button size='small' skin='ghost' icon='dots' />
                        </>
                    ),
                },
            ]}
        />
    ))
