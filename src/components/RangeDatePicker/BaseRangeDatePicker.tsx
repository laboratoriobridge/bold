import React from 'react'
import { CSSProperties, Ref, useEffect, useRef, useState } from 'react'

import { ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { composeRefs } from '../../util/react'
import { DateInput } from '../DateField'
import { Icons } from '../Icon'
import { InputWrapper } from '../TextField/InputWrapper'

export interface Period {
  startDate?: Date
  finalDate?: Date
}

export interface BaseRangeDatePickerProps {
  /**
   * Prop used to set an initial period.
   */

  value?: Period

  /**
   * Prop to disable the date field.
   */
  disabled?: boolean

  /**
   * Prop to set an icon in date field button.
   * When this prop is not declared, date field will be
   * shown without a icon.
   */
  icon?: Icons

  /**
   *  Prop to reference an invalid state.
   */

  invalid?: boolean

  /**
   *  Prop for receive external styles.
   */

  style?: ExternalStyles

  /**
   *  Props to set placeholder to inputs
   */

  startPlaceholder?: string

  finalPlaceholder?: string

  /**
   * initialInputRef and finalInputRef are used to assign refs
   * to date input components
   */

  initialInputRef?: Ref<HTMLInputElement>

  finalInputRef?: Ref<HTMLInputElement>

  /**
   * Function to manage the icon action
   */
  onIconClick?(): void

  onInputOnFocus?(isOnFocus: number): void

  /**
   * Function used to manipulate values of Period
   *
   * @param period
   */
  onChange?(period: Period): void
}

export function BaseRangeDatePicker(props: BaseRangeDatePickerProps) {
  const {
    value,
    disabled,
    onChange,
    icon,
    onIconClick,
    initialInputRef,
    finalInputRef,
    startPlaceholder,
    finalPlaceholder,
    onInputOnFocus,
  } = props

  const firstDateFieldRef = useRef<HTMLInputElement>()
  const secondDateFieldRef = useRef<HTMLInputElement>()

  const [period, setPeriod] = useState(value)
  const { classes, css } = useStyles(createStyles, disabled)
  const className = css(classes.div, props.invalid && classes.invalid, props.style)

  useEffect(() => {
    onChange && onChange(value)
    setPeriod(value ? value : ({ startDate: undefined, finalDate: undefined } as Period))
  }, [value])

  const onChangeStart = (data: Date) => {
    const aux = { startDate: data, finalDate: period.finalDate } as Period
    onChange && onChange(aux)
    setPeriod(aux)
    if (data !== undefined) {
      secondDateFieldRef.current.focus()
    }
  }

  const onChangeFinal = (data: Date) => {
    const aux = { startDate: period.startDate, finalDate: data } as Period
    onChange && onChange(aux)
    setPeriod(aux)
    if (data !== undefined) {
      secondDateFieldRef.current.blur()
    }
  }

  const onClearStart = () => {
    const aux = { startDate: undefined, finalDate: period.finalDate } as Period
    onChange && onChange(aux)
    setPeriod(aux)
    firstDateFieldRef.current.focus()
  }

  const onClearFinal = () => {
    const aux = { startDate: period.startDate, finalDate: undefined } as Period
    onChange && onChange(aux)
    setPeriod(aux)
    secondDateFieldRef.current.focus()
  }

  const defaultHandleOnClick = () => {
    firstDateFieldRef.current.focus()
  }

  const onInputOnFocusInicial = () => {
    onInputOnFocus && onInputOnFocus(1)
  }

  const onInputOnFocusFinal = () => {
    onInputOnFocus && onInputOnFocus(2)
  }

  const handleIconClick = onIconClick ? onIconClick : defaultHandleOnClick

  return (
    <InputWrapper icon={icon} onIconClick={handleIconClick} iconDisabled={disabled}>
      <div className={className}>
        <div className={classes.fieldWrapper}>
          <DateInput
            clearable
            disabled={disabled}
            inputRef={composeRefs(firstDateFieldRef, initialInputRef) as any}
            onChange={onChangeStart}
            onClear={onClearStart}
            placeholder={startPlaceholder}
            style={classes.dateField}
            value={period ? period.startDate : undefined}
            onFocus={onInputOnFocusInicial}
          />
        </div>
        <span className={classes.spanWrapper}>
          <strong>até</strong>
        </span>
        <div className={classes.fieldWrapper}>
          <DateInput
            clearable
            disabled={disabled}
            inputRef={composeRefs(secondDateFieldRef, finalInputRef) as any}
            onChange={onChangeFinal}
            onClear={onClearFinal}
            placeholder={finalPlaceholder}
            style={classes.dateField}
            value={period ? period.finalDate : undefined}
            onFocus={onInputOnFocusFinal}
          />
        </div>
      </div>
    </InputWrapper>
  )
}

BaseRangeDatePicker.defaultProps = {
  startPlaceholder: 'dd/mm/aaaa',
  finalPlaceholder: 'dd/mm/aaaa',
  icon: 'calendarOutline',
} as Partial<BaseRangeDatePickerProps>

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
