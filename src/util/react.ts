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
  return (...args: any[]) => handlers.forEach(handler => handler && handler(...args))
}

/**
 * Invokes the native `value` property setter of an element.
 * From https://github.com/facebook/react/issues/10135#issuecomment-401496776
 *
 * @param element The element to invoke the setter on.
 * @param value The value to be set.
 */
export function setNativeValue(element: HTMLElement, value: any) {
  const prototype = Object.getPrototypeOf(element)
  const { set: prototypeValueSetter = null } = Object.getOwnPropertyDescriptor(prototype, 'value') || {}
  const { set: valueSetter = null } = Object.getOwnPropertyDescriptor(element, 'value') || {}

  if (prototypeValueSetter && valueSetter !== prototypeValueSetter) {
    prototypeValueSetter.call(element, value)
  } else if (valueSetter) {
    valueSetter.call(element, value)
  } else {
    throw new Error('The given element does not have a value setter')
  }
}
