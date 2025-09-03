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

  const { scroll, hasHeader, setSectionState } = useModalContext()
  const { classes, css } = useStyles(createStyles, position, scroll, hasHeader)

  useEffect(() => {
    if (position === 'left') {
      setSectionState('hasLeftSidebar', true)
      return () => setSectionState('hasLeftSidebar', false)
    }
    if (position === 'right') {
      setSectionState('hasRightSidebar', true)
      return () => setSectionState('hasRightSidebar', false)
    }
  }, [setSectionState, position])

  return (
    <div className={css(classes.sidebar, style)} {...rest}>
      {children}
    </div>
  )
}

const createStyles = (theme: Theme, position: ModalSidebarPosition, scroll: ModalScroll, hasHeader: boolean) => ({
  sidebar: {
    background: theme.pallete.gray.c90,
    border: 0,
    borderLeft: position === 'right' && `1px solid ${theme.pallete.divider}`,
    borderRight: position === 'left' && `1px solid ${theme.pallete.divider}`,
    padding: '1rem',
    width: '300px',
    overflowY: scroll === 'body' ? 'auto' : 'initial',
    gridRow: hasHeader ? '2' : '1',
    gridColumn: position === 'left' ? '1' : '3',
  } as React.CSSProperties,
})
