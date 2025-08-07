import React, { memo, useEffect, useState } from 'react'

import { ButtonProps } from '../../Button'
import { Modal, ModalProps } from '../Modal'
import { ModalBody } from '../ModalBody'
import { ModalFooter } from '../ModalFooter'
import { HFlow } from '../../HFlow'
import { ModalAutoFooterButton } from './ModalAutoFooterButton'

export type ButtonAction = ButtonProps & { label?: React.ReactNode; ['data-testid']?: string }

export interface ModalAutoProps extends Omit<ModalProps, 'open'> {
  actions?: ButtonAction[]
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
        <ModalFooter>
          <HFlow justifyContent='flex-end'>
            {actions.map((action, idx) => (
              <ModalAutoFooterButton key={idx} action={action} onClose={close} />
            ))}
          </HFlow>
        </ModalFooter>
      )}
    </Modal>
  )
})
