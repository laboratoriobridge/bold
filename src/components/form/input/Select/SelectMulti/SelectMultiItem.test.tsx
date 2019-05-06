import React from 'react'
import { fireEvent, render } from 'react-testing-library'

import { LocaleContext } from '../../../../../locale'
import ptBr from '../../../../../locale/locales/pt-BR'

import { SelectMultiItem } from './SelectMultiItem'

it('should render correctly', () => {
  const { container } = render(<SelectMultiItem style={{ color: 'red' }} onRemove={jest.fn()} />)
  expect(container).toMatchSnapshot()
})

it('should call onRemove when clicked on remove button', () => {
  const remove = jest.fn()
  const { getByTitle } = render(<SelectMultiItem onRemove={remove} />)
  expect(remove).not.toHaveBeenCalled()
  fireEvent.click(getByTitle('Remove'))
  expect(remove).toHaveBeenCalled()
})

it('should not show remove button when disabled', () => {
  const { queryByTitle } = render(<SelectMultiItem onRemove={jest.fn()} disabled />)
  expect(queryByTitle('Remove')).toBeFalsy()
})

it('should allow message customization via locale context', () => {
  const { queryByTitle } = render(
    <LocaleContext.Provider value={ptBr}>
      <SelectMultiItem onRemove={jest.fn()} disabled>
        Test
      </SelectMultiItem>
    </LocaleContext.Provider>
  )
  expect(queryByTitle('Remover')).toBeFalsy()
})
