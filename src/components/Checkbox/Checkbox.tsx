import React, { CSSProperties, useEffect, useRef } from 'react'
import { composeRefs } from '../../util/react'

import { ClassNames, ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { Input, InputProps } from '../Input'

export interface CheckboxProps extends Omit<InputProps, 'style'> {
  label?: React.ReactNode
  style?: ExternalStyles
  indeterminate?: boolean
}

export function Checkbox(props: CheckboxProps) {
  const { label, indeterminate, style, inputRef, ...rest } = props
  const { classes, css } = useStyles(createStyles)
  const { classes: inputClasses } = useStyles(createInputStyles, classes)

  const internalRef = useRef<HTMLInputElement>()

  useEffect(() => {
    internalRef.current.indeterminate = indeterminate
  }, [indeterminate])

  return (
    <label className={css(classes.wrapper, props.disabled && classes.disabled, style)}>
      <Input {...rest} inputRef={composeRefs(internalRef, inputRef)} type='checkbox' className={inputClasses.input} />
      <span className={classes.check} />
      {(label || label === 0) && <span className={classes.label}>{label}</span>}
    </label>
  )
}

export const createStyles = (theme: Theme) => ({
  wrapper: {
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
  } as CSSProperties,
  check: {
    backgroundColor: theme.pallete.surface.main,
    border: '1px solid ' + theme.pallete.gray.c60,
    borderRadius: theme.radius.input,
    display: 'inline-block',
    height: 24,
    position: 'relative',
    transition: 'all .2s ease',
    verticalAlign: 'middle',
    width: 24,
    minWidth: 24,
  } as CSSProperties,
  label: {
    marginLeft: '0.5rem',
  } as CSSProperties,
  disabled: {
    cursor: 'not-allowed',
  } as CSSProperties,
})

export const createInputStyles = (theme: Theme, classes: ClassNames<'check' | 'label'>) => ({
  input: {
    opacity: 0,
    marginRight: -13,
    [`&:hover + .${classes.check}`]: {
      borderColor: theme.pallete.gray.c50,
    },
    [`&:checked + .${classes.check}`]: {
      backgroundColor: theme.pallete.primary.main,
      borderColor: theme.pallete.primary.main,
      ':after': {
        content: '""',
        borderRight: '2px solid ' + theme.pallete.surface.main,
        borderBottom: '2px solid ' + theme.pallete.surface.main,
        position: 'absolute',
        width: 8,
        height: 16,
        top: 0,
        left: 7,
        opacity: 1,
        transform: 'rotate(45deg) scale(1)',
        transition: 'opacity .2s ease',
      },
    },
    [`&:indeterminate + .${classes.check}`]: {
      backgroundColor: theme.pallete.surface.main,
      borderColor: theme.pallete.primary.main,
      ':after': {
        content: '""',
        borderBottom: '3px solid ' + theme.pallete.primary.main,
        position: 'absolute',
        top: -1,
        left: 4,
        width: 14,
        height: 14,
        opacity: 1,
        transition: 'opacity .2s ease',
      },
    },
    [`&:focus + .${classes.check}`]: {
      boxShadow: focusBoxShadow(theme),
    },
    [`&:disabled + .${classes.check}`]: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    [`&:disabled + .${classes.check} + .${classes.label}`]: {
      color: theme.pallete.gray.c70,
      cursor: 'not-allowed',
    },
  },
})
