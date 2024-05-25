import { Dispatch, SetStateAction, useState } from 'react'
import { ActionableToastProps } from '../components/ActionableToast'
export interface ToastMessagesInterface {
  message: string
  newToast?: boolean
  title: string
  buttonLabel?: string
  action?: () => void
  timeoutTimer?: number
  timeSensitive?: boolean
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
  function showToast(variables: ToastMessagesInterface) {
    const { message, newToast = false, title, buttonLabel, action, timeoutTimer = 5, timeSensitive = true } = variables

    const toast = {
      id: Date.now(),
      message: message,
      action: action,
      title: title,
      newToast: newToast,
      buttonLabel: buttonLabel,
      removeToast,
    }

    timeSensitive &&
      setTimeout(() => {
        removeToast(toast.id)
      }, timeoutTimer * 1000)

    setToastMessages((prevToasts) => [...prevToasts, toast])
  }

  return { toastMessages, setToastMessages, showToast }
}
