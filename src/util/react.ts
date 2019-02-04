import { MutableRefObject, Ref } from 'react'

export function setRef<T>(ref: Ref<T>, value: any) {
    if (typeof ref === 'function') {
        ref(value)
    } else if (ref) {
        (ref as MutableRefObject<T>).current = value
    }
}
