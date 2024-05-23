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
          <ActionableToast id={Date.now().toString()} message={toast.message} onClose={() => {}} />
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
