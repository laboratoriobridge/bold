import React, { CSSProperties } from 'react'

import { ExternalStyles, focusBoxShadow, Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'

export interface LinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> {
  component?: React.ElementType
  style?: ExternalStyles
  [key: string]: any
}

export function Link(props: LinkProps) {
  const { style, component, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  const Cmp = component

  return <Cmp className={css(classes.link, style)} {...rest} />
}

Link.defaultProps = {
  component: 'a',
} as Partial<LinkProps>

export const createStyles = (theme: Theme) => ({
  link: {
    ...theme.typography.variant('link'),
    cursor: 'pointer',
    outline: 'none',
    transition: 'box-shadow .2s ease',
    '&:hover': {
      textDecoration: 'none',
    },
    '&:focus': {
      textDecoration: 'none',
      borderRadius: theme.radius.input,
      boxShadow: focusBoxShadow(theme),
    },
  } as CSSProperties,
})
