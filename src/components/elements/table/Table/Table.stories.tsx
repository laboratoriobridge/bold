import { action } from '@storybook/addon-actions'
import { storiesOf } from '@storybook/react'
import * as React from 'react'

import { withPropTypes, withTheme } from '../../../../stories-addons'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './index'

storiesOf('Components/Table', module)
    // .addDecorator(withKnobs)
    .addDecorator(withPropTypes())
    .addDecorator(withTheme())
    .add('Table', () => (
        <Table>
            <TableHead>
                <TableRow>
                    <TableHeader
                        sortable={true}
                        sortDirection='ASC'
                        onSortChange={action('sort-changed')}
                    >
                        Header #1
                    </TableHeader>
                    <TableHeader>
                        Header #2
                    </TableHeader>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                    <TableCell colSpan={2}>Row #1</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Row #2 - Cell #1</TableCell>
                    <TableCell>Row #2 - Cell #2</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Row #3 - Cell #1</TableCell>
                    <TableCell>Row #3 - Cell #2</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    ))
