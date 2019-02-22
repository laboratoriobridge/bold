import React, { memo, useEffect, useState } from 'react'

import { HFlow } from '../../../layout/Flow/HFlow'
import { Button, ButtonProps } from '../../Button'
import { Modal, ModalProps } from '../Modal'
import { ModalBody } from '../ModalBody'
import { ModalFooter } from '../ModalFooter'

export interface ModalAutoProps {
  actions?: ButtonProps[]
  size?: ModalProps['size']
  render(renderProps: ModalAutoRenderProps): React.ReactNode
  dispose(): void
}

export interface ModalAutoState {
  open: boolean
}

export interface ModalAutoRenderProps {
  close(): void
}

export const ModalAuto = memo((props: ModalAutoProps) => {
  const { actions, size, render, dispose } = props

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setIsOpen(true)
  }, [])

  const close = () => {
    setIsOpen(false)

    // Dispose with timeout to preserve closing transition
    window.setTimeout(dispose, 500)
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
