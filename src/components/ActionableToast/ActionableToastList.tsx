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
          <ActionableToast key={Date.now()} message={toast.message} onClose={() => {}} />
        ))}
      </div>
    )
  )
}

const createStyles = () => ({
  container: {
    position: 'fixed',
    padding: '0.5rem',
    width: '100%',
    maxWidth: '400px',
    maxHeight: '100vh',
    overflow: 'hidden auto',
    top: 0,
    right: 0,
  } as CSSProperties,
})
