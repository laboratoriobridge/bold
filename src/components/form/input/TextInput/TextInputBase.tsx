import { Interpolation } from 'emotion'
import React, { CSSProperties } from 'react'

import { focusBoxShadow, Theme, useStyles } from '../../../../styles'
import { Omit } from '../../../../util'
import { Input, InputProps } from '../Input/Input'

export type InputStatus = 'error'

export interface TextInputBaseProps extends Omit<InputProps, 'style'> {
  style?: Interpolation
  status?: InputStatus
}

/**
 * Primitive of input of text (and derivative) types.
 * Provides only the stylization of the <input /> component.
 */
export function TextInputBase(props: TextInputBaseProps) {
  const { status, style, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  const className = css(classes.input, status === 'error' && classes.error, style)

  return <Input {...rest} className={className} />
}

TextInputBase.defaultProps = {
  type: 'text',
} as Partial<TextInputBaseProps>

export const createStyleParts = (theme: Theme) => ({
  base: {
    backgroundColor: theme.pallete.surface.main,
    border: 'solid 1px ' + theme.pallete.gray.c70,
    borderRadius: theme.radius.input,
    color: theme.pallete.text.main,
    lineHeight: '1rem',
    padding: 'calc(0.5rem - 1px) 0.5rem',
    width: '100%',
    transitionProperty: 'box-shadow',
    transitionDuration: '.2s',

    // Remove input type="search" decorations
    '&[type="search"]::-webkit-search-decoration': { display: 'none' },
    '&[type="search"]::-webkit-search-cancel-button': { display: 'none' },
    '&[type="search"]::-webkit-search-results-button': { display: 'none' },
    '&[type="search"]::-webkit-search-results-decoration': { display: 'none' },

    '&:required': {
      boxShadow: 'none',
    },
  } as CSSProperties,
  placeholder: {
    color: theme.pallete.text.disabled,
  } as CSSProperties,
  disabled: {
    borderColor: theme.pallete.gray.c80,
    backgroundColor: theme.pallete.surface.background,
  } as CSSProperties,
  hover: {
    borderColor: theme.pallete.gray.c60,
  } as CSSProperties,
  active: {
    borderColor: theme.pallete.primary.main,
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
  } as CSSProperties,
  focus: {
    outline: 'none',
    boxShadow: focusBoxShadow(theme),
  } as CSSProperties,
  error: {
    border: 'solid 1px ' + theme.pallete.status.danger.main,
    ':not(:disabled):focus': {
      border: 'solid 1px ' + theme.pallete.gray.c80,
      boxShadow: focusBoxShadow(theme, 'danger'),
    },
  } as CSSProperties,
})

export const createStyles = (theme: Theme) => {
  const parts = createStyleParts(theme)

  return {
    input: {
      ...parts.base,
      '::placeholder': parts.placeholder,
      ':disabled': parts.disabled,
      ':not(:disabled):hover': parts.hover,
      ':not(:disabled):focus': parts.focus,
      ':not(:disabled):active': parts.active,
    },
    error: parts.error,
  }
}
