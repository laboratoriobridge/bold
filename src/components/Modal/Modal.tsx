import FocusTrap from 'focus-trap-react'
import React, { useEffect } from 'react'
import { Theme, useStyles } from '../../styles'
import { zIndexLevel } from '../../styles/theme/zIndex'
import { Portal } from '../Portal'
import { FadeTransition } from '../Transition/FadeTransition'
import { ModalBackdrop } from './ModalBackdrop'
import { ModalContainer, ModalContainerProps } from './ModalContainer'

export type ModalSize = 'small' | 'large' | 'auto'
export type ModalDepthLevel = 1 | 2 | 3 | 4 | 5
export interface ModalProps extends ModalContainerProps {
  open: boolean
  size?: ModalSize
  children?: React.ReactNode

  /**
   * depthLevel allows you to customize the depth of the container and the backdrop of the modal
   * @default 1 - the lowest possible value
   */
  depthLevel?: ModalDepthLevel

  /**
   * Specify whether the `onClose` prop should called when backdrop is clicked.
   * @default true
   */
  closeOnBackdropClick?: boolean
}

export function Modal(props: ModalProps) {
  const { open, size, closeOnBackdropClick, children, style, onClose, depthLevel, ...rest } = props
  const { classes, css } = useStyles(createStyles, depthLevel)

  // Kill body scroll when opened
  useEffect(() => {
    if (open) {
      document.body.classList.add(classes.bodyWhenOpened)
    } else {
      document.body.classList.remove(classes.bodyWhenOpened)
    }
    return () => document.body.classList.remove(classes.bodyWhenOpened)
  }, [open, classes.bodyWhenOpened])

  useEffect(() => {
    // Attach "Escape" to close modal
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (open) {
      document.addEventListener('keydown', handleKeyDown)
    } else {
      document.removeEventListener('keydown', handleKeyDown)
    }
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  return (
    <FadeTransition in={open}>
      {({ className }) => (
        <>
          {open && (
            <Portal>
              <FocusTrap>
                <div className={className}>
                  <div className={classes.modal}>
                    <ModalContainer style={css(classes.container, classes[size], style)} onClose={onClose} {...rest}>
                      {children}
                    </ModalContainer>
                  </div>

                  <ModalBackdrop depthLevel={depthLevel} onClick={closeOnBackdropClick ? onClose : undefined} />
                </div>
              </FocusTrap>
            </Portal>
          )}
        </>
      )}
    </FadeTransition>
  )
}

Modal.defaultProps = {
  size: 'large',
  closeOnBackdropClick: true,
  depthLevel: 1,
} as Partial<ModalProps>

const createStyles = (theme: Theme, depthLevel: number) => ({
  modal: {
    position: 'fixed',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    pointerEvents: 'none',
    zIndex: zIndexLevel[depthLevel].modalContainer,
    display: 'flex',
    justifyContent: 'center',
    padding: '2rem',
  } as React.CSSProperties,
  container: {
    maxHeight: '80vh',
    overflow: 'auto',
  },
  bodyWhenOpened: {
    overflow: 'hidden',
  },
  large: { width: 900 },
  small: { width: 520 },
  auto: { maxWidth: '100%' },
})
