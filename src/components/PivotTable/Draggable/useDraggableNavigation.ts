import { KeyNavigationDirection } from '../Droppable/types/model'
import { keyDirectionMap } from './model'

export const useDraggableKeyNavigation = <T>(
  onDragEnd: () => void,
  origin: string,
  onKeyNav?: (dir: KeyNavigationDirection, origin: string, key?: keyof T) => boolean
) => {
  const handleKeyDown = (filterKey?: keyof T) => (event: any) => {
    if (onKeyNav) {
      if (onKeyNav(keyDirectionMap[event.nativeEvent.key], origin, filterKey)) {
        onDragEnd()
      }
    }
  }

  return { handleKeyDown }
}
