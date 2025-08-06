import FocusTrap from 'focus-trap-react'
import React, { Ref, useEffect } from 'react'
import { Theme, useStyles } from '../../styles'
import { zIndexLevel } from '../../styles/theme/zIndex'
import { Portal } from '../Portal'
import { FadeTransition } from '../Transition/FadeTransition'
import { ModalBackdrop } from './ModalBackdrop'
import { ModalContainer, ModalContainerProps } from './ModalContainer'

export type ModalSize = 'small' | 'large' | 'auto'
export type ModalDepthLevel = 1 | 2 | 3 | 4 | 5
export type ModalScroll = 'body' | 'full'

export interface ModalProps extends ModalContainerProps {
  open: boolean
  size?: ModalSize
  scroll?: ModalScroll
  children?: React.ReactNode
  containerRef?: Ref<HTMLDivElement>

  /**
   * Allows you to customize the depth of the container and the backdrop of the modal
   * @default 1 - the lowest possible value
   */
  depthLevel?: ModalDepthLevel

  /**
   * Allows you to remove the document's overflow property when a modal is closed
   * @default true
   */
  manageOverflow?: boolean

  /**
   * Specify whether the `onClose` prop should called when backdrop is clicked.
   * @default true
   */
  closeOnBackdropClick?: boolean
}

export const ModalContext = React.createContext<{ scroll: ModalScroll }>(null)

export function Modal(props: ModalProps) {
  const {
    open,
    size,
    closeOnBackdropClick,
    children,
    containerRef,
    style,
    onClose,
    scroll = 'body',
    depthLevel,
    manageOverflow,
    ...rest
  } = props

  const { classes, css } = useStyles(createStyles, depthLevel, scroll)

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
    <ModalContext.Provider value={{ scroll }}>
      <FadeTransition in={open}>
        {({ className }) => (
          <>
            {open && (
              <Portal>
                <FocusTrap>
                  <div className={className}>
                    <div className={classes.modal}>
                      <ModalContainer ref={containerRef} style={css(classes[size], style)} onClose={onClose} {...rest}>
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
    </ModalContext.Provider>
  )
}

Modal.defaultProps = {
  size: 'large',
  scroll: 'body',
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
  bodyWhenOpened: {
    overflow: 'hidden',
  },
  large: { width: 900 },
  small: { width: 520 },
  auto: { maxWidth: '100%' },
})
