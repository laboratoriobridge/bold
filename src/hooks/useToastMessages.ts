import { Dispatch, SetStateAction, useState } from 'react'
import { ActionableToastProps } from '../components/ActionableToast'

export function useToastMessages(
  erase: boolean = false
): {
  toastMessages: ActionableToastProps[]
  setToastMessages: Dispatch<SetStateAction<ActionableToastProps[]>>
  showToast: (message: string) => void
} {
  const [toastMessages, setToastMessages] = useState<ActionableToastProps[]>([])
  function showToast(message: string) {
    const removeToast = (id: string) => {
      setToastMessages((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }

    const toast = {
      id: Date.now().toString(),
      message,
    }

    setToastMessages((prevToasts) => [...prevToasts, toast])

    erase &&
      setTimeout(() => {
        removeToast(toast.id)
      }, 3 * 1000)
  }

  return { toastMessages, setToastMessages, showToast }
}
