import { Interpolation } from 'emotion'
import React from 'react'

import { Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util'

export interface ModalBackdropProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: Interpolation
}

export const ModalBackdrop = (props: ModalBackdropProps) => {
  const { style, ...rest } = props
  const { classes, css } = useStyles(styles)

  return <div className={css(classes.backdrop, style)} data-testid='backdrop' {...rest} />
}

export const styles = (theme: Theme) => ({
  backdrop: {
    position: 'fixed',
    zIndex: theme.zIndex.modalBackdrop,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: 'rgba(230, 230, 230, 0.7)',
  } as React.CSSProperties,
})
