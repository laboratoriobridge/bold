import { mount, render } from 'enzyme'
import * as React from 'react'

import { withTheme } from '../../../../test'
import { Paginator } from '../../Paginator/Paginator'

import { TableFooter, TableFooterProps } from './TableFooter'

const createComponent = (props?: Partial<TableFooterProps>) => {
    return mount(withTheme(
        <TableFooter
            page={1}
            pageSize={10}
            totalPages={10}
            totalElements={100}
            onPageChange={jest.fn()}
            onSizeChange={jest.fn()}
            {...props}
        />
    ))
}

it('renders correctly', () => {
    expect(createComponent().render()).toMatchSnapshot()
})

it('renders without pagination', () => {
    expect(createComponent({ totalElements: 10 }).render()).toMatchSnapshot()
})

it('does not show pagination options if totalElements is less than minimum optionSize', () => {
    const wrapper = createComponent({ totalElements: 30, sizeOptions: [50, 30, 100] })
    expect(wrapper.find(Paginator).length).toEqual(0)

    const wrapper2 = createComponent({ totalElements: 31, sizeOptions: [50, 30, 100] })
    expect(wrapper2.find(Paginator).length).toEqual(1)
})
