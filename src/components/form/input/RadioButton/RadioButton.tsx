import React, { CSSProperties } from 'react'

import { ClassNames, focusBoxShadow, Theme, useStyles } from '../../../../styles'
import { Input, InputProps } from '../Input/Input'

export interface RadioButtonProps extends InputProps {
  label: React.ReactNode
}

export const RadioButton = (props: RadioButtonProps) => {
  const { label, ...rest } = props
  const { classes } = useStyles(createStyles)
  const { classes: inputClasses } = useStyles(createInputStyles, classes)

  return (
    <label className={classes.wrapper}>
      <Input {...rest} type='radio' className={inputClasses.input} />
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
    border: '1px solid ' + theme.pallete.gray.c70,
    borderRadius: 100,
    display: 'inline-block',
    height: 16,
    position: 'relative',
    transition: 'all .2s ease',
    verticalAlign: 'middle',
    width: 16,
    ':after': {
      backgroundColor: theme.pallete.surface.main,
      border: '3px solid ' + theme.pallete.surface.main,
      borderRadius: 100,
      content: '""',
      display: 'block',
      height: 2,
      marginLeft: 4,
      marginTop: 4,
      opacity: 0,
      textAlign: 'center',
      transition: 'all .2s ease',
      width: 2,
    },
  } as CSSProperties,
  label: {
    color: theme.pallete.gray.c30,
    marginLeft: '0.5rem',
  } as CSSProperties,
})

export const createInputStyles = (theme: Theme, classes: ClassNames<'radio' | 'label'>) => ({
  input: {
    opacity: 0,
    marginRight: -13,
    [`&:hover + .${classes.radio}`]: {
      borderColor: theme.pallete.gray.c40,
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
      backgroundColor: theme.pallete.surface.background,
      borderColor: theme.pallete.gray.c90,
    },
    [`&:disabled + .${classes.radio} + .${classes.label}`]: {
      color: theme.pallete.gray.c70,
    },
  },
})
