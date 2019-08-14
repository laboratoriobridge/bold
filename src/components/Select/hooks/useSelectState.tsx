import { PopperOptions } from 'popper.js'
import { AriaAttributes, useReducer, useRef, Reducer, useCallback } from 'react'

import { useEffectOnChange } from '../../../hooks/useEffectOnChange'
import usePopper from '../../../hooks/usePopper'
import { randomStr } from '../../../util/string'

import selectReducer, { SelectAction, SelectState } from './reducer'

export interface SelectStateHookProps<Item, Data extends object> {
  /**
   * Select options.
   */
  items: Item[]

  /**
   * Menu popper options.
   */
  popperProps?: PopperOptions

  /**
   * Indicates whether the combo is asynchronous loading or not.
   */
  loading?: boolean

  /**
   * Converts an item from the select to its string representation.
   * This representation is used to populate the options menu and to fill the text input value when an item is selected.
   */
  itemToString?(item: Item | null): string

  /**
   * Filter the visible items inside select menu given the input text value.
   *
   * @param filter The current select filter (the input text value)
   * @param props All select props
   *
   * @returns The filtered items that should be visible on the select menu.
   */
  filterItems?(filter: string, props: SelectStateHookProps<Item, Data>): Item[]

  /**
   * Called whenever the select state is changed.
   *
   * @param newState The new state.
   * @param action The dispatched action.
   */
  onStateChange?(newState: SelectState<Item, Data>, action: SelectAction<Item, Data>): void

  reducer?(state: SelectState<Item, Data>, action: SelectAction<Item, Data>): SelectState<Item, Data>
}

export function useSelectState<Item, Data extends object>(props: SelectStateHookProps<Item, Data>) {
  const { items, popperProps, loading, onStateChange, reducer } = props

  const hookReducer: Reducer<SelectState<Item, Data>, SelectAction<Item, Data>> = useCallback(
    (state, action) => {
      const newState = reducer ? reducer(state, action) : selectReducer(state, action)
      onStateChange && onStateChange(newState, action)
      return newState
    },
    [onStateChange, reducer]
  )

  const [state, dispatch] = useReducer(hookReducer, {
    isOpen: false,
    filter: '',
    visibleItems: items,
    inputText: '',
    activeDescendant: -1,
    data: null,
  })

  const listboxIdRef = useRef(`listbox-${randomStr()}`)

  const containerRef = useRef<HTMLDivElement>()
  const menuRef = useRef<HTMLUListElement>()
  const inputRef = useRef<HTMLInputElement>()

  const { style: popperStyle, placement } = usePopper(
    {
      anchorRef: inputRef,
      popperRef: menuRef,
      ...popperProps,
    },
    [state.isOpen]
  )

  const handleInputFocus = () => dispatch({ type: 'inputFocus', props })
  const handleInputBlur = () => dispatch({ type: 'inputBlur', props })
  const handleInputClick = () => dispatch({ type: 'inputClick', props })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e && e.target) {
      const textValue = (e && e.target && e.target.value) || ''
      dispatch({ type: 'inputChange', props, payload: textValue })
    } else {
      dispatch({ type: 'inputChange', props, payload: null })
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      dispatch({ type: 'keydownEscape', props })
    } else if (e.key === 'Enter') {
      dispatch({ type: 'keydownEnter', props })
    } else if (e.key === 'ArrowDown') {
      e.preventDefault()
      dispatch({ type: 'keydownArrowDown', props })
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      dispatch({ type: 'keydownArrowUp', props })
    }
  }

  const handleItemClick = (item: Item) => () => {
    inputRef.current.focus()
    dispatch({ type: 'itemClick', props, payload: item })
  }

  useEffectOnChange(() => {
    if (state.activeDescendant >= 0 && state.isOpen) {
      const target = containerRef.current.querySelector(
        `#${listboxIdRef.current}-item-${state.activeDescendant}`
      ) as HTMLElement
      target.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
    }
  }, [state.activeDescendant, state.isOpen])

  const getContainerProps = () => ({
    ref: containerRef,
  })

  const getInputWrapperProps = () => ({
    role: 'combobox',
    'aria-expanded': (state.isOpen ? 'true' : 'false') as AriaAttributes['aria-expanded'],
    'aria-haspopup': 'listbox' as AriaAttributes['aria-haspopup'],
    'aria-owns': state.isOpen ? listboxIdRef.current : undefined,
  })

  const getInputProps = () => ({
    ref: inputRef,
    value: state.inputText,
    autocomplete: 'off',
    'aria-autocomplete': 'list' as AriaAttributes['aria-autocomplete'],
    'aria-controls': state.isOpen ? listboxIdRef.current : undefined,
    'aria-activedescendant':
      state.activeDescendant >= 0 ? `${listboxIdRef.current}-item-${state.activeDescendant}` : undefined,
    onChange: handleInputChange,
    onFocus: handleInputFocus,
    onBlur: handleInputBlur,
    onClick: handleInputClick,
    onKeyDown: handleKeyDown,
  })

  const getMenuProps = () => ({
    ref: menuRef,
    id: listboxIdRef.current,
    role: 'listbox',
    style: { ...popperStyle, width: inputRef.current && inputRef.current.clientWidth },
    'aria-busy': loading === true ? true : undefined,
    'data-placement': placement,
  })

  const getItemProps = (item: Item, index: number) => ({
    id: `${listboxIdRef.current}-item-${index}`,
    role: 'option',
    onMouseDown: handleItemClick(item),
  })

  return {
    state,
    dispatch,
    getContainerProps,
    getInputWrapperProps,
    getInputProps,
    getMenuProps,
    getItemProps,
  }
}
