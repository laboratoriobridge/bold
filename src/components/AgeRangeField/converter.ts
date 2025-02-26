import { LocaleConfiguration } from '../../i18n'
import { AgeRangeUnitEnum } from './model'

export function convertUnitAgeRangeEnumToLocaleText(
  ageRangeUnitEnum: AgeRangeUnitEnum,
  locale: LocaleConfiguration
): string {
  switch (ageRangeUnitEnum) {
    case AgeRangeUnitEnum.YEARS:
      return locale.ageRange.years

    case AgeRangeUnitEnum.MONTHS:
      return locale.ageRange.months

    case AgeRangeUnitEnum.DAYS:
      return locale.ageRange.days

    default:
      return ''
  }
}
