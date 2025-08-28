import React, { useEffect } from 'react'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { useModalContext } from '../../hooks'
import { ModalScroll } from './Modal'

export type ModalSidebarType = 'left' | 'right'

export interface ModalSidebarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  side: ModalSidebarType
  style?: ExternalStyles
}

export function ModalSidebar(props: ModalSidebarProps) {
  const { side, style, children, ...rest } = props

  const { scroll, setHasLeftSidebar, setHasRightSidebar } = useModalContext()
  const { classes } = useStyles(createStyles, side, scroll)

  useEffect(() => {
    if (side === 'left') {
      setHasLeftSidebar(true)
      return () => setHasLeftSidebar(false)
    }
    if (side === 'right') {
      setHasRightSidebar(true)
      return () => setHasRightSidebar(false)
    }
  }, [setHasLeftSidebar, setHasRightSidebar, side])

  return (
    <div className={classes.sidebar} {...rest}>
      {children}
    </div>
  )
}

const createStyles = (theme: Theme, side: ModalSidebarType, scroll: ModalScroll) => ({
  sidebar: {
    background: theme.pallete.gray.c90,
    border: 0,
    borderLeft: side === 'right' && `1px solid ${theme.pallete.divider}`,
    borderRight: side === 'left' && `1px solid ${theme.pallete.divider}`,
    padding: '1rem',
    width: '300px',
    overflowY: scroll === 'body' ? 'auto' : 'initial',
    gridRow: '2',
    gridColumn: side === 'left' ? '1' : '3',
  } as React.CSSProperties,
})
