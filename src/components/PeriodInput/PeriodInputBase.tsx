import React, { CSSProperties, useEffect, useRef, useState } from 'react'

import { focusBoxShadow, Theme, useStyles } from '../../styles'
import { Button } from '../Button'
import { DateInput } from '../DateField'
import { Icon, Icons } from '../Icon'
import { MaskedTextFieldProps } from '../MaskedTextField'

export interface Period {
  startDate: Date
  finalDate: Date
}

export interface PeriodInputBaseProps extends Omit<MaskedTextFieldProps, 'onChange' | 'value'> {
  /**
   * Prop used to set an initial period in date interval
   */

  value?: Period

  /**
   * Prop to disable the date field
   */
  disabled?: boolean

  /**
   * Prop to set an icon in date field button.
   * When this prop is not declared, date field will be shown without a icon.
   */
  icon?: Icons

  /**
   * Function to manage the icon action
   *
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
  const firstDateFieldRef = useRef<HTMLInputElement>()
  const scondDateFieldRef = useRef<HTMLInputElement>()

  const { value, disabled, onChange, icon, onIconClick } = props
  const { classes, css } = useStyles(createStyles, disabled)

  const className = css(classes.div, props.invalid && classes.invalid, props.style)

  const [period, setPeriod] = useState(value ? value : ({} as Period))

  useEffect(() => {
    onChange && onChange(value)
    setPeriod(value)
  }, [value])

  const onChangeStart = (data: Date) => {
    const aux = { startDate: data, finalDate: period.finalDate } as Period
    onChange(aux)
    setPeriod(aux)
    if (data !== null) {
      scondDateFieldRef.current.focus()
    }
  }

  const onChangeFinal = (data: Date) => {
    const aux = { startDate: period.startDate, finalDate: data } as Period
    onChange(aux)
    setPeriod(aux)
  }

  const onClearStart = () => {
    const aux = { startDate: period.finalDate, finalDate: undefined } as Period
    onChange(aux)
    setPeriod(aux)
    firstDateFieldRef.current.focus()
  }

  const onClearFinal = () => {
    const aux = { startDate: period.startDate, finalDate: undefined } as Period
    onChange(aux)
    setPeriod(aux)
    scondDateFieldRef.current.focus()
  }

  const defaultHandleOnClick = () => {
    firstDateFieldRef.current.focus()
  }

  return (
    <div className={className}>
      <div className={classes.dateFieldWrapper}>
        <DateInput
          clearable
          disabled={disabled}
          inputRef={firstDateFieldRef}
          onChange={onChangeStart}
          onClear={onClearStart}
          style={classes.dateField}
          value={period.startDate}
        />
      </div>
      <Icon icon='arrowRight' style={classes.arrowIcon} />
      <div className={classes.dateFieldWrapper}>
        <DateInput
          clearable
          disabled={disabled}
          inputRef={scondDateFieldRef}
          onChange={onChangeFinal}
          onClear={onClearFinal}
          style={classes.dateField}
          value={period.finalDate}
        />
      </div>
      {icon && (
        <Button
          size='small'
          skin='ghost'
          tabIndex={-1}
          onClick={onIconClick ? onIconClick : defaultHandleOnClick}
          style={classes.calendarWrapper}
          disabled={disabled}
        >
          <Icon icon={icon} />
        </Button>
      )}
    </div>
  )
}

const createStyleParts = (theme: Theme) => ({
  base: {
    backgroundColor: theme.pallete.surface.main,
    border: '1px solid ' + theme.pallete.gray.c70,
    borderRadius: theme.radius.input,
    cursor: 'default',
    display: 'flex',
    margin: '0.6rem 0rem 0.6rem 0rem',
    transition: 'box-shadow .2s ease',
    '&:required': {
      boxShadow: 'none',
    },
  } as CSSProperties,
  active: {
    borderColor: theme.pallete.primary.main,
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
  } as CSSProperties,
  disabled: {
    backgroundColor: theme.pallete.surface.background,
    borderColor: theme.pallete.gray.c80,
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

const createStyles = (theme: Theme) => {
  const parts = createStyleParts(theme)

  return {
    div: {
      ...parts.base,
      ':disabled': parts.disabled,
      ':not(:disabled):hover': parts.hover,
      ':not(:disabled):active': parts.active,
      ':focus-within': {
        ':not(:disabled)': parts.focus,
      },
    },
    invalid: parts.invalid,
    arrowIcon: {
      cursor: 'default',
    } as CSSProperties,
    calendarWrapper: {
      height: 'fit-content',
      borderRadius: theme.radius.input,
      backgroundColor: theme.pallete.gray.c90,
      padding: 'calc(0.195rem - 1px) calc(0.25rem - 1px)',
      width: '2.5rem',
      '&:focus': {
        boxShadow: 'none',
      },
    } as CSSProperties,
    dateField: {
      border: 'none',
      '&:focus': {
        boxShadow: 'none !important',
      },
    } as CSSProperties,
    dateFieldWrapper: {
      flex: 1,
    } as CSSProperties,
  }
}
