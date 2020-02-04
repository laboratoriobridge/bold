import { act, render } from '@testing-library/react'
import React from 'react'

import { DefaultItemType } from '../SelectSingle'

import { MultiDownshift, MultiDownshiftProps } from './MultiDownshift'

const items: DefaultItemType[] = [
  { value: 1, label: 'Apple' },
  { value: 2, label: 'Banana' },
  { value: 3, label: 'Grape' },
  { value: 4, label: 'Orange' },
  { value: 5, label: 'Pear' },
]

// Mock console.warn to get rid of default itemIsEqual prop warning
let consoleWarnSpy = null
beforeEach(() => (consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation(() => null)))

const createComponent = (props: Partial<MultiDownshiftProps<DefaultItemType>> = {}) => {
  return <MultiDownshift items={items} children={jest.fn()} {...props} />
}

describe('selectedItems', () => {
  it('should return selectedItems as render prop', () => {
    const children = jest.fn()
    render(createComponent({ selectedItems: [items[0]], children }))
    expect(children).toHaveBeenCalledTimes(1)
    expect(children.mock.calls[0][0].selectedItems).toEqual([items[0]])
  })
  it('should keep selectedItems when items is changed', () => {
    const children = jest.fn()
    const { rerender } = render(createComponent({ selectedItems: [items[0], items[1]], children }))
    rerender(
      createComponent({
        items: [
          { value: 2, label: 'Banana' },
          { value: 3, label: 'Grape' },
        ],
        selectedItems: [items[0]],
        children,
      })
    )
    expect(children).toHaveBeenCalledTimes(3)
    expect(children.mock.calls[2][0].selectedItems).toEqual([items[0]])
  })
})

describe('isSelected', () => {
  it('should return true if argument is an item selected', () => {
    const children = jest.fn()
    render(createComponent({ selectedItems: [items[0]], children }))
    const isSelected = children.mock.calls[0][0].isSelected
    expect(isSelected(items[0])).toBeTruthy()
    expect(isSelected(items[1])).toBeFalsy()
  })
  it('should compare items using the provided itemIsEqual prop', () => {
    const children = jest.fn()
    render(createComponent({ selectedItems: [items[0]], children, itemIsEqual: (a, b) => a.value === b.value }))
    const isSelected = children.mock.calls[0][0].isSelected
    expect(isSelected({ value: 1, label: 'Apple' })).toBeTruthy()
    expect(isSelected({ value: 2, label: 'Apple' })).toBeFalsy()
    expect(isSelected({ value: 1, label: 'Banana' })).toBeTruthy()
    expect(isSelected({ value: 2, label: 'Banana' })).toBeFalsy()
  })
})

describe('addItem', () => {
  it('should add an selectedItem', () => {
    const children = jest.fn()
    const { rerender } = render(createComponent({ selectedItems: [items[0]], children }))
    const addItem = children.mock.calls[0][0].addItem
    act(() => addItem(items[1]))
    rerender(createComponent({ children }))
    expect(children.mock.calls[1][0].selectedItems).toEqual([items[0], items[1]])
  })
  it('should skip item if already selected', () => {
    const children = jest.fn()
    const { rerender } = render(createComponent({ selectedItems: [items[0]], children }))
    const addItem = children.mock.calls[0][0].addItem
    act(() => addItem({ value: 1, label: 'Apple' }))
    rerender(createComponent({ children }))
    expect(children.mock.calls[1][0].selectedItems).toEqual([items[0]])
  })
  it('should call onChange with new values', () => {
    const children = jest.fn()
    const handleChange = jest.fn()
    render(createComponent({ selectedItems: [items[0]], children, onChange: handleChange }))
    const addItem = children.mock.calls[0][0].addItem
    act(() => addItem(items[1]))
    expect(handleChange).toHaveBeenLastCalledWith([items[0], items[1]], expect.anything())
  })
})

describe('removeItem', () => {
  it('should remove an selectedItem', () => {
    const children = jest.fn()
    const { rerender } = render(createComponent({ selectedItems: [items[0]], children }))
    const removeItem = children.mock.calls[0][0].removeItem
    act(() => removeItem(items[0]))
    rerender(createComponent({ children }))
    expect(children.mock.calls[1][0].selectedItems).toEqual([])
  })
  it('should compare item by equality, not reference', () => {
    const children = jest.fn()
    const { rerender } = render(createComponent({ selectedItems: [items[0]], children }))
    const removeItem = children.mock.calls[0][0].removeItem
    act(() => removeItem({ value: 1, label: 'Apple' }))
    rerender(createComponent({ children }))
    expect(children.mock.calls[1][0].selectedItems).toEqual([])
  })
  it('should call onChange with new values', () => {
    const children = jest.fn()
    const handleChange = jest.fn()
    render(createComponent({ selectedItems: [items[0]], children, onChange: handleChange }))
    const removeItem = children.mock.calls[0][0].removeItem
    act(() => removeItem(items[0]))
    expect(handleChange).toHaveBeenLastCalledWith([], expect.anything())
  })
})

describe('itemIsEqual', () => {
  it('should allow override of internal itemIsEqual comparision by prop', () => {
    const children = jest.fn()
    const itemsCopy = items.map(item => ({ ...item, __typename: 'Fruit' }))

    const { rerender } = render(createComponent({ children, selectedItems: [items[0], items[1]] }))
    rerender(
      createComponent({
        children,
        selectedItems: [items[0], items[1]],
        items: itemsCopy,
        itemIsEqual: (a, b) => a.value === b.value,
      })
    )

    expect(children).toHaveBeenCalledTimes(3)
    const { isSelected, addItem, removeItem } = children.mock.calls[2][0]
    expect(isSelected(itemsCopy[0])).toEqual(true)
    expect(isSelected(itemsCopy[2])).toEqual(false)

    act(() => {
      addItem(itemsCopy[0])
      removeItem(itemsCopy[1])
    })
    expect(children).toHaveBeenCalledTimes(5)
    expect(children.mock.calls[3][0].selectedItems).toEqual([items[0]])
  })
  it('should emit a console warning when using the default itemIsEqual prop', () => {
    render(createComponent())
    // Assert just first call (since it is called more than once for each downshift item)
    expect(consoleWarnSpy.mock.calls[0]).toMatchSnapshot()
  })
})
