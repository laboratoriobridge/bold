import * as React from 'react'
import { Table, TableColumnHeader } from '../Table'
import { shallowRenderAndMatch, renderAndMatchSnapshot } from '../../../__tests__/test.defaults'

describe('Table', () => {
    it('render empty', () => {
        renderAndMatchSnapshot(<Table values={[]} />)
    })
    it('render correctly', () => {
        renderAndMatchSnapshot(
            <Table values={['#1', '#2']}>
                <TableColumnHeader title='Test' style={{ width: '20px' }} render={(row, idx) => (
                    <label>{idx} - {row}</label>
                )} />
            </Table>
        )
    })
})

