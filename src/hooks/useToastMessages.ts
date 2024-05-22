import { Dispatch, SetStateAction, useState } from 'react'
import { ActionableToastProps } from '../components/ActionableToast'

export function useToastMessages(): [
  ActionableToastProps[],
  Dispatch<SetStateAction<ActionableToastProps[]>>,
  (message: any) => void
] {
  const [toastMessages, setToastMessages] = useState<ActionableToastProps[]>([])
  const showToast = (message: string) => {
    const removeToast = (id: string) => {
      setToastMessages((prevToasts) => prevToasts.filter((toast) => toast.id !== id))
    }

    const toast = {
      id: Date.now().toString(),
      message,
    }

    setToastMessages((prevToasts) => [...prevToasts, toast])

    setTimeout(() => {
      removeToast(toast.id)
    }, 3 * 1000)
  }

  return [toastMessages, setToastMessages, showToast]
}
