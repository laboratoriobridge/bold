import matchSorter from 'match-sorter'
import { PopperOptions } from 'popper.js'
import React, { useRef, useState } from 'react'

import { useEffectOnChange } from '../../../hooks/useEffectOnChange'
import { useFocusContainer } from '../../../hooks/useFocusContainer'
import usePopper from '../../../hooks/usePopper'
import { useRovingTabIndex } from '../../../hooks/useRovingTabIndex'
import { composeHandlers, composeRefs } from '../../../util/react'
import { TextInput, TextInputProps } from '../../TextInput'
import { SelectEmptyItem, SelectLoadingItem, SelectMenu, SelectMenuItem } from '../SelectMenu'

export interface SelectSingleProps<Item = string> extends Omit<TextInputProps, 'value' | 'onChange'> {
  /**
   * The current selected item.
   */
  value?: Item

  /**
   * Select options.
   */
  items?: Item[]

  /**
   * Menu popper options.
   */
  popperProps?: PopperOptions

  /**
   * Indicates whether the combo is loading or not.
   */
  loading?: boolean

  /**
   * Whether the select is opened or not.
   * Use this prop to manually control select opened state.
   */
  open?: boolean

  /**
   * Converts an item from the select to its string representation.
   * This representation is used to populate the options menu and to fill the text input value when an item is selected.
   */
  itemToString?(item: Item): string

  /**
   * Called when an item is selected.
   *
   * @param selectedItem The selected item or null if select was cleared.
   */
  onChange?(selectedItem: Item | null): void

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
    popperProps,
    onFocus,
    onBlur,
    onIconClick,
    onChange,
    onClick,
    loading,
    onFilterChange,
    open: openProp,
    ...rest
  } = props

  const containerRef = useRef<HTMLDivElement>()
  const inputRef = useRef<HTMLInputElement>()
  const menuRef = useRef<HTMLUListElement>()

  const [filter, setFilter] = useState('')
  const [inputText, setInputText] = useState(value ? itemToString(value) : '')
  const [open, setOpen] = useState(false)

  const { style: popperStyle, placement } = usePopper(
    {
      anchorRef: inputRef,
      popperRef: menuRef,
      ...popperProps,
    },
    [open]
  )

  const handleInputIconClick = () => setOpen(state => !state)

  const handleInputFocus = () => setOpen(true)

  const handleInputClick = () => setOpen(true)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target) {
      const textValue = e.target.value
      setInputText(textValue || '')
      setFilter(textValue || '')
      setOpen(true)
    } else {
      setInputText('')
      setFilter('')
      onChange(null)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      inputRef.current.focus()
      setInputText('')
      setOpen(false)
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      setOpen(true)
    }
  }

  const handleItemSelect = (item: Item) => () => {
    inputRef.current.focus()
    onChange(item)
    setInputText(itemToString(item))
    setFilter('')
    setOpen(false)
  }

  const handleFocusOut = () => {
    setOpen(false)
    setInputText(value ? itemToString(value) : '')
    setFilter('')
  }

  const focusEvents = useFocusContainer({
    onFocusOut: handleFocusOut,
  })

  useEffectOnChange(() => {
    onFilterChange && onFilterChange(filter)
  }, [filter])

  const rootRef = useRovingTabIndex({
    initialIndex: -1,
    getItems: root => Array.from(root.querySelectorAll('[role="option"]')),
  })

  const isOpen = open || openProp
  const visibleItems = matchSorter(items, filter, { keys: [itemToString] })

  return (
    <div ref={composeRefs(rootRef, containerRef)} onKeyDown={handleKeyDown} {...focusEvents}>
      <TextInput
        inputRef={inputRef}
        value={inputText}
        icon={open ? 'angleUp' : 'angleDown'}
        onChange={handleInputChange}
        onIconClick={composeHandlers(handleInputIconClick, onIconClick)}
        onFocus={composeHandlers(handleInputFocus, onFocus)}
        onClick={composeHandlers(handleInputClick, onClick)}
        {...rest}
      />

      {isOpen && (
        <SelectMenu
          menuRef={menuRef}
          data-placement={placement}
          role='listbox'
          style={{ ...popperStyle, width: inputRef.current && inputRef.current.clientWidth }}
          aria-busy={loading === true ? true : undefined}
        >
          {loading && <SelectLoadingItem />}

          {!loading && visibleItems.length === 0 && <SelectEmptyItem />}

          {visibleItems.map((item, idx) => (
            <SelectMenuItem key={idx} role='option' onSelect={handleItemSelect(item)}>
              {itemToString(item)}
            </SelectMenuItem>
          ))}
        </SelectMenu>
      )}
    </div>
  )
}

SelectSingle.defaultProps = {
  itemToString: item => item,
  onChange: () => null,
  onFilterChange: () => null,
} as SelectSingleProps
