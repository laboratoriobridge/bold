import React from 'react'

import { ExternalStyles, useStyles } from '../../styles'
import { Omit } from '../../util'

export interface ModalBodyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
}

export function ModalBody(props: ModalBodyProps) {
  const { children, style, ...rest } = props
  const { classes, css } = useStyles(() => ({
    body: {
      padding: '2.5rem',
    },
  }))

  return (
    <div className={css(classes.body, style)} {...rest}>
      {children}
    </div>
  )
}
