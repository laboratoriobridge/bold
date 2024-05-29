import { Dispatch, SetStateAction, useState } from 'react'
import { ActionableToastProps } from '../components/ActionableToast'

export interface ToastMessagesInterface {
  message: React.ReactNode
  newToast?: boolean
  title: string
  buttonLabel?: React.ReactNode
  action?: () => void
  secondsVisible?: number
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

  const showToast = (props: ToastMessagesInterface) => {
    const { message, newToast = false, title, buttonLabel, action, secondsVisible = 5 } = props

    const toast = {
      id: Date.now(),
      message: message,
      action: action,
      title: title,
      newToast: newToast,
      buttonLabel: buttonLabel,
      removeToast,
      secondsVisible,
    }

    setToastMessages((prevToasts) => [...prevToasts, toast])
  }

  return { toastMessages, setToastMessages, showToast }
}
