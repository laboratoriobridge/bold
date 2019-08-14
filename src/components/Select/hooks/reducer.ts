import { SelectStateHookProps } from './useSelectState'

export interface SelectState<Item, Data extends object> {
  isOpen: boolean
  inputText: string
  filter: string
  visibleItems: Item[]
  activeDescendant: number
  data: Data
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

export interface SelectAction<Item, Data extends object> {
  type: SelectActionType
  props?: SelectStateHookProps<Item, Data>
  payload?: any
}

export default function reducer<Item, Data extends object>(
  state: SelectState<Item, Data>,
  action: SelectAction<Item, Data>
): SelectState<Item, Data> {
  const props = action.props || ({} as SelectStateHookProps<Item, Data>)
  const { items, filterItems } = props

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
      return { ...state, isOpen: false, filter: '', visibleItems: items }
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
      return { ...state, isOpen: false, filter: '', visibleItems: items }
  }
}

export const calculateActiveDescendant = (
  { activeDescendant }: SelectState<any, any>,
  increment: number,
  total: number
) => {
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
