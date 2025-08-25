import React from 'react'

import { ExternalStyles, useStyles } from '../../styles'
import { Omit } from '../../util'
import { useModalContext } from '../../hooks'

export interface ModalBodyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
}

export function ModalBody(props: ModalBodyProps) {
  const { children, style, ...rest } = props

  const { scroll, bodyRef } = useModalContext()
  const { classes, css } = useStyles(() => ({
    body: {
      padding: '1rem 2rem 2rem 2rem',
      overflow: scroll === 'body' ? 'auto' : 'hidden',
    },
  }))

  return (
    <div className={css(classes.body, style)} ref={bodyRef} {...rest}>
      {children}
    </div>
  )
}
