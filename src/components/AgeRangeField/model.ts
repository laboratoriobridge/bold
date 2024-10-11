export enum AgeRangeUnitEnum {
  YEARS,
  MONTHS,
  DAYS,
}

export interface AgeRange {
  firstValue?: number | null
  secondValue?: number | null
  unit: AgeRangeUnitEnum
}

export const UNIT_OPTIONS = [AgeRangeUnitEnum.YEARS, AgeRangeUnitEnum.MONTHS, AgeRangeUnitEnum.DAYS]
