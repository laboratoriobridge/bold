import React, { memo, useEffect, useState } from 'react'

import { ButtonProps } from '../../Button'
import { Modal, ModalProps } from '../Modal'
import { ModalBody } from '../ModalBody'
import { ModalFooter, ModalFooterSlots } from '../ModalFooter'
import { ModalAutoFooterButton } from './ModalAutoFooterButton'

export type ButtonAction = ButtonProps & { label?: React.ReactNode; ['data-testid']?: string }
export type ModalAutoActions = { [key in keyof ModalFooterSlots]: ButtonAction }

export interface ModalAutoProps extends Omit<ModalProps, 'open'> {
  actions?: ModalAutoActions
  render(renderProps: ModalAutoRenderProps): React.ReactNode
  dispose(): void
  onClose?(): any
}

export interface ModalAutoState {
  open: boolean
}

export interface ModalAutoRenderProps {
  close(): void
}

export const ModalAuto = memo((props: ModalAutoProps) => {
  const { actions, render, dispose, onClose, ...rest } = props
  const { primarySlot, secondarySlot, tertiarySlot, complementarySlot } = actions ?? {}

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const close = () => {
    onClose && onClose()
    setIsOpen(false)

    // Dispose with timeout to preserve closing transition
    setTimeout(dispose, 500)
  }

  return (
    <Modal open={isOpen} onClose={close} {...rest}>
      <ModalBody>{render({ close })}</ModalBody>
      {actions && (
        <ModalFooter
          primarySlot={primarySlot && <ModalAutoFooterButton action={primarySlot} onClose={close} />}
          secondarySlot={secondarySlot && <ModalAutoFooterButton action={secondarySlot} onClose={close} />}
          tertiarySlot={tertiarySlot && <ModalAutoFooterButton action={tertiarySlot} onClose={close} />}
          complementarySlot={complementarySlot && <ModalAutoFooterButton action={complementarySlot} onClose={close} />}
        />
      )}
    </Modal>
  )
})
