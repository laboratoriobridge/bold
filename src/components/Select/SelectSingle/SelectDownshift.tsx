import Downshift, { ControllerStateAndHelpers, DownshiftProps, DownshiftState, StateChangeOptions } from 'downshift'
import matchSorter from 'match-sorter'
import React, { useEffect, useMemo, useState } from 'react'

import { Omit } from '../../../util'

export interface SelectDownshiftProps<T> extends Omit<DownshiftProps<T>, 'children'> {
  /**
   * Items to be populated on the select component.
   */
  items: T[]

  /**
   * Whether the select menu should be opened when the select is focused.
   */
  openOnFocus?: boolean

  /**
   * Minimum width of the dropdown menu
   */
  menuMinWidth?: number

  /**
   * Whether the current input filter should be kept after an item is selected.
   * This is necessary for multi selects, for example, when the filter should be kept after an item is selected.
   * @default false
   */
  keepFilterAfterSelect?: boolean

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
  const { items, onFilterChange, children, createNewItem, openOnFocus, keepFilterAfterSelect, ...rest } = props

  const stateReducer = useMemo(() => createReducer(props), [props])

  const [visibleItems, setVisibleItems] = useState<T[]>(items)
  useEffect(() => {
    setVisibleItems(props.items)
  }, [props.items])

  const handleStateChange = (changes: StateChangeOptions<T>, downshift: ControllerStateAndHelpers<T>) => {
    if (
      createNewItem &&
      changes.hasOwnProperty('inputValue') &&
      changes.type === Downshift.stateChangeTypes.changeInput
    ) {
      rest.onChange && rest.onChange(createNewItem(changes.inputValue), getStateAndHelpers(downshift))
    }

    if (changes.type === Downshift.stateChangeTypes.changeInput && changes.inputValue === '') {
      rest.onChange && rest.onChange(null, getStateAndHelpers(downshift))
    }

    if (changes.isOpen) {
      onFilterChange(null, getStateAndHelpers(downshift))
    }

    if (changes.type === Downshift.stateChangeTypes.changeInput) {
      onFilterChange(changes.inputValue, getStateAndHelpers(downshift))
    }

    if (
      !keepFilterAfterSelect &&
      (changes.type === Downshift.stateChangeTypes.clickItem ||
        changes.type === Downshift.stateChangeTypes.keyDownEnter)
    ) {
      onFilterChange(null, getStateAndHelpers(downshift))
    }

    props.onStateChange && props.onStateChange(changes, getStateAndHelpers(downshift))
  }

  const handleChange = (item: T, downshift: ControllerStateAndHelpers<T>) => {
    props.onChange && props.onChange(item, getStateAndHelpers(downshift))
  }

  const createGetInputProps = getInputProps => (options: any) => {
    const { autoComplete, ...rest } = getInputProps(options)
    return rest
  }

  const getStateAndHelpers = (downshift: ControllerStateAndHelpers<T>): SelectDownshiftRenderProps<T> => ({
    ...downshift,
    items,
    visibleItems,
    setVisibleItems,
    getInputProps: createGetInputProps(downshift.getInputProps),
  })

  return (
    <Downshift {...rest} stateReducer={stateReducer} onStateChange={handleStateChange} onChange={handleChange}>
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

function createReducer(props: SelectDownshiftProps<any>) {
  const { openOnFocus = props.createNewItem ? false : undefined, stateReducer } = props

  return (state: DownshiftState<any>, changes: StateChangeOptions<any>) => {
    if (openOnFocus === false && changes.type === undefined && !state.isOpen && changes.isOpen) {
      return { ...changes, isOpen: false }
    }

    return stateReducer ? stateReducer(state, changes) : changes
  }
}
