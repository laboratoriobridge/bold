import React, { forwardRef } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { IconImage } from '../Icon'
import { IconColor } from '../Icon/Icon'
import { ModalCloseButton } from './ModalCloseButton'
import { ModalHeader, SurfaceColor } from './ModalHeader'

export interface ModalContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'title'> {
  style?: ExternalStyles
  hasCloseIcon?: boolean
  onClose?(): any
  headerTitle?: string
  headerSubtitle?: string
  headerIcon?: IconImage
  headerIconFill?: IconColor
  headerIconStroke?: IconColor
  headerBackgroundColor?: SurfaceColor
  hasHeaderDivider?: boolean
}

export const ModalContainer = forwardRef<HTMLDivElement, ModalContainerProps>((props, ref) => {
  const {
    style,
    onClose,
    hasCloseIcon,
    children,
    headerTitle,
    headerSubtitle,
    headerIcon,
    headerIconFill,
    headerIconStroke,
    headerBackgroundColor,
    hasHeaderDivider,
    ...rest
  } = props
  const { classes, css } = useStyles(styles)

  return (
    <div role='dialog' aria-modal='true' ref={ref} className={css(classes.wrapper, style)} {...rest}>
      {headerTitle ? (
        <ModalHeader
          title={headerTitle}
          subtitle={headerSubtitle}
          icon={headerIcon}
          iconFill={headerIconFill}
          iconStroke={headerIconStroke}
          backgroundColor={headerBackgroundColor}
          hasDivider={hasHeaderDivider}
          hasCloseIcon={hasCloseIcon}
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
