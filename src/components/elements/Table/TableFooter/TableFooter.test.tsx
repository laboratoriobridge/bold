import { mount, render } from 'enzyme'
import React from 'react'

import { withTheme } from '../../../../test'
import { Paginator } from '../../Paginator/Paginator'

import { TableFooter, TableFooterProps } from './TableFooter'

const createComponent = (props?: Partial<TableFooterProps>) => {
    return withTheme(
        <TableFooter
            page={1}
            pageSize={10}
            totalPages={10}
            totalElements={100}
            onPageChange={jest.fn()}
            onSizeChange={jest.fn()}
            {...props}
        />
    )
}

it('renders correctly', () => {
    expect(render(createComponent())).toMatchSnapshot()
})

it('renders without pagination', () => {
    expect(render(createComponent({ totalElements: 10 }))).toMatchSnapshot()
})

it('does not show pagination options if totalElements is less than pageSize and minimum optionSize', () => {
    const wrapper = mount(createComponent({ totalElements: 10, pageSize: 10, sizeOptions: [10, 30, 50, 100] }))
    expect(wrapper.find(Paginator).length).toEqual(0)

    const wrapper2 = mount(createComponent({ totalElements: 11, pageSize: 10, sizeOptions: [10, 30, 50, 100] }))
    expect(wrapper2.find(Paginator).length).toEqual(1)

    const wrapper3 = mount(createComponent({ totalElements: 15, pageSize: 30, sizeOptions: [10, 30, 50, 100] }))
    expect(wrapper3.find(Paginator).length).toEqual(1)
})
