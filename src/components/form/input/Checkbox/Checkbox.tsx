import React, { CSSProperties, useEffect, useRef } from 'react'

import { ClassNames, ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../../../styles'
import { Omit } from '../../../../util'
import { Input, InputProps } from '../Input'

export interface CheckboxProps extends Omit<InputProps, 'style'> {
  label?: React.ReactNode
  style?: ExternalStyles
  indeterminate?: boolean
}

export function Checkbox(props: CheckboxProps) {
  const { label, indeterminate, style, ...rest } = props
  const { classes, css } = useStyles(createStyles)
  const { classes: inputClasses } = useStyles(createInputStyles, classes)

  const inputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    inputRef.current.indeterminate = indeterminate
  }, [indeterminate])

  return (
    <label className={css(classes.wrapper, props.disabled && classes.disabled, style)}>
      <Input {...rest} inputRef={inputRef} type='checkbox' className={inputClasses.input} />
      <span className={classes.check} />
      {label && <span className={classes.label}>{label}</span>}
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
    border: '1px solid ' + theme.pallete.gray.c70,
    borderRadius: theme.radius.input,
    display: 'inline-block',
    height: 16,
    position: 'relative',
    transition: 'all .2s ease',
    verticalAlign: 'middle',
    width: 16,
  } as CSSProperties,
  label: {
    color: theme.pallete.gray.c30,
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
      borderColor: theme.pallete.gray.c40,
    },
    [`&:checked + .${classes.check}`]: {
      backgroundColor: theme.pallete.primary.main,
      borderColor: theme.pallete.primary.main,
      ':after': {
        content: '""',
        borderRight: '2px solid ' + theme.pallete.surface.main,
        borderBottom: '2px solid ' + theme.pallete.surface.main,
        position: 'absolute',
        width: 6,
        height: 10,
        top: 1,
        left: 4,
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
        borderBottom: '2px solid ' + theme.pallete.primary.main,
        position: 'absolute',
        top: -1,
        left: 3,
        width: 8,
        height: 10,
        opacity: 1,
        transition: 'opacity .2s ease',
      },
    },
    [`&:focus + .${classes.check}`]: {
      boxShadow: focusBoxShadow(theme),
    },
    [`&:disabled + .${classes.check}`]: {
      backgroundColor: theme.pallete.surface.background,
      borderColor: theme.pallete.gray.c90,
    },
    [`&:disabled + .${classes.check} + .${classes.label}`]: {
      color: theme.pallete.gray.c70,
    },
  },
})
