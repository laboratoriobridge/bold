import { ActualQuantity } from './types/ActualQuantity'

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
