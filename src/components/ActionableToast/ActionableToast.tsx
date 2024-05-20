import React from 'react'

export interface ActionableToastProps {
  id: string
  message?: string
  onClose?: () => void
}

export function ActionableToast(props: ActionableToastProps) {
  return <div>{props}</div>
}
