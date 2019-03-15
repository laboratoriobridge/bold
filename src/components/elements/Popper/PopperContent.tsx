import React, { CSSProperties } from 'react'
import { Popper, PopperProps } from 'react-popper'

import { Theme, useStyles } from '../../../styles'
import { Omit } from '../../../util/types'

export interface PopperContentProps extends Omit<PopperProps, 'children'> {
  show: boolean
  offset?: number
  children?: React.ReactNode
}

export const PopperContent = (props: PopperContentProps) => {
  const { show, offset, children, ...rest } = props
  const { classes, css } = useStyles(createStyles, props)

  return (
    <Popper {...rest}>
      {popperProps => (
        <div
          ref={popperProps.ref}
          style={popperProps.style}
          className={css(classes.content, show ? classes.visible : classes.hidden)}
          data-visible={show}
        >
          {children}
        </div>
      )}
    </Popper>
  )
}

PopperContent.defaultProps = {
  show: false,
  offset: 0.25,
} as Partial<PopperContentProps>

export const createStyles = (theme: Theme, { offset }: PopperContentProps) => ({
  content: {
    transition: 'opacity .2s',
    zIndex: theme.zIndex.popper,
    padding: `${offset}rem`,
  } as CSSProperties,
  visible: {
    visibility: 'visible',
    opacity: 1,
  } as CSSProperties,
  hidden: {
    visibility: 'hidden',
    opacity: 0,
  } as CSSProperties,
})
