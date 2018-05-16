import { action } from '@storybook/addon-actions'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { Page } from '../../../../store/requester'
import { withPropTypes, withTheme } from '../../../../stories-addons'
import { IconButton } from '../../button/IconButton/IconButton'

import { PagedTable } from './PagedTable'
import { emptyPage } from './PagedTableConnected'

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

const page: Page<Row> = {
    content: rows,
    first: true,
    last: true,
    number: 0,
    numberOfElements: 10,
    totalElements: rows.length,
    size: 10,
    sort: [{ property: 'id', direction: 'DESC' }, { property: 'name', direction: 'ASC' }],
    totalPages: 1,
}

storiesOf('Components/Table', module)
    .addDecorator(withPropTypes())
    .addDecorator(withKnobs)
    .addDecorator(withTheme())
    .add('PagedTable', () => (
        // tslint:disable jsx-no-lambda
        <PagedTable
            page={boolean('empty', false) ? emptyPage : page}
            onSortChange={action('sort')}
            onPageChange={action('page-change')}
            onSizeChange={action('size-change')}
            loading={boolean('loading', false)}
            columns={[
                { name: 'id', header: 'ID', sortable: true, render: (row: Row) => row.id },
                { name: 'name', header: 'Name', sortable: true, render: (row: Row) => row.name },
                { name: 'age', header: 'Age', sortable: true, render: (row: Row) => row.age },
                {
                    name: 'buttons',
                    styles: { textAlign: 'right' },
                    render: (row: Row) => <IconButton icon='pen' />,
                },
            ]}
        />
    ))
