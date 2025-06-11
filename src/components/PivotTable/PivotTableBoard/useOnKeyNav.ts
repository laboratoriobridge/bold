import { KeyNavigationDirection } from '../Droppable/types/model'

interface UseOnKeyNavProps<T> {
  setColumnKeys: (keys: Array<keyof T>) => void
  setRowKeys: (keys: Array<keyof T>) => void
  setAvailableKeys: (keys: Array<keyof T>) => void
  columnKeys: Array<keyof T>
  rowKeys: Array<keyof T>
  availableKeys: Array<keyof T>
}

export const useOnKeyNav = <T extends object>(props: UseOnKeyNavProps<T>) => {
  const { setColumnKeys, setRowKeys, setAvailableKeys, columnKeys, rowKeys, availableKeys } = props
  const onKeyNav = (dir: KeyNavigationDirection, origin: string, key?: keyof T): boolean => {
    const actions: Record<string, Partial<Record<KeyNavigationDirection, () => void>>> = {
      filter: {
        right: () => setColumnKeys([...columnKeys, key]),
        down: () => setRowKeys([...rowKeys, key]),
      },
      column: {
        right: () => setRowKeys([...rowKeys, key]),
        down: () => setRowKeys([...rowKeys, key]),
        left: () => setAvailableKeys([...availableKeys, key]),
      },
      row: {
        right: () => setColumnKeys([...columnKeys, key]),
        left: () => setAvailableKeys([...availableKeys, key]),
        up: () => setAvailableKeys([...availableKeys, key]),
      },
    }

    const action = actions[origin]?.[dir]

    if (action) {
      action()
      return true
    }

    return false
  }

  return onKeyNav
}
