import React, { CSSProperties, useState } from 'react'
import { isEmpty } from 'lodash'
import { TextInput } from '../TextField'
import { ExternalStyles, Theme, colors, focusBoxShadow, useStyles } from '../../styles'
import { LocaleConfiguration, useLocale } from '../../i18n'
import { Button } from '../Button'
import { Text } from '../Text'
import { Icon } from '../Icon'
import { Dropdown, DropdownItem } from '../Dropdown'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Tooltip } from '../Tooltip'

export interface AgeRangeInputProps {
  value: AgeRange

  min?: number
  max?: number
  maxLength?: number
  disabled?: boolean
  clearable?: boolean
  invalid?: boolean
  firstValuePlaceholder?: string
  secondValuePlaceholder?: string

  /**
   *  Receive external styles.
   */
  style?: ExternalStyles[]
  unitOptionsToExclude?: AgeRangeUnitEnum[]

  onChange?(ageRange: AgeRange): void
  onFocus?(e: React.FocusEvent<HTMLDivElement>): void
  onBlur?(e: React.FocusEvent<HTMLDivElement>): void
}

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

const UNIT_OPTIONS = [AgeRangeUnitEnum.YEARS, AgeRangeUnitEnum.MONTHS, AgeRangeUnitEnum.DAYS]

export function AgeRangeInput(props: AgeRangeInputProps) {
  const {
    value,
    firstValuePlaceholder,
    secondValuePlaceholder,
    min,
    max,
    maxLength,
    disabled,
    clearable,
    invalid,
    unitOptionsToExclude,
    onChange,
    onFocus,
    onBlur,
  } = props

  const [anchorRef, setAnchorRef] = useState<HTMLButtonElement>()
  const [open, setOpen] = useState(false)

  const { classes, css } = useStyles(createStyles, disabled)
  const classNameDiv = css(classes.div, invalid && classes.invalid, props.style)
  const locale = useLocale()

  if (value?.unit && unitOptionsToExclude && unitOptionsToExclude.includes(value.unit)) {
    throw new Error(
      `You selected ${convertUnitAgeRangeEnumToLocaleText(
        value.unit,
        locale
      )}, but it's an excluded unit option defined in 'unitOptionsToExclude' prop.`
    )
  }

  const handleClick = () => setOpen((state) => !state)

  const handleChangeFirstValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let firstValue: number = null

    const firstValueText = e.currentTarget?.value
    const firstValueParsed = parseInt(firstValueText)

    if (!isNaN(firstValueParsed)) {
      firstValue = firstValueParsed
    } else if (!isEmpty(firstValueText)) {
      firstValue = value?.firstValue
    }

    const newAgeRange: AgeRange = {
      firstValue,
      secondValue: value?.secondValue,
      unit: value?.unit,
    }

    onChange?.(newAgeRange)
  }

  const handleChangeSecondValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    let secondValue: number = null

    const secondValueText = e.currentTarget?.value
    const secondValueParsed = parseInt(secondValueText)

    if (!isNaN(secondValueParsed)) {
      secondValue = secondValueParsed
    } else if (!isEmpty(secondValueText)) {
      secondValue = value?.secondValue
    }

    const newAgeRange: AgeRange = {
      firstValue: value?.firstValue,
      secondValue,
      unit: value?.unit,
    }

    onChange?.(newAgeRange)
  }

  const handleChangeUnit = (unit: AgeRangeUnitEnum) => {
    const newAgeRange: AgeRange = {
      firstValue: null,
      secondValue: null,
      unit,
    }

    onChange?.(newAgeRange)
  }

  const handleClose = () => {
    setOpen(false)
    anchorRef.focus()
  }

  const handleBlur = (event: React.FocusEvent<HTMLDivElement>) => {
    if (value.firstValue && value?.secondValue && value.firstValue > value.secondValue) {
      const ageRange: AgeRange = {
        firstValue: value.secondValue,
        secondValue: value.firstValue,
        unit: value.unit,
      }
      onChange?.(ageRange)
    }

    onBlur?.(event)
  }

  let unitOptions = UNIT_OPTIONS

  if (unitOptionsToExclude && unitOptionsToExclude.length > 0) {
    unitOptions = unitOptions.filter((unit) => !unitOptionsToExclude.includes(unit))
  }

  if (unitOptions.length === 0) {
    throw new Error('You must provide an unit option.')
  }

  const hasOnlyOneUnitOption = unitOptions.length === 1

  return (
    <FocusManagerContainer onFocusIn={onFocus} onFocusOut={handleBlur}>
      <div className={classNameDiv}>
        <div className={classes.fieldWrapper}>
          <TextInput
            name='firstValue'
            value={value?.firstValue ?? ''}
            clearable={clearable}
            disabled={disabled}
            style={classes.numberField}
            maxLength={maxLength}
            placeholder={firstValuePlaceholder ?? locale.ageRange.minimumPlaceholder}
            min={min}
            max={max}
            onChange={handleChangeFirstValue}
          />
        </div>
        <span className={classes.spanWrapper}>
          <strong>{locale.ageRange.separator}</strong>
        </span>
        <div className={classes.fieldWrapper}>
          <TextInput
            name='secondValue'
            value={value?.secondValue ?? ''}
            clearable={clearable}
            disabled={disabled}
            style={classes.numberField}
            maxLength={maxLength}
            placeholder={secondValuePlaceholder ?? locale.ageRange.maximumPlaceholder}
            min={min}
            max={max}
            onChange={handleChangeSecondValue}
          />
        </div>
        <span className={classes.iconWrapper}>
          <Tooltip text={hasOnlyOneUnitOption && locale.ageRange.onlyOneUnitOption}>
            <Button
              skin='ghost'
              size='small'
              tabIndex={-1}
              disabled={disabled || hasOnlyOneUnitOption}
              innerRef={setAnchorRef}
              onClick={handleClick}
              style={classes.button}
            >
              <Text style={classes.buttonText}>{convertUnitAgeRangeEnumToLocaleText(value?.unit, locale)}</Text>
              <Icon style={classes.icon} icon={open ? 'angleUp' : 'angleDown'} />
              <Dropdown anchorRef={anchorRef} open={open} onClose={handleClose} style={classes.dropdown}>
                {unitOptions.map((unitOption) => (
                  <DropdownItem key={unitOption} onClick={() => handleChangeUnit(unitOption)}>
                    {convertUnitAgeRangeEnumToLocaleText(unitOption, locale)}
                  </DropdownItem>
                ))}
              </Dropdown>
            </Button>
          </Tooltip>
        </span>
      </div>
    </FocusManagerContainer>
  )
}

