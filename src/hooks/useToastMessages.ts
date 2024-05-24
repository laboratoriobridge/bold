import { Dispatch, SetStateAction, useState } from 'react'
import { ActionableToastProps } from '../components/ActionableToast'

export function useToastMessages(
  erase: boolean = true
): {
  toastMessages: ActionableToastProps[]
  setToastMessages: Dispatch<SetStateAction<ActionableToastProps[]>>
  showToast: (message: string) => void
} {
  const [toastMessages, setToastMessages] = useState<ActionableToastProps[]>([])
  function showToast(
    message: string,
    newToast: boolean = true,
    buttonLabel?: string,
    action?: () => void,
    timeoutTimer: number = 5
  ) {
    const removeToast = (id: string) => {
      setToastMessages((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }

    const toast = {
      id: Date.now().toString(),
      message,
      action,
      newToast,
      buttonLabel,
    }

    setToastMessages((prevToasts) => [...prevToasts, toast])

    erase &&
      setTimeout(() => {
        removeToast(toast.id)
      }, timeoutTimer * 1000)
  }

  return { toastMessages, setToastMessages, showToast }
}
