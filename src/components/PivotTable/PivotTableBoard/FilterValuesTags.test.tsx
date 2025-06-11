import { render, screen } from '@testing-library/react'
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
      <FilterValuesTags filterState={filterState} keys={keys} keyMapping={keyMapping} handleFilterUpdate={jest.fn()} />
    )

    expect(container.firstChild).toBeEmptyDOMElement()
  })

  it('should render tags correctly for an active filter', () => {
    const filterState: FieldFiltersByKey<Test> = new Map([['name', new Set(['Apple', 'Banana'])]])

    const { getByText, queryByText } = render(
      <FilterValuesTags filterState={filterState} keys={keys} keyMapping={keyMapping} handleFilterUpdate={jest.fn()} />
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

    render(
      <FilterValuesTags filterState={filterState} keys={keys} keyMapping={keyMapping} handleFilterUpdate={jest.fn()} />
    )

    expect(screen.getByText('Apple')).toBeInTheDocument()
    expect(screen.getByText('Banana')).toBeInTheDocument()
    expect(screen.getByText('Blackberry')).toBeInTheDocument()

    expect(screen.queryByText('Lemon')).not.toBeInTheDocument()

    expect(screen.getByText('+ 1 Name')).toBeInTheDocument()
  })
})
