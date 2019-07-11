import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { LocaleContext } from '../../../i18n'
import ptBr from '../../../i18n/locales/pt-BR'

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
