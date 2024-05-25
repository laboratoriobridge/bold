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
export function useToastMessages(
  erase: boolean = true
): {
  toastMessages: ActionableToastProps[]
  setToastMessages: Dispatch<SetStateAction<ActionableToastProps[]>>
  showToast: (variables: ToastMessagesInterface) => void
} {
  const [toastMessages, setToastMessages] = useState<ActionableToastProps[]>([])
  function showToast(variables: ToastMessagesInterface) {
    const removeToast = (id: string) => {
      setToastMessages((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }
    console.log(variables)

    const toast = {
      id: Date.now().toString(),
      message: variables.message,
      action: variables.action,
      title: variables.title,
      newToast: variables.newToast,
      buttonLabel: variables.buttonLabel,
    }

    setToastMessages((prevToasts) => [...prevToasts, toast])

    erase &&
      setTimeout(() => {
        removeToast(toast.id)
      }, variables.timeoutTimer * 1000)
  }

  return { toastMessages, setToastMessages, showToast }
}
