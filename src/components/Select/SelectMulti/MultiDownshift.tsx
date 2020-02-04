// From downshift examples

import Downshift, { DownshiftState, StateChangeOptions } from 'downshift'
import React, { useEffect, useRef, useState } from 'react'

import { isEqual as deepIsEqual, Omit, some } from '../../../util'
import { SelectDownshift, SelectDownshiftProps, SelectDownshiftRenderProps } from '../SelectSingle/SelectDownshift'

export interface MultiDownshiftProps<T> extends Omit<SelectDownshiftProps<T>, 'onSelect' | 'onChange'> {
  selectedItems?: T[]
  itemIsEqual?(a: T, b: T): boolean
  onSelect?(selectedItems: T[], stateAndHelpers: MultiSelectRenderProps<T>): void
  onChange?(selectedItems: T[], stateAndHelpers: MultiSelectRenderProps<T>): void
  children?(downshift: MultiSelectRenderProps<T>): React.ReactNode
}

export interface MultiSelectRenderProps<T> extends SelectDownshiftRenderProps<T> {
  selectedItems: T[]
  isSelected(item: T): boolean
  addItem(item: T): void
  removeItem(item: T): void
}

export function MultiDownshift<T>(props: MultiDownshiftProps<T>) {
  const downshiftRef = useRef<SelectDownshiftRenderProps<T>>()

  const [selectedItems, setSelectedItems] = useState<T[]>(props.selectedItems)
  const [changed, setChanged] = useState(false)

  useEffect(() => {
    setSelectedItems(props.selectedItems)
  }, [props.selectedItems])

  useEffect(() => {
    if (downshiftRef.current && changed) {
      props.onChange && props.onChange(selectedItems, getStateAndHelpers(downshiftRef.current))
      props.onSelect && props.onSelect(selectedItems, getStateAndHelpers(downshiftRef.current))
      setChanged(false)
    }
  }, [selectedItems])

  const isSelected = (item: T) => some(selectedItems, i => props.itemIsEqual(i, item))

  const handleChange = (selectedItem: T) => {
    if (selectedItem) {
      if (isSelected(selectedItem)) {
        removeItem(selectedItem)
      } else {
        addItem(selectedItem)
      }
    }
  }

  const removeItem = (selectedItem: T) => {
    setChanged(true)
    setSelectedItems(currentItems => currentItems.filter(item => !props.itemIsEqual(selectedItem, item)))
  }

  const addItem = (item: T) => {
    setChanged(true)
    if (!isSelected(item)) {
      setSelectedItems(currentItems => [...currentItems, item])
    }
  }

  const getStateAndHelpers = (downshift: SelectDownshiftRenderProps<T>): MultiSelectRenderProps<T> => {
    downshiftRef.current = downshift

    return {
      ...downshift,
      selectedItems,
      isSelected,
      addItem,
      removeItem,
    }
  }

  const { children, onSelect, ...rest } = props

  // TODO: compose together props (rather than overwriting them) like downshift does
  return (
    <SelectDownshift<T>
      {...rest}
      stateReducer={stateReducer}
      onChange={handleChange}
      selectedItem={null}
      keepFilterAfterSelect
    >
      {downshift => children(getStateAndHelpers(downshift))}
    </SelectDownshift>
  )
}

MultiDownshift.defaultProps = {
  selectedItems: [],
  itemIsEqual: (a, b) => {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        'MultiDownshift: using a deep compare itemIsEqual implementation for object comparision.' +
          ' You should probably provide your own `itemIsEqual` implementation.'
      )
    }

    return deepIsEqual(a, b)
  },
} as Partial<MultiDownshiftProps<any>>

const stateReducer = (
  state: DownshiftState<any>,
  changes: StateChangeOptions<any>
): Partial<StateChangeOptions<any>> => {
  const { inputValue, ...rest } = changes

  if (changes.type === undefined && state.isOpen && !changes.isOpen) {
    // Clear inputValue when select is closed
    return { ...changes, inputValue: '' }
  }

  switch (changes.type) {
    case Downshift.stateChangeTypes.changeInput:
      return {
        ...rest,
        inputValue,
      }
    case Downshift.stateChangeTypes.keyDownEnter:
    case Downshift.stateChangeTypes.clickItem:
      return {
        ...rest,
        highlightedIndex: state.highlightedIndex,
        isOpen: true,
      }
    default:
      return rest
  }
}
