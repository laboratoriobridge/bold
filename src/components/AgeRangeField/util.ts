import { AgeRangeUnitEnum, UNIT_OPTIONS } from './model'

export function getAvaibleAgeRangeUnits(excludedAgeRangeUnits: AgeRangeUnitEnum[]): AgeRangeUnitEnum[] {
  let unitOptions = UNIT_OPTIONS

  if (excludedAgeRangeUnits && excludedAgeRangeUnits.length > 0) {
    unitOptions = unitOptions.filter((unit) => !excludedAgeRangeUnits.includes(unit))
  }

  if (unitOptions.length === 0) {
    throw new Error('You must provide an unit option.')
  }

  return unitOptions
}
