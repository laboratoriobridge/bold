import React, { CSSProperties, Ref } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { useModalContext } from '../../hooks'
import { composeRefs } from '../../util/react'
import { ModalScroll } from './Modal'

export interface ModalBodyProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
}

export const ModalBody = React.forwardRef((props: ModalBodyProps, ref: Ref<HTMLDivElement>) => {
  const { children, style, ...rest } = props

  const { scroll, bodyRef, hasHeader } = useModalContext()
  const { classes, css } = useStyles(createStyles, scroll, hasHeader)

  return (
    <div className={css(classes.body, style)} ref={composeRefs(bodyRef, ref)} {...rest}>
      {children}
    </div>
  )
})

const createStyles = (_theme: Theme, scroll: ModalScroll, hasHeader: boolean) => ({
  body: {
    padding: '1rem 2rem 2rem 2rem',
    overflow: scroll === 'body' ? 'auto' : 'initial',
    gridColumn: '2',
    gridRow: hasHeader ? '2' : '1',
  } as CSSProperties,
})
