import { MutableRefObject, Ref } from 'react'

/**
 * Compose multiple react refs.
 *
 * @returns A new ref that passes down the Element to all ref arguments.
 */
export function composeRefs<T>(...refs: Array<Ref<T>>) {
  return (value: T) => refs.forEach(ref => setRef(ref, value))
}

/**
 * Changes the value of a ref.
 * The ref can be a function ref or a object ref.
 *
 * @param ref The ref to have its value changed.
 * @param value The new value.
 */
export function setRef<T>(ref: Ref<T>, value: any) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref) {
    const mutableRef = ref as MutableRefObject<T>
    mutableRef.current = value
  }
}

/**
 * Compose multiple event handlers.
 *
 * @returns A new function that triggers all handlers passed as parameters, in order.
 */
export function composeHandlers(...handlers: Array<(...params: any) => void>) {
  return (...args: any[]) => handlers.forEach(handler => handler(...args))
}
