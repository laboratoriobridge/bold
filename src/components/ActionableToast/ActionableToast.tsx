import React, { useEffect, useState } from 'react'
import { Tooltip } from '../Tooltip'
import { Button } from '../Button'
import { useLocale } from '../../i18n'
import { Icon } from '../Icon'
import { useStyles } from '../../styles'

interface ActionableToastProps {
  message: string
  onClose?(): any
  hasCloseIcon?: boolean
  duration?: number
}

export function ActionableToast(props: ActionableToastProps) {
  const { message, duration = 5, hasCloseIcon = true, onClose } = props
  const [visible, setVisible] = useState(false)
  const locale = useLocale()
  const { classes } = useStyles(styles)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  return visible ? (
    <div>
      {hasCloseIcon && (
        <Tooltip text={locale.modal.close}>
          <Button
            aria-label={locale.modal.close}
            size='small'
            skin='ghost'
            style={classes.closeButton}
            onClick={onClose}
          >
            <Icon icon='timesDefault' />
          </Button>
        </Tooltip>
      )}
      <div className='toast'>{message}</div>{' '}
    </div>
  ) : null
}

const styles = () => ({
  closeButton: {
    float: 'right',
    marginTop: '0.5rem',
    marginRight: '0.5rem',
  } as React.CSSProperties,
})
