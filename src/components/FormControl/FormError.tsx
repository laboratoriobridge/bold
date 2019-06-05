import React from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'

export interface FormErrorProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
}

export function FormError(props: FormErrorProps) {
  const { style, ...rest } = props
  const { classes, css } = useStyles(createStyles)

  return <div className={css(classes.wrapper, style)} {...rest} />
}

export const createStyles = (theme: Theme) => ({
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    color: theme.pallete.status.danger.main,
  },
  icon: {
    marginLeft: '0.25rem',
  },
})
