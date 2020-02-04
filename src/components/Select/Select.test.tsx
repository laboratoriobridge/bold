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

function SelectTest(props: Partial<SelectProps<DefaultItemType>>) {
  return <Select<DefaultItemType> items={items} itemToString={item => item && item.label} {...props} />
}

describe('single', () => {
  it('should render without errors', () => {
    render(<SelectTest value={items[3]} />)
  })
  it('should warn when value is an array', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => null)
    render(<SelectTest value={[]} />)
    expect(spy).toMatchSnapshot()
  })
})

describe('multiple', () => {
  it('should render without errors', () => {
    render(SelectTest({ multiple: true, value: [items[4], items[3]] }))
  })
  it('should warn when value is NOT an array', () => {
    const spy = jest.spyOn(console, 'warn').mockImplementation(() => null)
    render(<SelectTest value={items[0]} multiple />)
    expect(spy).toMatchSnapshot()
  })
  it('should throw an error when createNewItem is set together with multiple prop', () => {
    jest.spyOn(console, 'error').mockImplementation(() => undefined)

    expect(() => {
      render(<SelectTest createNewItem={jest.fn()} multiple />)
    }).toThrowErrorMatchingInlineSnapshot(`"Select does not support props 'createNewItem' and 'multiple' together"`)
  })
})
