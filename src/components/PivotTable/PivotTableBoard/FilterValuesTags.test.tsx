import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { KeyMap } from '../model'
import { FieldFiltersByKey, FieldValuesByKey } from './model'
import { FilterValuesTags } from './FilterValuesTags'

describe('PivotTableBoard - FilterValuesTags', () => {
  type Test = {
    name: string
    size?: string
  }

  const keys: FieldValuesByKey<Test> = new Map([
    ['name', ['Apple', 'Banana', 'Blackberry', 'Lemon', 'Orange']],
    ['size', ['Small', 'Medium', 'Big']],
  ])

  const keyMapping: KeyMap<Test> = new Map([
    ['name', { keyName: 'Name' }],
    ['size', { keyName: 'Size' }],
  ])

  it('should not render any tags if all filter values are selected', () => {
    const filterState: FieldFiltersByKey<Test> = new Map([
      ['name', new Set(['Apple', 'Banana', 'Blackberry', 'Lemon', 'Orange'])],
    ])

    const { container } = render(
      <FilterValuesTags filterState={filterState} keys={keys} keyMapping={keyMapping} onRemoveTag={jest.fn()} />
    )

    expect(container.firstChild).toBeEmptyDOMElement()
  })

  it('should render tags correctly for an active filter', () => {
    const filterState: FieldFiltersByKey<Test> = new Map([['name', new Set(['Apple', 'Banana'])]])

    const { getByText, queryByText } = render(
      <FilterValuesTags filterState={filterState} keys={keys} keyMapping={keyMapping} onRemoveTag={jest.fn()} />
    )

    expect(getByText('Name')).toBeInTheDocument()
    expect(getByText('Apple')).toBeInTheDocument()
    expect(getByText('Banana')).toBeInTheDocument()

    expect(queryByText('Orange')).not.toBeInTheDocument()
  })

  it('should render a "+ N..." tag when filter count exceeds the limit', () => {
    const filterState: FieldFiltersByKey<Test> = new Map([
      ['name', new Set(['Apple', 'Banana', 'Blackberry', 'Lemon'])],
    ])

    const { getByText, queryByText } = render(
      <FilterValuesTags filterState={filterState} keys={keys} keyMapping={keyMapping} onRemoveTag={jest.fn()} />
    )

    expect(getByText('Apple')).toBeInTheDocument()
    expect(getByText('Banana')).toBeInTheDocument()
    expect(getByText('Blackberry')).toBeInTheDocument()

    expect(queryByText('Lemon')).not.toBeInTheDocument()

    expect(getByText('+ 1 Name')).toBeInTheDocument()
  })

  it('should call onRemoveTag with the correct key and value when a tag is removed', async () => {
    const onRemoveTag = jest.fn()
    const filterState: FieldFiltersByKey<Test> = new Map([['name', new Set(['Apple'])]])

    const { findByTestId } = render(
      <FilterValuesTags filterState={filterState} keys={keys} keyMapping={keyMapping} onRemoveTag={onRemoveTag} />
    )

    fireEvent.click(await findByTestId('remove-tag-button'))

    expect(onRemoveTag).toHaveBeenCalledTimes(1)
    expect(onRemoveTag).toHaveBeenCalledWith('name', 'Apple')
  })
})
