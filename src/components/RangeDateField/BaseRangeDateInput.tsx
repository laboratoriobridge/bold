import React from 'react'
import { CSSProperties, Ref, useRef } from 'react'

import { useLocale } from '../../i18n'
import { ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { composeRefs } from '../../util/react'
import { DateInput } from '../DateField'
import { Icons } from '../Icon'
import { InputWrapper } from '../TextField/InputWrapper'

export interface Period {
  startDate?: Date
  finalDate?: Date
}

export interface BaseRangeDateInputProps {
  /**
   * Set a period as initial value of the component.
   */
  value?: Period

  /**
   * Component name
   */
  name?: string

  /**
   * "minDate" defines the minimum allowed date
   */
  minDate?: Date

  /**
   * "minDate" limits the minimum allowed date
   */
  maxDate?: Date

  /**
   * disable the range date input.
   */
  disabled?: boolean

  /**
   * Set an icon in range date input button.
   * When this prop is not declared, date field will be
   * shown without a icon.
   */
  icon?: Icons

  /**
   *  Reference an invalid state.
   */
  invalid?: boolean

  /**
   *  Receive external styles.
   */
  style?: ExternalStyles

  /**
   *  Set a placeholder in the first date input.
   */
  startPlaceholder?: string

  /**
   *  Set a placeholder in the second date input.
   */
  finalPlaceholder?: string

  /**
   * A word to separate initial and final date fields
   */
  rangeSeparator?: string

  /**
   * "divRef" is used to assign ref
   * to the main div component
   */
  divRef?: Ref<HTMLDivElement>

  /**
   * "initialInputRef" and "finalInputRef" are used to assign refs
   * to date input components
   */
  initialInputRef?: Ref<HTMLInputElement>
  finalInputRef?: Ref<HTMLInputElement>

  /**
   * Function to manage the icon action
   */
  onIconClick?(): void

  /**
   * Function to control what input is on focus
   *
   * @param isOnFocus
   */
  onInputOnFocus?(isOnFocus: number): void

  /**
   * Function used to manipulate values of Period
   *
   * @param period
   */
  onChange?(period: Period): void
}

export function BaseRangeDateInput(props: BaseRangeDateInputProps) {
  const {
    disabled,
    divRef,
    icon,
    initialInputRef,
    finalInputRef,
    maxDate,
    minDate,
    name,
    onChange,
    onIconClick,
    onInputOnFocus,
    rangeSeparator,
    value,
    ...rest
  } = props

  const firstDateFieldRef = useRef<HTMLInputElement>()
  const secondDateFieldRef = useRef<HTMLInputElement>()

  const { classes, css } = useStyles(createStyles, disabled)
  const className = css(classes.div, props.invalid && classes.invalid, props.style)

  const handleMinMaxDates = (date: Date) => {
    if (minDate && maxDate) {
      return date && date >= minDate && date <= maxDate ? date : undefined
    }
    if (minDate) {
      return date && date >= minDate ? date : undefined
    }
    if (maxDate) {
      return date && date <= maxDate ? date : undefined
    }
    return date
  }

  const onChangeStart = (date: Date) => {
    const startDate = handleMinMaxDates(date)
    const finalDate =
      value?.startDate && value?.finalDate && startDate && startDate > value?.finalDate ? undefined : value?.finalDate
    const aux = { startDate, finalDate } as Period

    onChange && onChange(aux)
    if (startDate) {
      secondDateFieldRef.current.focus()
    }
  }

  const onChangeFinal = (date: Date) => {
    const auxFinalDate = handleMinMaxDates(date)
    const startDate =
      value?.startDate && value?.finalDate && auxFinalDate && auxFinalDate < value?.startDate
        ? auxFinalDate
        : value?.startDate
    const finalDate =
      value?.startDate && value?.finalDate && auxFinalDate && auxFinalDate < value?.startDate ? undefined : auxFinalDate

    const aux = { startDate, finalDate } as Period
    onChange && onChange(aux)
  }

  const onClearStart = () => {
    const aux = { startDate: undefined, finalDate: value.finalDate } as Period
    onChange && onChange(aux)
    firstDateFieldRef.current.focus()
  }

  const onClearFinal = () => {
    const aux = { startDate: value.startDate, finalDate: undefined } as Period
    onChange && onChange(aux)
    secondDateFieldRef.current.focus()
  }

  const defaultHandleOnClick = () => firstDateFieldRef.current.focus()

  const onInputOnFocusInicial = () => onInputOnFocus && onInputOnFocus(1)

  const onInputOnFocusFinal = () => onInputOnFocus && onInputOnFocus(2)

  const handleIconClick = onIconClick ? onIconClick : defaultHandleOnClick

  const locale = useLocale()

  return (
    <div ref={divRef}>
      <InputWrapper icon={icon} onIconClick={handleIconClick} iconDisabled={disabled}>
        <div className={className}>
          <div className={classes.fieldWrapper}>
            <DateInput
              clearable
              name={name ? `${name}.startDate` : 'startDate'}
              disabled={disabled}
              inputRef={composeRefs(firstDateFieldRef, initialInputRef) as any}
              onChange={onChangeStart}
              onClear={onClearStart}
              placeholder={locale.dateInput.placeholder}
              style={classes.dateField}
              value={value?.startDate}
              onFocus={onInputOnFocusInicial}
              {...rest}
            />
          </div>
          <span className={classes.spanWrapper}>
            <strong>{rangeSeparator ? rangeSeparator : locale.rangeDateField.separator}</strong>
          </span>
          <div className={classes.fieldWrapper}>
            <DateInput
              clearable
              name={name ? `${name}.finalDate` : 'finalDate'}
              disabled={disabled}
              inputRef={composeRefs(secondDateFieldRef, finalInputRef) as any}
              onChange={onChangeFinal}
              onClear={onClearFinal}
              placeholder={locale.dateInput.placeholder}
              style={classes.dateField}
              value={value?.finalDate}
              onFocus={onInputOnFocusFinal}
              {...rest}
            />
          </div>
        </div>
      </InputWrapper>
    </div>
  )
}

BaseRangeDateInput.defaultProps = {
  icon: 'calendarOutline',
} as Partial<BaseRangeDateInputProps>

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
      cursor: 'default',
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
      color: disabled && theme.pallete.text.disabled,
    } as CSSProperties,
    dateField: {
      border: 'none',
      '::placeholder': {
        color: theme.pallete.text.disabled,
      },
      '&:focus': {
        boxShadow: 'none !important',
      },
    } as CSSProperties,
    fieldWrapper: {
      flex: 1,
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
    paddingRight: '2.5rem',
    paddingLeft: '0.1rem',
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
