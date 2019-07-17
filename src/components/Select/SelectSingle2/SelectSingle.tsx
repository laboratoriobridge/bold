import matchSorter from 'match-sorter'
import { PopperOptions } from 'popper.js'
import React, { useRef, useState } from 'react'

import { useEffectOnChange } from '../../../hooks/useEffectOnChange'
import usePopper from '../../../hooks/usePopper'
import { composeHandlers, composeRefs } from '../../../util/react'
import { randomStr } from '../../../util/string'
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

  /**
   * Filter the visible items inside select menu given the input text value.
   *
   * @param filter The current select filter (the input text value)
   * @param props All select props
   *
   * @returns The filtered items that should be visible on the select menu.
   */
  filterItems?(filter: string, props: SelectSingleProps<Item>): Item[]
}

export function SelectSingle<Item>(props: SelectSingleProps<Item>) {
  const {
    value,
    items,
    itemToString,
    open: openProp,
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

  const containerRef = useRef<HTMLDivElement>()
  const inputRef = useRef<HTMLInputElement>()
  const menuRef = useRef<HTMLUListElement>()
  const listboxIdRef = useRef<string>(`listbox-${randomStr()}`)
  const blurTimeoutRef = useRef<number>()

  const [filter, setFilter] = useState('')
  const [inputText, setInputText] = useState(value ? itemToString(value) : '')
  const [open, setOpen] = useState(false)
  const [activeDescendant, setActiveDescendant] = useState(-1)

  const { style: popperStyle, placement } = usePopper(
    {
      anchorRef: inputRef,
      popperRef: menuRef,
      ...popperProps,
    },
    [open]
  )

  const handleInputIconClick = () => setOpen(state => !state)

  const handleInputFocus = () => {
    clearTimeout(blurTimeoutRef.current)
    setOpen(true)
  }

  const handleInputClick = () => setOpen(true)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveDescendant(-1)

    if (e && e.target) {
      const textValue = e.target.value
      setInputText(textValue || '')
      setFilter(textValue || '')
      setOpen(true)
    } else {
      setInputText('')
      setFilter('')
      onChange(null, null)
    }
  }

  const handleInputBlur = () => {
    blurTimeoutRef.current = setTimeout(() => {
      setOpen(false)
      setInputText(value ? itemToString(value) : '')
      setFilter('')
    }, 0)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      inputRef.current.focus()
      setInputText('')
      setFilter('')
      setOpen(false)
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      setOpen(true)
      setTimeout(() => navigateActiveDescendant(1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setOpen(true)
      setTimeout(() => navigateActiveDescendant(-1))
    } else if (e.key === 'Enter') {
      const target = containerRef.current.querySelector(
        `#${listboxIdRef.current}-item-${activeDescendant}`
      ) as HTMLElement
      target.click()
    }
  }

  const handleItemSelect = (item: Item, index: number) => () => {
    inputRef.current.focus()
    onChange(item, index)
    setInputText(itemToString(item))
    setFilter('')
    setActiveDescendant(index)
    setOpen(false)
  }

  const navigateActiveDescendant = (increment: number) => {
    const total = visibleItems.length

    if (total === 0) {
      return
    }

    let target = activeDescendant + increment
    if (target > total - 1) {
      target = 0
    }
    if (target < 0) {
      target = total - 1
    }

    setActiveDescendant(target)
  }

  useEffectOnChange(() => {
    onFilterChange && onFilterChange(filter)
  }, [filter])

  useEffectOnChange(() => {
    if (activeDescendant >= 0 && open) {
      const target = containerRef.current.querySelector(
        `#${listboxIdRef.current}-item-${activeDescendant}`
      ) as HTMLElement
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }
  }, [activeDescendant])

  const isOpen = open || openProp
  const visibleItems = filterItems(filter, props)

  return (
    <div ref={composeRefs(containerRef)}>
      <div
        role='combobox'
        aria-expanded={isOpen ? 'true' : 'false'}
        aria-haspopup='listbox'
        aria-owns={isOpen ? listboxIdRef.current : undefined}
      >
        <TextInput
          inputRef={inputRef}
          value={inputText}
          icon={open ? 'angleUp' : 'angleDown'}
          aria-autocomplete='list'
          aria-controls={isOpen ? listboxIdRef.current : undefined}
          aria-activedescendant={activeDescendant >= 0 ? `${listboxIdRef.current}-item-${activeDescendant}` : undefined}
          onChange={composeHandlers(handleInputChange, onChange)}
          onIconClick={composeHandlers(handleInputIconClick, onIconClick)}
          onFocus={composeHandlers(handleInputFocus, onFocus)}
          onBlur={composeHandlers(handleInputBlur, onBlur)}
          onClick={composeHandlers(handleInputClick, onClick)}
          onKeyDown={composeHandlers(handleKeyDown, onKeyDown)}
          {...rest}
        />
      </div>

      {isOpen && (
        <SelectMenu
          id={listboxIdRef.current}
          menuRef={menuRef}
          data-placement={placement}
          role='listbox'
          style={{ ...popperStyle, width: inputRef.current && inputRef.current.clientWidth }}
          aria-busy={loading === true ? true : undefined}
        >
          {loading && <SelectLoadingItem />}

          {!loading && visibleItems.length === 0 && <SelectEmptyItem />}

          {visibleItems.map((item, idx) => (
            <SelectMenuItem
              key={idx}
              id={`${listboxIdRef.current}-item-${idx}`}
              role='option'
              onSelect={handleItemSelect(item, idx)}
              selected={idx === activeDescendant}
            >
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
  filterItems: (filter, { items, itemToString }) => matchSorter(items, filter, { keys: [itemToString] }),
} as SelectSingleProps
