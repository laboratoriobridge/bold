import React, { useEffect, useState } from 'react'

export interface ToastProps {
  message: string
  duration?: number
}

export function Toast(props: ToastProps) {
  const { message, duration = 5 } = props
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  return visible ? <div className='toast'>{message}</div> : null
}
