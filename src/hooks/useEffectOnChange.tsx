import { EffectCallback, useEffect, useRef } from 'react'

export function useEffectOnChange(effect: EffectCallback, deps?: any[]) {
  const initialEffect = useRef(true)

  useEffect(() => {
    if (initialEffect.current === false) {
      return effect()
    } else {
      initialEffect.current = false
    }
  }, deps)
}
