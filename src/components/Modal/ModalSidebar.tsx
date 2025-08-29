import React, { useEffect } from 'react'
import { ExternalStyles, Theme, useStyles } from '../../styles'
import { useModalContext } from '../../hooks'
import { ModalScroll } from './Modal'

export type ModalSidebarPosition = 'left' | 'right'

export interface ModalSidebarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  position: ModalSidebarPosition
  style?: ExternalStyles
}

export function ModalSidebar(props: ModalSidebarProps) {
  const { position, style, children, ...rest } = props

  const { scroll, setPart } = useModalContext()
  const { classes } = useStyles(createStyles, position, scroll)

  useEffect(() => {
    if (position === 'left') {
      setPart('hasLeftSidebar', true)
      return () => setPart('hasLeftSidebar', false)
    }
    if (position === 'right') {
      setPart('hasRightSidebar', true)
      return () => setPart('hasRightSidebar', false)
    }
  }, [setPart, position])

  return (
    <div className={classes.sidebar} {...rest}>
      {children}
    </div>
  )
}

const createStyles = (theme: Theme, position: ModalSidebarPosition, scroll: ModalScroll) => ({
  sidebar: {
    background: theme.pallete.gray.c90,
    border: 0,
    borderLeft: position === 'right' && `1px solid ${theme.pallete.divider}`,
    borderRight: position === 'left' && `1px solid ${theme.pallete.divider}`,
    padding: '1rem',
    width: '300px',
    overflowY: scroll === 'body' ? 'auto' : 'initial',
    gridRow: '2',
    gridColumn: position === 'left' ? '1' : '3',
  } as React.CSSProperties,
})
