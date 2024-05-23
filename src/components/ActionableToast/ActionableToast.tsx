import React, { CSSProperties } from 'react'
import { Theme, useStyles, useTheme } from '../../styles'
import { Tooltip } from '../Tooltip'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { useLocale } from '../../i18n'

export interface ActionableToastProps {
  id: string
  message: string
  title?: string
  buttonLabel?: string
  onClose?: () => void
}

export function ActionableToast(props: ActionableToastProps) {
  const { message, onClose, title = 'Title', buttonLabel = 'Button' } = props
  const { classes } = useStyles(createStyles)
  const locale = useLocale()

  return (
    <div className={classes.container}>
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
      <div className={classes.title}>
        <p>{title}</p>
      </div>
      <div className={classes.toastMessage}>
        <p>{message}</p>
      </div>
      <div>
        <Button size='small'>{buttonLabel}</Button>
      </div>
    </div>
  )
}

const createStyles = (theme: Theme) => ({
  container: {
    borderRadius: '1rem',
    position: 'relative',
    marginTop: '0.25rem',
    bottom: '1.25rem',
    minHeight: '5rem',
    minWidth: '8.25rem',
    border: '3px solid black',
    backgroundColor: 'white',
  } as CSSProperties,
  toastMessage: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'top',
  } as CSSProperties,
  closeButtonWrapper: {
    position: 'absolute',
    right: '0.625rem',
    top: '0.625rem',
  } as CSSProperties,
  closeButton: {
    padding: 0,
  } as CSSProperties,
  title: {
    fontWeight: 'bold',
    color: theme.pallete.primary.main,
  } as CSSProperties,
})
