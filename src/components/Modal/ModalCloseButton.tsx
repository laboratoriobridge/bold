import React from 'react'
import { useLocale } from '../../i18n'
import { ExternalStyles } from '../../styles'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { Tooltip } from '../Tooltip'

interface ModalCloseButton {
  onClose: () => void
  style?: ExternalStyles
}

export const ModalCloseButton = (props: ModalCloseButton) => {
  const { onClose, style: externalStyles } = props

  const locale = useLocale()

  return (
    <Tooltip text={locale.modal.close}>
      <Button aria-label={locale.modal.close} size='small' skin='ghost' onClick={onClose} style={externalStyles}>
        <Icon icon='timesDefault' />
      </Button>
    </Tooltip>
  )
}
