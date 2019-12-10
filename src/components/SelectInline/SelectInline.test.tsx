import { fireEvent, render, wait } from '@testing-library/react'
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

const createSelectInline = (props?: Partial<SelectInlineProps<DefaultItemType>>) => (
  <SelectInline<DefaultItemType>
    value={items[0]}
    items={items}
    itemToString={itemToString}
    defaultButtonText='SelectInline'
    placeholder='Search for a value'
    {...props}
  />
)

const createSelectInlineWithoutSearch = (props?: Partial<SelectInlineProps<DefaultItemType>>) => (
  <SelectInline<DefaultItemType>
    value={items[0]}
    items={items}
    itemToString={itemToString}
    defaultButtonText='SelectInline'
    placeholder='Search for a value'
    search={false}
    {...props}
  />
)

beforeEach(() => resetIdCounter())

describe('SelectInline', () => {
  it('should render correctly when closed', () => {
    const { container } = render(createSelectInline())
    expect(container).toMatchSnapshot()
  })
  it('should render correctly with button placeholder', () => {
    const props: Partial<SelectInlineProps<DefaultItemType>> = {
      value: null,
      buttonProps: { placeholder: 'Placeholder' },
    }
    const { container } = render(createSelectInline(props))
    expect(container).toMatchSnapshot()
  })
  it('should make the popper content visible on click', async () => {
    const { container } = render(createSelectInline())
    const button = container.querySelector('button')

    expect(document.body.querySelector('[data-visible=true]')).toBeFalsy()
    fireEvent.click(button)
    expect(document.body.querySelector('[data-visible=true]')).toBeTruthy()
  })
  it('should render correctly when opened', () => {
    const { container } = render(createSelectInline())
    const button = container.querySelector('button')
    fireEvent.click(button)
    expect(document.body).toMatchSnapshot()
  })
  it('should focus the input field when opened', async () => {
    const { container } = render(createSelectInline())
    const button = container.querySelector('button')
    fireEvent.click(button)
    await wait()

    const input = container.querySelector('input')
    expect(document.activeElement).toEqual(input)
  })
  it('should contain search input box', () => {
    const { container } = render(createSelectInline())
    const button = container.querySelector('button')
    fireEvent.click(button)

    fireEvent.click(button)
    expect(container.querySelector('input')).not.toBeNull()
    expect(document.body).toMatchSnapshot()
  })
  it('should not contain search input box', () => {
    const { container } = render(createSelectInlineWithoutSearch())
    const button = container.querySelector('button')
    fireEvent.click(button)

    expect(container.querySelector('input')).toBeNull()
    expect(document.body).toMatchSnapshot()
  })
})
