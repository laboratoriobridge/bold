import { render } from '@testing-library/react'
import React from 'react'

import { Select } from '../Select'

import { SelectProps } from './Select'
import { DefaultItemType } from './SelectSingle/SelectSingle'

const items: DefaultItemType[] = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Banana' },
  { value: 3, label: 'Grape' },
  { value: 4, label: 'Orange' },
  { value: 5, label: 'Pear' },
]

afterEach(jest.clearAllMocks)

// tslint:disable jsx-no-lambda
function createSelect(props: Partial<SelectProps<DefaultItemType>> = {}) {
  return <Select<DefaultItemType> items={items} itemToString={item => item && item.label} {...props} />
}

describe('single', () => {
  it('should render without errors', () => {
    render(createSelect({ value: items[3] }))
  })
  it('should warn when value is an array', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => null)
    render(createSelect({ value: [] }))
    expect(spy).toMatchSnapshot()
  })
})

describe('multiple', () => {
  it('should render without errors', () => {
    render(createSelect({ multiple: true, value: [items[4], items[3]] }))
  })
  it('should warn when value is NOT an array', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => null)
    render(createSelect({ multiple: true, value: items[0] }))
    expect(spy).toMatchSnapshot()
  })
})
