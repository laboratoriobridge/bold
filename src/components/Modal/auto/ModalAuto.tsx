import React, { memo, useEffect, useState } from 'react'

import { Button, ButtonProps } from '../../Button'
import { HFlow } from '../../HFlow'
import { Modal, ModalProps } from '../Modal'
import { ModalBody } from '../ModalBody'
import { ModalFooter } from '../ModalFooter'

export type ButtonAction = ButtonProps & { label?: React.ReactNode }

export interface ModalAutoProps {
  actions?: ButtonAction[]
  size?: ModalProps['size']
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
  const { actions, size, render, dispose, onClose } = props

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

  const handleAction = (action: ButtonProps) => e => {
    action.onClick && action.onClick(e)
    close()
  }

  return (
    <Modal open={isOpen} size={size} onClose={close}>
      <ModalBody>{render({ close })}</ModalBody>
      {actions && (
        <ModalFooter>
          <HFlow justifyContent='flex-end'>
            {actions.map((action, idx) => {
              const { label, ...rest } = action
              return (
                <Button key={idx} style={{ minWidth: 144 }} {...rest} onClick={handleAction(action)}>
                  {label}
                </Button>
              )
            })}
          </HFlow>
        </ModalFooter>
      )}
    </Modal>
  )
})
