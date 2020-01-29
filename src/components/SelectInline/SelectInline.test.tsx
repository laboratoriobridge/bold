import { fireEvent, render } from '@testing-library/react'
import { resetIdCounter } from 'downshift'
import React from 'react'

import { DefaultItemType } from '../Select/SelectSingle'

import { SelectInline, SelectInlineProps } from './SelectInline'

const items: DefaultItemType[] = [
  { label: 'Value #001', value: 1 },
  { label: 'Value #002', value: 2 },
  { label: 'Value #003', value: 3 },
  { label: 'Value #004', value: 4 },
]

const itemToString = (item: DefaultItemType) => item && item.label

const SelectInlineTest = (props?: Partial<SelectInlineProps<DefaultItemType>>) => (
  <SelectInline<DefaultItemType>
    value={items[0]}
    items={items}
    itemToString={itemToString}
    defaultButtonText='SelectInline'
    placeholder='Search for a value'
    {...props}
  />
)

beforeEach(() => resetIdCounter())

describe('SelectInline', () => {
  it('should render correctly when closed', () => {
    const { container } = render(<SelectInlineTest />)
    expect(container).toMatchSnapshot()
  })
  it('should render correctly when opened', () => {
    const { container } = render(<SelectInlineTest />)
    const button = container.querySelector('button')
    fireEvent.click(button)
    expect(document.body).toMatchSnapshot()
  })
  it('should make the popper content visible on click', async () => {
    const { container } = render(<SelectInlineTest />)
    const button = container.querySelector('button')
    expect(container.querySelector('ul')).toBeFalsy()
    fireEvent.click(button)
    expect(container.querySelector('ul')).toBeTruthy()
  })

  it('should focus the input field when opened', async () => {
    const { container } = render(<SelectInlineTest />)
    fireEvent.click(container.querySelector('button'))
    expect(document.activeElement).toEqual(container.querySelector('input'))
  })
  it('should contain search input box', () => {
    const { container } = render(<SelectInlineTest />)
    fireEvent.click(container.querySelector('button'))
    expect(container.querySelector('input')).not.toBeNull()
  })
})
