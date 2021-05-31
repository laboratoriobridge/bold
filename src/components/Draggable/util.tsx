import { QuantityEnum } from './types/QuantityEnum'

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

export function getQuantityValue(filterOne: Set<string>, filterTwo: string[]): QuantityEnum {
  return filterOne.size === 0
    ? QuantityEnum.EMPTY
    : filterOne.size === filterTwo.length
    ? QuantityEnum.FULL
    : QuantityEnum.HALF_FULL
}
