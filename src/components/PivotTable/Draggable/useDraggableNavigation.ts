import { useCallback } from 'react'
import { KeyNavigationDirection } from '../Droppable/types/model'
import { KeyNavigationEnum } from './model'

export const useDraggableKeyNavigation = <T, TOrigin = string>(
  onKeyNavSuccess: () => void,
  origin: TOrigin,
  onKeyNav?: (direction: KeyNavigationDirection, origin: TOrigin, key?: keyof T) => boolean
) => {
  const handleKeyDown = useCallback(
    (filterKey?: keyof T) => (event: React.KeyboardEvent) => {
      if (onKeyNav) {
        if (onKeyNav?.(KeyNavigationEnum[event.nativeEvent.key], origin, filterKey)) {
          onKeyNavSuccess()
        }
      }
    },
    [onKeyNav, onKeyNavSuccess, origin]
  )

  return { handleKeyDown }
}
