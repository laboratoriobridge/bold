import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'

import { TableFooter } from './TableFooter'

it('deve renderizar corretamente', () => {
    expect(render(withTheme(
        <TableFooter
            page={1}
            pageSize={10}
            totalPages={10}
            totalElements={100}
            onPageChange={jest.fn()}
            onSizeChange={jest.fn()}
        />
    ))).toMatchSnapshot()
})
