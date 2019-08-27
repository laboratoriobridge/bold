import { fireEvent, render } from '@testing-library/react'
import React from 'react'

import { SelectMultiInput, SelectMultiInputProps } from './SelectMultiInput'

const items = ['Apple', 'Banana', 'Grape', 'Pear']
const renderItem = item => item

function SelectTest(props: Partial<SelectMultiInputProps<string>>) {
  return <SelectMultiInput items={items} renderItem={renderItem} onRemoveItem={jest.fn()} {...props} />
}

it('should render correctly', () => {
  const { container } = render(<SelectTest />)
  expect(container).toMatchSnapshot()
})

it('should call onRemoveItem when remove button is clicked', () => {
  const handleRemove = jest.fn()
  const { getAllByTitle } = render(<SelectTest onRemoveItem={handleRemove} />)
  expect(handleRemove).not.toHaveBeenCalled()

  fireEvent.click(getAllByTitle('Remove')[1])
  expect(handleRemove).toHaveBeenCalledWith(items[1])
})
