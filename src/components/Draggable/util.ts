import { ActualQuantity } from './types/ActualQuantity'

/**
 * Checks which direction the arrow key was pressed
 *
 * @param key The key pressed
 * @returns The direction (up/down/right/left) if it's an arrow key, otherwise null
 */
export function getKeyDirection(key: string) {
  switch (key) {
    case 'ArrowRight':
      return 'right'
    case 'ArrowLeft':
      return 'left'
    case 'ArrowUp':
      return 'up'
    case 'ArrowDown':
      return 'down'
    default:
      return null
  }
}

/**
 * Checks whether the first filter has all, some or none elements of the second filter
 *
 * @param filterOne The first filter
 * @param filterTwo The second filter
 * @returns If it has all (ALL), some (ONE_OR_MORE) or none elements (NONE)
 */
export function getQuantityValue(filterOne: Set<string>, filterTwo: string[]): ActualQuantity {
  return filterOne.size === 0
    ? ActualQuantity.NONE
    : filterOne.size === filterTwo.length
    ? ActualQuantity.ALL
    : ActualQuantity.ONE_OR_MORE
}
