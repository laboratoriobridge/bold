import { act, fireEvent, render } from '@testing-library/react'
import { resetIdCounter } from 'downshift'
import React from 'react'

import { DefaultItemType } from '../Select/SelectSingle'

import { ComboboxInline, ComboboxInlineProps } from '../Combobox/ComboboxInline'

const items: DefaultItemType[] = [
  { label: 'Value #001', value: 1 },
  { label: 'Value #002', value: 2 },
  { label: 'Value #003', value: 3 },
  { label: 'Value #004', value: 4 },
]

const itemToString = (item: DefaultItemType) => item && item.label

const ComboboxInlineTest = (props?: Partial<ComboboxInlineProps<DefaultItemType>>) => (
  <ComboboxInline<DefaultItemType>
    value={items[0]}
    items={items}
    itemToString={itemToString}
    defaultButtonText='ComboboxInline'
    searchInputPlaceholder='Search for a value'
    openOnFocus
    loading={false}
    debounceMilliseconds={500}
    {...props}
  />
)

beforeEach(() => resetIdCounter())

describe('ComboboxInline', () => {
  it('should render correctly when closed', () => {
    const { container } = render(<ComboboxInlineTest />)
    expect(container).toMatchSnapshot()
  })
  it('should render correctly when opened', async () => {
    let container: HTMLElement
    await act(async () => {
      const result = render(<ComboboxInlineTest />)
      container = result.container
    })
    const button = container.querySelector('button')
    await act(async () => {
      fireEvent.click(button)
    })
    expect(document.body).toMatchSnapshot()
  })
  it('should make the popper content visible on click', async () => {
    let container: HTMLElement
    await act(async () => {
      const result = render(<ComboboxInlineTest />)
      container = result.container
    })
    const button = container.querySelector('button')
    expect(container.querySelector('ul')).toBeFalsy()
    await act(async () => {
      fireEvent.click(button)
    })
    expect(container.querySelector('ul')).toBeTruthy()
  })

  it('should focus the input field when opened', async () => {
    let container: HTMLElement
    await act(async () => {
      const result = render(<ComboboxInlineTest />)
      container = result.container
    })
    const button = container.querySelector('button')
    await act(async () => {
      fireEvent.click(button)
    })
    expect(document.activeElement).toEqual(container.querySelector('input'))
  })
  it('should contain search input box', async () => {
    let container: HTMLElement
    await act(async () => {
      const result = render(<ComboboxInlineTest />)
      container = result.container
    })
    const button = container.querySelector('button')
    await act(async () => {
      fireEvent.click(button)
    })
    expect(container.querySelector('input')).not.toBeNull()
  })
})
