import React, { CSSProperties, useRef, useState } from 'react'
import { isEmpty } from 'lodash'
import { TextInput } from '../TextField'
import { ExternalStyles, Theme, colors, focusBoxShadow, useStyles } from '../../styles'
import { LocaleConfiguration, useLocale } from '../../i18n'
import { Button } from '../Button'
import { Text } from '../Text'
import { Icon } from '../Icon'
import { Dropdown, DropdownItem } from '../Dropdown'
import { setNativeValue } from '../../util/react'

export interface AgeRangeInputProps {
  value: AgeRange
  onChange?(ageRange: AgeRange): void

  min?: number
  max?: number
  maxLength?: number
  disabled?: boolean
  clearable?: boolean

  /**
   *  Receive external styles.
   */
  style?: ExternalStyles
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
  const { value, onChange, min, max, maxLength, disabled, clearable } = props

  const firstInputRef = useRef<HTMLInputElement>()
  const secondInputRef = useRef<HTMLInputElement>()

  const [anchorRef, setAnchorRef] = useState<HTMLButtonElement>()
  const [open, setOpen] = useState(false)

  const { classes, css } = useStyles(createStyles, disabled)
  const classNameDiv = css(classes.div, props.style)

  const locale = useLocale()

  const handleClick = () => setOpen((state) => !state)

  const handleMinMax = (value: number) => {
    if (min && max) {
      return value && value >= min && value <= max ? value : undefined
    }
    if (min) {
      return value && value >= min ? value : undefined
    }
    if (max) {
      return value && value <= max ? value : undefined
    }
    return value
  }

  const handleChangeFirstValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const firstValueText = e.currentTarget?.value

    if (isEmpty(firstValueText) || !firstValueText) {
      const newAgeRange: AgeRange = {
        firstValue: null,
        secondValue: value?.secondValue,
        unit: value?.unit,
      }

      onChange?.(newAgeRange)
    } else {
      const firstValue = parseInt(firstValueText)

      const newAgeRange: AgeRange = {
        firstValue: !isNaN(firstValue) ? firstValue : value?.firstValue,
        secondValue: value?.secondValue,
        unit: value?.unit,
      }

      onChange?.(newAgeRange)
    }
  }

  const handleChangeSecondValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const secondValueText = e.currentTarget?.value

    if (isEmpty(secondValueText) || !secondValueText) {
      const newAgeRange: AgeRange = {
        firstValue: value?.firstValue,
        secondValue: null,
        unit: value?.unit,
      }

      onChange?.(newAgeRange)
    } else {
      const secondValue = parseInt(secondValueText)

      const newAgeRange: AgeRange = {
        firstValue: value?.firstValue,
        secondValue: !isNaN(secondValue) ? secondValue : value?.secondValue,
        unit: value?.unit,
      }

      onChange?.(newAgeRange)
    }
  }

  const handleChangeUnit = (unit: AgeRangeUnitEnum) => {
    setNativeValue(firstInputRef.current, '')
    setNativeValue(secondInputRef.current, '')

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

  return (
    <div>
      <div className={classNameDiv}>
        <div className={classes.fieldWrapper}>
          <TextInput
            name='firstValue'
            value={value?.firstValue}
            clearable={clearable}
            disabled={disabled}
            style={classes.numberField}
            maxLength={maxLength}
            onChange={handleChangeFirstValue}
            placeholder={locale.ageRange.minimumPlaceholder}
            inputRef={firstInputRef}
          />
        </div>
        <span className={classes.spanWrapper}>
          <strong>{locale.ageRange.separator}</strong>
        </span>
        <div className={classes.fieldWrapper}>
          <TextInput
            name='secondValue'
            value={value?.secondValue}
            clearable={clearable}
            disabled={disabled}
            style={classes.numberField}
            maxLength={maxLength}
            onChange={handleChangeSecondValue}
            placeholder={locale.ageRange.maximumPlaceholder}
            inputRef={secondInputRef}
          />
        </div>
        <span className={classes.iconWrapper}>
          <Button
            skin='ghost'
            size='small'
            tabIndex={-1}
            disabled={disabled}
            innerRef={setAnchorRef}
            onClick={handleClick}
            style={classes.button}
          >
            <Text style={classes.buttonText}>{convertUnitAgeRangeEnumToLocaleText(value?.unit, locale)}</Text>
            <Icon style={{ marginLeft: '0.5rem' }} icon={open ? 'angleUp' : 'angleDown'} />
            <Dropdown anchorRef={anchorRef} open={open} onClose={handleClose} style={classes.dropdown}>
              {UNIT_OPTIONS.map((unitOption) => (
                <DropdownItem key={unitOption} onClick={() => handleChangeUnit(unitOption)}>
                  {convertUnitAgeRangeEnumToLocaleText(unitOption, locale)}
                </DropdownItem>
              ))}
            </Dropdown>
          </Button>
        </span>
      </div>
    </div>
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
      padding: 'calc(0.25rem - 2px) calc(0.5rem - 1px)',
      borderRadius: 'inherit',
      '&:focus': {
        boxShadow: 'none',
      },
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
