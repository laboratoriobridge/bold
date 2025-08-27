import React from 'react'
import { useLocale } from '../../i18n'
import { ExternalStyles } from '../../styles'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Tooltip } from '../Tooltip'
import { useModalContext } from '../../hooks'
import { composeHandlers } from '../../util/react'

interface ModalCloseButtonProps {
  style?: ExternalStyles
  onClick?(): void
}

export const ModalCloseButton = (props: ModalCloseButtonProps) => {
  const { onClick, style: externalStyles } = props

  const locale = useLocale()
  const { onClose: onCloseModal } = useModalContext()

  const handleClick = composeHandlers(onCloseModal, onClick)

  return (
    <Tooltip text={locale.modal.close}>
      <Button aria-label={locale.modal.close} size='small' skin='ghost' style={externalStyles} onClick={handleClick}>
        <Icon icon='timesDefault' />
      </Button>
    </Tooltip>
  )
}
