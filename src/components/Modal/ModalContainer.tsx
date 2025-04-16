import React, { Children, forwardRef, isValidElement, ReactElement } from 'react'

import { ExternalStyles, Theme, useStyles } from '../../styles'
import { Omit } from '../../util'
import { ModalHeader, ModalHeaderProps } from './ModalHeader'
import { ModalHeaderWrapper } from './ModalHeaderWrapper'

export interface ModalContainerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style'> {
  style?: ExternalStyles
  hasCloseIcon?: boolean
  onClose?(): any
}

export const ModalContainer = forwardRef<HTMLDivElement, ModalContainerProps>((props, ref) => {
  const { style, onClose, hasCloseIcon, children, ...rest } = props
  const { classes, css } = useStyles(styles)

  const childrenArray = Children.toArray(children)
  const headerElement = childrenArray.find(
    (child): child is ReactElement<ModalHeaderProps> => isValidElement(child) && child.type === ModalHeader
  )
  const contentChildren = childrenArray.filter((child) => !isValidElement(child) || child.type !== ModalHeader)

  return (
    <div role='dialog' aria-modal='true' ref={ref} className={css(classes.wrapper, style)} {...rest}>
      <ModalHeaderWrapper
        background={headerElement?.props.background}
        style={headerElement?.props.styles?.wrapper}
        hasCloseIcon={hasCloseIcon}
        onClose={onClose}
        hasHeader={!!headerElement}
      >
        {headerElement}
      </ModalHeaderWrapper>
      {contentChildren}
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
})
