import { QuantityEnum } from './types/QuantityEnum'

/**
 * Checks which direction the arrow key was pressed
 *
 * @param key The key pressed
 * @returns The direction (up/down/right/left)
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
  }
}

/**
 * Checks whether the first filter is full, empty or half full based on the second filter
 *
 * @param filterOne The first filter
 * @param filterTwo The second filter
 * @returns If it's empty, full or half full
 */
export function getQuantityValue(filterOne: Set<string>, filterTwo: string[]): QuantityEnum {
  return filterOne.size === 0
    ? QuantityEnum.EMPTY
    : filterOne.size === filterTwo.length
    ? QuantityEnum.FULL
    : QuantityEnum.HALF_FULL
}
