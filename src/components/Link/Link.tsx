import React, { AnchorHTMLAttributes, CSSProperties } from 'react'

import { focusBoxShadow, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { BaseTextProps, Text } from '../Text'

export type LinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'style'> & BaseTextProps

export function Link<P = LinkProps>(props: P & BaseTextProps) {
  const { classes } = useStyles(createStyles, props)

  return <Text<LinkProps> variant='link' component='a' {...props} style={[classes.link, props.style]} />
}

export const createStyles = (theme: Theme) => ({
  link: {
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
