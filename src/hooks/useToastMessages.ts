import { Dispatch, SetStateAction, useState } from 'react'
import { ActionableToastProps } from '../components/ActionableToast'

export interface ToastMessagesInterface {
  message: string
  newToast?: boolean
  title: string
  buttonLabel?: string
  action?: () => void
  timeoutTimer?: number
}

export function useToastMessages(): {
  toastMessages: ActionableToastProps[]
  setToastMessages: Dispatch<SetStateAction<ActionableToastProps[]>>
  showToast: (variables: ToastMessagesInterface) => void
} {
  const [toastMessages, setToastMessages] = useState<ActionableToastProps[]>([])
  const removeToast = (id: number) => {
    setToastMessages((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
  }

  const showToast = (variables: ToastMessagesInterface) => {
    const { message, newToast = false, title, buttonLabel, action, timeoutTimer = 5 } = variables

    const toast = {
      id: Date.now(),
      message: message,
      action: action,
      title: title,
      newToast: newToast,
      buttonLabel: buttonLabel,
      removeToast,
      timeoutTimer,
    }

    setToastMessages((prevToasts) => [...prevToasts, toast])
  }

  return { toastMessages, setToastMessages, showToast }
}