function convertUnitAgeRangeEnumToLocaleText(ageRangeUnitEnum: AgeRangeUnitEnum, locale: LocaleConfiguration): string {
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

const createStyles = (theme: Theme, disabled: boolean) => {
  const divStyle = createBaseDivStyle(theme)

  return {
    div: {
      ...divStyle.base,
      ':not(:disabled):hover': divStyle.hover,
      ':not(:disabled):active': divStyle.active,
      ':focus-within': {
        ':not(:disabled)': divStyle.focus,
      },
      background: disabled && theme.pallete.surface.background,
    },
    invalid: divStyle.invalid,
    spanWrapper: {
      alignItems: 'center',
      background: 'transparent',
      color: disabled && theme.pallete.text.disabled,
      cursor: 'default',
      display: 'flex',
      position: 'relative',
    } as CSSProperties,
    numberField: {
      border: 'none',
      '::placeholder': {
        color: theme.pallete.text.secondary,
      },
      '&:focus': {
        boxShadow: 'none !important',
      },
    } as CSSProperties,
    button: {
      borderRadius: 0,
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      width: '5.8rem',
      padding: '0.25rem',
      backgroundColor: colors.gray.c90,
      '&:focus': {
        boxShadow: 'none !important',
      },
    } as CSSProperties,
    buttonText: {
      marginLeft: '0.5rem',
      width: '2.5rem',
      marginBottom: '0.15rem',
    },
    dropdown: {
      '&:focus': {
        transition: 'box-shadow .2s ease',
      },
    } as CSSProperties,
    fieldWrapper: {
      flex: 1,
    } as CSSProperties,
    icon: {
      marginLeft: '0.25rem',
    } as CSSProperties,
    iconWrapper: {
      backgroundColor: theme.pallete.surface.background,
    } as CSSProperties,
  }
}

const createBaseDivStyle = (theme: Theme) => ({
  base: {
    backgroundColor: theme.pallete.surface.main,
    border: '1px solid' + theme.pallete.gray.c70,
    borderRadius: theme.radius.input,
    cursor: 'default',
    display: 'flex',
    position: 'relative',
    transition: 'box-shadow .2s ease',
    '&:required': {
      boxShadow: 'none',
    },
  } as CSSProperties,
  active: {
    borderColor: theme.pallete.primary.main,
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
  } as CSSProperties,
  focus: {
    boxShadow: focusBoxShadow(theme),
    outline: 'none',
  } as CSSProperties,
  hover: {
    borderColor: theme.pallete.gray.c60,
  } as CSSProperties,
  invalid: {
    border: 'solid 1px ' + theme.pallete.status.danger.main,
    '&:focus-within': {
      ':not(:disabled)': {
        border: 'solid 1px ' + theme.pallete.gray.c80,
        boxShadow: focusBoxShadow(theme, 'danger'),
      },
    },
  } as CSSProperties,
})
