import React, { useContext } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { ModalContext, ModalScroll } from './Modal'

export interface ModalBodyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
}

export function ModalBody(props: ModalBodyProps) {
  const { children, style, ...rest } = props

  const { scroll } = useContext(ModalContext)
  const { classes, css } = useStyles(createStyles, scroll)

  return (
    <div className={css(classes.body, style)} {...rest}>
      {children}
    </div>
  )
}

const createStyles = (theme: Theme, scroll: ModalScroll) => ({
  body: {
    overflow: scroll === 'paper' ? 'auto' : 'hidden',
    padding: '1rem 2rem 2rem 2rem',
    maxHeight: scroll === 'paper' ? 'calc(80vh - 5rem - 6rem)' : 'auto',
  } as React.CSSProperties,
})
