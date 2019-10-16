import React from 'react'
import { CSSProperties, Ref, useEffect, useRef, useState } from 'react'

import { ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { composeRefs } from '../../util/react'
import { DateInput } from '../DateField'
import { Icon, Icons } from '../Icon'
import { InputWrapper } from '../TextField/InputWrapper'

export interface Period {
  startDate: Date
  finalDate: Date
}

export interface PeriodInputBaseProps {
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

  /**
   * Function used to manipulate values of Period
   *
   * @param period
   */
  onChange?(period: Period): void
}

export function PeriodInputBase(props: PeriodInputBaseProps) {
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
  } = props

  const firstDateFieldRef = useRef<HTMLInputElement>()
  const secondDateFieldRef = useRef<HTMLInputElement>()

  const [period, setPeriod] = useState(value ? value : ({} as Period))

  useEffect(() => {
    onChange && onChange(value)
    setPeriod(value)
  }, [value])

  const { classes, css } = useStyles(createStyles, disabled)
  const className = css(classes.div, props.invalid && classes.invalid, props.style)

  const onChangeStart = (data: Date) => {
    const aux = { startDate: data, finalDate: period.finalDate } as Period
    onChange(aux)
    setPeriod(aux)
    if (data !== null) {
      secondDateFieldRef.current.focus()
    }
  }

  const onChangeFinal = (data: Date) => {
    const aux = { startDate: period.startDate, finalDate: data } as Period
    onChange(aux)
    setPeriod(aux)
  }

  const onClearStart = () => {
    const aux = { startDate: undefined, finalDate: undefined } as Period
    onChange(aux)
    setPeriod(aux)
    firstDateFieldRef.current.focus()
  }

  const onClearFinal = () => {
    const aux = { startDate: period.startDate, finalDate: undefined } as Period
    onChange(aux)
    setPeriod(aux)
    secondDateFieldRef.current.focus()
  }

  const defaultHandleOnClick = () => {
    firstDateFieldRef.current.focus()
  }

  const componentIcon = icon ? icon : 'calendarOutline'
  const defaultPlaceholder = 'dd/mm/aaaa'
  const handleIconClick = onIconClick ? onIconClick : defaultHandleOnClick

  return (
    <InputWrapper icon={componentIcon} onIconClick={handleIconClick} iconDisabled={disabled}>
      <div className={className}>
        <div className={classes.fieldWrapper}>
          <DateInput
            clearable
            disabled={disabled}
            inputRef={composeRefs(firstDateFieldRef, initialInputRef) as any}
            onChange={onChangeStart}
            onClear={onClearStart}
            placeholder={startPlaceholder ? startPlaceholder : defaultPlaceholder}
            style={classes.dateField}
            value={period ? period.startDate : undefined}
          />
        </div>
        <span className={classes.spanWrapper}>
          <Icon icon='arrowRight' style={classes.arrowIcon} />
        </span>
        <div className={classes.fieldWrapper}>
          <DateInput
            clearable
            disabled={disabled}
            inputRef={composeRefs(secondDateFieldRef, finalInputRef) as any}
            onChange={onChangeFinal}
            onClear={onClearFinal}
            placeholder={finalPlaceholder ? finalPlaceholder : defaultPlaceholder}
            style={classes.dateField}
            value={period ? period.finalDate : undefined}
          />
        </div>
      </div>
    </InputWrapper>
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
    arrowIcon: {
      background: 'transparent',
      color: disabled && theme.pallete.text.disabled,
      cursor: 'default',
    } as CSSProperties,
    spanWrapper: {
      background: 'transparent',
      display: 'flex',
      alignItems: 'center',
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
