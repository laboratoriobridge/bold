import React, { CSSProperties, Ref } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { useModalContext } from '../../hooks'

export interface ModalFooterProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
}

export const ModalFooter = React.forwardRef((props: ModalFooterProps, ref: Ref<HTMLDivElement>) => {
  const { children, style, ...rest } = props

  const { hasHeader } = useModalContext()
  const { classes, css } = useStyles(createStyles, hasHeader)

  return (
    <div className={css(classes.footer, style)} ref={ref} {...rest}>
      {children}
    </div>
  )
})

const createStyles = (theme: Theme, hasHeader: boolean) => ({
  footer: {
    backgroundColor: theme.pallete.surface.background,
    padding: '1rem',
    borderBottomLeftRadius: theme.radius.modal,
    borderBottomRightRadius: theme.radius.modal,
    height: '5rem',
    width: '100%',
    borderTop: `1px solid ${theme.pallete.divider}`,
    gridColumn: '1 / -1',
    gridRow: hasHeader ? '3' : '2',
  } as CSSProperties,
})
