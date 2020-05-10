import React, { CSSProperties } from 'react'

import { ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { Input, InputProps } from '../Input/Input'

export interface TextInputBaseProps extends Omit<InputProps, 'style'> {
  /**
   * Indicates whether the input is on an invalid state
   */
  invalid?: boolean

  style?: ExternalStyles
}

/**
 * Primitive of input of text (and derivative) types.
 * Provides only the stylization of the <input /> component.
 */
export function TextInputBase(props: TextInputBaseProps) {
  const { invalid, style, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  const className = css(classes.input, invalid && classes.invalid, style)

  return <Input className={className} aria-invalid={invalid ? 'true' : undefined} {...rest} />
}

TextInputBase.defaultProps = {
  type: 'text',
} as Partial<TextInputBaseProps>

export const createStyleParts = (theme: Theme) => ({
  base: {
    backgroundColor: theme.pallete.surface.main,
    border: 'solid 1px ' + theme.pallete.gray.c60,
    borderRadius: theme.radius.input,
    color: theme.pallete.text.main,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.text,
    lineHeight: '1rem',
    margin: 0,
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
    color: theme.pallete.text.secondary,
  } as CSSProperties,
  disabled: {
    borderColor: theme.pallete.gray.c80,
    backgroundColor: theme.pallete.surface.background,
  } as CSSProperties,
  hover: {
    borderColor: theme.pallete.gray.c50,
  } as CSSProperties,
  active: {
    borderColor: theme.pallete.primary.main,
    boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.09)',
  } as CSSProperties,
  focus: {
    outline: 'none',
    boxShadow: focusBoxShadow(theme),
  } as CSSProperties,
  invalid: {
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
    invalid: parts.invalid,
  }
}
