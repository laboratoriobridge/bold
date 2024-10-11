export enum AgeRangeUnitEnum {
  YEARS,
  MONTHS,
  DAYS,
}

export interface AgeRange {
  firstValue?: number
  secondValue?: number
  unit: AgeRangeUnitEnum
}

export const UNIT_OPTIONS = [AgeRangeUnitEnum.YEARS, AgeRangeUnitEnum.MONTHS, AgeRangeUnitEnum.DAYS]
