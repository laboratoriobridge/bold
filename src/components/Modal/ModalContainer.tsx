import React, { forwardRef } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { ModalCloseButton } from './ModalCloseButton'
import { HeaderIconType, ModalHeader } from './ModalHeader'

export interface ModalContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  style?: ExternalStyles
  hasCloseIcon?: boolean
  onClose?(): any
  title?: string
  subtitle?: string
  headerIcon?: HeaderIconType
  headerBackground?: string
  showHeaderBorder?: boolean
}

export const ModalContainer = forwardRef<HTMLDivElement, ModalContainerProps>((props, ref) => {
  const {
    style,
    onClose,
    hasCloseIcon,
    children,
    title,
    subtitle,
    headerIcon,
    headerBackground,
    showHeaderBorder,
    ...rest
  } = props
  const { classes, css } = useStyles(styles)

  return (
    <div role='dialog' aria-modal='true' ref={ref} className={css(classes.wrapper, style)} {...rest}>
      {title ? (
        <ModalHeader
          title={title}
          subtitle={subtitle}
          icon={headerIcon}
          background={headerBackground}
          showBorder={showHeaderBorder}
          showCloseIcon={hasCloseIcon}
          onCloseButtonClick={onClose}
        />
      ) : (
        hasCloseIcon && <ModalCloseButton onClick={onClose} style={classes.closeButton} />
      )}

      {children}
    </div>
  )
})

ModalContainer.defaultProps = {
  hasCloseIcon: true,
  onClose: () => null,
} as Partial<ModalContainerProps>

export const styles = (theme: Theme) => ({
  wrapper: {
    border: `1px solid ${theme.pallete.divider}`,
    boxShadow: theme.shadows.outer['160'],
    borderRadius: theme.radius.modal,
    backgroundColor: theme.pallete.surface.main,
    minWidth: 520,
    pointerEvents: 'auto',
  } as React.CSSProperties,
  closeButton: {
    float: 'right',
    marginTop: '0.5rem',
    marginRight: '0.5rem',
  } as React.CSSProperties,
})
