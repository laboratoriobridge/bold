import { SelectStateHookProps, useSelectState } from './useSelectState'
import selectReducer, { SelectState, SelectAction } from './reducer'

export interface SingleSelectData<Item> {
  value: Item | null
}

export interface SingleSelectHookProps<Item> extends SelectStateHookProps<Item, SingleSelectData<Item>> {
  /**
   * The current selected item.
   */
  value?: Item
}

export function useSingleSelect<Item>(props: SingleSelectHookProps<Item>) {
  const hook = useSelectState({
    ...props,
    reducer,
  })

  return {
    ...hook,
    state: {
      ...hook.state,
      ...hook.state.data,
    },
  }
}

function reducer<Item>(
  state: SelectState<Item, SingleSelectData<Item>>,
  action: SelectAction<Item, SingleSelectData<Item>>
): SelectState<Item, SingleSelectData<Item>> {
  const newState = selectReducer(state, action)
  const { itemToString } = action.props

  switch (action.type) {
    case 'inputBlur':
      return {
        ...newState,
        inputText: state.data.value ? itemToString(state.data.value) : '',
      }
    case 'keydownEnter':
      const value = state.visibleItems[state.activeDescendant]
      return {
        ...newState,
        inputText: itemToString(value),
        data: { ...state.data, value },
      }
    case 'itemClick':
      const item = action.payload as Item
      return {
        ...newState,
        inputText: itemToString(item),
        data: { ...state.data, value: item },
      }
  }

  return newState
}
