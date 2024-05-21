import React, { CSSProperties } from 'react'
import { useStyles } from '../../styles'
import { Tooltip } from '../Tooltip'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { useLocale } from '../../i18n'

export interface ActionableToastProps {
  id: string
  message: string
  onClose?: () => void
}

export function ActionableToast(props: ActionableToastProps) {
  const { message, onClose } = props
  const { classes } = useStyles(createStyles)
  const locale = useLocale()

  return (
    <div className={classes.container}>
      <div className={classes.toastMessage}>
        <p>{message}</p>
      </div>
      <span className={classes.closeButtonWrapper}>
        <Tooltip text={locale.alert.close}>
          <Button
            aria-label={locale.alert.close}
            size='small'
            skin='ghost'
            style={classes.closeButton}
            onClick={onClose}
          >
            <Icon icon='timesDefault' />
          </Button>
        </Tooltip>
      </span>
    </div>
  )
}

const createStyles = () => ({
  container: {
    borderRadius: 0.5,
    position: 'relative',
    marginTop: '1rem',
  } as CSSProperties,
  toastMessage: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'top',
  } as CSSProperties,
  closeButtonWrapper: {
    marginTop: '0.125rem',
    marginLeft: 'auto',
    paddingLeft: '1rem',
    display: 'inline-flex',
    alignSelf: 'center',
  } as CSSProperties,
  closeButton: {
    padding: 0,
  } as CSSProperties,
})
