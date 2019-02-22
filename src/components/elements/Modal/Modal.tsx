import React, { useEffect } from 'react'

import { Theme, useStyles } from '../../../styles'
import { Portal } from '../Portal'
import { FadeTransition } from '../Transition/FadeTransition'

import { ModalBackdrop } from './ModalBackdrop'
import { ModalContainer, ModalContainerProps } from './ModalContainer'

export type ModalSize = 'small' | 'large' | 'auto'

export interface ModalProps extends ModalContainerProps {
  open: boolean
  size?: ModalSize
  children?: React.ReactNode
}

export const Modal = (props: ModalProps) => {
  const { open, size, children, ...rest } = props
  const { classes, css } = useStyles(styles)
  const { classes: sizeClasses } = useStyles(sizeStyles)

  // Kill body scroll when opened
  useEffect(() => {
    if (open) {
      document.body.classList.add(classes.bodyWhenOpened)
    } else {
      document.body.classList.remove(classes.bodyWhenOpened)
    }
    return () => document.body.classList.remove(classes.bodyWhenOpened)
  }, [open])

  // Attach "Escape" to close modal
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      props.onClose()
    }
  }
  useEffect(() => {
    if (open) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open])

  return (
    <FadeTransition in={open}>
      {({ className }) => (
        <>
          {open && (
            <Portal>
              <div className={className}>
                <div className={classes.modal}>
                  <ModalContainer style={css(classes.container, sizeClasses[size])} {...rest}>
                    {children}
                  </ModalContainer>
                </div>

                <ModalBackdrop onClick={rest.onClose} />
              </div>
            </Portal>
          )}
        </>
      )}
    </FadeTransition>
  )
}

Modal.defaultProps = {
  size: 'large',
} as Partial<ModalProps>

export const styles = (theme: Theme) => ({
  modal: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    pointerEvents: 'none',
    zIndex: theme.zIndex.modalContainer,
    display: 'flex',
    justifyContent: 'center',
  } as React.CSSProperties,
  container: {
    maxHeight: '80vh',
    overflow: 'auto',
  },
  bodyWhenOpened: {
    overflow: 'hidden',
  },
})

export const sizeStyles = () => ({
  large: { width: 850 },
  small: { width: 520 },
  auto: { maxWidth: '80%' },
})
