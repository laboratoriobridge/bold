import { SelectStateHookProps } from './useSelectState'

export interface SelectState<Item> {
  value: Item | null
  isOpen: boolean
  inputText: string
  filter: string
  visibleItems: Item[]
  activeDescendant: number
}

export type SelectActionType =
  | 'inputChange'
  | 'inputFocus'
  | 'inputBlur'
  | 'inputClick'
  | 'keydownEscape'
  | 'keydownEnter'
  | 'keydownArrowDown'
  | 'keydownArrowDown'
  | 'keydownArrowUp'
  | 'itemClick'

export interface SelectAction<Item> {
  type: SelectActionType
  props?: SelectStateHookProps<Item>
  payload?: any
}

export function createSelectReducer<Item>() {
  return (state: SelectState<Item>, action: SelectAction<Item>): SelectState<Item> => {
    const newState = reduce(state, action)

    const { onStateChange } = (action.props || {}) as SelectStateHookProps<Item>
    onStateChange && onStateChange(newState, action)

    return newState
  }
}

function reduce<Item>(state: SelectState<Item>, action: SelectAction<Item>): SelectState<Item> {
  const props = action.props || ({} as SelectStateHookProps<any>)
  const { items, itemToString, filterItems } = props

  switch (action.type) {
    /**
     * Search input actions
     */

    case 'inputChange':
      if (action.payload) {
        const text = action.payload as string
        return {
          ...state,
          isOpen: true,
          activeDescendant: -1,
          inputText: text,
          filter: text,
          visibleItems: filterItems(text, props),
        }
      } else {
        return { ...state, activeDescendant: -1, inputText: '', filter: '', visibleItems: items }
      }
    case 'inputFocus':
      return { ...state, isOpen: true }
    case 'inputBlur':
      return {
        ...state,
        isOpen: false,
        inputText: state.value ? itemToString(state.value) : '',
        filter: '',
        visibleItems: items,
      }
    case 'inputClick':
      return { ...state, isOpen: true }

    /**
     * Keyboard actions
     */

    case 'keydownEscape':
      return { ...state, isOpen: false, inputText: '', filter: '', visibleItems: items }
    case 'keydownEnter':
      const value = state.visibleItems[state.activeDescendant]
      return { ...state, isOpen: false, value, inputText: itemToString(value), filter: '', visibleItems: items }
    case 'keydownArrowDown':
      return {
        ...state,
        isOpen: true,
        activeDescendant: calculateActiveDescendant(state, 1, state.visibleItems.length),
      }
    case 'keydownArrowUp':
      return {
        ...state,
        isOpen: true,
        activeDescendant: calculateActiveDescendant(state, -1, state.visibleItems.length),
      }

    /**
     * List actions
     */

    case 'itemClick':
      const item = action.payload as Item
      return { ...state, isOpen: false, value: item, inputText: itemToString(item), filter: '', visibleItems: items }
  }
}

const calculateActiveDescendant = ({ activeDescendant }: SelectState<any>, increment: number, total: number) => {
  if (total === 0) {
    return -1
  }

  let target = activeDescendant + increment
  if (target > total - 1) {
    target = 0
  }
  if (target < 0) {
    target = total - 1
  }

  return target
}
