import { useEffect, useRef, useState } from 'react'

export type TransitionState = 'entering' | 'entered' | 'exiting' | 'exited'

export const useTransition = (enter: boolean, { enterTimeout = 1, exitTimeout = 1 } = {}) => {
  const [state, setState] = useState<TransitionState>(enter ? 'entered' : 'exited')
  const firstRender = useRef(true)
  const enterTimeoutRef = useRef<any>()
  const exitTimeoutRef = useRef<any>()

  useEffect(() => {
    if (firstRender.current === true) {
      firstRender.current = false
      return
    }

    if (enter) {
      setState('entering')
      enterTimeoutRef.current = setTimeout(() => setState('entered'), enterTimeout)
    } else {
      setState('exiting')
      exitTimeoutRef.current = setTimeout(() => setState('exited'), exitTimeout)
    }

    return () => {
      enterTimeoutRef.current && clearTimeout(enterTimeoutRef.current)
      exitTimeoutRef.current && clearTimeout(exitTimeoutRef.current)
    }
  }, [enter])

  return state
}
