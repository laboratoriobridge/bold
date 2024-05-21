import React, { CSSProperties, useCallback, useEffect } from 'react'
import { useStyles } from '../../styles'
import { ActionableToast, ActionableToastProps } from './ActionableToast'

export interface ActionableToastListProps {
  data: ActionableToastProps[]
  setData: (data) => void
}

export function ActionableToastList(props: ActionableToastListProps) {
  const { data, setData } = props
  const { classes } = useStyles(createStyles)

  const showToast = useCallback(
    (message) => {
      const removeToast = (id: string) => {
        setData((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
      }

      const toast = {
        id: Date.now().toString(),
        message,
      }

      setData((prevToasts) => [...prevToasts, toast])

      setTimeout(() => {
        removeToast(toast.id)
      }, 3 * 1000)
    },
    [setData]
  )

  useEffect(() => showToast(data[data.length - 1].message), [data, showToast])

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
    padding: '0.5rem',
    width: '100%',
    maxWidth: '400px',
    maxHeight: '100vh',
    overflow: 'hidden auto',
    top: 0,
    right: 0,
  } as CSSProperties,
})
