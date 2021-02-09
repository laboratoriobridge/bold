import React from 'react'
import { CSSProperties, useRef } from 'react'

import { useLocale } from '../../i18n'
import { focusBoxShadow, Theme, useStyles } from '../../styles'
import { composeRefs } from '../../util/react'
import { Icon } from '../Icon'
import { Button, ReferenceMonth } from '..'
import { MonthInput } from '../MonthField/MonthInput'
import { BaseDateRangeInputProps } from '../DateRangePicker/BaseDateRangeInput'
import { isGreaterOrEqualThan, isGreaterThan, isLessOrEqualThan, isLessThan } from './util'
import { ReferenceMonthRange } from './MonthRangePicker'

export interface BaseMonthRangeInputProps
  extends Omit<BaseDateRangeInputProps, 'value' | 'onChange' | 'maxDate' | 'minDate'> {
  /**
   * Defines the minimum allowed reference month
   */
  minMonth?: ReferenceMonth
  /**
   * Defines the max allowed reference month
   */
  maxMonth?: ReferenceMonth
  /**
   * Set a ReferenceMonthRange as initial value of the component.
   */
  value?: ReferenceMonthRange
  /**
   * Function used to manipulate values of reference month range
   * @param range
   */
  onChange?(range: ReferenceMonthRange): void
}

export function BaseMonthRangeInput(props: BaseMonthRangeInputProps) {
  const {
    clearable,
    disabled,
    divRef,
    icon,
    initialInputRef,
    finalInputRef,
    minMonth,
    maxMonth,
    name,
    onChange,
    onIconClick,
    onInputOnFocus,
    rangeSeparator,
    value,
    style,
    ...rest
  } = props

  const firstFieldRef = useRef<HTMLInputElement>()
  const secondFieldRef = useRef<HTMLInputElement>()

  const { classes, css } = useStyles(createStyles, disabled)
  const className = css(classes.div, props.invalid && classes.invalid, props.style)

  const handleMinmaxMonth = (month: ReferenceMonth) => {
    if (minMonth && maxMonth) {
      return month && isGreaterOrEqualThan(month, minMonth) && isLessOrEqualThan(month, maxMonth) ? month : undefined
    } else if (minMonth) {
      return month && isGreaterOrEqualThan(month, minMonth) ? month : undefined
    } else if (maxMonth) {
      return month && isLessOrEqualThan(month, maxMonth) ? month : undefined
    } else {
      return month
    }
  }

  const onChangeStart = (refMonth: ReferenceMonth) => {
    const start = handleMinmaxMonth(refMonth)
    const end = value?.start && value?.end && start && isGreaterThan(start, value?.end) ? undefined : value?.end
    const aux = {
      start,
      end,
    } as ReferenceMonthRange

    onChange && onChange(aux)
    if (start) {
      secondFieldRef.current.focus()
    }
  }

  const onChangeFinal = (refMonth: ReferenceMonth) => {
    const auxFinalMonth = handleMinmaxMonth(refMonth)
    const start =
      value?.start && value?.end && auxFinalMonth && isLessThan(auxFinalMonth, value?.start)
        ? auxFinalMonth
        : value?.start
    const end =
      value?.start && value?.end && auxFinalMonth && isLessThan(auxFinalMonth, value?.start) ? undefined : auxFinalMonth

    const aux = {
      start,
      end,
    } as ReferenceMonthRange

    onChange && onChange(aux)
  }

  const onClearStart = () => {
    const aux = { start: undefined, end: value.end } as ReferenceMonthRange
    onChange && onChange(aux)
    firstFieldRef.current.focus()
  }

  const onClearFinal = () => {
    const aux = { start: value.start, end: undefined } as ReferenceMonthRange
    onChange && onChange(aux)
    secondFieldRef.current.focus()
  }

  const defaultHandleOnClick = () => firstFieldRef.current.focus()

  const onInputOnFocusInicial = () => onInputOnFocus && onInputOnFocus(1)

  const onInputOnFocusFinal = () => onInputOnFocus && onInputOnFocus(2)

  const handleIconClick = onIconClick ? onIconClick : defaultHandleOnClick

  const locale = useLocale()

  return (
    <div ref={divRef}>
      <div className={className}>
        <div className={classes.fieldWrapper}>
          <MonthInput
            clearable={clearable}
            name={name ? `${name}.start` : 'start'}
            disabled={disabled}
            inputRef={composeRefs(firstFieldRef, initialInputRef) as any}
            onChange={onChangeStart}
            onClear={onClearStart}
            placeholder={locale.dateInput.placeholder}
            style={classes.monthField}
            value={value?.start}
            onFocus={onInputOnFocusInicial}
            {...rest}
          />
        </div>
        <span className={classes.spanWrapper}>
          <strong>{rangeSeparator ? rangeSeparator : locale.dateRangeField.separator}</strong>
        </span>
        <div className={classes.fieldWrapper}>
          <MonthInput
            clearable={clearable}
            name={name ? `${name}.end` : 'end'}
            disabled={disabled}
            inputRef={composeRefs(secondFieldRef, finalInputRef) as any}
            onChange={onChangeFinal}
            onClear={onClearFinal}
            placeholder={locale.dateInput.placeholder}
            style={classes.monthField}
            value={value?.end}
            onFocus={onInputOnFocusFinal}
            {...rest}
          />
        </div>
        <span className={classes.iconWrapper}>
          <Button
            size='small'
            skin='ghost'
            tabIndex={-1}
            onClick={handleIconClick}
            style={classes.icon}
            disabled={disabled}
          >
            <Icon icon={icon} />
          </Button>
        </span>
      </div>
    </div>
  )
}

BaseMonthRangeInput.defaultProps = {
  icon: 'calendarOutline',
  clearable: true,
} as Partial<BaseMonthRangeInputProps>

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
    monthField: {
      border: 'none',
      '::placeholder': {
        color: theme.pallete.text.secondary,
      },
      '&:focus': {
        boxShadow: 'none !important',
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
      backgroundColor: theme.pallete.gray.c90,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '2.5rem',
      borderTopRightRadius: 1,
      borderBottomRightRadius: 1,
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
