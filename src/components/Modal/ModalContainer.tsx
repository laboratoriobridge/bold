import React, { CSSProperties, forwardRef, useContext } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { ModalHeader, ModalHeaderProps } from './ModalHeader'
import { ModalContext, ModalScroll } from './Modal'

export interface ModalContainerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'>,
    Omit<ModalHeaderProps, 'onCloseButtonClick'> {
  style?: ExternalStyles
  onClose?(): any
}

export const ModalContainer = forwardRef<HTMLDivElement, ModalContainerProps>((props, ref) => {
  const { style, onClose, hasCloseIcon, children, title, subtitle, icon, iconFill, ...rest } = props

  const { scroll } = useContext(ModalContext)
  const { classes, css } = useStyles(createStyles, scroll)

  return (
    <div role='dialog' aria-modal='true' ref={ref} className={css(classes.wrapper, style)} {...rest}>
      <ModalHeader
        title={title}
        subtitle={subtitle}
        icon={icon}
        iconFill={iconFill}
        hasCloseIcon={hasCloseIcon}
        onCloseButtonClick={onClose}
      />
      {children}
    </div>
  )
})

ModalContainer.defaultProps = {
  showCloseIcon: true,
  onClose: () => null,
} as Partial<ModalContainerProps>

const createStyles = (theme: Theme, scroll: ModalScroll) => ({
  wrapper: {
    maxHeight: '80vh',
    border: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer['160'],
    borderRadius: theme.radius.modal,
    backgroundColor: theme.pallete.surface.main,
    minWidth: 520,
    pointerEvents: 'auto',
    position: 'relative',
    overflow: scroll === 'body' ? 'hidden' : 'auto',
    display: 'grid',
    gridTemplateRows: scroll === 'body' ? '1fr auto auto' : 'initial',
  } as CSSProperties,
})
