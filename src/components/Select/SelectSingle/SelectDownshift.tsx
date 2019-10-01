import Downshift, { ControllerStateAndHelpers, DownshiftProps, StateChangeOptions } from 'downshift'
import matchSorter from 'match-sorter'
import React, { useEffect, useState } from 'react'

export interface SelectDownshiftProps<T> extends DownshiftProps<T> {
  /**
   * Items to be populated on the select component.
   */
  items: T[]

  children?(props: SelectDownshiftRenderProps<T>): React.ReactNode

  /**
   * Called when the inputValue is changed.
   * @param filter The `inputValue` or `null` if an item is selected.
   * @param downshift The downshift controller and helpers.
   */
  onFilterChange?(filter: string, downshift: SelectDownshiftRenderProps<T>): void

  /**
   * If informed, select will allow insertion of items not present on the select.
   * @param inputValue The string type in the text box
   * @return The value that should be created and hold by the select
   */
  createNewItem?(inputValue: string): T
}

export interface SelectDownshiftRenderProps<T> extends ControllerStateAndHelpers<T>, State<T> {
  items: T[]
  setVisibleItems(visibleItems: T[]): void
}

interface State<T> {
  visibleItems: T[]
}

/**
 * Default filter prop used by the Select component.
 */
export function defaultSelectFilter<T>(
  items: T[],
  filter: string,
  itemToString: SelectDownshiftRenderProps<T>['itemToString']
): T[] {
  return matchSorter(items, filter, { keys: [itemToString] })
}

/**
 * Downshift extension with item and filter management.
 */
export function SelectDownshift<T>(props: SelectDownshiftProps<T>) {
  const { items, onFilterChange, children, createNewItem, ...rest } = props

  const [visibleItems, setVisibleItems] = useState<T[]>(items)
  useEffect(() => {
    setVisibleItems(props.items)
  }, [props.items])

  const handleStateChange = (options: StateChangeOptions<T>, downshift: ControllerStateAndHelpers<T>) => {
    if (createNewItem && options.hasOwnProperty('inputValue')) {
      rest.onChange && rest.onChange(createNewItem(options.inputValue), getStateAndHelpers(downshift))
    }

    if (options.isOpen) {
      onFilterChange(null, getStateAndHelpers(downshift))
    }

    if (options.type === Downshift.stateChangeTypes.changeInput) {
      onFilterChange(options.inputValue, getStateAndHelpers(downshift))
    }

    if (
      options.type === Downshift.stateChangeTypes.clickItem ||
      options.type === Downshift.stateChangeTypes.keyDownEnter
    ) {
      onFilterChange(null, getStateAndHelpers(downshift))
    }

    props.onStateChange && props.onStateChange(options, getStateAndHelpers(downshift))
  }

  const handleChange = (item: T, downshift: ControllerStateAndHelpers<T>) => {
    props.onChange && props.onChange(item, getStateAndHelpers(downshift))
  }

  const getStateAndHelpers = (downshift: ControllerStateAndHelpers<T>): SelectDownshiftRenderProps<T> => ({
    ...downshift,
    items,
    visibleItems,
    setVisibleItems,
  })

  return (
    <Downshift {...rest} onStateChange={handleStateChange} onChange={handleChange}>
      {downshift => children(getStateAndHelpers(downshift))}
    </Downshift>
  )
}

SelectDownshift.defaultProps = {
  onFilterChange: (filter: string, downshift: SelectDownshiftRenderProps<any>) => {
    const { setVisibleItems, items, itemToString } = downshift
    setVisibleItems(defaultSelectFilter(items, filter, itemToString))
  },
} as Partial<SelectDownshiftProps<any>>
