import React, { CSSProperties } from 'react'

import { ClassNames, ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { Input, InputProps } from '../Input'

export interface RadioProps extends Omit<InputProps, 'style'> {
  label: React.ReactNode
  style?: ExternalStyles
}

export function Radio(props: RadioProps) {
  const { label, style, ...rest } = props
  const { classes } = useStyles(createStyles)
  const { classes: inputClasses, css } = useStyles(createInputStyles, classes)

  return (
    <label className={classes.wrapper}>
      <Input {...rest} type='radio' className={css(inputClasses.input, style)} />
      <span className={classes.radio} />
      <span className={classes.label}>{label}</span>
    </label>
  )
}

export const createStyles = (theme: Theme) => ({
  wrapper: {
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
  } as CSSProperties,
  radio: {
    backgroundColor: theme.pallete.surface.main,
    border: '1px solid ' + theme.pallete.gray.c60,
    borderRadius: 100,
    display: 'inline-block',
    height: 24,
    position: 'relative',
    transition: 'all .2s ease',
    verticalAlign: 'middle',
    width: 24,
    ':after': {
      backgroundColor: theme.pallete.surface.main,
      border: '5px solid ' + theme.pallete.surface.main,
      borderRadius: 100,
      content: '""',
      display: 'block',
      height: 2,
      marginLeft: 6,
      marginTop: 6,
      opacity: 0,
      textAlign: 'center',
      transition: 'all .2s ease',
      width: 2,
    },
  } as CSSProperties,
  label: {
    marginLeft: '0.5rem',
  } as CSSProperties,
})

export const createInputStyles = (theme: Theme, classes: ClassNames<'radio' | 'label'>) => ({
  input: {
    opacity: 0,
    marginRight: -13,
    [`&:hover + .${classes.radio}`]: {
      borderColor: theme.pallete.gray.c50,
    },
    [`&:checked + .${classes.radio}`]: {
      backgroundColor: theme.pallete.primary.main,
      borderColor: theme.pallete.primary.main,
      ':after': {
        opacity: 1,
      },
    },
    [`&:focus + .${classes.radio}`]: {
      boxShadow: focusBoxShadow(theme),
    },
    [`&:disabled + .${classes.radio}`]: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    [`&:disabled + .${classes.radio} + .${classes.label}`]: {
      color: theme.pallete.gray.c70,
      cursor: 'not-allowed',
    },
  },
})
