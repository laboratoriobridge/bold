import { useCallback } from 'react'
import { KeyNavigationDirection } from '../Droppable/types/model'
import { KeyNavigationEnum } from './model'

export const useDraggableKeyNavigation = <T>(
  onKeyNavSuccess: () => void,
  origin: string,
  onKeyNav?: (direction: KeyNavigationDirection, origin: string, key?: keyof T) => boolean
) => {
  const handleKeyDown = useCallback(
    (filterKey?: keyof T) => (event: any) => {
      if (onKeyNav) {
        if (onKeyNav(KeyNavigationEnum[event.nativeEvent.key], origin, filterKey)) {
          onKeyNavSuccess()
        }
      }
    },
    [onKeyNav, onKeyNavSuccess, origin]
  )

  return { handleKeyDown }
}
