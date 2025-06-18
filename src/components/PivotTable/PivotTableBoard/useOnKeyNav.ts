import { useCallback } from 'react'
import { KeyNavigationDirection } from '../Droppable/types/model'
import { PivotTableBoardOrigin } from './model'

type KeyNavActions = Record<PivotTableBoardOrigin, Partial<Record<KeyNavigationDirection, () => void>>>

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
  const onKeyNav = useCallback(
    (direction: KeyNavigationDirection, origin: PivotTableBoardOrigin, key?: keyof T): boolean => {
      const actions: KeyNavActions = {
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

      const action = actions[origin][direction]

      if (action) {
        action()
        return true
      }

      return false
    },
    [setColumnKeys, setRowKeys, setAvailableKeys, columnKeys, rowKeys, availableKeys]
  )

  return onKeyNav
}
