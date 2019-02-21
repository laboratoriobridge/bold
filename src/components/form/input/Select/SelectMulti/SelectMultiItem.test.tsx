import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { withTheme } from '../../../../../test'

import { SelectMultiItem } from './SelectMultiItem'

it('should render correctly', () => {
    const { container } = render(withTheme(<SelectMultiItem style={{ color: 'red' }} onRemove={jest.fn()} />))
    expect(container).toMatchSnapshot()
})

it('should call onRemove when clicked on remove button', () => {
    const remove = jest.fn()
    const { getByTitle } = render(withTheme(<SelectMultiItem onRemove={remove} />))
    expect(remove).not.toHaveBeenCalled()
    fireEvent.click(getByTitle('Remover'))
    expect(remove).toHaveBeenCalled()
})

it('should not show remove button when disabled', () => {
    const { queryByTitle } = render(withTheme(<SelectMultiItem onRemove={jest.fn()} disabled />))
    expect(queryByTitle('Remover')).toBeFalsy()
})
