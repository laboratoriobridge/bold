import * as React from 'react'
import { cleanup, fireEvent, render } from 'react-testing-library'

import { withTheme } from '../../../../test'

import { DefaultItemType, Select, SelectProps } from './Select'

const items: DefaultItemType[] = [
    { value: 1, label: 'Apple' },
    { value: 2, label: 'Banana' },
    { value: 3, label: 'Grape' },
    { value: 4, label: 'Orange' },
    { value: 5, label: 'Pear' },
]

// tslint:disable jsx-no-lambda
const createSelect = (props: Partial<SelectProps> = {}) => {
    return withTheme(
        <Select items={items} itemToString={item => item.label} {...props} />
    )
}

afterEach(cleanup)

it('should render correctly when closed', () => {
    const { container } = render(createSelect())
    expect(container).toMatchSnapshot()
})

it('should render correctly when opened', () => {
    const { container } = render(createSelect({ isOpen: true }))
    expect(container).toMatchSnapshot()
})

it('should accept value prop', () => {
    const { container } = render(createSelect({ value: items[4] }))
    expect(container.querySelector('input').value).toEqual(items[4].label)
})

it('should open the select menu when input is focused', () => {
    const { container } = render(createSelect())
    expect(container.querySelector('ul')).toBeFalsy()
    fireEvent.focus(container.querySelector('input'))
    expect(container.querySelector('ul')).toBeTruthy()
})

it('should call the onChange event when an item is clicked', () => {
    const onChange = jest.fn()
    const { getByText } = render(createSelect({ onChange, isOpen: true }))
    expect(onChange).not.toHaveBeenCalled()
    fireEvent.click(getByText(items[2].label))
    expect(onChange).toHaveBeenLastCalledWith(items[2], expect.anything())
})
