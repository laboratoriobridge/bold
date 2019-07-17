import { useRef, useState } from 'react'

interface FocusContainerHookOptions {
  onFocusIn?(e: React.FocusEvent<HTMLElement>): void
  onFocusOut?(e: React.FocusEvent<HTMLElement>): void
}

export function useFocusContainer({ onFocusIn, onFocusOut }: FocusContainerHookOptions) {
  const timeoutRef = useRef<number>()
  const [isManagingFocus, setManagingFocus] = useState(false)

  const handleFocus = (e: React.FocusEvent<HTMLElement>) => {
    clearTimeout(timeoutRef.current)

    if (!isManagingFocus) {
      setManagingFocus(true)
      onFocusIn && onFocusIn(e)
    }
  }

  const handleBlur = (e: React.FocusEvent<HTMLElement>) => {
    timeoutRef.current = setTimeout(() => {
      if (isManagingFocus) {
        setManagingFocus(false)
        onFocusOut && onFocusOut(e)
      }
    })
  }

  return { onBlur: handleBlur, onFocus: handleFocus }
}
