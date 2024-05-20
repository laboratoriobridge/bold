import React from 'react'
import { ActionableToast, ActionableToastProps } from './ActionableToast'

export interface ActionableToastListProps {
  data?: ActionableToastProps[]
  removeToast?: (string) => void
  position?: string
}

export function ActionableToastList(props: ActionableToastListProps) {
  const { data, removeToast, position } = props
  const sortedData = position.includes('bottom') ? [...data].reverse() : [...data]

  return (
    <div>
      {sortedData.map((toast) => (
        <ActionableToast id={toast.id} message={toast.message} onClose={() => removeToast(toast.id)} />
      ))}
    </div>
  )
}
