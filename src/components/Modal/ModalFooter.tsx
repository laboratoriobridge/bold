import React from 'react'

import { ExternalStyles, useStyles } from '../../styles'
import { Omit } from '../../util'

export interface ModalFooterProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
}

export function ModalFooter(props: ModalFooterProps) {
  const { style, children, ...rest } = props
  const { classes, css } = useStyles((theme) => ({
    footer: {
      backgroundColor: theme.pallete.surface.background,
      padding: '1rem',
      borderBottomLeftRadius: theme.radius.modal,
      borderBottomRightRadius: theme.radius.modal,
      height: '5rem',
      borderTop: `1px solid ${theme.pallete.divider}`,
    },
  }))

  return (
    <div className={css(classes.footer, style)} {...rest}>
      {children}
    </div>
  )
}
