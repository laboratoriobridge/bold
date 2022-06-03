import FocusTrap from 'focus-trap-react'
import React, { useEffect, Ref } from 'react'
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
  containerRef?: Ref<HTMLDivElement>

  /**
   * @description allows you to customize the depth of the container and the backdrop of the modal
   * @default 1 - the lowest possible value
   */
  depthLevel?: ModalDepthLevel

  /**
   * @description allows you to remove the document's overflow property when a modal is closed
   * @default true
   */
  manageOverflow?: boolean

  /**
   * Specify whether the `onClose` prop should called when backdrop is clicked.
   * @default true
   */
  closeOnBackdropClick?: boolean
}

export function Modal(props: ModalProps) {
  const {
    open,
    size,
    closeOnBackdropClick,
    children,
    containerRef,
    style,
    onClose,
    depthLevel,
    manageOverflow,
    ...rest
  } = props
  const { classes, css } = useStyles(createStyles, depthLevel)

  // Kill body scroll when opened
  useEffect(() => {
    if (manageOverflow) {
      if (open) {
        document.body.classList.add(classes.bodyWhenOpened)
      } else {
        document.body.classList.remove(classes.bodyWhenOpened)
      }
      return () => document.body.classList.remove(classes.bodyWhenOpened)
    }
  }, [open, classes.bodyWhenOpened, manageOverflow])

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
                    <ModalContainer
                      ref={containerRef}
                      style={css(classes.container, classes[size], style)}
                      onClose={onClose}
                      {...rest}
                    >
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
  manageOverflow: true,
} as Partial<ModalProps>

const createStyles = (theme: Theme, depthLevel: number) => ({
  modal: {
    position: 'fixed',
    left: '0',
    top: '0',
    width: '100%',
    height: '100vh',
    pointerEvents: 'none',
    zIndex: zIndexLevel[depthLevel].modalContainer,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
