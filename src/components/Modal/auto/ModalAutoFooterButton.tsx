import React from 'react'
import { ModalFooterButton } from '../ModalFooterButton'
import { ButtonAction } from './ModalAuto'

interface ModalAutoFooterButtonProps {
  action: ButtonAction
  onClose: () => void
}

export function ModalAutoFooterButton(props: ModalAutoFooterButtonProps) {
  const { action, onClose } = props

  const { label, onClick, ...rest } = action

  const handleAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e)
    onClose()
  }

  return (
    <ModalFooterButton onClick={handleAction} {...rest}>
      {label}
    </ModalFooterButton>
  )
}
