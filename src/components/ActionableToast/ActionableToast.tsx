import React, { CSSProperties, useRef, useEffect, useCallback, useState } from 'react'
import { Theme, useStyles } from '../../styles'
import { Tooltip } from '../Tooltip'
import { Button } from '../Button'
import { Icon } from '../Icon'
import { useLocale } from '../../i18n'

export interface ActionableToastProps {
  id: number
  secondsVisible: number
  title?: string
  message: React.ReactNode
  buttonLabel?: React.ReactNode
  newToast?: boolean
  action?(): void
  onClose?(): void
  removeToast(id: number): void
}

export function ActionableToast(props: ActionableToastProps) {
  const {
    id,
    message,
    onClose = () => {},
    title,
    buttonLabel = 'Button',
    newToast,
    removeToast,
    action,
    secondsVisible,
  } = props

  const locale = useLocale()
  const timeoutRef = useRef<number>(null)
  const { classes } = useStyles(createStyles)
  const [isVisible, setIsVisible] = useState(false)

  const handleCloseClick = () => {
    onClose()
    removeToast(id)
  }

  const clearTimer = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
  }

  const startTimer = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setIsVisible(false)
      timeoutRef.current = setTimeout(() => {
        removeToast(id)
      }, 500)
    }, secondsVisible * 1000)
  }, [id, removeToast, secondsVisible])

  useEffect(() => {
    setIsVisible(true)
    startTimer()
    return () => clearTimer()
  }, [secondsVisible, id, startTimer])

  return (
    <div
      className={`${classes.container} ${isVisible ? 'visible' : 'hidden'}`}
      onMouseEnter={clearTimer}
      onMouseLeave={startTimer}
    >
      <div className={classes.headerWrapper}>
        {!!newToast && <div aria-hidden='true' className={classes.marker} />}
        <div className={classes.title}>
          <h5>{title}</h5>
        </div>
        <span className={classes.closeButtonWrapper}>
          <Tooltip text={locale.alert.close}>
            <Button
              aria-label={locale.alert.close}
              size='small'
              skin='ghost'
              style={classes.closeButton}
              onClick={handleCloseClick}
            >
              <Icon icon='timesDefault' />
            </Button>
          </Tooltip>
        </span>
      </div>
      <div className={classes.toastMessage}>
        <h5>{message}</h5>
      </div>
      {!!action && (
        <div className={classes.actionButtonWrapper}>
          <Button style={classes.actionButton} size='small' onClick={action}>
            {buttonLabel}
          </Button>
        </div>
      )}
    </div>
  )
}

const createStyles = (theme: Theme) => ({
  container: {
    borderRadius: '2px',
    border: '1px',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    marginTop: '0.25rem',
    bottom: '1.25rem',
    minHeight: '5rem',
    minWidth: '16rem',
    backgroundColor: 'white',
    padding: '0 0.5rem 0.5rem 0',
    boxShadow: theme.shadows.outer[40],
    transition: 'transform 0.5s ease-in-out',
    transform: 'translateX(-100%)',
    [`&.visible`]: { transform: 'translateX(0%)' },
    [`&.hidden`]: { transform: 'translateX(100%)' },
  } as CSSProperties,
  toastMessage: {
    fontWeight: 'normal',
    display: 'flex',
    alignItems: 'top',
    padding: '0 0 0.5rem 1rem',
  } as CSSProperties,
  closeButtonWrapper: {
    position: 'absolute',
    width: '1.5rem',
    height: '1.5rem',
    right: '1rem',
    top: '0.5rem',
  } as CSSProperties,
  closeButton: {
    padding: 0,
  } as CSSProperties,
  actionButtonWrapper: {
    display: 'flex',
    justifyContent: 'flex-end',
  } as CSSProperties,
  actionButton: {
    border: `1 px solid ${theme.pallete.gray.c40}`,
    borderRadius: '0.25rem',
  } as CSSProperties,
  headerWrapper: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '0 0 0.25rem 1rem',
    marginTop: '1rem',
  } as CSSProperties,
  marker: {
    borderRadius: '50%',
    height: '0.5rem',
    width: '0.5rem',
    backgroundColor: theme.pallete.status.danger.c40,
    marginRight: '0.5rem',
  } as CSSProperties,
  title: {
    color: theme.pallete.primary.main,
  } as CSSProperties,
})
