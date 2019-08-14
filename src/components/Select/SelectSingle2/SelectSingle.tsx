import matchSorter from 'match-sorter'
import React from 'react'
import { Omit } from '../../../util'
import { composeHandlers } from '../../../util/react'
import { TextInput, TextInputProps } from '../../TextInput'
import { SelectEmptyItem, SelectLoadingItem, SelectMenu, SelectMenuItem } from '../SelectMenu'
import { SelectStateHookProps, useSelectState } from './useSelectState'

export interface SelectSingleProps<Item = string>
  extends Omit<TextInputProps, 'value' | 'onChange'>,
    SelectStateHookProps<Item> {
  /**
   * Whether the select is opened or not by default.
   * Use this prop to manually control select opened state.
   */
  defaultIsOpen?: boolean

  /**
   * Called when an item is selected.
   *
   * @param selectedItem The selected item or null if select was cleared.
   * @param index The index of the selected item inside the menu list.
   */
  onChange?(selectedItem: Item | null, index: number | null): void

  /**
   * Called whenever the filter is changed.
   *
   * May occur in the following scenarios:
   *    - The text input is changed using keyboard input
   *    - An item is selected (the callback is called with an empty string)
   *
   * @param filter The new filter.
   */
  onFilterChange?(filter: string): void
}

export function SelectSingle<Item>(props: SelectSingleProps<Item>) {
  const {
    value,
    items,
    itemToString,
    defaultIsOpen,
    loading,
    filterItems,
    popperProps,
    onIconClick,
    onFilterChange,
    onChange,
    onFocus,
    onBlur,
    onClick,
    onKeyDown,
    ...rest
  } = props

  const {
    state: { isOpen, visibleItems, activeDescendant },
    getContainerProps,
    getInputWrapperProps,
    getInputProps,
    getMenuProps,
    getItemProps,
  } = useSelectState({
    onStateChange: () => null,
    items: props.items || [],
    ...props,
  })

  const isReallyOpen = isOpen || defaultIsOpen

  const { ref: inputRef, ...inputProps } = getInputProps()
  const { ref: menuRef, ...menuProps } = getMenuProps()

  const handleInputIconClick = () => {
    // TODO
  }

  return (
    <div {...getContainerProps()}>
      <div {...getInputWrapperProps()}>
        <TextInput
          inputRef={inputRef}
          icon={open ? 'angleUp' : 'angleDown'}
          onIconClick={composeHandlers(handleInputIconClick, onIconClick)}
          {...inputProps}
          {...rest}
        />
      </div>

      {isReallyOpen && (
        <SelectMenu menuRef={menuRef} {...menuProps}>
          {loading && <SelectLoadingItem />}

          {!loading && visibleItems.length === 0 && <SelectEmptyItem />}

          {visibleItems.map((item, idx) => (
            <SelectMenuItem key={idx} selected={idx === activeDescendant} {...getItemProps(item, idx)}>
              {itemToString(item)}
            </SelectMenuItem>
          ))}
        </SelectMenu>
      )}
    </div>
  )
}

SelectSingle.defaultProps = {
  items: [],
  itemToString: item => item,
  onChange: () => null,
  onFilterChange: () => null,
  filterItems: (filter, { items, itemToString }) => matchSorter(items, filter, { keys: [itemToString] }),
} as SelectSingleProps
