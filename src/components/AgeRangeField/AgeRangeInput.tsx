import { isEmpty } from 'lodash'
import React, { CSSProperties, useState } from 'react'
import { useLocale } from '../../i18n'
import { ExternalStyles, Theme, colors, focusBoxShadow, useStyles } from '../../styles'
import { Button } from '../Button'
import { Dropdown, DropdownItem } from '../Dropdown'
import { FocusManagerContainer } from '../FocusManagerContainer'
import { Icon } from '../Icon'
import { Text } from '../Text'
import { TextInput } from '../TextField'
import { Tooltip } from '../Tooltip'
import { convertUnitAgeRangeEnumToLocaleText } from './converter'
import { AgeRange, AgeRangeUnitEnum } from './model'
import { getAvaibleAgeRangeUnits } from './util'

interface Placeholders {
  start?: string
  end?: string
}

export interface AgeRangeInputProps {
  /**
   * Set a AgeRange as initial value of the component
   */
  value?: AgeRange

  /**
   * Component name
   */
  name?: string

  /**
   * Limit the length of the number
   */
  maxLength?: number

  /**
   * Disable the age range input
   */
  disabled?: boolean

  /**
   * Enable the "x" button to clear value in both of the inputs
   */
  clearable?: boolean

  /**
   *  Reference an invalid state
   */
  invalid?: boolean

  /**
   * Set placeholders in the inputs
   */
  placeholders?: Placeholders

  /**
   *  Receive external styles
   */
  style?: ExternalStyles

  /**
   * Set unit options that won't be shown on drop down menu
   */
  unitOptionsToExclude?: AgeRangeUnitEnum[]

  /**
   * Called whenever the age range changes
   * @param ageRange
   */
  onChange?(ageRange: AgeRange): void

  /**
   * Called when the start or end input is focused
   * @param focusEvent
   */
  onFocus?(focusEvent: React.FocusEvent<HTMLDivElement>): void

  /**
   * Called when the start or end input loses focus
   * @param focusEvent
   */
  onBlur?(focusEvent: React.FocusEvent<HTMLDivElement>): void
}

export function AgeRangeInput(props: AgeRangeInputProps) {
  const {
    value,
    name,
    maxLength,
    disabled,
    clearable,
    invalid,
    placeholders,
    style,
    unitOptionsToExclude,
    onChange,
    onFocus,
    onBlur,
  } = props

  const [anchorRef, setAnchorRef] = useState<HTMLButtonElement>()
  const [open, setOpen] = useState(false)

  const { classes, css } = useStyles(createStyles, disabled)
  const classNameDiv = css(classes.div, invalid && classes.invalid, style)
  const locale = useLocale()

  if (unitOptionsToExclude?.includes(value?.unit)) {
    throw new Error(
      `You selected ${convertUnitAgeRangeEnumToLocaleText(
        value.unit,
        locale
      )}, but it's an excluded unit option defined in 'unitOptionsToExclude' prop.`
    )
  }

  const handleClickUnitOptionsButton = () => setOpen((state) => !state)

  const handleChangeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    let start: number = null

    const startText = e.currentTarget?.value
    const startParsed = parseInt(startText)

    if (!isNaN(startParsed)) {
      start = startParsed
    } else if (!isEmpty(startText)) {
      start = value?.start
    }

    const newAgeRange: AgeRange = {
      start,
      end: value?.end,
      unit: value?.unit,
    }

    onChange?.(newAgeRange)
  }

  const handleChangeEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    let end: number = null

    const endText = e.currentTarget?.value
    const endParsed = parseInt(endText)

    if (!isNaN(endParsed)) {
      end = endParsed
    } else if (!isEmpty(endText)) {
      end = value?.end
    }

    const newAgeRange: AgeRange = {
      start: value?.start,
      end,
      unit: value?.unit,
    }

    onChange?.(newAgeRange)
  }

  const handleChangeUnit = (unit: AgeRangeUnitEnum) => {
    const newAgeRange: AgeRange = {
      start: undefined,
      end: undefined,
      unit,
    }

    onChange?.(newAgeRange)
  }

  const handleClose = () => {
    setOpen(false)
    anchorRef.focus()
  }

  const avaibleUnitOptions = getAvaibleAgeRangeUnits(unitOptionsToExclude)
  const hasOnlyOneUnitOption = avaibleUnitOptions.length === 1

  return (
    <FocusManagerContainer onFocusIn={onFocus} onFocusOut={onBlur}>
      <div className={classNameDiv}>
        <div className={classes.fieldWrapper}>
          <TextInput
            name={name ? `${name}.start` : 'start'}
            data-testid='age-range-start-input'
            value={value?.start}
            clearable={clearable}
            disabled={disabled}
            style={classes.numberField}
            maxLength={maxLength}
            placeholder={placeholders?.start ?? locale.ageRange.minimumPlaceholder}
            onChange={handleChangeStart}
            min={10}
          />
        </div>
        <span className={classes.spanWrapper}>
          <strong>{locale.ageRange.separator}</strong>
        </span>
        <div className={classes.fieldWrapper}>
          <TextInput
            name={name ? `${name}.end` : 'end'}
            data-testid='age-range-end-input'
            value={value?.end}
            clearable={clearable}
            disabled={disabled}
            style={classes.numberField}
            maxLength={maxLength}
            placeholder={placeholders?.end ?? locale.ageRange.maximumPlaceholder}
            onChange={handleChangeEnd}
            max={15}
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
              onClick={handleClickUnitOptionsButton}
              style={classes.button}
              data-testid='age-range-unit-button'
            >
              <Text style={classes.buttonText}>{convertUnitAgeRangeEnumToLocaleText(value?.unit, locale)}</Text>
              <Icon style={classes.icon} icon={open ? 'angleUp' : 'angleDown'} />
              <Dropdown anchorRef={anchorRef} open={open} onClose={handleClose} style={classes.dropdown}>
                {avaibleUnitOptions.map((unitOption) => (
                  <DropdownItem
                    data-testid={`age-range-unit-option-${unitOption}`}
                    key={unitOption}
                    onClick={() => handleChangeUnit(unitOption)}
                  >
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
