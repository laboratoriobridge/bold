import { MutableRefObject, Ref } from 'react'

export function composeRefs<T>(...refs: Array<Ref<T>>) {
    return (value: T) => refs.forEach(ref => setRef(ref, value))
}

export function setRef<T>(ref: Ref<T>, value: any) {
    if (typeof ref === 'function') {
        ref(value)
    } else if (ref) {
        (ref as MutableRefObject<T>).current = value
    }
}

/**
 * Returns the next sibling of `element` that matches the `predicate`.
 * Returns `null` if not found.
 */
export function getNextSibling(element: Element, predicate: (sibling: Element) => boolean) {
    let current: Element = element

    while (current.nextElementSibling) {
        current = current.nextElementSibling

        if (predicate(current)) {
            return current
        }
    }

    return null
}

/**
 * Returns the previous sibling of `element` that matches the `predicate`.
 * Returns `null` if not found.
 */
export function getPreviousSibling(element: Element, predicate: (sibling: Element) => boolean) {
    let current: Element = element

    while (current.previousElementSibling) {
        current = current.previousElementSibling

        if (predicate(current)) {
            return current
        }
    }

    return null
}
