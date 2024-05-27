import React, { CSSProperties } from 'react'
import { useStyles } from '../../styles'
import { ActionableToast, ActionableToastProps } from './ActionableToast'

export interface ActionableToastListProps {
  data: ActionableToastProps[]
}

export function ActionableToastList(props: ActionableToastListProps) {
  const { data } = props
  const { classes } = useStyles(createStyles)

  return (
    data.length > 0 && (
      <div className={classes.container}>
        {data.map((toast: ActionableToastProps) => (
          <ActionableToast
            key={toast.id}
            id={toast.id}
            message={toast.message}
            title={toast.title}
            buttonLabel={toast.buttonLabel}
            onClose={toast.onClose}
            newToast={toast.newToast}
            action={toast.action}
            removeToast={toast.removeToast}
            timeoutTimer={toast.timeoutTimer}
          />
        ))}
      </div>
    )
  )
}

const createStyles = () => ({
  container: {
    position: 'fixed',
    padding: '0',
    paddingTop: '1rem',
    width: '100%',
    maxWidth: '17rem',
    maxHeight: '100vh',
    overflow: 'hidden',
    top: '1rem',
    right: '1.5rem',
    zIndex: 20,
  } as CSSProperties,
})
