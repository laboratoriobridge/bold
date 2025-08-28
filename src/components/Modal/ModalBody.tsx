import React, { CSSProperties } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { useModalContext } from '../../hooks'
import { ModalScroll } from './Modal'

export interface ModalBodyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
}

export function ModalBody(props: ModalBodyProps) {
  const { children, style, ...rest } = props

  const { scroll, bodyRef } = useModalContext()
  const { classes, css } = useStyles(createStyles, scroll)

  return (
    <div className={css(classes.body, style)} ref={bodyRef} {...rest}>
      {children}
    </div>
  )
}

const createStyles = (_theme: Theme, scroll: ModalScroll) => ({
  body: {
    padding: '1rem 2rem 2rem 2rem',
    overflow: scroll === 'body' ? 'auto' : 'initial',
    gridColumn: '2',
    gridRow: '2',
  } as CSSProperties,
})
