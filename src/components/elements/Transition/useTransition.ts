import { useEffect, useState } from 'react'

export type TransitionState = 'unmounted' | 'entering' | 'entered' | 'exiting' | 'exited'

export const useTransition = (enter: boolean, timeout = 0) => {
  const [state, setState] = useState<TransitionState>('unmounted')

  useEffect(() => {
    if (enter) {
      setState('entering')
      window.setTimeout(() => setState('entered'), timeout)
    } else {
      setState('exiting')
      window.setTimeout(() => setState('exited'), timeout)
    }

    return () => {
      setState('unmounted')
    }
  }, [enter])

  return state
}
