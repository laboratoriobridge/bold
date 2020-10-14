import React from 'react'

import { ExternalStyles, hexToRGB, Theme, useStyles } from '../../styles'
import { zIndexLevel } from '../../styles/theme/zIndex'
import { Omit } from '../../util'

export interface ModalBackdropProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles

  /**
   * @description depthLevel allows you to customize the depth of the container and the backdrop of the modal
   * @default 1 - the lowest possible value
   */
  depthLevel?: number
}

export function ModalBackdrop(props: ModalBackdropProps) {
  const { style, depthLevel, ...rest } = props
  const { classes, css } = useStyles(styles, depthLevel)

  return <div className={css(classes.backdrop, style)} data-testid='backdrop' {...rest} />
}

ModalBackdrop.defaultProps = {
  depthLevel: 1,
} as Partial<ModalBackdropProps>

export const styles = (theme: Theme, depthLevel: number) => ({
  backdrop: {
    position: 'fixed',
    zIndex: zIndexLevel[depthLevel].modalBackdrop,
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    background: hexToRGB(theme.pallete.gray.c80, 0.7),
  } as React.CSSProperties,
})
