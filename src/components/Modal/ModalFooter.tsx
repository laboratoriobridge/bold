import React, { CSSProperties } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'

export interface ModalFooterProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
}

export function ModalFooter(props: ModalFooterProps) {
  const { children, style, ...rest } = props

  const { classes, css } = useStyles(createStyles)

  return (
    <div className={css(classes.footer, style)} {...rest}>
      {children}
    </div>
  )
}

const createStyles = (theme: Theme) => ({
  footer: {
    backgroundColor: theme.pallete.surface.background,
    padding: '1rem',
    borderBottomLeftRadius: theme.radius.modal,
    borderBottomRightRadius: theme.radius.modal,
    height: '5rem',
    width: '100%',
    borderTop: `1px solid ${theme.pallete.divider}`,
    gridColumn: '1 / -1',
    gridRow: '3',
  } as CSSProperties,
})
