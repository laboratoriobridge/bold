import React, { CSSProperties } from 'react'
import { useStyles, zIndex } from '../../styles'
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
    width: '100%',
    maxWidth: '15rem',
    maxHeight: '100vh',
    overflow: 'hidden auto',
    top: '1rem',
    right: 0,
    zIndex: 20,
  } as CSSProperties,
})
