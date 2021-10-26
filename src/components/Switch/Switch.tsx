import React, { CSSProperties } from 'react'

import { ClassNames, ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { Input, InputProps } from '../Input'

export interface SwitchProps extends Omit<React.HTMLAttributes<HTMLLabelElement>, 'onChange' | 'style'> {
  label?: string

  // Inner input props
  name?: InputProps['name']
  disabled?: InputProps['disabled']
  onChange?: InputProps['onChange']
  value?: InputProps['value']
  defaultValue?: InputProps['defaultValue']
  checked?: InputProps['checked']
  defaultChecked?: InputProps['defaultChecked']
  style?: ExternalStyles
}

export function Switch(props: SwitchProps) {
  const { label, name, disabled, onChange, value, defaultValue, checked, defaultChecked, style, ...rest } = props
  const { classes, css } = useStyles(createStyles)
  const { classes: inputClasses } = useStyles(createInputStyles, classes)

  return (
    <label className={css([inputClasses.wrapper, style])} {...rest}>
      <Input
        type='checkbox'
        className={inputClasses.input}
        name={name}
        value={value}
        defaultValue={defaultValue}
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        onChange={onChange}
      />

      <div className={classes.switch}>
        <span className={classes.knob} />
      </div>

      {label && <span className={classes.text}>{label}</span>}
    </label>
  )
}

export const createStyles = (theme: Theme) => ({
  switch: {
    outline: 0,
    background: theme.pallete.surface.background,
    borderRadius: '0.75rem',
    padding: 'calc(0.25rem - 1px) 0.25rem', // calc to discount border size
    display: 'inline-block',
    width: '3rem',
    lineHeight: 0,
    border: `1px solid ${theme.pallete.gray.c70}`,
    transition: 'all .2s',
  } as CSSProperties,
  knob: {
    background: theme.pallete.surface.main,
    borderRadius: '50%',
    display: 'inline-block',
    width: '1rem',
    height: '1rem',
    transition: 'all .2s',
    border: `1px solid ${theme.pallete.gray.c60}`,
    boxShadow: theme.shadows.outer['20'],
  } as CSSProperties,
  text: {
    marginLeft: '0.5rem',
  } as CSSProperties,
})

export const createInputStyles = (theme: Theme, classes: ClassNames<'switch' | 'knob' | 'text'>) => ({
  wrapper: {
    display: 'inline-flex',
    alignItems: 'center',
    cursor: 'pointer',
    textAlign: 'left',
    [`&:hover .${classes.switch}`]: {
      cursor: 'pointer',
      borderColor: theme.pallete.gray.c40,
    },
  } as CSSProperties,
  input: {
    opacity: 0,
    position: 'absolute',
    zIndex: -1,
    [`&:checked + .${classes.switch}`]: {
      background: theme.pallete.primary.main,
      borderColor: theme.pallete.primary.main,
      '&:hover': {
        borderColor: theme.pallete.primary.main,
      },
    },
    [`&:checked + .${classes.switch} > .${classes.knob}`]: {
      transform: 'translateX(calc(1.5rem - 1px))', // discount border size
    },
    [`&:focus + .${classes.switch}`]: {
      boxShadow: focusBoxShadow(theme),
    },
    [`&:disabled + .${classes.switch}`]: {
      opacity: 0.4,
      cursor: 'not-allowed',
    },
    [`&:disabled + .${classes.switch} + .${classes.text}`]: {
      color: theme.pallete.gray.c70,
      cursor: 'not-allowed',
    },
  } as CSSProperties,
})
