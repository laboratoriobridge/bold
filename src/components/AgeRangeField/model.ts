export enum AgeRangeUnitEnum {
  YEARS,
  MONTHS,
  DAYS,
}

export interface AgeRange {
  start?: number
  end?: number
  unit: AgeRangeUnitEnum
}

export const UNIT_OPTIONS = [AgeRangeUnitEnum.YEARS, AgeRangeUnitEnum.MONTHS, AgeRangeUnitEnum.DAYS]
